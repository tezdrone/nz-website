const placeArr = [
	{ title: 'Treaty of Waitangi signed', date: '6 February 1840', position: { lat: -35.26, lng: 174 }, info: 'The Waitangi copy of the treaty was signed before beginning its journey travelling around the country to be signed by various Māori' },
	{ title: 'Taupo Eruption', date: '~27,000 years ago', position: { lat: -38.784, lng: 175.893 }, info: 'Lake Taupo is all that remains of the Taupo Volcano. It is estimated that 27,000 years ago, an eruption caused the volcano to explode, leaving the crator that is now known as Lake Taupo.' },
	{ title: 'Littleton Rail Tunnel', date: '1867', position: { lat: -43.588, lng: 172.707 }, info: 'Travelling between Lyttelton and the swampy lands of Christchurch once involved a difficult climb over mountains. This negatively impacted merchants living in the area. Eventually it was decided that a tunnel was to be made between the two locations.' },
];

let map;

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: { lat: -40.691, lng: 172.204 },
		zoom: 5,
		mapTypeControl: false,
		streetViewControl: false,
		rotateControl: false,
		fullscreenControl: false,
	});

	let markers = [];
	for (let i = 0; i < placeArr.length; i++) {
		const place = placeArr[i];

		markers[i] = new google.maps.Marker({
			position: place.position,
			map,
			title: place.title,
		});

		markers[i].addListener('click', () => {
			document.getElementById('mapInfo').innerHTML = `<h2 class="mb-0">${place.title}</h2>${place.date ? `<h4 class="mt-0">${place.date}</h4>` : ''}<p>${place.info}</p>`;
		});
	}
}
