const minimumOccurence = array => {
	array = [...new Set(array.sort((a, b) => a - b))];

	// If the initial integer is greater than 1 or the last integer is less than 1
	if (array[0] > 1 || array[array.length - 1] < 1) return 1;

	for (let i in array) {
		let next = array[+i + 1];
		if (array[i] === next) return;
		if (next - array[i] !== 1) {
			if (array[i] < 0) {
				if (array.indexOf(1) !== -1) return;
				return 1;
			}
			return array[i] + 1;
		}
	}
};

console.log(minimumOccurence([1, 3, 6, 4, 1, 2]));
