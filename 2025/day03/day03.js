// read from file with name passed in as argument
const fileName = process.argv[2];
const TEST = process.argv[3];
const fs = require('fs');
const banks = fs.readFileSync(fileName, 'utf-8').split('\n');

function findMaxJoltage(bank) {
    let maxJoltage = []
    let lastMaxIndex = 0

    for(let digitsRemaining = 11; digitsRemaining >= 0; digitsRemaining--) {
        let candidates = Array.from(bank.slice(lastMaxIndex, bank.length - digitsRemaining))
        let max = ''
        let maxIndex = 0
        
        candidates.forEach((element, index) => {
            if (element > max) {
                max = element
                maxIndex = index
            }
        })

        lastMaxIndex += maxIndex + 1
        maxJoltage.push(max)
    }

    return BigInt(maxJoltage.join(''))
}


const lineSummer = (lines, callback) => {
  return lines.reduce((sum, line) => {
    return sum + callback(line);
  }, 0);
};

function runTests() {
    let test9876 = findMaxJoltage('987654321000009') == '987654321009'
    
    let allTests = [test9876]
    console.log({allTests})
}

if (TEST == 'test') {
    runTests()
} else {
    console.log("The sum of max Joltages is:", lineSummer(banks, findMaxJoltage))
}
