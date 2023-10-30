import {faker} from '@faker-js/faker';
import { Mappable } from './CustomMap';

export class Company implements Mappable{
    companyName: string;
    catchPhrase: string;
    location: {
        lat: number;
        long: number;
    }

    constructor() {
        this.companyName = faker.company.name();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: faker.location.latitude(),
            long: faker.location.longitude()
        };
    }

    markerContent(): string {
        return `
        <div>
        <h2>Company Name: ${this.companyName}</h2> 
        <h3>Catchphrase: ${this.catchPhrase}</h3>
        </div>
        `;
    }
}