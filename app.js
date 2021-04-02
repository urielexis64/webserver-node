const express = require("express");
const hbs = require("hbs");
require("dotenv").config();

const app = express();
const port = process.env.PORT;
const hostname = "192.168.3.15";

// Handlebars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

// Static content
app.use(express.static("public"));

app.get("/", (req, res) => {
	res.render("home", {
		name: "Uriel",
		title: "Curso de Node",
	});
});

app.get("/generic", (req, res) => {
	res.render("generic", {
		name: "Uriel",
		title: "Curso de Node",
	});
});

app.get("/elements", (req, res) => {
	res.render("elements", {
		name: "Uriel",
		title: "Curso de Node",
	});
});

app.get("*", (req, res) => {
	res.sendFile(__dirname + "/public/404.html");
});

app.listen(port, hostname, () => {
	console.log(`Example app listening at http://${hostname}:${port}`);
});
