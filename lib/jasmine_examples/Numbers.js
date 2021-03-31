module.exports.suma = (a, b) => {
    return a + b;
}

module.exports.returnArrayCountGreaterThanY = (arr, y) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > y) {
            count += 1;
        }
    }

    return count;
}

