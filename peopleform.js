// peopleform.js

import {publish, getSubscribers} from "./pubsub.js";
import {getList} from "./people.js";

const peopleForm = () => {

    // Cache DOM
    const formContainer = document.querySelector('#people-form');

    // Create elements
    const form = document.createElement('form');
    const label = document.createElement('label');
    const input = document.createElement('input');

    input.setAttribute('type', 'text');

    label.textContent = "Enter a name: ";

    form.appendChild(label);
    form.appendChild(input);

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        publish('peopleAdd', input.value);
        //console.log(getList());
        input.value = "";       
    })    

    return form;

};

export default peopleForm;