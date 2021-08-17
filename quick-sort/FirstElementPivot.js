// Hàm để swap
const swap = (arr, left, right) => {
  const temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
};

const partition = (arr, low, high) => {
  // Chọn phần tử đầu tiên làm pivot (trục hoặc gọi là chốt)
  let pivot = arr[low];
  let i = low;

  // Phân chia array thành 2 phần (2 mảng con) bằng pivot
  for (let j = low; j <= high; j++) {
    if (arr[j] <= pivot) {
      swap(arr, i, j);
      i++;
    }
    // sau mỗi loop thì các phần tử nhở hơn pivot về 1 bên
  }

  swap(arr, i - 1, low);

  // return the pivot index
  return i - 1;
};

// Hàm đệ qui sắp xếp
const quickSort = (arr, low, high) => {
  // base condition
  // Nếu mảng chỉ có 1 phần tử thì trả về luôn - coi như đã sort
  if (low >= high) {
    return;
  }

  // Sắp xếp lại các phần tử qua pivot
  const pivot = partition(arr, low, high);

  // Sắp xếp mảng con chứa các phần tử nhỏ hơn pivot
  quickSort(arr, low, pivot - 1);

  // Sắp xếp mảng con chứa các phần tử lớn hơn pivot
  quickSort(arr, pivot + 1, high);
};

let arr = [10, 7, 8, 9, 1, 5];
quickSort(arr, 0, arr.lenngth - 1);
console.log(arr);
