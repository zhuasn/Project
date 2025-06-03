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