let randomArr = [-43, 100, 91, 2.5, 83, 0]


//                                                         finding min max in an array


function findMinMax(yourArray) {

    let max = yourArray[0]
    let min = yourArray[0]

    for (let item of yourArray) {
        if (item > max) max = item
        if (item < min) min = item
    }

    return {max, min}
}

console.log(findMinMax(randomArr))

//                                                 using reduce

function findMinMax1(arr) {
    let max = arr.reduce(function (preValue, currentValue) {
        if (currentValue > preValue) preValue = currentValue;
        return preValue
    })
    let min = arr.reduce(function (preValue, currentValue) {
        if (currentValue < preValue) preValue = currentValue;
        return preValue
    })
    return {max, min}
}

console.log(findMinMax1(randomArr))

//                                                   using map

const findMinMax2 = (arr) => {
    let max = arr[0];
    let min = arr[0];
    arr.map(item => {
        if (item > max) max = item
        if (item < min) min = item
    })
    return {max, min}
}

console.log(findMinMax2(randomArr))