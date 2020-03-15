const cache = { 1: 1 };

const isEven = (number) => number % 2 === 0;
const calculateEvenNumber = (number) => number / 2;
const calculateOddNumber = (number) => (3 * number) + 1;

const calculate = (number) => {
    if (isEven(number)) return calculateEvenNumber(number);
    return calculateOddNumber(number);
};

const findLongestSequence = (actual, n = 0) => {
    if(cache[actual] !== undefined) return cache[actual] + n;
    if(actual === 1) return n;

    n++;
    return findLongestSequence(calculate(actual), n);
};

const find = (endPoint) => {
    let biggest = [1,1];
    for (let number = 1; number < endPoint; number++) {
        let pair = [findLongestSequence(number), number];

        cache[number] = pair[0];

        if (biggest[0] < pair[0]) {
            biggest = [pair[0], number]
        }
    }
    return biggest;
};


console.time('findLongestSequence');
console.log(find(10 ** 6));
console.timeEnd('findLongestSequence');

