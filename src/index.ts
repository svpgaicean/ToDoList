import { registerNewUser } from './registration';
import { Database } from './database';
import { IUser } from './utils';

const dbBtn = document.querySelector('#db-btn') as HTMLFormElement;

(function() {
	registerNewUser().then((user) => { console.log(user) });
	let db = new Database('database1');

	let user: IUser = {
		username: 'aafg',
		password: 'abhgd',
		email: 'agdf',
		deleted: false 
	};

	dbBtn.addEventListener('click', () => { db.addUser(user) });
}());
