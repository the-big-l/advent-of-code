// read from file with name passed in as argument
const fileName = process.argv[2];
const TEST = process.argv[3];
const fs = require('fs');
const ranges = fs.readFileSync(fileName, 'utf-8').split(',');

function isRepeatString(id) {
    const size = id.length

    for (let groupSize = 1; groupSize < size; groupSize++) {
        let group = id.slice(0, groupSize)
        let workingID = group.repeat(Math.floor(size / groupSize))
        
        if (id == workingID) {
            return true
        }
    }

    return false
}

function sumRepeatIDs(ranges) {
    let sum = 0

    for (const range of ranges) {
        const [start, end] = range.split("-").map(Number)
        for (let id = start; id <= end; id++) {
            if (isRepeatString(id.toString())) {  
                sum += id
            }
        }
    }
    return sum
}

function runTests() {
    let test11 = isRepeatString('11') == true
    let test12 = isRepeatString('12') == false
    let test1212 = isRepeatString('1212') == true
    let test1234 = isRepeatString('1234') == false
    let test101 = isRepeatString('101') == false
    let test121 = isRepeatString('121') == false
    
    let allTests = {test11, test12, test1212, test1234, test101, test121}
    console.log(allTests)
}

if (TEST == 'test') {
    runTests()
} else {
    console.log("The sum of invalid IDs is:", sumRepeatIDs(ranges))
}