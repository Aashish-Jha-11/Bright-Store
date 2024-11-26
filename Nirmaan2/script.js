document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Theme toggle functionality
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        localStorage.setItem('theme', body.classList.contains('dark-theme') ? 'dark' : 'light');
    });

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
    }

    // Load products on the products page
    if (window.location.pathname.includes('products.html')) {
        loadProducts();
    }

    // Load featured products on the home page
    if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
        loadFeaturedProducts();
    }

    // Add to cart functionality
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart')) {
            const productName = e.target.closest('.product-card').querySelector('h3').textContent;
            alert(`Added ${productName} to cart!`);
        }
    });

    // Newsletter form submission
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = newsletterForm.querySelector('input[type="email"]').value;
            alert(`Thank you for subscribing with email: ${email}`);
            newsletterForm.reset();
        });
    }

    // Handle add product form submission
    const addProductForm = document.getElementById('add-product-form');
    if (addProductForm) {
        addProductForm.addEventListener('submit', handleAddProduct);
    }
});

function loadProducts() {
    const productGrid = document.querySelector('.product-grid');
    if (!productGrid) return;

    // Simulated product data (in a real app, this would come from an API or database)
    const products = [
        { id: 1, name: "Vibrant Vase", price: 49.99, image: "https://via.placeholder.com/300" },
        { id: 2, name: "Colorful Cushion", price: 29.99, image: "https://via.placeholder.com/300" },
        { id: 3, name: "Bright Backpack", price: 79.99, image: "https://via.placeholder.com/300" },
        { id: 4, name: "Lively Lamp", price: 89.99, image: "https://via.placeholder.com/300" },
        { id: 5, name: "Radiant Rug", price: 129.99, image: "https://via.placeholder.com/300" },
        { id: 6, name: "Cheerful Chair", price: 199.99, image: "https://via.placeholder.com/300" },
    ];

    productGrid.innerHTML = products.map(product => createProductCard(product)).join('');
}

function loadFeaturedProducts() {
    const productGrid = document.querySelector('.product-grid');
    if (!productGrid) return;

    // Simulated featured product data
    const featuredProducts = [
        { id: 1, name: "Vibrant Vase", price: 49.99, image: "https://via.placeholder.com/300" },
        { id: 2, name: "Colorful Cushion", price: 29.99, image: "https://via.placeholder.com/300" },
        { id: 3, name: "Bright Backpack", price: 79.99, image: "https://via.placeholder.com/300" },
    ];

    productGrid.innerHTML = featuredProducts.map(product => createProductCard(product)).join('');
}

function createProductCard(product) {
    return `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">$${product.price.toFixed(2)}</p>
            <button class="add-to-cart">Add to Cart</button>
        </div>
    `;
}

function handleAddProduct(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    // Simulated API call (in a real app, you would send this data to your backend)
    console.log('Product added:', Object.fromEntries(formData));

    // Show a success message (in a real app, you might redirect to the products page)
    alert('Product added successfully!');
    form.reset();
}