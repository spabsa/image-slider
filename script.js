const container = document.querySelector('.container');
const next = document.querySelector('#next');
const prev =document.querySelector('#prev');

let count = 1;

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

function nextSlide() {
	container.animate([{opacity:'0.1'}, {opacity: '1.0'}],
		{duration: 1000, fill:'forwards'});
	if (count === 5) {
		count = 0;
	}
	count++;
	container.style.backgroundImage = 'url(img/halo-' + count + '.jpg';
}

function prevSlide() {
	container.animate([{opacity:'0.1'}, {opacity: '1.0'}],
		{duration: 1000, fill:'forwards'});
	if (count === 1) {
		count = 6;
	}
	count--;
	container.style.backgroundImage = 'url(img/halo-' + count + '.jpg';
}