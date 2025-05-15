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


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


var webSyllabus = document.querySelector('#webSyllabus')

var viewBtnMore = document.querySelector('#viewBtnMore')

var viewBtnLess = document.querySelector('#viewBtnLess')

viewBtnMore.addEventListener('click', function(){
  webSyllabus.style.display = 'block';
  viewBtnMore.style.display = 'none';
  viewBtnLess.style.display = 'block';

  viewBtnLess.addEventListener('click', function(){
    webSyllabus.style.display = 'none';
    viewBtnMore.style.display = 'block';
    viewBtnLess.style.display = 'none';
    
  })
})



