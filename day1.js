// read from file named day1.txt

const fs = require('fs');

const directions = fs.readFileSync('day1.txt', 'utf-8').split('\n');

const dial = 100;
let pos = 50;
let counter = 0;

directions.forEach((x) => {
	const dir = x[0]
	const num = +x.slice(1)

	if (dir == 'L') {
		pos = pos - num
	} else {
		pos = pos + num
	}

	if (pos % dial == 0) {
		counter++
	}
})

console.log("the password for part 1 is:", counter) 