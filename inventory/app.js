const app = require("express")();
const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  name: String,
  damage: Number
});

let Item = mongoose.model("Item", ItemSchema);

mongoose
  .connect("mongodb://mongo:27017/micro-rpg")
  .then(() => console.log("Connected to mongo"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  let query = Item.find();
  query.exec((err, docs) => {
    res.send(JSON.stringify(docs));
  });
});

app.get("/add", (req, res) => {
  let hammer = new Item({
    _id: new mongoose.Types.ObjectId(),
    name: "Hammer",
    damage: 10
  });
  hammer.save(err => {
    if (err) res.send(err);
    res.send(JSON.stringify(hammer));
  });
});

app.listen(8080, () => console.log("Server running"));
