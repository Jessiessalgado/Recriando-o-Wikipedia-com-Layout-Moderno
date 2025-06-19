const menuToggle = document.getElementById('menu-toggle');
const menuList = document.getElementById('menu-list');

menuToggle.addEventListener('click', () => {
  menuList.classList.toggle('show');

  // Atualiza atributo aria-expanded para acessibilidade
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
  menuToggle.setAttribute('aria-expanded', !expanded);
});
