const swap = (arr, left, right) => {
  const temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
};

const partitionRandom = (arr, first, last) => {
  //Get random number between the given indexes.
  const random = Math.floor(Math.random() * (last - first + 1) + first);

  //Swap với phần tử đầu tiên
  swap(arr, random, first);

  //Use first element as a pivot
  return partitionLow(arr, first, last);
};

// Tương tự như trường hợp chọn first element as a pivot
const partitionLow = (arr, first, last) => {
  let pivot = arr[first];
  let i = first;

  for (let j = first; j <= last; j++) {
    if (arr[j] <= pivot) {
      swap(arr, i, j);
      i++;
    }
  }

  swap(arr, i - 1, first);

  return i - 1;
};

const quickSort = (arr, first, last) => {
  if (first >= last) {
    return;
  }

  const pivot = partitionRandom(arr, first, last);

  quickSort(arr, first, pivot - 1);

  quickSort(arr, pivot + 1, last);
};

let arr = [10, 7, 8, 9, 1, 5, -8, -2, 5];
console.log('Mảng trước khi sort:', arr);
quickSort(arr, 0, arr.length - 1);
console.log('Mảng sau khi sort:', arr);
