const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
};

type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40];

console.log(pepsi);

const sprite: Drink = ['clear', true, 40];

console.log(sprite);


