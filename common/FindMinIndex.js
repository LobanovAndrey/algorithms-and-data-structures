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
