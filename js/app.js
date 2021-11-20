// window.addEventListener("scroll", () => {
//   let header = document.querySelector(".header");
//   header.classList.toggle("sticky", window.scrollY > 0);
// });
$(document).ready(function () {
  // Toggle menu on click
  $("#menu-toggler").click(function () {
    // toggleBodyClass("menu-active");
    document.body.classList.toggle("menu-active");
    document.body.classList.toggle("overflowhidden");
    $("body").toggleClass("active");
    $(".dflex1 img").toggleClass("active");
    $(".col2dflex1").toggleClass("active");
  });

  // function toggleBodyClass(className) {
  //   document.body.classList.toggle(className);
  // }
});

var shows = document.querySelectorAll(".show");
var infos = document.querySelectorAll(".info");
var accordions = document.querySelectorAll(".accordion");

for (let i = 0; i < shows.length; i++) {
  shows[i].onclick = function () {
    for (let j = 0; j < shows.length; j++) {
      if (shows[j] != this) {
        infos[j].classList.remove("reveal");
        shows[j].innerHTML = "+";
        accordions[j].classList.remove("radius");
      }
    }
    accordions[i].classList.toggle("radius");
    infos[i].classList.toggle("reveal");
    if (infos[i].className.includes("reveal")) shows[i].innerHTML = "-";
    else shows[i].innerHTML = "+";
  };
}
