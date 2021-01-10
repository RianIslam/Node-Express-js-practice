const express = require("express");

const app = express();

app.use(express.static(`${__dirname} + /public/`));

app.get("/", (req, res) => {
  res.send("this is home page");
});

app.post("/", (req, res) => {
  res.send("this is home page with post request");
});

app.listen(3000, () => {
  console.log("lisning on port 3000");
});



// const express = require("express");
// const app = express();

// app.use(express.text());
// app.get("/", (req, res) => {
//   res.send("this is home page");
// });

// app.post("/", (req, res) => {
//   console.log(req.body);
//   res.send("this is home page with post request");
// });
// app.listen(3000, () => {
//   console.log("listening on port 3000");
// });

// const express = require('express');

// const app = express();

// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("this is home page with get request");
// });

// app.post("/", (req, res) => {
//   console.log(res.body.name);
//   res.send("This is home page with post request");
// });
// app.listen(3000, () => {
//   console.log("listening on port 3000");
// });
