$("#section0").fadeOut().end();
$("#section1").fadeOut().end();
$("#section2").fadeOut().end();
$("#section3").fadeOut().end();
$("#section4").fadeOut().end();
$("#footer").fadeOut().end();

// * Loading script
$(window).on("load", function () {
  $(".preloader").fadeOut().delay(400).fadeOut("slow");
  $("#section0").fadeIn().delay(400).fadeIn("slow");
  $("#section1").fadeIn().delay(400).fadeIn("slow");
  $("#section2").fadeIn().delay(400).fadeIn("slow");
  $("#section3").fadeIn().delay(400).fadeIn("slow");
  $("#section4").fadeIn().delay(400).fadeIn("slow");
  $("#footer").fadeIn().delay(400).fadeIn("slow");
});

// ? Testing
// $(".preloader").delay(15000).fadeOut("slow");
// $("#section0").delay(15000).fadeIn("slow");
// $("#section1").delay(15000).fadeIn("slow");
// $("#section2").delay(15000).fadeIn("slow");
// $("#section3").delay(15000).fadeIn("slow");
// $("#section4").delay(15000).fadeIn("slow");
// $("#footer").delay(15000).fadeIn("slow");
