const elem = tag => document.createElement(tag);
const text = content => document.createTextNode(content);
const getElem = id => document.getElementById(id);
const getText = () => getElem('message-text').value;
const setText = (value) => getElem('message-text').value = value;



const on = R.curry(function(eventType, element, fn) {
    element.addEventListener(eventType, fn);

    return function() {
        element.removeEventListener(eventType, fn);
    }
});

const addClass = R.curry(function(className, element) {
    element.classList.add(className);

    return element;
});

const append = R.curry(function(node, element) {
    element.appendChild(node);

    return element;
});

const attr = R.curry(function(attributeName, attributeValue, element) {
    element.setAttribute(attributeName, attributeValue);

    return element;
});

const clear = R.curry((element) => {
    element.innerHTML = '';

    return element;
});