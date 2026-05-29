// Simple scroll animation effect
window.addEventListener('scroll', function() {
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// --- Popup Form Logic ---

// Elements ko select karna
const modalBg = document.getElementById("orderModal");
const closePopupX = document.querySelector(".close-popup");
const buyButtons = document.querySelectorAll(".buy-now");

const modalProdName = document.getElementById("modal-p-name");
const modalProdPrice = document.getElementById("modal-p-price");

// Har "Buy Now" button par click event lagana
buyButtons.forEach(button => {
    button.addEventListener("click", () => {
        // 1. Pata karo kis product par click hua aur uski details hidden inputs mein save karo
        modalProdName.value = button.getAttribute("data-product");
        modalProdPrice.value = button.getAttribute("data-price");
        
        // 2. Form ka popup screen par display (flex) karo
        modalBg.style.display = "flex";
    });
});

// Jab 'X' par click ho toh popup band ho jaye
closePopupX.addEventListener("click", () => {
    modalBg.style.display = "none";
});

// Agar customer form ke bahar black screen par click kare, tab bhi popup band ho jaye
window.addEventListener("click", (event) => {
    if (event.target === modalBg) {
        modalBg.style.display = "none";
    }
});

