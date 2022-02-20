let header = document.querySelector('.header'),
	button = header.querySelector('.button_nav'),
	listMenu = header.querySelector('.list_menu');

button.addEventListener('click', () => {
	let expanded = button.getAttribute('aria-expanded') === 'true' || false;
    button.setAttribute('aria-expanded', !expanded);
    button.classList.toggle('button_nav-open');
    listMenu.classList.toggle('list_menu-open');
    header.classList.toggle('header_open');
});

