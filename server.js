var express = require("express")
var path = require("path")
var app = express();
var PORT = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
var restaurant = {
    availableTables : 5,  //number of tables available
    occupiedTables : 0,   //number of tables to be reserved, cannot be greater than availableTables 
    capacityFull : false  //
}
var table = [
    {
        name : `Brian Soldani`,
        phoneNumber : `123-363-4561`,
        email : `bsoldani@email.com`,
        uniqueId : `bsoldani` //routename
    },
    {
        name : `Kai Taylor`,
        phoneNumber : `123-456-6545`,
        email : `ktaylor@email.com`,
        uniqueId : `ktaylor` //routename
    },
    {
        name : `Issac Carlos`,
        phoneNumber : `666-999-7777`,
        email : `icarlos@email.com`,
        uniqueId : `icarlos` //routename
    }
];
//Home Page 
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});
//Make Reservations
app.get("/reservation", function(req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"));
});
// Displays Tables and Waitlist
app.get("/table", function(req, res) {
    res.sendFile(path.join(__dirname, "table.html"));
});
// Displays all tables
app.get("/api/table", function(req, res) {
    return res.json(table);
});
// Displays a single reservation by uniqueId, or returns false
app.get("/api/table/:uniqueId", function(req, res) {
    var chosen = req.params.uniqueId;
    console.log(chosen);
    for (var i = 0; i < table.length; i++) {
        if (chosen === table[i].uniqueId) {
            return res.json(table[i]);
        }
    }
    return res.json(false);
});
// Create Reservation ID - takes in JSON input
app.post("/api/reservation", function(req, res) {
    var newReservation = req.body;
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newReservation.routeName = newReservation.name.replace(/\n+/g, "").toLowerCase();
    console.log(newReservation);
    characters.push(newReservation);
    res.json(newReservation);
});
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});