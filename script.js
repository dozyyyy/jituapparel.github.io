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
  setTimeout(showSlides, 6000); 
}



document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');

  menuToggle.addEventListener('click', function() {
      menu.classList.toggle('active');
  });
});



function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}


const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const sidebar = document.querySelector('.sidebar');
const container = document.querySelector('.container');
const mainSlide = document.querySelector('.main-slide');
const slidesCount = mainSlide.querySelectorAll('div').length;

let activeSlideIndex = 0;

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

upBtn.addEventListener('click', () => {
	cnangeSlide('up');
});
downBtn.addEventListener('click', () => {
	cnangeSlide('down');
});

document.addEventListener('keydown',
	event => {
		console.log(event.key);
		if (event.key === 'ArrowUp') {
			cnangeSlide('up');
		} else if (event.key === 'ArrowDown') {
			cnangeSlide('down');
		}
	});

function cnangeSlide(direction) {
	if (direction === 'up') {
		activeSlideIndex++;
		if (activeSlideIndex === slidesCount) {
			activeSlideIndex = 0;
		}
	} else if (direction === 'down') {
		activeSlideIndex--;
		if (activeSlideIndex < 0) {
			activeSlideIndex = slidesCount - 1;
		}
	}

	const height = container.clientHeight;

	mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
	sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}


