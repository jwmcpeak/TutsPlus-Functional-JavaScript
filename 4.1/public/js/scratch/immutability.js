const indexes = Object.freeze([0,1,2,3,4,5]);

function addElement(arr) {
    //indexes.push(arr.length);

    return Object.freeze([...arr, arr.length]);
}

addElement(addElement(indexes));