const {input} = require('./input')

/**
 * 
 * each line is a selection of passphrases
 * essentially lib situation then add
 * 
 * ok now we've got an added layer 
 * we can split the types but i was hoping i could just use set... but that wouldnt actually work
 * because aes would be classed as the same as aeees 
 * 
 * so i guess you can grab the ones with the same length then set those..? 
 * 
 * or again lib it by length? 
 * 
 * { 4, 5, 6 } if no match then its a clean pass 
 * 
 * else if theres a match we may have a problem 
 * 
 * i guess what ya could do it push the set into the length key 
 * then do an includes as well? 
 * 
 */



const processCandidates = () => {

}




const processPassphrase = (phrases) => {

    const totalValidPassphrases = phrases.reduce((acc, curr) => {

        let lib = {}

        let isValid = true

        let line = curr.split(' ')

        line.some(word => {
            if(lib[word]) {
                // ends the some loop
                isValid = false
                return true
            }
            lib[word] = true
        });

        if(isValid) {
            acc.push(curr)
        }

        return acc

    }, [])

    console.log({totalValidPassphrases})

}

processPassphrase(input.split('\n'))


