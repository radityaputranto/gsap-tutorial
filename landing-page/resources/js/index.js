function animate_text(text) {
  var textWrapper = document.querySelector(text);
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );

  anime.timeline().add({
    targets: text + " .letter",
    translateY: [200, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 2000,
    delay: (el, i) => 4800 + 50 * i,
  });
}
animate_text(".header-1");
animate_text(".header-2");

TweenMax.to(".wrapper", 2, {
  top: "-100%",
  ease: Expo.easeInOut,
  delay: 3.6,
});

var tl = new TimelineMax();

tl.from(".loader", 1.6, {
  scaleY: "0%",
  y: 80,
  ease: Expo.easeInOut,
  delay: 1,
  transformOrigin: "50% 100%",
});

tl.to(".loader", 1.6, {
  height: "20vh",
  scaleY: "0%",
  ease: Expo.easeInOut,
  transformOrigin: "0% -100%",
});

TweenMax.to(".box", 2.4, {
  y: "-100%",
  ease: Expo.easeInOut,
  delay: 3.8,
});

var tl = new TweenMax.staggerFrom(
  ".menu > div",
  2,
  {
    opacity: 0,
    y: 30,
    ease: Expo.easeInOut,
    delay: 4.2,
  },
  0.1
);

var tl = new TweenMax.staggerFrom(
  ".hero-container > div",
  2,
  {
    opacity: 0,
    y: 30,
    ease: Expo.easeInOut,
    delay: 4.2,
  },
  0.1
);

/* IMAGE HOVER */

var cursor = $(".cursor");
var follower = $(".cursor-follower");

var posX = 0,
  posY = 0,
  mouseX = 0,
  mouseY = 0;

TweenMax.to({}, 0.016, {
  repeat: -1,
  onRepeat: function () {
    posX += (mouseX - posX) / 9;
    posY += (mouseY - posY) / 9;

    TweenMax.set(follower, {
      css: {
        left: posX - 20,
        top: posY - 20,
      },
    });

    TweenMax.set(cursor, {
      css: {
        left: mouseX,
        top: mouseY,
      },
    });
  },
});

$(document).on("mousemove", function (e) {
  mouseX = e.pageX;
  mouseY = e.pageY;
});

$(".portfolio-item img").on("mouseenter", function () {
  cursor.addClass("active");
  follower.addClass("active");
});

$(".portfolio-item img").on("mouseleave", function () {
  cursor.removeClass("active");
  follower.removeClass("active");
});
