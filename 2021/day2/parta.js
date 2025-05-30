/**
 * Ok so we understand how we are descending but now i need to bloody get this tin can moving
 * the elves are all relying on me
 * 
 * 
 * 
 * 
 * We have some commands
 * 
 * forward increases horizontal by X 
 * 
 * down increase depth by X
 * 
 * up  decreases depth by X
 * 
 * we've managed to get our little sub at the surface again while they patch the leak so now lets, start moving from 0
 *
 */

const { input } = require("./input")


const dummyInput = `forward 5
down 5
forward 8
up 3
down 8
forward 2`


const parseInput = (input) => input.split('\n').map((line) => {
    let [direction, moves] = line.split(" ");
    return ([direction, Number(moves)])
})



class Submarine {
    constructor() {
        this.depth = 0
        this.horizontal = 0
        this.aim = 0
    }

    forward(x) {
        this.horizontal += x
        let nextDepth = this.aim * x
        this.depth += nextDepth
    }

    down(x){
        this.aim += x
        // this.depth += x
    }

    up(x){
        this.aim -= x
        // this.depth -= x
    }
}


const yellowSubmarine = new Submarine()


const controller = (directions, submarine) => {

    directions.forEach(direction => {
        console.log(direction)
        switch (direction[0]) {
            case 'forward':
                    submarine.forward(direction[1]);
                    break;
            case 'down':
                    submarine.down(direction[1]);
                    break;
            case 'up':
                    submarine.up(direction[1]);
                    break;
            default:
                console.error('oh no')
                break;
        }
    })
}

const multiply = (x, y) => x * y


console.log(controller(parseInput(input), yellowSubmarine))

console.log(multiply(yellowSubmarine.depth, yellowSubmarine.horizontal))


/**
 * I did part 1 and 2 together part two was swapping to aim
 */





