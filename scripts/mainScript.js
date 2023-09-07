window.onscroll = function() {myFunction()};

var mainNav = document.getElementById("mainNav");
var sticky = mainNav.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position.
// Remove "sticky" when you leave the scroll position.
function myFunction() {
    if (window.pageYOffset >= sticky) {
      mainNav.classList.add("sticky")
    } else {
      mainNav.classList.remove("sticky");
    }
  }
