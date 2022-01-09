let header = document.querySelector('.header'),
	headerMenu = header.querySelector('.header__menu'),
	headerPopup = header.querySelector('.header__popup'),
	bodyBack = document.querySelector('.body__back'),
	listMenu = header.querySelector('.list_menu');

headerMenu.addEventListener('click', () => {
	let expanded = headerMenu.getAttribute('aria-expanded') === 'true' || false;
    headerMenu.setAttribute('aria-expanded', !expanded);
	headerPopup.classList.toggle('header__popup_open');
	bodyBack.classList.toggle('body__back_opened')
	document.body.style.overflow = 'hidden';
});

    bodyBack.addEventListener('click', (event) => {
        if (event.target === bodyBack) {
            console.log('1');
            let expanded = headerMenu.getAttribute('aria-expanded') === 'true' || false;
            headerMenu.setAttribute('aria-expanded', !expanded);
            headerPopup.classList.toggle('header__popup_open');
            bodyBack.classList.toggle('body__back_opened');
            document.body.style.overflow = '';
        }
    })