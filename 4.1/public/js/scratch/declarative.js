const numbers = [1, 2, 3, 4, 5, 6];

for (let ii = 0; ii < numbers.length; ii++) {
    numbers[ii]
}

const output = item => console.log(item);

numbers.forEach(output);

forEach(output, numbers);

const value = true ? 'this value' : 'that value';