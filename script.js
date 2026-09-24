const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
menuToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', nav.classList.contains('open'));
});

document.querySelectorAll('.main-nav a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));
document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('bookingForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const checkin = document.getElementById('checkin').value;
  const checkout = document.getElementById('checkout').value;
  const guests = document.getElementById('guests').value;
  const text = `Hola, soy ${name}. Quisiera consultar disponibilidad en Ñande Róga. Entrada: ${checkin}. Salida: ${checkout}. ${guests}.`;
  window.open(`https://wa.me/595000000000?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
});
