var mysql = require('mysql');


var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,

    user: 'root',

    password: 'password',
    database: 'reservation_DB'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('connected as ' + connection.threadId);
    // newRes('Ashley', 'akspellm@gmail.com', '3104337047', 'this');

    endConnection();
});

endConnection = () => {
    connection.end();
};

newRes = (name, email, phone, unique) => {
    var query = connection.query(
        'INSERT INTO res set ?',
        {
            name: name,
            email: email,
            phone_number: phone,
            unique_id: unique
        },
        (err, res) => {
            if (err) throw err;
            console.log(res.affectedRows + ' reservations added');
            endConnection();
        }
     )
}



