import promptSync from 'prompt-sync';
import { validateSin } from './validator.js';

const prompt = promptSync();
const sin = prompt('Please enter your sin number: ');
console.log(`Your sin is: ${validateSin(sin) ? 'Valid' : 'Invalid'}`)