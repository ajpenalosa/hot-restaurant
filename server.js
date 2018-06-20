// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Arrays to hold the data
// =============================================================
var reservations = [
    {
        name: "First Dude",
        phone: "818-987-6543",
        email: "email@email.com",
        uniqueID: "KJI9878"
    },
    {
        name: "Second Family",
        phone: "654-986-3265",
        email: "yup@gmail.com",
        uniqueID: "KIK9654"
    },
    {
        name: "Third Couple",
        phone: "915-655-9635",
        email: "hello@gmail.com",
        uniqueID: "YUI9874"
    },
    {
        name: "Fourth Girl",
        phone: "986-654-6325",
        email: "sometimes@gmail.com",
        uniqueID: "POI9631"
    }
];
var waitList = [
    {
        name: "First Dude",
        phone: "818-987-6543",
        email: "email@email.com",
        uniqueID: "KJI9878"
    },
    {
        name: "Second Family",
        phone: "654-986-3265",
        email: "yup@gmail.com",
        uniqueID: "KIK9654"
    }];

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

// Create New Characters - takes in JSON input
app.post("/api/characters", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newcharacter = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newcharacter.routeName = newcharacter.name.replace("/\s+/g", "").toLowerCase();

  console.log(newcharacter);

  characters.push(newcharacter);

  res.json(newcharacter);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
