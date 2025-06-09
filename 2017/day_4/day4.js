const {input} = require('./input')

/**
 * 
 * each line is a selection of passphrases
 * essentially lib situation then add
 * 
 */






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
            acc += 1
        }

        return acc

    }, 0)

    console.log({totalValidPassphrases})

}

processPassphrase(input.split('\n'))


