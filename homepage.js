document.addEventListener('DOMContentLoaded', function () {
  const track = document.getElementById('carouselTrack');
  const dots = document.querySelectorAll('.carousel-dot');

  dots.forEach(dot => {
    dot.addEventListener('click', function () {
      const index = parseInt(this.dataset.slide);
      const offset = index * -750; 
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
    pcPartsItem.addEventListener('mouseenter', function() {
      clearTimeout(hoverTimer);
      showMegaMenu();
    });

    pcPartsItem.addEventListener('mouseleave', function() {
      hoverTimer = setTimeout(hideMegaMenu, 100);
    });

    megaMenu.addEventListener('mouseenter', function() {
      clearTimeout(hoverTimer);
    });
    megaMenu.addEventListener('mouseleave', function() {
      hideMegaMenu();
    });
  }
});

// 购物车计数功能
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

// 为所有"Add To Cart"按钮添加点击事件
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'BUTTON' && 
        e.target.textContent.trim() === 'Add To Cart' && 
        !e.target.classList.contains('out-of-stock')) {
        
        cartCount++;
        updateCartCount();
        
        // 添加视觉反馈
        e.target.textContent = 'Added!';
        e.target.style.background = '#28a745';
        setTimeout(() => {
            e.target.textContent = 'Add To Cart';
            e.target.style.background = '#F08703';
        }, 1000);
    }
});

// 初始化购物车计数（确保初始隐藏）
updateCartCount();