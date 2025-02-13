const form = document.getElementById('login-form');
const codeInput = document.getElementById('code');
const submitBtn = document.getElementById('submit-btn');
const resultDiv = document.getElementById('result');

const secretCode = 'farhat'; // Replace with your secret code
const secretCode2 = 'ferre'
const secretCode3 = 'ferrero'
const nextPageUrl = 'main.html'; // Replace with the URL of the new page

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const userInput = codeInput.value.trim();
	if (userInput === secretCode || userInput ==secretCode2 || userInput== secretCode3) {
		resultDiv.innerHTML = 'Baby';
		window.location.href = nextPageUrl; // Redirect to new page
	} else {
		resultDiv.innerHTML = 'Whotf are you? kahan hai meri pyaari rasmalai?';
	}
});