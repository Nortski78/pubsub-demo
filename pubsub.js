var subscribers = {};

function subscribe(event, callback) {
    if(!subscribers[event]) {
        subscribers[event] = [];
    }
    subscribers[event].push(callback);
}

function publish(event, data) {
    if(!subscribers[event]) return;

    subscribers[event].forEach((subscriberCallback) => {
        subscriberCallback(data);
    });
}

function getSubscribers() {
    return subscribers;
}

export {subscribe, publish, getSubscribers};