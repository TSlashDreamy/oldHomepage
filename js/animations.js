// * Скрипты для волн

var myWave1 = $("#myID").wavify({
  height: 35,
  bones: 86,
  amplitude: 10,
  color: "rgba(50, 50, 50, 1)",
  speed: 0.55,
});

$(window).on("load", function () {
  if ($(window).width() < 1070) {
    myWave1.reboot({
      height: 17,
      bones: 16,
      amplitude: 9,
      color: "rgba(50, 50, 50, 1)",
      speed: 0.55,
    });
    myWave2.reboot({
      height: 20,
      bones: 16,
      amplitude: 9,
      color: "rgba(0, 0, 0, 1)",
      speed: 0.35,
    });
    myWave3.reboot({
      height: 100,
      bones: 8,
      amplitude: 40,
      color: "rgba(8, 8, 8, 1)",
      speed: 0.39,
    });
    myWave4.reboot({
      height: 90,
      bones: 8,
      amplitude: 40,
      color: "rgba(12, 12, 12, 1)",
      speed: 0.45,
    });
  } else {
    myWave1.reboot({
      height: 35,
      bones: 86,
      amplitude: 10,
      color: "rgba(50, 50, 50, 1)",
      speed: 0.55,
    });
    myWave2.reboot({
      height: 40,
      bones: 86,
      amplitude: 10,
      color: "rgba(0, 0, 0, 1)",
      speed: 0.35,
    });
    myWave3.reboot({
      height: 180,
      bones: 8,
      amplitude: 40,
      color: "rgba(8, 8, 8, 1)",
      speed: 0.39,
    });
    myWave4.reboot({
      height: 170,
      bones: 8,
      amplitude: 40,
      color: "rgba(12, 12, 12, 1)",
      speed: 0.45,
    });
  }
});

var myWave2 = $("#myID2").wavify({
  height: 40,
  bones: 86,
  amplitude: 10,
  color: "rgba(0, 0, 0, 1)",
  speed: 0.35,
});

var myWave3 = $("#myID4").wavify({
  height: 180,
  bones: 8,
  amplitude: 40,
  color: "rgba(8, 8, 8, 1)",
  speed: 0.39,
});

var myWave4 = $("#myID5").wavify({
  height: 170,
  bones: 8,
  amplitude: 40,
  color: "rgba(12, 12, 12, 1)",
  speed: 0.45,
});

// * preloder animation scripts

anime({
  targets: ".preloader-image path",
  strokeDashoffset: [anime.setDashoffset, 90000],
  easing: "easeInOutSine",
  duration: 4500,
  delay: function (el, i) {
    return i * 2050;
  },
  direction: "alternate",
  loop: true,
});

anime({
  targets: ".loading-square",

  translateY: {
    value: "20vw",
    duration: 1500,
    delay: 3000,
    easing: "easeOutElastic",
  },
});

anime({
  targets: ".loading-square",
  borderRadius: ["0%", "50%"],
  duration: 8500,
  scale: 2.5,
  easing: "easeOutElastic",
  delay: 3000,

  translateY: {
    value: "-30vw",
    duration: 1500,
    delay: 1500,
    easing: "easeOutElastic",
  },

  rotate: {
    value: 360,
    duration: 3800,
    delay: 3000,
    easing: "easeOutElastic",
  },
});

// * button animation

var animateButton = function (e) {
  e.preventDefault;
  //reset animation
  e.target.classList.remove("animate");

  e.target.classList.add("animate");
  setTimeout(function () {
    e.target.classList.remove("animate");
  }, 700);
};

$(".next-section").click(function () {
  $(".welcome-section").css(
    "clip-path",
    "polygon(0 80%, 0% 0%, 100% 0%, 100% 80%, 50% 100%)"
  );
  $("#section1").removeClass("unactive");
  $("#section2").removeClass("unactive");
  $("#section3").removeClass("unactive");
  $("#section4").removeClass("unactive");
  $("#section5").removeClass("unactive");
  $("#footer").removeClass("unactive");
});

setTimeout(function () {
  $(".nav-underline").addClass("magictime slideLeftReturn");
  $(".nav-underline").removeClass("unvisible");
}, 1000);

setTimeout(function () {
  $(".navigation").addClass("magictime vanishIn");
  $("#menuToggle").addClass("magictime swap");
  $("#menuToggle").removeClass("unvisible");
  $(".navigation").removeClass("unvisible");
}, 1200);

setTimeout(function () {
  $(".logo").addClass("magictime slideLeftReturn");
  $(".logo").removeClass("unvisible");
}, 1600);

setTimeout(function () {
  $(".welcome-heading").addClass("magictime vanishIn");
  $(".welcome-heading").removeClass("unvisible");
}, 1600);

setTimeout(function () {
  $("#box").addClass("magictime vanishIn");
  $("#box").removeClass("unactive");
}, 2600);

setTimeout(function () {
  $(".welcome-description").addClass("magictime vanishIn");
  $(".welcome-description").removeClass("unvisible");
  $(".next-section").addClass("magictime swashIn");
  $(".next-section").removeClass("unvisible");
}, 2400);

if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  document.getElementsByClassName("particlecanvas").remove();
} else {
  console.info("Particle Started (PC)");
}

$(".carousel-inner").hover(
  function () {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      // nothing
    } else {
      $(".carousel-indicators li").css("background-color", "black"),
        $(".carousel-control-next, .carousel-control-prev").css(
          "filter",
          "invert(1)"
        );
    }
  },
  function () {
    $(".carousel-indicators li").css("background-color", "white"),
      $(".carousel-control-next, .carousel-control-prev").css(
        "filter",
        "invert(0)"
      );
  }
);

$(".next-section").click(function antilag() {
  $(".particlecanvas").css("display", "none").delay(1),
    $(".particlecanvas")
      .delay(500)
      .queue(function (next) {
        $(this).css("display", "grid"), next();
      });
});
