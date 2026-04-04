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
	const dir = x[0]
	const clicks = +x.slice(1)
	// console.log("")
	// console.log("rotate = ", x)
	const net = clicks % size
	// console.log("net = ", net)
	const rotations = Math.floor(Math.abs(clicks) / size)
	// console.log("full rotations = ", rotations)
	counter = counter + rotations

	if (dir == 'R') {
		if (pos + net >= 100 && pos != 0) {
			counter++
			// console.log("crosses zero = true")
		}

		pos = pos + net
		// console.log("abs pos = ", pos)
	} else {		
		if (pos - net <= 0 && pos != 0) {
			counter++
			// console.log("crosses zero = true")
		}

		pos = pos - net
		// console.log("abs pos = ", pos)
	}
	// console.log("updated counter = ", counter)

	if (pos >= 100) {
		pos = pos - 100
	}
	if (pos < 0) {
		pos = pos + 100
	}
	// console.log("real pos = ", pos)
}

console.log("this is the password for part 2: ", counter)