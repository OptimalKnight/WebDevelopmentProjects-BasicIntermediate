const express = require("express");
const app = express();
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const comments = [
    {
        username: "Thanos",
        comment: "You should've gone for the head!",
    },
    {
        username: "Walter",
        comment: "I am not in danger, I am the danger!",
    },
    {
        username: "Peter",
        comment: "With great power comes great responsibilites.",
    },
    {
        username: "Chandler",
        comment: "Could these comments BE any more boring?",
    }
];

app.get('/', (res, req) => {
    res.send("LOL");
});

app.get('/comments', (res, req) => {

});

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000!");
})
