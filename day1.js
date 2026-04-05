// read from file named arguement 1
const fileName = process.argv[2];

const fs = require('fs');

const directions = fs.readFileSync(fileName, 'utf-8').split('\n');

const size = 100;
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

	if (pos % size == 0) {
		counter++
	}
})

console.log("the password for part 1 is:", counter) 

pos = 50;
counter = 0;

for (x of directions) {
	const dir = x[0] == 'L' ? -1 : 1
	const mag = +x.slice(1)
	const clicks = dir * mag
	const net = clicks % size

	counter += Math.floor(Math.abs(clicks) / size)
	
	if (pos != 0 && pos + net <= 0 || pos + net >= size) {
		counter++
	}
	
	pos = (pos + net % size + size) % size
}

console.log("this is the password for part 2: ", counter)