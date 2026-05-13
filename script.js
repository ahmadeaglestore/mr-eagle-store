const products = [
    { name: "Eagle Stealth Watch", price: "Rs. 3,500", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500" },
    { name: "Premium Wallet", price: "Rs. 1,800", img: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500" },
    { name: "Aviator Shades", price: "Rs. 2,500", img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500" },
    { name: "Executive Belt", price: "Rs. 1,400", img: "https://images.unsplash.com/photo-1624222247344-550fb8ec5521?w=500" },
    { name: "Elite Earbuds", price: "Rs. 3,200", img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500" },
    { name: "Eagle Signature Perfume", price: "Rs. 5,000", img: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500" },
    { name: "Smart Fitness Watch", price: "Rs. 4,200", img: "https://images.unsplash.com/photo-1508685096489-7233e65ebe91?w=500" },
    { name: "Leather Laptop Bag", price: "Rs. 6,500", img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500" },
    { name: "Modern Keychain", price: "Rs. 600", img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500" },
    { name: "Elite Cap", price: "Rs. 990", img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500" },
    { name: "Tech Backpack", price: "Rs. 3,800", img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500" },
    { name: "Premium Shades Case", price: "Rs. 850", img: "https://images.unsplash.com/photo-1605343330995-7208d384041b?w=500" }
];

const grid = document.getElementById('product-grid');

products.forEach((p, i) => {
    const waNumber = "923239911255";
    const waMessage = encodeURIComponent(`Assalam o Alaikum Ahmad (Mr. Eagle)!\n\nI want to order: *${p.name}*\nPrice: *${p.price}*\n\nPlease confirm my order.`);
    const waLink = `https://wa.me/${waNumber}?text=${waMessage}`;

    grid.innerHTML += `
        <div class="col-6 col-lg-3" data-aos="fade-up" data-aos-delay="${(i % 4) * 100}">
            <div class="product-card shadow-sm h-100">
                <div class="img-container">
                    <img src="${p.img}" alt="${p.name}">
                </div>
                <div class="card-body p-3 text-center">
                    <h6 class="fw-bold mb-1">${p.name}</h6>
                    <p class="text-warning fw-bold mb-3 small">${p.price}</p>
                    <a href="${waLink}" target="_blank" class="btn btn-wa w-100 btn-sm rounded-pill py-2">
                        <i class='bx bxl-whatsapp'></i> Order via WhatsApp
                    </a>
                </div>
            </div>
        </div>
    `;
});