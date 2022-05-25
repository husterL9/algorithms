function sumAll(arr) {
    const sum = (Math.abs(arr[0] - arr[1]) + 1) * (arr[0] + arr[1]) / 2
    return sum
}

a = sumAll([1, 4]);