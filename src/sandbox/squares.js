function squaredNumbersAsync(numbers, callback, finalCallback) {
    if (numbers.length === 0) {
        finalCallback(numbers);
        return;
    }

    const squaredNumbers = [];
    let completed = 0;

    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        setTimeout(() => {
            const squared = number * number;
            squaredNumbers.push(squared);
            callback(number, squared);
            completed++;

            if (completed === numbers.length) {
                finalCallback(squaredNumbers);
            }
        }, 1500 * Math.random());
    }
}

const numbers = [1, 3, 5, 7, 9];
squaredNumbersAsync(
    numbers,
    function (original, squared) {
        console.log(`Square of ${original} = ${squared}`);
    },
    function (allSquared) {
        console.log(`All squared numbers: ${allSquared}`);
    }
);
