const mariadb = require('mariadb');
const pool = mariadb.createPool({
	host: '127.0.0.1',
	user: 'root',
	password: 'fpskfhqls1!@',
	database:'memo',
});
module.exports = {
	async run(query) {
		return new Promise((resolve) => {
			pool.getConnection()
			.then(conn => {
		
				conn.query(query)
					.then((rows) => {
						console.log(rows);
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
