import { Authentication, IUser, inputValidationRegex } from './utils'
import { Database } from './database';

const usernameInput = document.querySelector('#username') as HTMLInputElement;
const passwordInput = document.querySelector('#password') as HTMLInputElement;
const confirmPwInput = document.querySelector('#confirmed') as HTMLInputElement;
const emailInput = document.querySelector('#email') as HTMLInputElement;
const form = document.querySelector('.form-registration') as HTMLFormElement;
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

  submitForm(): IUser {
    return {
      username: this._username,
      password: this._password,
      email: this._email,
      deleted: false
    };
  };
}

let db = new Database('database1');
const user = new Registration();

if (usernameInput) usernameInput.addEventListener('blur', () => { validateField(usernameInput) });
if (passwordInput) passwordInput.addEventListener('blur', () => { validateField(passwordInput) });
if (confirmPwInput) confirmPwInput.addEventListener('blur', () => { validateField(confirmPwInput) });
if (emailInput) emailInput.addEventListener('blur', () => { validateField(emailInput) });

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    db.addUser(user.submitForm() as IUser)
      .then((response) => {
        console.log(response);
      })
      .catch();

  });
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
  let valid: Boolean = user.validateInput(elem.id, elem.value);
  try {
    if (!valid) throw "Invalid Input";
  }
  catch (err) {
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
}
