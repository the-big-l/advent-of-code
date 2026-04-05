// read from file named arguement 1
const fileName = process.argv[2];
const fs = require('fs');
const directions = fs.readFileSync(fileName, 'utf-8').split('\n');

const size = 100;
let position = 50;
let counter = 0;

directions.forEach((x) => {
	const direction = x[0] == 'L' ? -1 : 1
	const clicks = +x.slice(1) * direction

	position = (position + clicks % size + size) % size

	if (position % size == 0) {
		counter++
	}
})

console.log("the password for part 1 is:", counter) 

position = 50;
counter = 0;

for (x of directions) {
	const direction = x[0] == 'L' ? -1 : 1
	const magnitude = +x.slice(1)
	const totalClicks = direction * magnitude
	const netClicks = totalClicks % size

	// add full rotations to counter
	counter += Math.floor(Math.abs(totalClicks) / size)
	
	// increment counter if position will end on 0 OR goes out of bounds
	// but ONLY if it didn't already start on 0
	if (position != 0 && position + netClicks <= 0 || position + netClicks >= size) {
		counter++
	}
	
	// update dial position
	// copied from array bi-directional, wrap-around implementation
	position = (position + netClicks % size + size) % size
}

console.log("this is the password for part 2:", counter)