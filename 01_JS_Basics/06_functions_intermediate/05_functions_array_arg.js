function max_array(arr) {
    let max = arr[0]; // assume first element is the largest
    for (let num of arr) {
        if (num > max) {
            max = num; // update max if current number is larger
        }
    }
    return max;
}

arr = [10, 20, 5, 15, 25];
console.log("Max: ", max_array(arr)); // using variable

console.log(max_array([7, 3, 19, 1, 6])); // using array literal (using array directly)
console.log(max_array([3, 1, 4, 1, 5, 9, 2, 6, 5])); // 9