const apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = false;
let now: Date = new Date();

let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1,2,3];


class Car {

}

let car: Car = new Car();

let point: { x: number; y: number }  = {
    x: 10,
    y: 20
};


const logNumber: (i: number ) => void = (i: number) => {
    console.log(i);
};

const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number} = JSON.parse(json);

console.log(coordinates);

let words = ['red', 'green', 'blue'];

let foundWord: boolean;

for(let i = 0; i < words.length; i++) {
    if(words[i] === 'green') {
        foundWord = true;
        break;
    }
}

