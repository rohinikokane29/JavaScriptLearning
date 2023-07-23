function stringhandsOn(){

  console.log(`---------------------------------STEP 1---------------------------------------`);


var string = `     Hey you are doing good,keep it up       `
console.log(` string  : ${string}`);

console.log(`---------------------------------STEP 2-----------------------------------------`);
console.log(`"Length of a string : ${string.length}"`);

console.log(`---------------------------------STEP 3-----------------------------------------`);

var spaces = string.trim();
console.log(`After trim string : ${spaces} , After trim length : ${spaces.length}`);


console.log(`---------------------------------STEP 4-----------------------------------------`);

var result = string.trim()
var extraSpace = string.length - result.length
console.log(`Removed Space Count : ${extraSpace}`);


console.log(`---------------------------------STEP 5---------------------------------------`);

var charAt0 = spaces.charAt(0)
var charAtEnd = spaces.charAt(33)
console.log(`First Character of trimed string : H , Last Character of trimed string  : P`);


console.log(`---------------------------------STEP 6-----------------------------------------`);

console.log(`Total number of words in string : ${spaces.length}`);

 console.log(`---------------------------------STEP 7-----------------------------------------`);

var result = spaces.indexOf(`good`);
console.log(`Index of "good"  : ${result}`);


console.log(`---------------------------------STEP 8-------------------------------------------`);

var result = spaces.substring(22);
console.log(`Substring of index 22 : ${result}`);


console.log(`---------------------------------STEP 9-------------------------------------------`);

var result = spaces.includes(`up`)
console.log(`String ends with word "up" : ${result}`);


console.log(`---------------------------------STEP 10------------------------------------------------`);

var result = spaces.includes(`Hey`);
console.log(`String starts with "Hey": ${result}`);
}
stringhandsOn()