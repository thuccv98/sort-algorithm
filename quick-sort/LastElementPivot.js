const swap = (arr, left, right) => {
  const temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
};

const partition = (arr, first, last) => {
  // Chọn phần tử cuối cùng làm pivot
  let pivot = arr[last];
  let i = first;

  // Phân chia array thành 2 phần (2 mảng con) dựa pivot
  for (let j = first; j < last; j++) {
    if (arr[j] <= pivot) {
      swap(arr, i, j);
      i++;
    }
  }

  swap(arr, i, last);

  //Return the pivot index
  return i;
};

const quickSort = (arr, first, last) => {
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

let arr = [10, 7, 8, 9, 1, 5, -8, -2, 51];
console.log('Mảng trước khi sort:', arr);
quickSort(arr, 0, arr.length - 1);
console.log('Mảng sau khi sort:', arr);
