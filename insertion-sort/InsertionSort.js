// Insertion sort - sắp xếp chèn
//Ví dụ sắp xếp tăng dần
let insertionSort = (arr, n = arr.length) => {
  // Loop từ phần tử thứ 2 tới n
  for (let i = 1; i < n; i++) {
    let key = arr[i]; // Lấy phần tử đầu tiên của mảng chưa đc sort lưu thành key để chèn
    let j = i - 1; //phần tử cuối cùng của mảng đã sắp xếp.
    // sort in the ascending order
    // So sánh giá trị key cần chèn với phần tử cuối cùng của mảng
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j]; // Đẩy lùi phần tử j về phía sau một vị trí, tạo ra khoảng trống tại vị trí j để chèn
      j = j - 1; // Giảm j một đơn vị để tiếp tục so sánh key với các phần tử trong mảng đã đc sort
    }

    arr[j + 1] = key; // Đưa giá trị key cần chèn vào khoảng chống mới tạo ra
  }

  return arr;
};

console.log(insertionSort([1, 8, 2, 4, 5]));
