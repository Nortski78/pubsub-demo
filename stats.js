import { subscribe } from "./pubsub.js";
import { getList } from "./people.js";

let numPeople = getList().length;

const getStats = () => numPeople;
const updateStats = () => {
    console.log("In updateStats()");
    numPeople = getList().length;
}

subscribe('peopleAdd', updateStats);
subscribe('peopleRemove', updateStats);

export {getStats, updateStats};