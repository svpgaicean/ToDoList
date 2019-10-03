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

interface IOptions {
	[option: string]: RegExp;
};

const inputValidationRegex: IOptions = {
	username: /^[a-zA-Z\d.]{6,}$/,
	password: /^(?!.*?[\^])(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Z]+.{7,}$/,
	confirmed: /^(?!.*?[\^])(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Z]+.{7,}$/,
	email: /^.*$/
};

export {
	Authentication,
	IUser,
	inputValidationRegex
};