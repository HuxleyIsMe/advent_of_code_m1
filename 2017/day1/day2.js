const {input} = require('./input')


const findDifference = (line) => {
    let asNumbers = line.split('\t').map(x => Number(x))
    let min = Math.min(...asNumbers)
    let max = Math.max(...asNumbers)
    return (max - min)
}

const lineVibes = () => {
    let sum = input.split('\n').reduce((acc, line) => {
        let diff = findDifference(line)
        acc+=diff
        return acc
    },0 )
    return sum
}

lineVibes()