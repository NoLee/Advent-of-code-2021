var fs = require("fs");

var contents = fs.readFileSync("input2_1", "utf8");
var inst = contents.split("\n");

let depth = 0;
let horizontal = 0;
for (let i = 0; i < inst.length; i++) {
  let rule = inst[i].split(" ");
  if (rule[0] == "forward") {
    horizontal += parseInt(rule[1]);
  } else if (rule[0] == "down") {
    depth += parseInt(rule[1]);
  } else if (rule[0] == "up") {
    depth -= parseInt(rule[1]);
  }
}

console.log(depth, horizontal, depth * horizontal);
