/** @format */

const http = require("http");
const _ = require("lodash")

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page!");
  } else if (req.url === "/about") {
    res.end("This is my story.");
  } else
    res.end(`
  <h1>Ooops</h1>
  <p>Can't seem to find the page you are looking for.</p>
`);
});

server.listen(5050);

const items = [1, [2, [3, [4]], 5]];
const newItems = _.flattenDeep(items);
console.log(newItems);
