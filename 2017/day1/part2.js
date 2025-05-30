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


const parseInput = (input) => input.split('\n').map(i => Number(i)) 

// sliding window comparaision

const slidingWindowForBetterAvergae = (arr) => {
    const WINDOW_LENGTH = 3;

    let currentWindowSum = arr.slice(0, WINDOW_LENGTH).reduce((acc, curr) => acc += curr);
    let previousWindowSum = currentWindowSum

    let increments = 0

    // while i is less then the array length
    for(var i = 1; i <= arr.length - WINDOW_LENGTH; i++ ) {

        currentWindowSum -= arr[i -1]
        currentWindowSum += arr[i + WINDOW_LENGTH - 1]

        if(currentWindowSum > previousWindowSum ) {
            increments++
        }

        previousWindowSum = currentWindowSum;

    }

    console.log(increments)
    return increments


}


console.log(slidingWindowForBetterAvergae(parseInput(input)))

/**
 * 
 * alright bang on hux but you are getting you arrau endings incorrect like you had to work out when to end it early 
 */