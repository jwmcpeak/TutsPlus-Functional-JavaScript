function app(state, output) {
    R.compose(
        append(view(state)),
        clear()
    )(output);
}

function fullName({firstName, lastName, age}) {
    return `${firstName} ${lastName} (${age})`;
}

function view(state) {
    const add = R.flip(append);

    return state
            .filter(person => person.age > 30)
            .map(buildPerson) // [] HTMLElements
            .reduce(add, elem('div'));
}

function buildPerson(person, index) {
    return R.compose(
        append(text(fullName(person))),
        attr('data-index', index),
        addClass('text-white'),
        addClass('bg-secondary'),
        addClass('p-3')
    )(elem('div'));
}

app(
    Object.freeze([{
        firstName: 'Jane',
        lastName: 'Doe',
        age: 34
    }, {
        firstName: 'John',
        lastName: 'Doe',
        age: 25
    }, {
        firstName: 'Jim',
        lastName: 'Smith',
        age: 53
    }]),
    getElem('message-list')
);