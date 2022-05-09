let currentSlide = 1;
function applyActiveColor(n) {
  let items = document.querySelectorAll(".line-item");
  for (i = 1; i <= items.length; i++) {
    let line = document.querySelector(".line-" + i);
    line.style.background = "#d9dadb  0% 0% no-repeat padding-box";
  }
  let line = document.querySelector(".line-" + n);
  line.style.background = "#4592FF  0% 0% no-repeat padding-box";
}
function showSlides(currentSlideValue) {
  let index;
  let allSlides = document.querySelectorAll(".slide");
  let items = document.querySelectorAll("item");
  if (currentSlideValue > allSlides.length) {
    currentSlide = 1;
  }
  if (currentSlideValue < 1) {
    currentSlide = allSlides.length;
  }
  for (index = 0; index < allSlides.length; index++) {
    allSlides[index].style.display = "none";
  }
  for (i = 0; i < items.length; i++) {
    items[i].className = items[i].className.replace(" active", "");
  }
  allSlides[currentSlide - 1].style.display = "grid";
  applyActiveColor(currentSlideValue);
}

// Next/previous controls
function plusSlides(n) {
  showSlides((currentSlide += n));
}

function currentClickedSlide(n) {
  showSlides((currentSlide = n));
}

showSlides(currentSlide);
