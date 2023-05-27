const express = require("express");
require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
  res.send("Web Academy!");
});

// const PORT = process.env.PORT ?? 3333;
// app.get("/", (req, res) => {
//   res.send("Hello world!");
// });
// app.listen(PORT, () => {
//   console.log(`Express app iniciada na porta ${PORT}.`);
// });
