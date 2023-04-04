const subscribeBtn = document.querySelector('.newsletter__btn');
const emailInput = document.querySelector('.newsletter__email');
const completeInfo = document.querySelector('.newsletter__complete');

const showError = (input, msg) => {
	const formBox = input.parentElement;
	formBox.classList.add('error');
	const errorInfo = document.querySelector('.newsletter__error');
	errorInfo.textContent = msg;
};

const clearError = input => {
	const formBox = input.parentElement;
	formBox.classList.remove('error');
	input.value = '';
	completeInfo.classList.add('animate');
};

const checkMail = input => {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;

	if (re.test(input.value)) {
		clearError(input);
	} else if (input.value === '') {
		showError(input, `Can't be blank`);
	} else {
		showError(input, `Ooops! That doesn't look like an email addres`);
	}
};

const enterKeyCheck = e => {
	if (e.key === 'Enter') {
		checkMail(emailInput);
	}
};

subscribeBtn.addEventListener('click', () => {
	checkMail(emailInput);
});

emailInput.addEventListener('keyup', enterKeyCheck);
