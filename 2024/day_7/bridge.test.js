const { bridgeBrutForce } = require('./bridge')

const sample = `5 1 9 5
7 5 3
2 4 6 8


// we only have + and * so  we are getting bigger
// we have to solve this brute force so i can then try it on GPU!

describe('bridge', () => {

    it('can generate the correct sums', () => {
        expect(bridgeBrutForce('3267: 81 40 27')).toStrictEqual(['81 x 40 x 27', '81 x 40 + 27', '81 + 40 x 27', '81 + 40 + 27'])
        expect(bridgeBrutForce('7290: 6 8 6 15')).toStrictEqual(["6 x 8 x 6 x 15", "6 x 8 x 6 + 15", "6 x 8 + 6 x 15", "6 x 8 + 6 + 15", "6 + 8 x 6 x 15", "6 + 8 x 6 + 15", "6 + 8 + 6 x 15", "6 + 8 + 6 + 15"]
)
    })
})