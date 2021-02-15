import express from "express";

const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Root of defender.')
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})