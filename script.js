window.addEventListener('load', start);

var redRange = null;
var greenRange = null;
var blueRange = null;

var redPreview = null;
var greenPreview = null;
var bluePreview = null;

var colorPreview = null;

function start() {
	redRange = document.querySelector('#redRange');
	greenRange = document.querySelector('#greenRange');
	blueRange = document.querySelector('#blueRange');

	redPreview = document.querySelector('#redValuePreview');
	greenPreview = document.querySelector('#greenValuePreview');
	bluePreview = document.querySelector('#blueValuePreview');

	colorPreview = document.querySelector('#colorPreview');

	redRange.addEventListener('input', updateRedValue);
	greenRange.addEventListener('input', updateGreenValue);
	blueRange.addEventListener('input', updateBlueValue);

	initializeSliders();
}

function updateRedValue(event) {
	updateValue(redPreview, event.target.value);
}

function updateGreenValue(event) {
	updateValue(greenPreview, event.target.value);
}

function updateBlueValue(event) {
	updateValue(bluePreview, event.target.value);
}

function updateValue(preview, value) {
	preview.value = value;
	colorPreview.style.backgroundColor = `rgb(${redPreview.value},${greenPreview.value},${bluePreview.value})`;
}

function initializeSliders() {
	redPreview.value = redRange.value;
	greenPreview.value = greenRange.value;
	bluePreview.value = blueRange.value;
	colorPreview.style.backgroundColor = `rgb(${redPreview.value},${greenPreview.value},${bluePreview.value})`;
}
