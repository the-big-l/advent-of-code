// read from file with name passed in as argument
const fileName = process.argv[2];
const fs = require('fs');
const ranges = fs.readFileSync(fileName, 'utf-8').split(',');

const isRepeatNum = function(num) {
    const digits = Math.floor(Math.log10(num)) + 1
    if (digits % 2 != 0) {return false}

    const factor = 10 ** (digits / 2)
    const left = Math.floor(num / factor)
    const right = num % factor

    return left == right
}

const sumRepeatNums = function(start, end) {
    let sum = 0

    for (let i = start; i <= end; i++) {
        if (isRepeatNum(i)) {
            sum += i
        }
    }

    return sum
}

const sumRepeatIDs = function(ranges) {
    let sum = 0

    for (const range of ranges) {
        const [start, end] = range.split("-")
        sum += sumRepeatNums(+start, +end)
    }

    return sum
}

console.log("The sum of invalid IDs is:", sumRepeatIDs(ranges))