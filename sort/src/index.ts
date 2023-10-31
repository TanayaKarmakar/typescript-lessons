import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

// const numbersCollection = new NumbersCollection([10, 3, -5, 0]);

// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(sorter.collection);


const characterersCollection = new CharactersCollection('Xaayb');
const sorter = new Sorter(characterersCollection);
sorter.sort();
console.log(sorter.collection);