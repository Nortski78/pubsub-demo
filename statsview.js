import { getStats } from "./stats.js";

const renderStats = () => {
    console.log("In renderStats()");

    // Create elements
    const statsPara = document.createElement('p');
    statsPara.textContent = `Number of people: ${getStats()}`;
    
    return statsPara;
}

export default renderStats;