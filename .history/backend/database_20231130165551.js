const mariadb = require('mariadb');
const pool = mariadb.createPool({
	host: '127.0.0.1',
	user: 'root',
	password: 'fpskfhqls1!@#~',
	connectionLimit: 5,
	database: 'memo' //내가 만든 데이터 이름
});

module.export = {
	run(query) {
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
	}
}
