// init Isotope
var $grid = $(".collection-list").isotope({
  // options
});
// filter items on button click
$(".filter-button-group").on("click", "button", function () {
  var filterValue = $(this).attr("data-filter");
  resetFilterBtns();
  $(this).addClass("active-filter-btn");
  $grid.isotope({ filter: filterValue });
});

var filterBtns = $(".filter-button-group").find("button");
function resetFilterBtns() {
  filterBtns.each(function () {
    $(this).removeClass("active-filter-btn");
  });
}

jQuery(function ($) {
  "use strict";
  var $window = $(window);
  var windowsize = $(window).width();
  var $root = $("html, body");
  var $this = $(this);

  /*Testimonials 3columns*/
  $("#testimonial-slider").owlCarousel({
    items: 3,
    autoplay: 2500,
    autoplayHoverPause: true,
    loop: true,
    margin: 30,
    dots: true,
    nav: false,
    responsive: {
      1280: {
        items: 3,
      },
      600: {
        items: 2,
      },
      320: {
        items: 1,
      },
    },
  });
});
x;

setInterval(showTime, 1000); // takes time as 1 s and execute the function for every second.

function showTime() {
  let today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();
  let period = "AM";

  // Set the clock in 12 hr format
  // If hours is equal to 0 at midnight, we set to 12, and if greater than 12, we will
  //subtract it from 12.
  if (hours == "0") {
    hours = 12;
  }
  if (hours > 12) {
    hours -= 12;
    period = "PM";
  }

  // when the hrs is less than 10, we are concantenate with 0, otherwise leave it hrs.
  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  // displayin to UI
  const time = `${hours} : ${minutes} : ${seconds}  ${period} `;
  document.getElementById("clock").innerHTML = time;
}
showTime();
