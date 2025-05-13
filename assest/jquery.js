var owl = $('.owl-carousel');
owl.owlCarousel({
  loop: true,
  nav: true,
  margin: 10,
  responsive: {
    0: {
      items: 2
    }
  }
});
owl.on('mousewheel', '.owl-stage', function (e) {
  if (e.deltaY > 0) {
    owl.trigger('next.owl');
  } else {
    owl.trigger('prev.owl');
  }
  e.preventDefault();
});



$(function () {
  $("dt").click(function () {
    $(this).toggleClass("open");
    if ($(this).hasClass("open"))
      $("dt").not(this).removeClass("open");
  })
})



