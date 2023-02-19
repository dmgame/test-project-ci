function getRandomInt(max) {
  if (typeof max !== 'number') {
    throw new Error('max must be a number');
  }
  return Math.floor(Math.random() * max);
}

module.exports = getRandomInt;
