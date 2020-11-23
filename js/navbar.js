//Get the navbar
const navbar = document.getElementById('mainNav');

//Update navbar based on scroll position
function updateNav() {
	if (window.scrollY > 5) {
		navbar.classList.add('is-scrolled');
	} else {
		navbar.classList.remove('is-scrolled');
	}
}

//Run nav update onload once
updateNav();

//Run nav update after each scroll
window.addEventListener('scroll', () => {
	updateNav();
});
