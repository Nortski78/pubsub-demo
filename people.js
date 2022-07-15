import { subscribe } from "./pubsub.js";

let list = ['Tom', 'Dick', 'Harry'];

const addPerson = (person) => { 
    list.push(person);
}

const removePerson = (id) => { 
    list.splice(id, 1);
}

const getList = () => list;

subscribe('peopleAdd', addPerson);
subscribe('peopleRemove', removePerson);

export {getList};