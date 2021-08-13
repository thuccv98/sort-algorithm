// Buble sort - sắp xếp nổi bọt
let bubbleSort = (arr) => {
	// Độ dài của mảng
	let n = arr.length;

	// Logic
	for(let i = 0; i < n - 1; i++){
		for(let j = 0; j <= n - i - 1; j++){
			// Swap the numbers
			if(arr[j] > arr[j+1]){
				[arr[j], arr[j+1]] = [arr[j+1], arr[j]];
			}
		}
	}

	return arr;
}

console.log(bubbleSort([5, 8, 3, -8, 9, 0]));