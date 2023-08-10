const express = require("express");
const app = express();

const data = [
    {id: 1, name: "Ozekin", price: 300, isActive: true},
    {id: 2, name: "Ozekiin", price: 444, isActive: false},
    {id: 3, name: "Ozekiiin", price: 555, isActive: true}
];

app.set("view engine", "ejs");

app.get('/products/:id', function (req, res) {
    const urun = data.find(u => u.id == req.params.id);
    if (urun) {
        res.render("details", { urun });
    } else {
        res.status(404).send('Ürün bulunamadı');
    }
});

app.get('/products', function (req, res) {
    res.render("products", { urunler: data });
});

app.use("/", function (req, res) {
    res.status(404).send('404 Not Found');
});

app.listen(3000, () =>{
    console.log("App is running on port 3000");
});