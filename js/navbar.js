const navbar = document.getElementById('mainNav');

function updateNav() {
	if (window.scrollY > 5) {
		navbar.classList.add('is-scrolled');
	} else {
		navbar.classList.remove('is-scrolled');
	}
}

updateNav();

window.addEventListener('scroll', () => {
	updateNav();
});
