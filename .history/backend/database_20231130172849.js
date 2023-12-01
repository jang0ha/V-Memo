const mariadb = require('mariadb');
const pool = mariadb.createPool({
	host: '127.0.0.1',
	user: 'root',
	password: 'fpskfhqls1!@',
	database:'memo',
});
module.exports = {
	async run(query, params) {
		return new Promise((resolve) => {
			pool.getConnection()
			.then(conn => {
		
				conn.query(query)
					.then((rows) => {
						resolve(rows);
					})
					.catch(err => {
						//handle error
						console.log(err);
						conn.end();
					})
		
			}).catch(err => {
				//not connected
			});
		})
	}
}
