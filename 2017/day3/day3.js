

const unpackDetails = (odd) => {
    return {
        maxSteps:  odd - 1,
        length: odd,
        midLength: Math.floor(odd /2),
        midPoint: (odd - 1) / 2,
        total: odd * odd
    }
}

/**
 * We know that the grid the number will be in will be a square of an odd number 
 */
const findLargestCorner = (target) => {

    let odd = 1

    while(true) {

        let square = odd * odd

        if(square >= target) {
            break;
        }

        odd += 2
    }

    console.log({odd})


    return odd
}


 const distanceFromCorner = (details, target) => {
    const { total, maxSteps, midPoint } = details;

    let corner = total;
    const midpoints = [];

    for (let i = 0; i < 4; i++) {
        let midpoint = corner - maxSteps * i - midPoint;
        midpoints.push(midpoint);
    }

    // Find the closest midpoint to the target
    let offset = Math.min(...midpoints.map(mid => Math.abs(target - mid)));
    
    let totalSteps = midPoint + offset;

    console.log({ target, totalSteps });
    return totalSteps;
}
 // 49 -> 43 -> 37 -> 31




// [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25].forEach(val => {
    const res = distanceFromCorner(unpackDetails(findLargestCorner(361527)), 361527)
// })

// results 34 -> 3 : correct
// 20 -> 3 : correct
// 26 -> 5: correct
// 31 -> 6: correct
// 50 -> 7: correct
// 17 -> 4
// 16 -> 3
// 15 -> 2
// 14 -> 3
// 13 -> 4
//