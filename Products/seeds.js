const mongoose = require("mongoose");
const Product = require("./models/product");

mongoose.connect("mongodb://localhost:27017/farmStand", {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log("Mongo connection open!");
})
.catch((e) => {
    console.log("Mongo connection error: ");
    console.log(e);
})

const seedProducts = [
    {
        name: "Fairy Eggplant",
        price: 100,
        category: "vegetable"
    },
    {
        name: "Organic Goddess Melon",
        price: 500,
        category: "fruit"
    },
    {
        name: "Organic Mini Seedless Watermelon",
        price: 300,
        category: "fruit"
    },
    {
        name: "Organic Celery",
        price: 150,
        category: "vegetable"
    },
    {
        name: "Chocolate Whole Milk",
        price: 250,
        category: "dairy"
    }
]

Product.insertMany(seedProducts)
.then((r) => {
    console.log("Saved successfully!");
    console.log(r);
})
.catch((e) => {
    console.log("Save error: ");
    console.log(e);
})