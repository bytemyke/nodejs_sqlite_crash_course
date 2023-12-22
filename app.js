const sqlite3 = require("sqlite3").verbose();

let sql;

//connect to DB
const db = new sqlite3.Database("./test.db", sqlite3.OPEN_READWRITE, (err) => {
  if (err) return console.error(err.message);
});

// //create table :
// sql = `CREATE TABLE users (id INTEGER PRIMARY KEY, first_name, last_name, username, password, email)`;
// db.run(sql);

// //drop table :
// db.run("DROP TABLE users");

// //insert data into table :
// sql = `INSERT INTO users (first_name, last_name, username, password, email) VALUES(?,?,?,?,?)`;
// db.run(
//   sql,
//   ["mike", "michaelson", "mike_user", "test", "mike@gmail.com"],
//   (err) => {
//     if (err) return console.error(err.message);
//   }
// );

// //update data :
// sql = `UPDATE users SET first_name = ? WHERE id = ?`;
// db.run(sql, ["Jake", 1], (err) => {
//   if (err) return console.error(err.message);
// });

// //Delete data :
// sql = `DELETE FROM USERS WHERE id = ?`;
// db.run(sql, [1], (err) => {
//   if (err) return console.error(err.message);
// });

// //querying the data :
// sql = `SELECT * FROM users`;
// db.all(sql, [], (err, rows) => {
//   if (err) return console.error(err.message);
//   rows.forEach((row) => {
//     console.log(row);
//   });
// });
