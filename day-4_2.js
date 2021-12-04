var fs = require("fs");

var contents = fs.readFileSync("input4_1", "utf8");
var input = contents.split("\n");
// console.log(input)
// if (input[input.length - 1] == "") {
//   input.pop();
// }

var numbersDrawn = input[0].split(",")
input = contents.split("\n\n");
input.shift() //remove first line, which is numebrs drawn
var tables = [];

for (let i = 0; i < input.length; i++) {
  tables[i] = input[i].split("\n");
  for (let j = 0; j < tables[i].length; j++) {
    tables[i][j] = tables[i][j].split(" ").filter(el => el != "");
  }
}
let end = false;
let winningTable = -1;
let index = 0;
let nextNum;
let tableToWin;

while (!end) {
  nextNum = numbersDrawn[index]
  for (let i = 0; i < tables.length; i++) {
    for (let j = 0; j < tables[i].length; j++) {
      tables[i][j] = tables[i][j].map(x => x == nextNum ? "__" : x)
    }
    if (verify(tables[i])) {
      winningTable = i;
    }
  }
  //remove winning tables
  if (tables.length == 1 && verify(tables[0])) tableToWin = tables[0]
  tables = tables.filter(table => !verify(table))
  if (tables.length == 0) end = true
  index++;
}

//Calculate sum of last table
let sum = 0
for (let i = 0; i < tableToWin.length; i++) {
  for (let j = 0; j < tableToWin[i].length; j++) {
    if (tableToWin[i][j] != "__") sum += parseInt(tableToWin[i][j]);
  }
}
console.log("last winning number: ", nextNum);
console.log(tableToWin);
console.log(sum * parseInt(nextNum));


function verify(table) {
  //check row
  for (let i = 0; i < table.length; i++) {
    let row = table[i]
    let filtered = row.filter(x => x != "__")
    if (filtered.length == 0) return true
  }

  //check column
  for (let j = 0; j < table[0].length; j++) {
    let flag = true
    for (let i = 0; i < table.length; i++) {
      if (table[i][j] != "__") flag = false
    }
    if (flag) return true
  }

  return false
}

