const elem = tag => document.createElement(tag);
const text = content => document.createTextNode(content);



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

function message(content) {
    return R.compose(
        append(text(content)),
        attr('data-message', content),
        addClass('bg-light'),
        addClass('p-2')
    
    )(elem('div'));
}




document.body.appendChild(message('this is some text'));