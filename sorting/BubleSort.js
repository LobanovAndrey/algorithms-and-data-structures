// 1
function sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    const minIndex = findMinIndex(arr, i);

    swap(arr, i, minIndex);
  }

  return arr;
}

function findMinIndex(arr, start) {
  let min = arr[start];
  let minIndex = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      minIndex = i;
    }
  }

  return minIndex;
}

function swap(arr, i, j) {
  const tmp = arr[i];

  arr[i] = arr[j];
  arr[j] = tmp;
}

// 2
function bubbleSort(arr) {
  let swapped = false;

  while (!swapped) {
    swapped = true;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        swapped = false;
        swap(arr, i, i + 1);
      }
    }
  }

  return arr;
}
