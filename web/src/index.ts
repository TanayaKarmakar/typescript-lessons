// import { User } from './models/User';
// import { UserForm } from "./views/UserForm";
// import { UserEdit } from './views/UserEdit';



// const user = User.buildUser({name: 'Jane', age: 29});


// const root = document.getElementById('root');

// if(root) {
//     const userEdit = new UserEdit(root, user);
//     userEdit.render();

//     console.log(userEdit);
// }



// const userForm = new UserForm(
//     document.getElementById('root'),
//     user
// );

// userForm.render();

import { UserList } from "./views/UserList";
import { Collection } from "./models/Collection";
import { UserProps, User } from "./models/User";


const users = new Collection('http://localhost:3000/users', 
    (json: UserProps) => {
        return User.buildUser(json);
    }
);

users.on('change', () => {
    const root = document.getElementById('root');

    if(root) {
        new UserList(root, users).render();
    }
});

users.fetch();










