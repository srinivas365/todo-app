const express = require('express')
const app = express()


app.get("/ping", async (req, res) => {
  res.json({ping: 'pong'});
});

app.listen(3000, () => {
  console.log("listening to 3000 port");
})