let marvel_heros = ["thore", "Ironman", "Spiderman"];
let DC_heros = ["Superman", "flash", "batman"];

// marvel_heros.push(DC_heros);
// console.log(marvel_heros);

// let newheros =  marvel_heros.concat(DC_heros);
// console.log(newheros);

let allheros = [...DC_heros,...marvel_heros];
console.log(allheros);

// const newArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

// const real_newarr = newArr.flat(Infinity);
// console.log(real_newarr);


// console.log(Array.isArray("RP"));
// console.log(Array.from("RP"));
// console.log(Array.from({name:"Rp"}));

// let score_1 = 100;
// let score_2 = 200;
// let score_3 = 300;

// console.log(Array.of(score_1,score_2,score_3));