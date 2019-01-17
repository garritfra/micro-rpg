const app = require("express")();

app.get("/", (req, res) => {
  res.send("Hello from Inventory");
});

app.listen(8080, () => console.log("Server running"));
