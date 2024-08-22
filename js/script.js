'use strict'

function toogleClass(element, toogleClass) {
	if (element.classList.contains(toogleClass)) {
		element.classList.remove(toogleClass);
	} else {
		element.classList.add(toogleClass);
	}
}

const burgerBtn = document.querySelector('.burger-btn');

burgerBtn.addEventListener('click', (e) => {
	e.preventDefault();

	const header = document.querySelector('.header__block');

	toogleClass(header, 'show');
	toogleClass(burgerBtn, 'burger-btn__active');

});



//Data base Mock Api

const db = 'https://66c6b3cd8b2c10445bc76b53.mockapi.io/api/v1/subscribe',
	subscribeForm = document.querySelector('.sendEmail');

subscribeForm.addEventListener('submit', (e) => {
	e.preventDefault();

	const email = document.getElementById('email');

	const data = {
		email: email.value
	};

	fetch(db, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8'
		},
		body: JSON.stringify(data)
	})
});




function getAndDisplayData() {
	fetch(db)
		.then(response => response.json())
		.then(data => {

			const list = document.querySelector('.subscribers__list');
			list.innerHTML = '';

			data.forEach(item => {
				const listItem = document.createElement('li');
				listItem.classList.add('subscribers__list-item');
				listItem.textContent = `${item.id} ---> ${item.email}`;
				list.appendChild(listItem);
			});
		})
}

document.addEventListener('DOMContentLoaded', getAndDisplayData);