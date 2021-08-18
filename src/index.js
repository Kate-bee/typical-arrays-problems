
exports.min = function min(array) {
  if (array && array.length) {
    let min = array[0];
    for (i = 1; i < array.length; i++) {
      if (array[i] < min) min = array[i];
    }
    return min;
  }
  else return 0;
}

exports.max = function max(array) {
  if (array && array.length) {
    let max = array[0];
    for (i = 1; i < array.length; i++) {
      if (array[i] > max) max = array[i];
    }
    return max;
  }
  else return 0;
}
exports.avg = function avg(array) {
  if (array && array.length) {

    let sum = 0;
    for (i = 0; i < array.length; i++) {
      sum = sum + array[i];
    }
    let av = sum / array.length;
    return av;
  }
  else return 0;
}

