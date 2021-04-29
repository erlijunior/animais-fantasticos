import outsideClick from "./outsideclick.js";

export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');
  const events = ['touchstart', 'click'];

  function handleClick(event) {
    event.preventDefault();
    this.classList.add('active');
    outsideClick(this, events, () => {
      this.classList.remove('active');
    });
  }

  dropdownMenus.forEach((menu) => {

    events.forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });

  });

}
