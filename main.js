// sort in array

let array = [1, 34, 14, 56, 76, 69, 18, 9];
let temp;
function sorting(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp
            }
        }
    }
    return array;
}

console.log('Sorted Array', sorting(array));