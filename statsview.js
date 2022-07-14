import {getStats} from "./stats.js";

const renderStats = () => {
    // Create elements
    const statsPara = document.createElement('p');

    statsPara.textContent = `Number of people: ${getStats()}`;
    //console.log(stats().getStats());
    return statsPara;
}

export default renderStats;