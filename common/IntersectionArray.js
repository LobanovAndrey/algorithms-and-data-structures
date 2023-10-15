// нахождение пересечения двух отсортированных массивов
function intersection(arr1, arr2) {
  const elements = [];

  for (let i = 0; i < arr1.length; i++) {
    const found = binarySearch(arr2, arr1[i]);

    if (found > -1) {
      elements.push(arr1[i]);
    }
  }

  return elements;
}

function binarySearch(sortedNumbers, n) {
  let start = 0;
  let end = sortedNumbers.length;

  while (start < end) {
    const middle = Math.floor((start + end) / 2);
    const value = sortedNumbers[middle];

    if (n == value) {
      return middle;
    }

    if (n < value) {
      end = middle;
    } else {
      start = middle + 1;
    }
  }

  return -1;
}
