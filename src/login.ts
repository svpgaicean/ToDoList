import { Authentication, ILogin } from './utils'
import { Database } from './database';

const loginUsername = document.querySelector('#loginUsername') as HTMLInputElement;
const loginPassword = document.querySelector('#loginPassword') as HTMLInputElement;
const loginForm = document.querySelector('.form-index') as HTMLFormElement;
const loginError = document.querySelector('.login-error') as HTMLElement;

class Login extends Authentication {
  constructor() {
    super();
  }

	submitForm(): ILogin {
		return {
			username: this._username,
			password: this._password,
		};
	};
}

let db = new Database('database1');
const user = new Login;

if (loginUsername) loginUsername.addEventListener('blur', () => { getInput(loginUsername) });
if (loginPassword) loginPassword.addEventListener('blur', () => { getInput(loginPassword) });

if (loginForm) {
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    db.verifyLoginInfo(user.submitForm())
      .then( (resp) => {
        handleInputs(resp as Number);
        if (resp === 0) {
          sessionStorage.setItem('login-token', 'valid');
        }
      });
  });

}

function getInput(elem: HTMLInputElement) {
  if (elem.id === 'loginUsername') user.username = elem.value;
  else if (elem.id === 'loginPassword') user.password = elem.value;
}

function handleInputs(flag: Number) {
  if (flag === 0) {
    loginError.innerText = '';
  } else if (flag === -1) {
    loginError.innerText = 'wrong password';
  } else if (flag === -2) {
    loginError.innerText = 'username does not exist';
  }
}
