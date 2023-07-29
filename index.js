const http = require("http");
const fs = require("fs");

var server = http.createServer((req, res) => {
    console.log(req.url);

    if (req.url === "/") {
        fs.readFile("first.html", (err, html) => {
            if (err) {
                res.writeHead(500);
                res.end("Error loading index.html");
            } else {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.write(html);
                res.end();
            }
        });
    } else if (req.url === "/products") {
        fs.readFile("uruns.html", (err, html) => {
            if (err) {
                res.writeHead(500);
                res.end("Error loading urunler.html");
            } else {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.write(html);
                res.end();
            }
        });
    } else {
        fs.readFile("404.html", (err, html) => {
            if (err) {
                res.writeHead(500);
                res.end("Error loading 404.html");
            } else {
                res.writeHead(404, { "Content-Type": "text/html" });
                res.write(html);
                res.end();
            }
        });
    }
});

server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
