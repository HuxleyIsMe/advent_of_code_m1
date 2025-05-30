/**
 * Right i must save christmas or at least get oout of this submarine, i think there is a leak
 */

// const sonarReading = require('./input');
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

// console.log(howFastAreWeSinking(dummyInput))
console.log(howFastAreWeSinking(asNumbers))


/**
 * Huxley you took longer with this one then you wanted because you didnt think about the input
 * think about its type as well that its formatted 
 * 
 * also your being wierd with arrays.  arrays are zero indexed so the length is always going to be + 1
 * 
 * so in an array of 5 item the length is 5 
 * but the max index is 4 
 * 
 * 
 * what i dont understand is if im comparing the next value why i cant end 2 early 
 * so in each loop 
 * 
 * i && 1+1
 * 
 * i = 0,  length-1 = 4,  0, 1
 * i =1    4,     1, 2
 * i = 2   4      2 , 3
 * i= 3    4      3, 4
 *  3 is less then four dummy if you did <= 4 then this would be an issues
 */