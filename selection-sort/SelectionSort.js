// Selection sort - sap xep lua chon
// ascending example
let selectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    // logic: so sánh phần tử đầu tiên với các phần tử còn lại trong array, nếu phần tử nào nhỏ nhất sẽ về đầu array
    for (let j = i + 1; j < arr.length; j++) {
      arr[j] < arr[i] && ([arr[i], arr[j]] = [arr[j], arr[i]]); // Destructuring syntar
    }
  }
  // Return the sorted array
  return arr;
};

console.log(selectionSort([5, 3, 6, 9, 2, 1, 8]));
