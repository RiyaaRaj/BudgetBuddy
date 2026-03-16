const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

const activities = {

chill: [
{ name: "Beach Walk", cost: 0 },
{ name: "Cafe Visit", cost: 300 },
{ name: "Movie", cost: 250 }
],

adventure: [
{ name: "Trekking", cost: 200 },
{ name: "Go Karting", cost: 500 },
{ name: "Cycling", cost: 150 }
],

slow: [
{ name: "Park Visit", cost: 50 },
{ name: "Book Cafe", cost: 200 },
{ name: "Museum", cost: 100 }
],

food: [
{ name: "Street Food Tour", cost: 200 },
{ name: "Restaurant Meal", cost: 400 },
{ name: "Dessert Shop", cost: 150 }
],

nature: [
{ name: "Botanical Garden", cost: 100 },
{ name: "Lake Walk", cost: 50 },
{ name: "Picnic", cost: 200 }
],

cultural: [
{ name: "Museum Visit", cost: 150 },
{ name: "Temple Visit", cost: 0 },
{ name: "Art Gallery", cost: 200 }
],

party: [
{ name: "Club Entry", cost: 500 },
{ name: "Bowling", cost: 300 },
{ name: "Arcade Games", cost: 250 }
],

shopping: [
{ name: "Local Market", cost: 200 },
{ name: "Mall Visit", cost: 300 },
{ name: "Souvenir Shopping", cost: 250 }
]

};

app.post("/plan", (req, res) => {

const { budget, people, mood } = req.body;

let plan = [];
let total = 0;

const list = activities[mood];

for (let activity of list) {

let cost = activity.cost * people;

if (total + cost <= budget) {

plan.push({
activity: activity.name,
cost: cost
});

total += cost;
}

}

res.json({
plan: plan,
totalCost: total,
perPerson: total / people
});

});

app.listen(3000, () => {
console.log("Server running on http://localhost:3000");
});
