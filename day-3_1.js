var fs = require("fs");

var contents = fs.readFileSync("input3_1", "utf8");
var input = contents.split("\n");
console.log(input)
if (input[input.length - 1] == ""){
  input.pop();
}

let result= ""
for (let i = 0; i < input[0].length; i++) {
  let count1 =0, count0 = 0;
  for (let j = 0; j < input.length; j++) {
    if (input[j][i] == "0") {
      count0++
    }
    else {
      count1++
    }
  }
 if(count0 > count1) {
   result += "0"
 }
 else {
   result += "1"
 }
}

var gamaRate = parseInt(result, 2);

var resultComplement = result
  .replace(/1/g,'x')//convert '1' to temp char('x')
  .replace(/0/g,'1')//convert '0' to '1'
  .replace(/x/g,'0')//finally convert temp char to '0'

var epsilonRate = parseInt(resultComplement, 2);

console.log(result)
console.log(gamaRate)
console.log(resultComplement)
console.log(epsilonRate)
console.log(epsilonRate*gamaRate)