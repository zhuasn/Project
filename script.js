document.addEventListener('DOMContentLoaded', function () {
  const track = document.getElementById('carouselTrack');
  const dots = document.querySelectorAll('.carousel-dot');

  dots.forEach(dot => {
    dot.addEventListener('click', function () {
      const index = parseInt(this.dataset.slide);
      const offset = index * -750; // 每张图宽度
      track.style.transform = `translateX(${offset}px)`;

      dots.forEach(d => d.classList.remove('active'));
      this.classList.add('active');
    });
  });
});
