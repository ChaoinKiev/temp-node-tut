/** @format */

const { readFile, writeFile } = require("fs");

console.log("start");
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.error(err);
    return;
  }
  const first = result;
  console.log(first);
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.error(err);
      return;
    }
    const second = result;
    console.log(second);
    writeFile(
      "./content/third.txt",
      `Here is the result ${first} and ${second}`,
      { flag: "a" },
      (err, result) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(result);
        console.log("done with this task");
      }
    );
  });
});

console.log("next");
