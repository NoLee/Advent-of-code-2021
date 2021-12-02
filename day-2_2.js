var fs = require("fs");

var contents = fs.readFileSync("input2_1", "utf8");
var inst = contents.split("\n");

let depth = 0;
let horizontal = 0;
let aim = 0;
for (let i = 0; i < inst.length; i++) {
  let rule = inst[i].split(" ");
  let value = parseInt(rule[1]);

  if (rule[0] == "forward") {
    horizontal += value;
    depth += value * aim;
  } else if (rule[0] == "down") {
    aim += value;
  } else if (rule[0] == "up") {
    aim -= value;
  }
}

console.log(depth, horizontal, depth * horizontal);
