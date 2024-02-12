 
//Arrays[]
let marks = [97, 98, 67, 78, 56];
console.log(marks);
console.log(marks.length);

let heros = ["ironman", "hulk", "batman", "superman"];
console.log(heros);
console.log(heros.length);

for (let idx=0; idx<heros.length; idx++){
    console.log(heros[idx]);
}
//for of
for (let el of heros) {
    console.log(el);
}
//practise qs 1

let stmarks = [85, 67, 89, 78, 45, 67];

let sum = 0;
for(let val of stmarks) {
    sum = sum + val;
}

let avg = sum / stmarks.length
console.log(`Average marks = ${avg}`); 

//practise qs 2
let item = [250, 567, 875, 765, 987, 400];

let idx = 0;
for(let val of item){
    console.log(`value at index ${idx} = ${val}`);
    let offer = val /10;
    item[idx] =  item[idx] - offer;
    console.log(`Value after offer = ${item[idx]}`)
    idx++;
}

//push
let veggies = ["potato", "tomato", "carrot", "cucumber", "onion", "ladies-finger"];
console.log(veggies);
console.log(veggies.push("sweat potato"));

//concat()
let marvel_heros = ["spiderman", "superman", "ironman"];
let dc_heros = ["thor", "batman"];
let indheros = ["krish", "shaktiman"];

let allheros = marvel_heros.concat(dc_heros,indheros);
console.log(allheros);

//unshift()
allheros.unshift("antman");

//slice()
console.log (veggies.slice(1,3));

//splice()
let arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(2,2,101,102);

//let's practise qs3
let companies = ["Bloomberg", "Microdoft", "Uber", "Google", "IBM", "Netflix"];

//Remove 1st company

companies.shift();

//Remove Uber and add Ola
companies.splice(2, 1, "Ola");

//Add amazon at end
companies.push("Amazon");