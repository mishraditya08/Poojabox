// Sample products for the carousel
const featuredProducts = [
    { image: 'images/toran.png', name: 'Decorative Toran' },
    { image: 'images/urlis.png', name: 'Brass Urli' },
    { image: 'images/diya.png', name: 'Traditional Diya' },
    { image: 'images/pooja thali.png', name: 'Pooja Thali' },
    { image: 'images/thali cover.png', name: 'Thali Cover' },
    { image: 'images/toran.png', name: 'Decorative Toran' },
    { image: 'images/urlis.png', name: 'Brass Urli' },
    { image: 'images/diya.png', name: 'Traditional Diya' },
    { image: 'images/pooja thali.png', name: 'Pooja Thali' },
    { image: 'images/thali cover.png', name: 'Thali Cover' }
];

// Sample offers for the carousel
const offers = [
    { image: 'images/bhaidooj hamper.png', name: 'Bhaidooj Special Offer' },
    { image: 'images/Diwali box.png', name: 'Diwali Offer' },
    { image: 'images/Silver Coin.png', name: 'Decor Items Discount' },
    { image: 'images/toran.png', name: 'Decorative Toran' },
    { image: 'images/urlis.png', name: 'Brass Urli' },
    { image: 'images/diya.png', name: 'Traditional Diya' },
    { image: 'images/pooja thali.png', name: 'Pooja Thali' },
    { image: 'images/thali cover.png', name: 'Thali Cover' }
];

// Populate featured products carousel
const productContainer = document.querySelector('.product-container');
featuredProducts.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    productDiv.innerHTML = `<img src="${product.image}" alt="${product.name}"><p>${product.name}</p>`;
    productContainer.appendChild(productDiv);
});

// Populate offers carousel
const offerContainer = document.querySelector('.offer-container');
offers.forEach(offer => {
    const offerDiv = document.createElement('div');
    offerDiv.classList.add('offer');
    offerDiv.innerHTML = `<img src="${offer.image}" alt="${offer.name}"><p>${offer.name}</p>`;
    offerContainer.appendChild(offerDiv);
});

// Carousel functionality
let scrollPosition = 0;

function moveCarousel(direction, isOffer = false) {
    const container = isOffer ? document.querySelector('.offer-container') : productContainer;
    const scrollAmount = 300; // Width of each product or offer box
    scrollPosition += direction * scrollAmount;
    container.scrollLeft = scrollPosition;
}
