'use strict';

// Require mysql
const mysql = require(`mysql`);

// Set up our connection information
const connection = mysql.createConnection({
    port: 3306,
    host: 'localhost',
    user: 'root',
    password: 'chargers619',
    database: 'chirpy'
});

// Connect to the database
connection.connect(err => {
    if (err) {
        console.error(`error connecting`, err.stack);
        return;
    }
    console.log(`connected with id ${connection.threadId}`);
});

// Export connection
module.exports = connection;
