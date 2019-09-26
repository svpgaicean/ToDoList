const usernameInput = document.querySelector('#inputUsername') as HTMLInputElement;
const passwordInput = document.querySelector('#inputPassword') as HTMLInputElement;
const confirmPwInput = document.querySelector('#confirmPassword') as HTMLInputElement;
const emailInput = document.querySelector('#inputEmail') as HTMLInputElement;
const form = document.querySelector('#form-register') as HTMLFormElement;

class Registration {
	user: string;
	password: string;
	confirmed: string;;
	email: string;
	[index: string]: string;

	constructor(
		user: string,
		password: string,
		confirmed: string,
		email: string 
	) {
		this.user = user;
		this.password = password;
		this.confirmed = confirmed;
		this.email= email;
	}
}

const user = new Registration('', '', '', '');

export function validateForm() {
	if (!usernameInput) throw Error('Username input Element missing');
	if (!passwordInput) throw Error('Password input Element missing');
	if (!confirmPwInput) throw Error('Confirm Password input Element missing');
	if (!emailInput) throw Error('Email input Element missing');
	if (!form) throw Error('Form Element missing');

	form.addEventListener('submit', (event) => {
		event.preventDefault();
		validateRegistry(user);
	});

	validateElement(usernameInput);
	validateElement(passwordInput);
	validateElement(confirmPwInput);
	validateElement(emailInput);
}

/** TODO: rename variables used in the function
 *  was intended as prototype :DDDD
 */
function validateRegistry(x: Registration) {
	let ct = 0;
	for (let key in x) {
		if (x[key] !== '') {
			ct++;
		}
	}
	if (ct === 4) {
		if (x.password === x.confirmed) {
			console.log(`registeredddd successfullyyyyy ct ${ct}`);
			console.log(user);
		} else {
			console.log("error pass doesn't match confirmed");
		}
	} else {
		console.log(`ct ${ct}`);
	}
}

function validateElement(elem: HTMLInputElement) {
	/** TODO: implement handler for wrong input
	 *  tooltip or whatever needs to be done
	 */
	elem.addEventListener('blur', () => {
			let valid: Boolean = validateInput(elem.value, elem.name);
			try {
					if (!valid) throw "invalid_input";
			}
			catch(err) {
					elem.setAttribute("style", "border: 1px solid red;");
			}
			finally {
				if (valid) {
					elem.setAttribute("style", "border: 1px solid #777777;");
					user[elem.name] = elem.value;
				}
			}
	});
}

function validateInput(value: string, name: string): Boolean {
	/** TODO: move interface and object to file 'utils'
	 *  import them for use in registration and login
	 */
	interface IOptions {
		[option: string]: RegExp;
	}
	const option: IOptions = {
		user: /^[a-zA-Z\d.]{6,}$/,
		password: /^(?!.*?[\^])(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Z]+.{7,}$/,
		confirmed: /^(?!.*?[\^])(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Z]+.{7,}$/,
		email: /^.*$/
	}
	const regexString = option[name];

	if (regexString.test(value)) {
		return true;
	}

	return false;
}
