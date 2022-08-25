let controlbtn= document.getElementById("controlbtn");
controlbtn.addEventListener("click",() => {
window.location.href = "port test.html";
});

let controlstn= document.getElementById("controlstn");
controlstn.addEventListener("click",() => {
window.location.href = "lol.html";
});

let controlBtn= document.getElementById("controlBtn");
controlBtn.addEventListener("click",() => {
window.location.href = "phones layout.html";
});

let controlNBtn= document.getElementById("controlNBtn");
controlNBtn.addEventListener("click",() => {
window.location.href = "games.html";
});

let controlCBtn= document.getElementById("controlCBtn");
controlCBtn.addEventListener("click",() => {
window.location.href = "vr.html";
});

let controldBtn= document.getElementById("controldBtn");
controldBtn.addEventListener("click",() => {
window.location.href = "cosmetics.html";
});
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
} 
let jlop= document.getElementById("jlop");
jlop.addEventListener("click",() => {
window.location.href = "tecno.html";
});
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
} 