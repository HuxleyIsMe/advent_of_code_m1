/**
 * 
 * darn we are managing to drive now, i hope we find this key somewher ehere. But i dont think the leak is fixed....
 * 
 * Im not sure which one of the seven elves was sent to fix it, only that he's Dwarve lazy's cousin...
 * 
 * it doesnt bode well so ive decided i want a diagnostic report, sadly cryptic has written it so now i need to crunch 
 * 
 * - binary number 01 
 * - i need to know: 
 *          - power consumption
 *  - i need to use the numbers to generat 2 new binary number 
 *          - gamma rate 
 *          - epsilion rate 
 * power consumptio = gr * er
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * Life support rating = LSR
 * 
 * oxygen generating rating = OGR
 * 
 * and CO2 scrbbee
 * 
 * 
 * start with the first bit......
 *  - keep number that fit the criteria
 *  - stop when you have only one number left.
 * 
 * 
 * oxygen generator rating keep the most common value pr if equal 1
 * 
 * co2 is the same as above but least common  value of 0 
 * 
 */

const {input} = require('./input')

const dummyInput = `00100
11110
10110
10111
10101
01111
00111
11100
10000
11001
00010
01010`


const parseData = (input) => input.split('\n');

const radixSortBigger = (input, counter = 0) => {

    if(input.length < 2 || counter == input[0].length) {
        return input
    }

    const zeroBucket = [];
    const onesBucket = [];

    let currentIndex = counter

    input.forEach(element => {
        if(element[currentIndex] === "0") {
            zeroBucket.push(element)
        } else {
            onesBucket.push(element)
        }
    });

    let biggerBucket = zeroBucket.length > onesBucket.length  ? zeroBucket : onesBucket;

    if(zeroBucket.length === onesBucket.length) {
        biggerBucket = onesBucket
    }
    counter+=1

    return radixSortBigger(biggerBucket, counter)

}


const radixSortSmaller = (input, counter = 0) => {

    if(input.length < 2 || counter == input[0].length) {
        return input
    }

    const zeroBucket = [];
    const onesBucket = [];

    let currentIndex = counter

    input.forEach(element => {
        if(element[currentIndex] === "0") {
            zeroBucket.push(element)
        } else {
            onesBucket.push(element)
        }
    });

    let smallerBucket = zeroBucket.length < onesBucket.length  ? zeroBucket : onesBucket;

    if(zeroBucket.length === onesBucket.length) {
        smallerBucket = zeroBucket
    }

    counter+=1

    return radixSortSmaller(smallerBucket, counter)

}


const convertBinaryToNumber = (binary) => parseInt(binary, 2)



const OGR = radixSortBigger(parseData(input))
const CO2 = radixSortSmaller(parseData(input))

const OGR_digit = convertBinaryToNumber(OGR)
const C02_digit = convertBinaryToNumber(CO2)

console.log(OGR_digit * C02_digit)

