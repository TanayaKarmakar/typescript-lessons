class Vehicle {
    color: string;

    constructor(color: string) {
        this.color = color;
    }

    public drive(): void {
        console.log('Driving');
    }

    public honk(): void {
        console.log('Honk');
    }
}

class Car extends Vehicle {
    constructor(color: string) {
        super(color);
    }

    public drive(): void {
        this.startDrivingProcess();
    }

    private startDrivingProcess(): void {
        console.log('vroommmm');
    }
}

const car = new Car('Red');
console.log(car.color);
car.drive();
car.honk();