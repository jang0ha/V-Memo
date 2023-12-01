const mariadb = require('mariadb');
const pool = mariadb.createPool({
	host: '127.0.0.1',
	user: 'root',
	password: 'fpskfhqsl1!@',
	connectionLimit: 5,
	database:'memo'//내가 만든 데이터 이름
});

module.export = {
	run() {
		pool.getConnection()
	.then(conn => {

		conn.query("SELECT 1 as val")
			.then((rows) => {
				console.log(rows); //[ {val: 1}, meta: ... ]
				//Table must have been created before 
				// " CREATE TABLE myTable (id int, val varchar(255)) "
				return conn.query("INSERT INTO myTable value (?, ?)", [1, "mariadb"]);
			})
			.then((res) => {
				console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }
				conn.end();
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
}