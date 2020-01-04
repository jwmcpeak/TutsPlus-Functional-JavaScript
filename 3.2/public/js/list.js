const elem = tag => document.createElement(tag);

const el = R.compose(
    addClass('bg-light'),
    addClass('p-2')

)(elem('div'));


document.body.appendChild(el);

function addClass(className) {
    return function(element) {
        element.classList.add(className);

        return element;
    }
}

function append(node, element) {
    element.appendChild(node);

    return element;
}