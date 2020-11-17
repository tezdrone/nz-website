var bodyArr = document.getElementsByTagName('body');
var body = bodyArr[0];

function getHTML(url, callback) {
	var xhr = new XMLHttpRequest();

	xhr.onload = function () {
		if (xhr.readyState == 4 && xhr.status == 200) {
			callback(false, xhr.responseText);
		} else {
			callback(true);
		}
	};

	xhr.open('GET', url, true);
	xhr.send(null);
}

getHTML('/components/header.html', (err, res) => {
	if (err) {
		console.error('Could not load header');
	} else {
		body.innerHTML = res + body.innerHTML;
	}
});

getHTML('/components/footer.html', (err, res) => {
	if (err) {
		console.error('Could not load footer');
	} else {
		body.innerHTML += res;
	}
});
