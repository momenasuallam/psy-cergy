// window.addEventListener("scroll", () => {
//   let header = document.querySelector(".header");
//   header.classList.toggle("sticky", window.scrollY > 0);
// });
$(document).ready(function () {
  // Toggle menu on click
  $("#menu-toggler").click(function () {
    toggleBodyClass("menu-active");
  });

  function toggleBodyClass(className) {
    document.body.classList.toggle(className);
  }
});


