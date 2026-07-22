// Global Cart & Navigation State Management for Africana

// Function to handle adding an item to the cart
function addToCart(productName, price, imageUrl, quantity = 1, size = '') {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Sanitize price and quantity
    let numericPrice = typeof price === 'string' 
        ? parseFloat(price.replace(/[^0-9.]/g, '')) 
        : Number(price);
    
    let parsedQty = parseInt(quantity, 10);
    if (isNaN(parsedQty) || parsedQty < 1) parsedQty = 1;

    // Check if item already exists in cart (by name and optional size)
    let existingItem = cart.find(item => item.name === productName && (item.size || '') === (size || ''));

    if (existingItem) {
        existingItem.quantity += parsedQty;
        // Keep price updated if it was previously string
        existingItem.price = numericPrice;
    } else {
        cart.push({
            name: productName,
            price: numericPrice,
            imageUrl: imageUrl,
            quantity: parsedQty,
            size: size || ''
        });
    }

    // Save updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update cart badge counter in header
    updateCartIcon();

    // Show visual feedback toast
    let sizeMsg = size ? ` (${size})` : '';
    showToast(`Added ${parsedQty}x "${productName}"${sizeMsg} to cart!`);
}

// Function to update the cart icon badge with total item quantity
function updateCartIcon() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let totalQuantity = cart.reduce((sum, item) => sum + (parseInt(item.quantity, 10) || 1), 0);
    
    let cartCountElement = document.getElementById("cart-count");
    if (cartCountElement) {
        cartCountElement.textContent = totalQuantity;
    }
}

// Helper function to show a modern toast notification
function showToast(message) {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        document.body.appendChild(container);
    }

    let toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.innerHTML = `<i class="fas fa-check-circle"></i> <span>${message}</span>`;
    
    container.appendChild(toast);

    // Fade out and remove after 3 seconds
    setTimeout(() => {
        toast.classList.add('hide');
        setTimeout(() => toast.remove(), 400);
    }, 2600);
}

// Navbar Session State Updater
function updateAuthNav() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    const userRaw = localStorage.getItem('user');
    let accountLi = document.getElementById('nav-account-li');
    
    if (!accountLi) {
        accountLi = document.createElement('li');
        accountLi.id = 'nav-account-li';
        
        const cartLi = document.getElementById('lg-bag') || navbar.lastElementChild;
        if (cartLi) {
            navbar.insertBefore(accountLi, cartLi);
        } else {
            navbar.appendChild(accountLi);
        }
    }

    if (userRaw) {
        try {
            const user = JSON.parse(userRaw);
            if (user.role === 'admin') {
                accountLi.innerHTML = `<a href="admin.html" style="color: #ffc60b; font-weight: 700;"><i class="fas fa-user-shield"></i> Admin</a>`;
            } else {
                accountLi.innerHTML = `<a href="#" onclick="logoutUser(); return false;"><i class="fas fa-user"></i> ${user.username}</a>`;
            }
        } catch(e) {}
    } else {
        accountLi.innerHTML = `<a href="login.html"><i class="fas fa-sign-in-alt"></i> Login</a>`;
    }
}

function logoutUser() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    if (typeof showToast === 'function') showToast('Logged out successfully');
    setTimeout(() => window.location.href = 'index.html', 500);
}

// Initialize event listeners when DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Synchronize cart count & navbar session
    updateCartIcon();
    updateAuthNav();

    // Delegate click events for product card "Add to Cart" icons
    document.querySelectorAll('.cart').forEach((cartIcon) => {
        cartIcon.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            let proCard = cartIcon.closest('.pro');
            if (proCard) {
                let nameEl = proCard.querySelector('h5');
                let priceEl = proCard.querySelector('h4');
                let imgEl = proCard.querySelector('img');

                if (nameEl && priceEl && imgEl) {
                    let productName = nameEl.textContent.trim();
                    let price = priceEl.textContent.trim();
                    let imageUrl = imgEl.src;

                    addToCart(productName, price, imageUrl, 1);
                }
            }
        });
    });

    // Delegate click events for product card navigation to sproduct.html?id=...
    document.querySelectorAll('.pro').forEach((proCard) => {
        proCard.addEventListener('click', function(e) {
            if (e.target.closest('.cart')) return;

            let imgEl = proCard.querySelector('img');
            if (imgEl) {
                let src = imgEl.getAttribute('src') || imgEl.src || '';
                let match = src.match(/\/(f[0-9]+|a[0-9]+|n[0-9]+)\./i);
                let id = match ? match[1].toLowerCase() : 'f1';
                window.location.href = `sproduct.html?id=${id}`;
            }
        });
    });

    // Mobile Navbar Toggle Functionality
    const bar = document.getElementById('bar');
    const close = document.getElementById('close');
    const nav = document.getElementById('navbar');

    if (bar && nav) {
        bar.addEventListener('click', () => {
            nav.classList.add('active');
        });
    }

    if (close && nav) {
        close.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    }
});