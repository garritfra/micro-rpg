const app = require("express")()
app.get("/", (req, res) => {
    res.send("Plenty of books are resting on the shelf of the grand library\n")
})

app.get("/books", (req, res) => {
    res.json([
        {
            id: 1,
            title: "Foeniculum Hexagonoptera",
        }
    ])
})

app.get("/books/1", (req, res) => {
    res.json(
        {
            title: "Foeniculum Hexagonoptera",
            content: "Foeniculum Hexagonoptera is a very rare, modest plant and can mostely be found in highlands. It blooms twice a year, for 2 months. It has huge, sickle shaped leaves, which are usually dark red. It also grows huge flowers, which can be light brown, orange and brown.These plants grow in large groups, but it's complicated to control and maintain their growth. They can be used to relax. As a defense mechanism the Foeniculum Hexagonoptera produces a thick, sticky wax. They rely on wind pollination to reproduce. Once pollinated, they grow fairly large, delicious fruits."
        }
    )
})

app.listen(80)