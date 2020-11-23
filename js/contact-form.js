//Get the text area so that it is available to all lower code
let textarea = {
	input: document.getElementById('msg'),
	counter: document.getElementById('msgCounter'),
};
textarea.maxLength = textarea.input.dataset.maxLength;

//Listen for the form submit and prevent default event
document.getElementById('contactForm').addEventListener('submit', (e) => {
	e.preventDefault();

	let form = e.target,
		errArr = [];

	console.log(form);

	//First Name
	let fName = form.fName;
	if (fName.value.length < 3) {
		errArr.push({
			field: fName,
			err: 'Fist Name must be longer than 3 characters',
		});
	}

	//Last Name
	let lName = form.lName;
	if (lName.value.length < 3) {
		errArr.push({
			field: lName,
			err: 'Last Name must be longer than 3 characters',
		});
	}

	//Email
	let email = form.email;
	if (email.value.length < 1) {
		errArr.push({
			field: email,
			err: 'Email field cannot be empty',
		});
	}

	//Contact Phone
	//(Minimal validation as phone number not required)

	//Subject
	let subject = form.subject;
	if (form.subject.value == '') {
		errArr.push({
			field: subject,
			err: 'Please pick a subject for your inquiry',
		});
	}

	//Inquiry
	let msg = form.msg;
	if (msg.value.length < 10) {
		errArr.push({
			field: msg,
			err: 'Your inquiry must be atleast 10 characters long',
		});
	} else if (msg.value.length > textarea.maxLength) {
		errArr.push({
			field: msg,
			err: `Your inquiry is too long. It must be no more than ${textarea.maxLength} characters`,
		});
	}

	//Contact Method
	let contactMethod = form.contactMethod;
	if (contactMethod.value == '') {
		errArr.push({
			field: contactMethod,
			err: 'Please select your preferred contact method',
		});
	}

	// console.clear();
	errArr.forEach((err) => {
		console.log(err.err);
	});

	//Clear the invalid class from all fields before checking for errors
	function clearErrStack() {
		//Concatenate HTML element arrays
		//*** Referenced from https://stackoverflow.com/questions/42155925/how-to-concatenate-an-htmlcollection-with-an-array ***
		const inputArr = Array.from(form.getElementsByTagName('input'));
		const textAreaArr = Array.from(form.getElementsByTagName('textarea'));
		const selectArr = Array.from(form.getElementsByTagName('select'));

		const fieldArr = inputArr.concat(textAreaArr, selectArr);

		console.log(fieldArr);
		for (let i = 0; i < fieldArr.length; i++) {
			const el = fieldArr[i];
			el.classList.remove('invalid');
		}
	}

	clearErrStack();

	//Check if there's any stored errors
	if (errArr.length > 0) {
		//Focus uppermost field with errors
		errArr[0].field.focus();

		//Construct error message
		errMsg = '<b>Please fix the following Errors</b><ul>';

		errArr.forEach(({ field, err }) => {
			field.classList.add('invalid');
			errMsg += `<li>${err}</li>`;
		});

		errMsg += '</ul>';

		const errBox = document.getElementById('errors');
		errBox.innerHTML = errMsg;
		errBox.classList.add('show');

		console.log(errMsg);
	}
});

//--Textarea Counter--

//Generate a new value for the textarea counter
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

//Update counter on text input
textarea.input.addEventListener('input', () => {
	updateCounter();
});
