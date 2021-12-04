var fs = require("fs");

var contents = fs.readFileSync("input3_1", "utf8");
var input = contents.split("\n");
console.log(input)
if (input[input.length - 1] == "") {
  input.pop();
}

var oxygen;
var co2;
for (let k = 0; k < 2; k++) {
  // k=0 oxygen report
  // k=1 CO2 report
  let i = 0;
  let filtered = [...input];
  while (filtered.length > 1) {
    let count1 = 0, count0 = 0;
    for (let j = 0; j < filtered.length; j++) {
      if (filtered[j][i] == "0") {
        count0++
      }
      else {
        count1++
      }
    }
    //Here we have the most common 1 or 0 in the j place
    let mostCommon;
    if (count0 > count1) {
      mostCommon = k == 0 ? "0" : "1"
    }
    else if (count0 < count1) {
      mostCommon = k == 0 ? "1" : "0"
    }
    else if (count0 == count1) {
      mostCommon = k == 0 ? "1" : "0"
    }
    filtered = filtered.filter(el => el[i] == mostCommon)
    i++;
  }
  var result = parseInt(filtered[0], 2)
  console.log(filtered[0]);
  console.log(result);
  k == 0 ? oxygen = result : co2 = result;
}

console.log(oxygen * co2)