module.exports = function towelSort(matrix) {
    if (!matrix) {
      return [];
    }
    let matrixArr = [];
    matrix.forEach((arrElement, i) => {
        let currentElement = [];
        if (i % 2 === 0 || i === 0) {
            currentElement = arrElement.sort((a, b) => {
                return a - b;
            });
        } else {
            currentElement = arrElement.sort((a, b) => {
                return b - a;
            });
        }
        currentElement.forEach(innerArrElement => {
            matrixArr.push(innerArrElement);
        });
    });
    return matrixArr;
}
