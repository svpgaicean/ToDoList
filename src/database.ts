import { IUser, ILogin } from './utils';

class Database {
	private IndxDb: IDBFactory;
	private db: IDBDatabase;
	
	constructor(public dbName: string) {
		this.IndxDb = window.indexedDB;
		this.db = {} as IDBDatabase;
		this.openDB();
	}

	// Open database on class instantiation
	openDB() {
		return new Promise((resolve, reject) => {
			let req: IDBOpenDBRequest;
			req = this.IndxDb.open(this.dbName);

			// Set up the object store if new database
			req.onupgradeneeded = (e: any) => {
				this.db = e.target.result;

				this.db.createObjectStore("users", {keyPath: 'id', autoIncrement: true});
				this.db.createObjectStore("list", {keyPath: 'id'});
				this.db.createObjectStore("category", {keyPath: 'id', autoIncrement: true});

				console.log('Database was set up successfully');
			}

			req.onsuccess = (e: any) => {
				resolve(this.db = e.target.result);
			}
			req.onerror = () => {
				reject(console.log('Database failed to open'));
			}
		});
		
	}

	/**
	 *  TRANSACTIONS 
	 */
	addUser = (newUser: IUser) => {
		return new Promise((resolve, reject) => {
			this.usernameExists(newUser.username)
				.then((exists) => {
					if (!exists) {
						const request = this.db.transaction(["users"], "readwrite")
																	.objectStore("users")
																	.add(newUser);

						request.onsuccess = function(e: any) {
							console.log("User added!");
						};
						request.onerror = function(e: any) {
							// handle error
						}
					} else {
						console.log("Err: Username already exists.");
					}
			});
		});
	}

	usernameExists = (username: string) => {
		return new Promise((resolve, reject) => {
			this.db.transaction(["users"])
									.objectStore("users")
									.openCursor().onsuccess = (e: any) => {
										let cursor = e.target.result as IDBCursorWithValue;
										if (cursor) {
											if (
                        cursor.value.username === username &&
                        cursor.value.deleted === false
                      ) {
                        resolve(true);
                      } else {
												cursor.continue();
											}
										} else {
											resolve(false); // no more entries
										}
									}
		});
  };

  verifyLoginInfo = (userInfo: ILogin) => {
		return new Promise((resolve, reject) => {
			this.db.transaction(["users"])
									.objectStore("users")
									.openCursor().onsuccess = (e: any) => {
										let cursor = e.target.result as IDBCursorWithValue;
										if (cursor) {
											if (
                        cursor.value.username === userInfo.username &&
                        cursor.value.deleted === false
                      ) {
                        if (cursor.value.password === userInfo.password) {
                          resolve(0); // login succesful
                        } else {
                          resolve(-1); // wrong password
                        }
                      } else {
												cursor.continue();
											}
										} else {
											resolve(-2); // username does not exist
										}
									}
		});
	};

	/** PROTOTYPES for note handling
	 *  addNote - adds text from input field
	 *  deleteNote - deletes note based on note id
	 *  completeNote - complete note based on note id (change completed field of note)
	 *  listNotes - list notes based on categories (all, x, y, z)
	 * 
	 *  only list notes that do not have field 'deleted = true'
	 */
	addNote = (noteText: string) => {};
	deleteNote = (id: number) => {};
	completeNote = (id: number) => {};
	listNotes = (categoryName: string) => {};

	/**
	 *  PROTOTYPES for category handling
	 */
	addCategory = (categoryName: string) => {
		let defaultCateg; // check if the default category exists
		if (!defaultCateg) { // create it if it doesn't
			// create default categ
		} else {
			// handle adding new category
		}
	};
}

export { Database };
