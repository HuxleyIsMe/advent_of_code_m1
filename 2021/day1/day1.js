/**
 * Right i must save christmas or at least get oout of this submarine, i think there is a leak
 */

const {input} = require('./input')

const dummyInput = `199
200
208
210
200
200
207
240
269
260
263`


const asNumbers = input.split('\n').map((string) => Number(string))

// increment every time the next value is lower then the previous value
const howFastAreWeSinking = (arr) => {

    let weSunkCounter = 0;

    for(var i = 0; i < arr.length - 1; i++) {
        console.log(typeof arr[i])
        if(arr[i+1] > arr[i]) {
            weSunkCounter += 1
        }
    }

    return weSunkCounter


}


console.log(howFastAreWeSinking(asNumbers))
