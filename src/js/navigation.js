class Navigation {
  constructor() {
    this.toggleSelector = '.navigation__toggle';
    this.navigationSelector = '.navigation';
    this.openClass = 'is-open';
  }

  init() {
    document.addEventListener('click', this.handleClick.bind(this));
  }

  handleClick(event) {
    const toggle = event.target.closest(this.toggleSelector);
    if (!toggle) return;

    const navigation = toggle.closest(this.navigationSelector);
    if (!navigation) return;

    this.toggleMenu(navigation, toggle);
  }

  toggleMenu(navigation, toggle) {
    const isOpen = navigation.classList.toggle(this.openClass);
    toggle.setAttribute('aria-expanded', isOpen);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const navigation = new Navigation();
  navigation.init();
});
