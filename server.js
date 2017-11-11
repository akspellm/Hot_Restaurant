//Set up server
const express = require('express');
const app = express();
const PORT = 3000;


//Listen for requests
app.listen(PORT, () => console.log('Listening on port 3000!'));

//------------------- Establish routes [START ]-------------------
app.get('/', (req, res) => {res.send('Hello World!')

});

app.get('/tables', ( req, res) => {
    res.send("Tables page")
});

app.get('/reservation', (req, res)=> {
    res.send(path.join(__dirname, "reservation.html"))

});

app.get('/api/tables', ( req, res)=> {res.send(path.join(__dirname, "tables.html"))
});

app.get('/api/waitlist', (req, res)=> {res.send("Wait List API page!")

});

//------------------- Establish routes [STOP ]-------------------

