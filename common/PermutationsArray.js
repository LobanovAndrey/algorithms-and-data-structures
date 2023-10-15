function permutations(arr, perm = [], result = []) {
  // если элементов не осталось - возвращаем текущую перестановку
  if (arr.length === 0) {
    result.push(perm);
  } else {
    for (let i = 0; i < arr.length; i++) {
      // создаем копию массива
      const copy = arr.slice();
      // убираем из него текущий элемент
      const elem = copy.splice(i, 1);
      // запускаем алгоритм заново на копии,
      // добавив текущий элемент в массив с перестановками
      permutations(copy, perm.concat(elem), result);
    }
  }

  return result;
}
