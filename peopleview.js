import { getList } from "./people.js";
import { publish } from "./pubsub.js";

const renderPeople = () => {

    console.log(getList());

    // Create elements
    const list = document.createElement('ul');

    getList().forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        listItem.setAttribute('id', index);
        list.appendChild(listItem);

        // Bind events
        listItem.addEventListener('click', () => {
            publish('peopleRemove', index);
        });
    })

    return list;
};

export default renderPeople;