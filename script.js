import peopleForm from "./peopleform.js";
import renderPeople from "./peopleview.js";
import renderstats from "./statsview.js";
import {subscribe} from "./pubsub.js";

const loadPage = () => {
    // Cache DOM
    const formContainer = document.querySelector('#people-form');
    const peoplecontainer = document.querySelector('#people-list');
    const statscontainer = document.querySelector('#stats');

    formContainer.innerHTML = "";
    peoplecontainer.innerHTML = "";
    statscontainer.innerHTML = "";

    formContainer.appendChild(peopleForm());
    peoplecontainer.appendChild(renderPeople());
    statscontainer.appendChild(renderstats());

};

loadPage();
subscribe('peopleAdd', loadPage);
subscribe('peopleRemove', loadPage);