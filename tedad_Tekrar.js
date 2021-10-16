let randomArr = [4, 2, 6, 3, 5, 4, 4, 3, 6, 2]

//                                    Finding how much an item repeated in array

function isRepeated(myArray) {
    let check = {}
    for (let item of myArray) {
        if (check[item]) check[item]++
        else check[item] = 1
    }
    return check
}


console.log(isRepeated((randomArr)))


//                                         using reduce

function isRepeated1(myArray) {
    const check = myArray.reduce(function (preValue, currentVal) {
        if (preValue[currentVal] === undefined) preValue[currentVal] = 1
        else preValue[currentVal]++
        return preValue
    }, {});
    return check
}

console.log(isRepeated1((randomArr)))


//                                                 using map


function isRepeated2(myArray) {
    let check = {}
    myArray.map(item => {
            if (check[item]) check[item]++
            else check[item] = 1
        }
    )
    return check
}

console.log(isRepeated2((randomArr)))