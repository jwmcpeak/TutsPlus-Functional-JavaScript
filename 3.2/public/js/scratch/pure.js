// pure
function add(x,y) {
    return x + y;
}

add(1, 2); // 3
add(1, 2); // 3
add(1, 2); // 3


// impure
function add2(x, y) {
    console.log(x+y); // external and produces an observable side effect
    return x + y;
}

add2(1, 2); // 3