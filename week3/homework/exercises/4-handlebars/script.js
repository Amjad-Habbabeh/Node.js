/**
 * 4. Fun with Handlebars
 *
 * Write a javascript function that simulates playing the game cards against humanity.
 * The code should choose a subject and a punchline at random,
 * then replace them in a sentece using handlebars.
 *
 * Hints:
 * - Check the handlebars npm page for examples and documentation
 */

const subjects = [
  'shark',
  'popcorn',
  'poison',
  'fork',
  'cherry',
  'toothbrush',
  'cannon',
];

const punchlines = [
  'watch movie with',
  'spread some love',
  'put on cake',
  'clean toilets',
  'go to the moon',
  'achieve world piece',
  'help people learn programing',
];

const handleBars = require('handlebars');

function drawCard() {
  // YOUR CODE GOES IN HERE

  let val1 = getRandomElement(subjects);
  let val2 = getRandomElement(punchlines);
  const cardData = { subject: val1, punchline: val2 };
  let card = '{{subject}} is great to {{punchline}}';
  const template = handleBars.compile(card);
  let result = template(cardData);
  console.log(result);
}

drawCard();

/**
 * Given an array, return an element from it chosen at random
 */
function getRandomElement(array) {
  // YOUR CODE GOES IN HERE
  let randomNumber = Math.random();
  let randomIndex = Math.floor((array.length - 1) * (randomNumber)+1);
  return array[randomIndex];
}
