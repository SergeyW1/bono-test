const userName = document.querySelector('.form__name')
const userMail = document.querySelector('.form__mail')
const userMessage = document.querySelector('.form__message')
const formBtn = document.querySelector('.form__btn')
const btnMenu = document.querySelector('.btn-menu')
const burgerMenu = document.querySelector('.burger-menu')
const list = document.querySelector('.header-menu__list')

const formMap = new Map()

formBtn.addEventListener('click', () => {
	if (userName.value == '') {
		userName.classList.add('no-valid')
	}
	if (userMail.value == '') {
		userMail.classList.add('no-valid')
	}
	if (userMessage.value == '') {
		userMessage.classList.add('no-valid')
	}

	setTimeout(() => {
		userName.classList.remove('no-valid')
		userMail.classList.remove('no-valid')
		userMessage.classList.remove('no-valid')
	}, 3000)

	if (userName.value !== '' && userMail.value !== '' && userMessage.value !== '') {
		userName.classList.remove('no-valid')
		userMail.classList.remove('no-valid')
		userMessage.classList.remove('no-valid')
		formMap.set('name', userName.value)
			.set('mail', userMail.value)
			.set('message', userMessage.value)
		userName.value = ''
		userMail.value = ''
		userMessage.value = ''
		console.log(`
		Имя: ${formMap.get('name')},
		Mail: ${formMap.get('mail')}, 
		Message: ${formMap.get('message')}
		`);
	}
})

const scrollBottom = document.querySelector('.btn-bottom');
scrollBottom.addEventListener('click', () => {
	scrollBy({
		top: innerHeight,
		behavior: "smooth"
	})
})

document.querySelector('.header__logo').addEventListener('click', () => {
	console.log('eee');
})

btnMenu.addEventListener('click', (e) => {
	e.preventDefault();
	btnMenu.classList.toggle('active')
	burgerMenu.classList.toggle('active-menu')
	list.classList.toggle('list-active')
	console.log('hee');
})






// Swiper

new Swiper(".swiper", {
	speed: 500,
	loop: true,
	pagination: {
		el: ".swiper-pagination",
		type: "bullets",
		clickable: true,
	},
	loop: true,
	slidesPerView: 2,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	spaceBetween: 50,
});

