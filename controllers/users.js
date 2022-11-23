import { v4 as uuidv4 } from 'uuid';
uuidv4();
let users = [];
export const createUser =  (req, res) => {
    const user = req.body;

    const userId = uuidv4();

    const userWithId = { ...user, id:userId }
 
    users.push(userWithId);

    res.send(`User with the user name ${user.firstName} added!`);
};

export const getAllUser = (req, res) => {
    console.log(users);
    res.send(users);
};

export const getOneUser = (req, res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id == id);

    res.send(foundUser);
};

export const deleteUser = (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id != id);

    res.send(`User with the id ${id} deleted`)

};

export const updateUser = (req, res) => {
    const { id } = req.params;

    const { firstName, lastName, age, major } = req.body;

    const user = users.find((user) => user.id == id);

    if (firstName) {
        user.firstName = firstName;
    }

    if (lastName) {
        user.lastName = lastName;
    }

    if (age) {
        user.age = age;
    }

    if (major) {
        user.major = major;
    }

    res.send(`User with the id ${id} updated correctly`)

};
