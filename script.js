
/*====================== Zadanie 1 ============*/

console.log("\n  Zadanie pierwsze \n");

const i = "Hello";
const j = "World !";
console.log( `${i} ${j}`);

/*====================== Zadanie 2 ============*/

console.log("\n  Zadanie drugie \n");

function multiply(...theArgs) {
  return theArgs.reduce((previous, current) => {
    return previous * current;
  });
}

console.log(multiply(5));
console.log(multiply(2,5));
console.log(multiply(6,6));
console.log(multiply(6,6,2));

/*====================== Zadanie 3 ============*/

console.log("\n  Zadanie trzecie \n");

function average(...args) { 
  let sum = 0;
  let  i = args.length;
  for (let arg of args) sum += arg;
      let av =sum/i;
  return av;
}

console.log(average(1));
console.log(average(1, 5));
console.log(average(1, 8, 6));

/*====================== Zadanie 4 ============*/

console.log("\n  Zadanie czwarte \n");

function average(...args) { 
  let sum = 0;
  let  i = args.length;
  for (let arg of args) sum += arg;
      let av =sum/i;
  return av;
}

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log(average(...grades));

/*====================== Zadanie 5 ============*/

console.log("\n  Zadanie piąte \n");

const names = [1, 4, 'Iwona', false, 'Nowak'];
const [,,third,,fifth ] = names;

let lastname = fifth;
let firstname = third;
console.log(firstname,lastname);
