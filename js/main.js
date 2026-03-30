window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const navCollapse = document.getElementById('navMenu');
    if (navCollapse.classList.contains('show')) {
      bootstrap.Collapse.getInstance(navCollapse)?.hide();
    }
    const navbarHeight = document.getElementById('navbar').offsetHeight;
    const top = target.getBoundingClientRect().top + window.scrollY - navbarHeight - 8;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

function syncDots(carouselId, dotsId) {
  const car  = document.getElementById(carouselId);
  const dots = document.querySelectorAll(`#${dotsId} .carousel-dot`);
  if (!car) return;
  car.addEventListener('slid.bs.carousel', e => {
    dots.forEach((d, i) => d.classList.toggle('active', i === e.to));
  });
}
syncDots('carouselModulos', 'modDots');
syncDots('carouselAutores', 'autorDots');
