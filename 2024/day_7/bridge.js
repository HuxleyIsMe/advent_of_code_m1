function bridgeBrutForce(input) {
  const [_, numbers] = input.split(': ');
  const nums = numbers.split(' ');

  // Generate all combinations of 'x' and '+'
  const combinations = [];
  const operators = ['x', '+'];

  // Helper function to build expressions
  function buildExpressions(current, index) {
    if (index === nums.length - 1) {
      combinations.push(current.join(' '));
      return;
    }
    for (const op of operators) {
      buildExpressions([...current, op, nums[index + 1]], index + 1);
    }
  }

  // Start the recursion with the first number
  buildExpressions([nums[0]], 0);

  return combinations;
}

module.exports = {
    bridgeBrutForce
}