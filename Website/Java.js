//Slideshow//
var slideIndex = 1;
               var z = document.getElementsByClassName("slideshow");
               for (i = 0; i < z.length; i++) {
                   //set custom data attribute to first current image index
                   z[i].setAttribute("data-currentslide", 1);
                   showDivs(z[i].getAttribute("data-currentslide"), i);
               }
               function plusDivs(n, j) {
                   //get custom data attribute value of current image index to slideshow class index j
                   slideIndex = parseInt(z[j].getAttribute("data-currentslide")[0]);
                   showDivs(slideIndex += n, j);
               }
               function currentDiv(n, j) {
                   showDivs(slideIndex = n, j); /* showDivs Not showSlides*/
               }
               function showDivs(n, j) {
                   var i;
                   var z = document.getElementsByClassName("slideshow")[j];
                   var x = z.getElementsByClassName("mySlides");
                   var dots = z.getElementsByClassName("dot");
                   if (n > x.length) {
                       slideIndex = 1
                   }
                   if (n < 1) {
                       slideIndex = x.length;
                   }
                   //set custom data attribute to current image index
                   z.setAttribute("data-currentslide", slideIndex);
                   for (i = 0; i < x.length; i++) {
                       x[i].style.display = "none";
                   }
                   for (i = 0; i < dots.length; i++) {
                       dots[i].className = dots[i].className.replace(" active", "");
                   }
                   x[slideIndex - 1].style.display = "block";
                   dots[slideIndex - 1].className += " active";
               }
//Slideshow End//

//Nav Bar//
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
//Nav Bar End//

//Back To Top Button
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
