const header = document.querySelector('.header');
const headerNav = document.querySelector('.header__nav');
const headerBurgerButton = document.querySelector('.header__burger-button');

if (headerBurgerButton && headerNav && header) {
  headerBurgerButton.addEventListener('click', (event) => {
    header.classList.toggle('active');
    headerNav.classList.toggle('active');
    event.currentTarget.classList.toggle('active');
  });

  headerNav.addEventListener('click', (event) => {
    const isLink = event.currentTarget.classList.contains('header__nav-link');

    if (isLink) {
      header.classList.remove('active');
      headerBurgerButton.classList.remove('active');
      event.currentTarget.classList.remove('active');
    }
  });
}
