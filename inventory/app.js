const app = require("express")();

app.get("/", (req, res) => {
  res.json([{ name: "Hammer", stength: 10 }]);
});

app.listen(8080, () => console.log("Server running"));
