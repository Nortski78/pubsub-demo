import renderPeople from "./peopleview.js";
import peopleForm from "./peopleform.js";
import renderStats  from "./statsview.js";
import { subscribe } from "./pubsub.js";

// Cache DOM
const peopleFormContainer = document.querySelector('#people-form');
const peopleListContainer = document.querySelector('#people-list');
const statsContainer = document.querySelector('#stats');

export const loadPage = () => {
    console.log("In loadPage()");
    peopleFormContainer.appendChild(peopleForm());
    peopleListContainer.appendChild(renderPeople());
    statsContainer.appendChild(renderStats());
}

const updatePeopleList = (() => {
    console.log('in updatePeopleList()');
    subscribe('peopleAdd', () => {
        peopleListContainer.innerHTML = "";
        peopleListContainer.appendChild(renderPeople());
    });
    subscribe('peopleRemove', () => {
        peopleListContainer.innerHTML = "";
        peopleListContainer.appendChild(renderPeople());
    })
})();

const updateStats = (() => {
    subscribe('peopleAdd', () => {
        statsContainer.innerHTML = "";
        statsContainer.appendChild(renderStats());
    })
    subscribe('peopleRemove', () => {
        statsContainer.innerHTML = "";
        statsContainer.appendChild(renderStats());
    })
})();


