import { inputValidationRegex, Authentication } from './utils'

const usernameInput = document.querySelector('#inputUsername') as HTMLInputElement;
const passwordInput = document.querySelector('#inputPassword') as HTMLInputElement;
const confirmPwInput = document.querySelector('#confirmPassword') as HTMLInputElement;
const emailInput = document.querySelector('#inputEmail') as HTMLInputElement;
const form = document.querySelector('#form-register') as HTMLFormElement;

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

	validateForm(): Boolean {
		return (
			this._username !== '' &&
			this._password !== '' &&
			this._confirmed !== '' &&
			this._email !== '' &&
			(this._password === this._confirmed)
		);
	};

	submitForm() {
		return {
			username: this._username,
			password: this._password,
			confirmed: this._confirmed,
			email: this._email
		};
	};
}

const user = new Registration();

export function registerNewUser() {
	if (!usernameInput) throw Error('Username input Element missing');
	if (!passwordInput) throw Error('Password input Element missing');
	if (!confirmPwInput) throw Error('Confirm Password input Element missing');
	if (!emailInput) throw Error('Email input Element missing');
	if (!form) throw Error('Form Element missing');

	form.addEventListener('submit', (event) => {
		event.preventDefault();

		if (user.validateForm()) {
			console.log('goodie', user.submitForm());
		} else {
			console.log('badbadbad', user.submitForm());
		}
	});

	validateField(usernameInput);
	validateField(passwordInput);
	validateField(confirmPwInput);
	validateField(emailInput);
}

function validateField(elem: HTMLInputElement) {
	/** TODO: implement handler for wrong inputs
	 * 
	 */
	elem.addEventListener('blur', () => {
			let valid: Boolean = user.validateInput(elem.name, elem.value);
			try {
					if (!valid) throw "Invalid Input";
			}
			catch(err) {
					elem.setAttribute("style", "border: 1px solid red;");
			}
			finally {
				if (elem.name === 'username') valid ? (user.username = elem.value) : (user.username = '');
				else if (elem.name === 'password') valid ? (user.password = elem.value) : (user.password = '');
				else if (elem.name === 'confirmed') valid ? (user.confirmed = elem.value) : (user.confirmed = '');
				else if (elem.name === 'email') valid ? (user.email = elem.value) : (user.email = '');

				if (valid) elem.setAttribute("style", "border: 1px solid #777777;");
			}
		});
}