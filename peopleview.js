import { getList } from "./people.js";
import { publish } from "./pubsub.js";

const renderPeople = () => {

    console.log(getList());

    // Create elements
    const list = document.createElement('ul');

    getList().forEach((item, index) => {
       let person = renderPerson(list, item, index);
        person.setAttribute('id', index);
    })

    return list;
};

function renderPerson(list, value, index)
{
  const listItem = document.createElement('li');
  listItem.textContent = value;
  list.appendChild(listItem);

  // Bind events
  listItem.addEventListener('click', () => {
    publish('peopleRemove', index);
  });

  return listItem;
}

export default renderPeople;