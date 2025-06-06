document.addEventListener('DOMContentLoaded', function () {
  const track = document.getElementById('carouselTrack');
  const dots = document.querySelectorAll('.carousel-dot');
  const slides = track.querySelectorAll('img');

  dots.forEach(dot => {
    dot.addEventListener('click', function () {
      const index = parseInt(this.dataset.slide);

      const slideWidth = slides[0].getBoundingClientRect().width;
      const offset = index * -slideWidth;

      track.style.transform = `translateX(${offset}px)`;

      dots.forEach(d => d.classList.remove('active'));
      this.classList.add('active');
    });
  });
  
  const dropdownWrapper = document.querySelector('.dropdown-wrapper');
  const dropdownPanel = document.querySelector('.dropdown-panel');
  const pcPartsItem = document.querySelector('.main-item[data-category="pc-parts"]');
  const megaMenu = document.querySelector('.mega-menu');

  let hoverTimer;

  function showMegaMenu() {
    if (megaMenu) {
      megaMenu.style.display = 'flex';
    }
  }

  function hideMegaMenu() {
    if (megaMenu) {
      megaMenu.style.display = 'none';
    }
  }

  if (pcPartsItem && megaMenu) {
    pcPartsItem.addEventListener('mouseenter', function () {
      clearTimeout(hoverTimer);
      showMegaMenu();
    });

    pcPartsItem.addEventListener('mouseleave', function () {
      hoverTimer = setTimeout(hideMegaMenu, 100);
    });

    megaMenu.addEventListener('mouseenter', function () {
      clearTimeout(hoverTimer);
    });
    megaMenu.addEventListener('mouseleave', function () {
      hideMegaMenu();
    });
  }
});

let cartCount = 0;

function updateCartCount() {
  const cartCountElement = document.getElementById('cartCount');
  if (cartCountElement) {
    cartCountElement.textContent = cartCount;
    if (cartCount > 0) {
      cartCountElement.style.display = 'flex';
      cartCountElement.classList.add('show');
    } else {
      cartCountElement.style.display = 'none';
      cartCountElement.classList.remove('show');
    }
  }
}

function addToCart(productId) {
  const cart = JSON.parse(localStorage.getItem('cart')) || {};
  if (cart[productId]) {
    cart[productId]++;
  } else {
    cart[productId] = 1;
  }
  localStorage.setItem('cart', JSON.stringify(cart));
}

document.addEventListener('click', function (e) {
  if (e.target.tagName === 'BUTTON' &&
    e.target.textContent.trim() === 'Add To Cart' &&
    !e.target.classList.contains('out-of-stock')) {

    cartCount++;
    updateCartCount();

    e.target.textContent = 'Added!';
    e.target.style.background = '#28a745';
    setTimeout(() => {
      e.target.textContent = 'Add To Cart';
      e.target.style.background = '#F08703';
    }, 1000);
  }
});

updateCartCount();

document.addEventListener('DOMContentLoaded', function () {
  const cartBtns = document.querySelectorAll('.add-to-cart-btn');

  cartBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      const productKey = this.getAttribute('data-product');
      let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

      if (!cartItems.includes(productKey)) {
        cartItems.push(productKey);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
      }

      document.getElementById('cartCount').textContent = cartItems.length;
    });
  });

  const storedCart = JSON.parse(localStorage.getItem('cartItems')) || [];
  document.getElementById('cartCount').textContent = storedCart.length;
});
