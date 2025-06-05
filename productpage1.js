document.addEventListener('DOMContentLoaded', function () {
  const tabs = document.querySelectorAll('.product-tabs .tab');
  const specImg = document.getElementById('specImage');
  const descImg = document.getElementById('descImage');

  tabs.forEach(tab => {
    tab.addEventListener('click', function () {
      tabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');

      const selectedTab = this.dataset.tab;

      if (selectedTab === 'specs') {
        specImg.style.display = 'block';
        descImg.style.display = 'none';
      } else if (selectedTab === 'desc') {
        specImg.style.display = 'none';
        descImg.style.display = 'block';
      } else {
        specImg.style.display = 'none';
        descImg.style.display = 'none';
      }
    });
  });
});
