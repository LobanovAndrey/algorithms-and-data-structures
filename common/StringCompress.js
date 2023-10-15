// compress([1, 4, 5, 2, 3, 9, 8, 11, 0]); // '0-5,8-9,11'
// compress([1, 4, 3, 2]); // '1-4'
// compress([1, 4]); // '1,4'

function compress(list) {
  const sortedList = list.sort((a, b) => a - b);
  const res = [String(sortedList[0])];
  let isInInterval = false;

  for (let i = 1; i <= sortedList.length; i++) {
    const prevItem = sortedList[i - 1];
    const item = sortedList[i];

    if (item && item - prevItem === 1) {
      isInInterval = true;
      continue;
    }

    if (isInInterval) {
      res[res.length - 1] += '-' + prevItem;
      isInInterval = false;
    }

    if (item) {
      res.push(String(item));
    }
  }

  return res.join(',');
}
