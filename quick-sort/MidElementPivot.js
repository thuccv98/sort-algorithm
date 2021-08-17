const swap = (arr, left, right) => {
  const temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
};

const partitionMiddle = (arr, first, last) => {
  // Lấy phần tử giữa
  const mid = Math.floor((first + last) / 2);
  // Swap phần tử giữa với phần tử đầu tiên
  swap(arr, mid, first);

  // Sử dụng phần tử đầu tiên làm pivot
  let pivot = arr[first];
  let lo = first + 1;
  let hi = last;

  // Partition arr dựa trên pivot
  while (lo <= hi) {
    // Di chuyển về phía nhau
    while (arr[hi] > pivot) {
      hi = hi - 1;
    }

    while (lo <= hi && arr[lo] <= pivot) {
      lo = lo + 1;
    }

    // Khi tìm thấy thì hoán đổi các phần tử
    if (lo <= hi) {
      swap(arr, lo, hi);
      lo = lo + 1;
      hi = hi - 1;
    }
  }

  swap(arr, first, hi);

  //Return the pivot index
  return hi;
};

const quickSort = (arr, first, last) => {
  if (first >= last) {
    return;
  }

  const pivot = partitionMiddle(arr, first, last);

  quickSort(arr, first, pivot - 1);

  quickSort(arr, pivot + 1, last);
};

let arr = [10, 7, 8, 9, 1, 5, -8, -2, 5];
console.log('Mảng trước khi sort:', arr);
quickSort(arr, 0, arr.length - 1);
console.log('Mảng sau khi sort:', arr);
