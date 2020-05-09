(function () {

  var winH = $(window).innerHeight(),
      navH = $(".navbar").innerHeight(),
      upH = $(".upper").innerHeight();

$(window).resize(function(){
  var winH = $(window).innerHeight(),
      navH = $(".navbar").innerHeight(),
      upH = $(".upper").innerHeight();

  $(".slider, .carousel-item").height(winH - (navH + upH));
});
$(".slider .carousel-item").height(winH - (navH + upH));


$(".work ul li").click(function () {
  $(this).addClass("active").siblings("li").removeClass("active");

  if ($(this).attr("data-media") === "all") {
    $(".boximg .col-md").css("opacity", 1);
  } else {
    $(".boximg .col-md").css("opacity", "0.1");
    $($(this).attr("data-media")).parent().css("opacity", 1);
  }


})


}());
