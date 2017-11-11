//Set up server
const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

//Listen for requests
app.listen(PORT, () => console.log('Listening on port 3000!'));

//------------------- Establish routes [START ]-------------------
app.get('/', (req, res) => {res.sendFile(path.join(__dirname, "index.html"));

});

app.get('/tables', ( req, res) => {
    res.sendFile("Tables page")
});

app.get('/reservation', (req, res)=> {
    res.sendFile(path.join(__dirname, "reservation.html"))

});

app.get('/api/tables', ( req, res)=> {res.sendFile(path.join(__dirname, "tables.html"))
});

app.get('/api/waitlist', (req, res)=> {res.sendFile("Wait List API page!")

});

//------------------- Establish routes [STOP ]-------------------

