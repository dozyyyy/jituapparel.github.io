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



const icon = document.getElementById('liveCustomerServiceIcon');
const chatPopup = document.getElementById('chatPopup');
const closeChat = document.getElementById('closeChat');

let isDragging = false;
let offsetX, offsetY;


icon.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - icon.getBoundingClientRect().left;
    offsetY = e.clientY - icon.getBoundingClientRect().top;
    icon.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        icon.style.left = `${e.clientX - offsetX}px`;
        icon.style.top = `${e.clientY - offsetY}px`;
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    icon.style.cursor = 'grab';
});


icon.addEventListener('touchstart', (e) => {
    isDragging = true;
    const touch = e.touches[0];
    offsetX = touch.clientX - icon.getBoundingClientRect().left;
    offsetY = touch.clientY - icon.getBoundingClientRect().top;
    icon.style.cursor = 'grabbing';
});

document.addEventListener('touchmove', (e) => {
    if (isDragging) {
        const touch = e.touches[0];
        icon.style.left = `${touch.clientX - offsetX}px`;
        icon.style.top = `${touch.clientY - offsetY}px`;
    }
});

document.addEventListener('touchend', () => {
    isDragging = false;
    icon.style.cursor = 'grab';
});


icon.addEventListener('click', () => {
    chatPopup.style.display = 'block';
});

closeChat.addEventListener('click', () => {
    chatPopup.style.display = 'none';
});


const searchInput = document.querySelector('.search-bar input[type="text"]');


const placeholders = [
    "Cari Baju Impianmu...",
    "Diskon 6.6 Segera Dimulai",
    "Voucher Diskon 50% ",
    "T-Shirt Pria"
];


function changePlaceholder() {
   
    const randomIndex = Math.floor(Math.random() * placeholders.length);
    const newPlaceholder = placeholders[randomIndex];

   
    searchInput.placeholder = newPlaceholder;
}


setInterval(changePlaceholder, 5000);