import { inputValidationRegex, Authentication } from './utils'

const usernameInput = document.querySelector('#username') as HTMLInputElement;
const passwordInput = document.querySelector('#password') as HTMLInputElement;
const confirmPwInput = document.querySelector('#confirmed') as HTMLInputElement;
const emailInput = document.querySelector('#email') as HTMLInputElement;
const form = document.querySelector('form') as HTMLFormElement;
const submitButton = document.querySelector('#submit') as HTMLFormElement;
const passwordMatchParagraph = document.querySelector('.pass-match') as HTMLElement;

class Registration extends Authentication {
	protected _confirmed: string;
	protected _email: string;

	constructor() {
		super();
		this._confirmed = '';
		this._email = '';
	};

	set confirmed(value: string) { this._confirmed = value; };
	set email(value: string) { this._email = value; };

	validateInput(key: string, value: string): Boolean {
		return inputValidationRegex[key].test(value);
	};

	checkPasswordMatch(): Boolean {
		return (this._password === this._confirmed);
	}

	validateForm(): Boolean {
		return (
			this._username !== '' &&
			this._password !== '' &&
			this._confirmed !== '' &&
			this._email !== '' &&
			this.checkPasswordMatch()
		);
	};

	submitForm() {
		return {
			username: this._username,
			password: this._password,
			email: this._email
		};
	};
}

const user = new Registration();

export function registerNewUser() {
	form.addEventListener('submit', (event) => {
		event.preventDefault();

		user.submitForm();
	});

	validateField(usernameInput);
	validateField(passwordInput);
	validateField(confirmPwInput);
	validateField(emailInput);
}

function checkAllFields() {
	if (user.validateForm()) {
		submitButton.disabled = false;
		passwordMatchParagraph.style.display = 'none';
	} else {
		submitButton.disabled = true;
		if (user.checkPasswordMatch()) {
			passwordMatchParagraph.style.display = 'none';
		} else {
			passwordMatchParagraph.style.display = 'block';
		}
	}
}

function validateField(elem: HTMLInputElement) {
	elem.addEventListener('blur', () => {
			let valid: Boolean = user.validateInput(elem.id, elem.value);
			try {
				if (!valid) throw "Invalid Input";
			}
			catch(err) {
				elem.className = "form-control is-invalid";
			}
			finally {
				if (elem.id === 'username') valid ? (user.username = elem.value) : (user.username = '');
				else if (elem.id === 'password') valid ? (user.password = elem.value) : (user.password = '');
				else if (elem.id === 'confirmed') valid ? (user.confirmed = elem.value) : (user.confirmed = '');
				else if (elem.id === 'email') valid ? (user.email = elem.value) : (user.email = '');

				if (valid) elem.className = "form-control is-valid";

				checkAllFields();
			}
		});
}
