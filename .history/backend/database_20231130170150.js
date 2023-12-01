const mariadb = require('mariadb');
const pool = mariadb.createPool({
	host: '127.0.0.1',
	user: 'root',
	password: 'fpskfhqls1!@',
	database:'memo',
});
module.exports = {
	pool.getConnection()
	.then(conn => {

		conn.query("SELECT 1 as val")
			.then((rows) => {
			})
			.catch(err => {
				//handle error
				console.log(err);
				conn.end();
			})

	}).catch(err => {
		//not connected
	});
}
