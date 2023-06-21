$(".menu-trigger").on("click", function () {
  $(".main-nav").toggleClass("active");
  $(this).toggleClass("active");
  return false;
});
$(".main-nav li").on("click", function () {
  $(".menu-trigger").addClass("active");
});

function scrollToAnyPoint(navItem) {
  var getAttr;
  $(navItem).click(function (e) {
    e.preventDefault();
    getAttr = $(this).attr("href");
    var toSection = $(getAttr).offset().top;
    $("html, body").animate({ scrollTop: toSection + -50 }, 500);
  });
}

scrollToAnyPoint("nav ul li a, .home a, .logo a");
