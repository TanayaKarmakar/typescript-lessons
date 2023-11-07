import { User } from './models/User';


const user = User.buildUser({id: 1});

user.on('change', () => {
    console.log(user);
});

user.fetch();

const collection = User.buildUserCollection();

collection.on('change', () => {
    console.log(collection);
});

collection.fetch();









