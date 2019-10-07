class Authentication {
	protected _username: string;
	protected _password: string;

	constructor() {
		this._username = '';
		this._password = '';
	}

	set username(value: string) { this._username = value; };
	set password(value: string) { this._password = value; };
}

interface IUser {
	username: string,
	password: string,
	email: string,
	deleted: boolean
}

interface ILogin {
  username: string,
  password: string
}

interface IOptions {
	[option: string]: RegExp;
};

const inputValidationRegex: IOptions = {
	username: /^[a-zA-Z\d.]{6,}$/,
	password: /^(?!.*?[\^])(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
	confirmed: /^(?!.*?[\^])(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
	email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
};

export {
  Authentication,
  IUser,
  ILogin,
  inputValidationRegex
}
