// sidebar
$(".bar").click(function () {
  $(".sidebar").toggleClass("active");
  $(".navbar").toggleClass("pointer-events-none");
  $(".content").toggleClass("pointer-events-none");
});

// menu
$(".menu-name").each(function () {
  $(this).click(function () {
    const menu = $(this);
    if ($(".sidebar").hasClass("active")) {
      $(".bar").click(function () {
        $(".sidebar .side-list .menu ul li").css(
          "transition",
          "all 0.10s ease-out"
        );
        menu.parent().removeClass("active");
      });
    }
    if ($(this).parent().hasClass("active")) {
      $(this).parent().removeClass("active");
    } else {
      $(".menu-name").each(function () {
        $(this).parent().removeClass("active");
      });
      $(".sidebar .side-list .menu ul li").css(
        "transition",
        "all 0.2s ease-out"
      );
      $(this).parent().addClass("active");
    }
  });
});

// dropdown
$(".nav-right .img").click(function () {
  $(".navbar .dropdown").toggleClass("active");
});

$(document).click(function (e) {
  if ($(".navbar .dropdown").hasClass("active")) {
    if (!$(".nav-right .img")[0].contains(e.target)) {
      $(".navbar .dropdown").removeClass("active");
    }
  }
});
