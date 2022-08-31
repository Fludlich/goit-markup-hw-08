(() => {
  const refs = {
    openMenuBtn: document.querySelector('.mobile__button'),
    closeMenuBtn: document.querySelector('.mobile__icon-close'),
    menu: document.querySelector('.mobile'),
    body: document.querySelector('body'),
    menuList: document.querySelector('.mobile__nav'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.menuList.addEventListener('click', removeMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }

  function removeMenu() {
    refs.menu.classList.add('is-hidden');
  }
})();