function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}

let diceRoller = function(num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr[i] = getRandomInt(6);
  }
  return arr;
};



let myArgs = process.argv.slice(2);
let numb = myArgs[0];
console.log(numb);
console.log(myArgs);
console.log(`Rolled ${numb} dice ${diceRoller(numb).join(", ")}`);

 