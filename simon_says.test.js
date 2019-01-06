const echo = require('./simon_says.js').echo;
const shout = require('./simon_says.js').shout;
const repeat = require('./simon_says.js').repeat;
const startOfWord = require('./simon_says.js').startOfWord;
const firstWord = require('./simon_says.js').firstWord;

test('echo hello', () => {
  expect(echo('hello')).toEqual('hello');
});

test('echo bye', () => {
  expect(echo('bye')).toEqual('bye');
});

test('shout hello', () => {
  expect(shout('hello')).toEqual('HELLO');
});

test('shout multiple words', () => {
  expect(shout('hello world')).toEqual('HELLO WORLD');
});

test('repeat', () => {
  expect(repeat('hello', 3)).toEqual('hello hello hello');
});

test('start of word returns first letter', () => {
  expect(startOfWord('hello', 1)).toEqual('h');
});


test('start of word returns first two letters', () => {
  expect(startOfWord('Bob', 2)).toEqual('Bo');
});

test('first word', () => {
  expect(firstWord('Hello World')).toEqual('Hello');
});

