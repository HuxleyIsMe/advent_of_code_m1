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

const parseData = (input) => {
    const data = input.split('\n');
    const maxLength = data[0].length // should be 5
    let winners = []
    for(var o = 0; o < maxLength; o++) {
        let zeros = 0;
        let ones = 0;
        for(i = 0; i < data.length; i++) {
            if(data[i][o] === "0") {
                zeros++
            } else {
                ones++
            }
        }
        let commonChar = zeros > ones ? "0" : "1";
        winners.push(commonChar)


    }
    return winners.join('')
}



console.log(parseData(dummyInput));


const findEpsilonRateFromGama = (rateStr) => [...rateStr].map(bit => Number(bit) ? "0" : "1").join('');

const convertBinaryToNumber = (binary) => parseInt(binary, 2)

const powerSupplyNeeded = (g, e) => g  * e


const gammaRate = parseData(input);

const epsilion = findEpsilonRateFromGama(gammaRate);

console.log(convertBinaryToNumber(gammaRate))

console.log( convertBinaryToNumber(epsilion))

console.log(powerSupplyNeeded(convertBinaryToNumber(gammaRate), convertBinaryToNumber(epsilion)))