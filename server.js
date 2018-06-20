// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Arrays to hold the data
// =============================================================
var reservations = [];
var waitList = [];

// Routes
// =============================================================

app.use('/', express.static('assets'));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

// Displays all reservations
app.get("/api/tables", function(req, res) {
  return res.json(reservations);
});

// Displays waiting list
app.get("/api/waitlist", function(req, res) {
  return res.json(waitList);
});

app.post("/api/tables", function(req, res) {
    var newReservation = req.body;
    console.log(newReservation);
	if (reservations.length < 5){
        reservations.push(newReservation);
	}
	else {
        waitList.push(newReservation);
	}
	res.json(reservations);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
