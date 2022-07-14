import { subscribe } from "./pubsub.js";
import renderPeople from "./peopleview.js";

let list = ['Tom', 'Dick', 'Harry'];

const addPerson = (person) => { 
    list.push(person);
    //renderPeople();
}

const removePerson = (id) => { 
    console.log(id);
    list.splice(id, 1);
    renderPeople();
}

const getList = () => list;

subscribe('peopleAdd', addPerson);
subscribe('peopleRemove', removePerson);

export {addPerson, getList};