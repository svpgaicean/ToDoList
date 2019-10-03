// import { registerNewUser } from './registration';
import { Database } from './database';
import { IUser } from './utils';

const dbBtn = document.querySelector('#db-btn') as HTMLFormElement;

(function() {
	// registerNewUser();
	let db = new Database('database1');

	let user: IUser = {
		username: 'a',
		password: 'ab',
		email: 'agdf',
		deleted: false
	};

	dbBtn.addEventListener('click', () => { db.addUser(user) });
}());
