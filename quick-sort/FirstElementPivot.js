// Hàm để swap
const swap = (arr, left, right) => {
  const temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
};

const partition = (arr, first, last) => {
  // Chọn phần tử đầu tiên làm pivot (trục hoặc gọi là chốt)
  let pivot = arr[first];
  let i = first;

  // Phân chia array thành 2 phần (2 mảng con) dựa pivot
  for (let j = first; j <= last; j++) {
    if (arr[j] <= pivot) {
      swap(arr, i, j);
      i++;
    }
    // sau mỗi loop thì các phần tử nhở hơn pivot về 1 bên
  }

  swap(arr, i - 1, first);

  // return the pivot index
  return i - 1;
};

// Hàm đệ qui sắp xếp
const quickSort = (arr, first, last) => {
  // base condition
  // Nếu mảng chỉ có 1 phần tử thì trả về luôn - coi như đã sort
  if (first >= last) {
    return;
  }

  // Sắp xếp lại các phần tử qua pivot
  const pivot = partition(arr, first, last);

  // Sắp xếp mảng con chứa các phần tử nhỏ hơn pivot
  quickSort(arr, first, pivot - 1);

  // Sắp xếp mảng con chứa các phần tử lớn hơn pivot
  quickSort(arr, pivot + 1, last);
};

let arr = [10, 7, 8, 9, 1, 5];
quickSort(arr, 0, arr.lenngth - 1);
console.log(arr);
