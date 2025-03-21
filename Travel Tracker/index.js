import express from "express";
import bodyParser from "body-parser";
import pg from "pg"
const app = express();
const port = 3000;
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "World",
  password: "2026",
  port: 5433,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {

  const result = await db.query("SELECT country_code FROM visited_contries");

  let countries = [];

  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  console.log(result.rows);





  res.render("index.ejs", { countries: countries, total: countries.length });
  db.end();
});

app.post("/add",async (req, res) => {

  console.log(req.body["country"]);
  
});




app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
