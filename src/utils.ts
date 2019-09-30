interface IOptions {
	[option: string]: RegExp;
};

export const inputValidationRegex: IOptions = {
	username: /^[a-zA-Z\d.]{6,}$/,
	password: /^(?!.*?[\^])(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Z]+.{7,}$/,
	confirmed: /^(?!.*?[\^])(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Z]+.{7,}$/,
	email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
};

export class Authentication {
	protected _username: string;
	protected _password: string;

	constructor() {
		this._username = '';
		this._password = '';
	}

	set username(value: string) { this._username = value; };
	set password(value: string) { this._password = value; };
}
