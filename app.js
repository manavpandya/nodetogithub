const express = require("express");
const app = express();
const port = 3000;

// Set EJS as the templating engine
app.set("view engine", "ejs");

// Define a home page route
app.get("/", (req, res) => {
    res.render("home", { title: "Home Page" });
});

// Define a about page route
app.get("/about", (req, res) => {
    res.render("about", { title: "About Us" });
});

// Define a contact page route
app.get("/contact", (req, res) => {
    res.render("contact", { title: "Contact Us" });
});

// Start the server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
