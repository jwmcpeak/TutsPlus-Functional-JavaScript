function app(state, output) {

    append(view(state), output);

}

function view(state) {
    const el = elem('div');

    return state.length > 0 ? R.pipe(
        ...state.map((content, index) => append(message(content, index)))
    )(elem('div')) : el;
}

function message(content, index) {
    return R.compose(
        append(text(content)),
        attr('data-index', index),
        addClass('bg-warning'),
        addClass('p-3')
    
    )(elem('div'));
}


app(
    Object.freeze([]),
    getElem('message-list')
);