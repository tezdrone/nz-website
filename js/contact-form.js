//--Textarea Counter--
var textarea = {
	input: document.getElementById('msg'),
	counter: document.getElementById('msgCounter'),
};
textarea.maxLength = textarea.input.dataset.maxLength;

function updateCounter() {
	var length = textarea.input.value.length,
		max = textarea.maxLength;
	textarea.counter.innerText = `${length}/${max}`;

	if (length > max) {
		return textarea.counter.classList.add('too-big');
	}
	textarea.counter.classList.remove('too-big');
}

//Initialize the counter
updateCounter();

textarea.input.addEventListener('input', () => {
	updateCounter();
});

// document.getElementById('contactForm').addEventListener('submit', (e) => {
// 	e.preventDefault();

// 	if (textarea.input.value.length > textarea.maxLength) {
// 		alert('Your message is too long');
// 	}
// });
