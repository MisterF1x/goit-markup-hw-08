(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const closeMenuLink = document.querySelector('.js-close-menu[href]');

  const toggleMenu = () => {
    const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen ? 'disableBodyScroll' : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  const closeMobileMenu = () => {
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
  closeMenuLink.addEventListener('click', closeMobileMenu);
  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    closeMobileMenu();
  });
})();
// ------------------filter
const refs = {
  liCards: document.querySelectorAll('li[data-key]'),
  ulFilter: document.querySelector('.filter'),
  ulProject: document.querySelector('.projects'),
};

refs.ulFilter?.addEventListener('click', onButtonsFilterClick);

function onButtonsFilterClick(e) {
  const filter = e.target.dataset.name;
  const currentActiveBtn = document.querySelector('.current');

  if (e.target.nodeName !== 'BUTTON') return;

  currentActiveBtn?.classList.remove('current');
  e.target.classList.add('current');
  //Варіант 1
  let filtered = [].filter.call(refs.liCards, element => {
    if (filter === 'all') {
      return refs.liCards;
    }
    return element.dataset.key === filter;
  });
  refs.ulProject.innerHTML = '';
  refs.ulProject.append(...filtered);
  //Варіант 2
  // refs.liCards.forEach(el => {
  //   if (el.hasAttribute('style')) {
  //     el.removeAttribute('style');
  //   }
  //   if (el.dataset.key !== filter) {
  //     el.style.display = 'none';
  //   }
  //   if (filter === 'all') {
  //     el.removeAttribute('style');
  //   }
  // });
}
