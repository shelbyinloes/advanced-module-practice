import add from "./modules/add";
import subtract from "./modules/subtract";
import multiply from "./modules/multiply";
import divide from "./modules/divide";
import {addTen, addFive, addOne} from "./modules/addNumbers";
import {subtractOne, subtractFive, subtractTen} from "./modules/subtractNumbers";

const number1 = 393;
const number2 = 238;

let answer = add(number1,number2);
console.log('add ' + answer);

answer = subtract(number1,number2);
console.log('subtract ' + answer);

answer = multiply(number1,number2);
console.log('multiply ' + answer);

answer = divide(number1,number2);
console.log('divide ' + answer);

answer = addTen(number1);
console.log('add ten ' + answer);

answer = addFive(number1);
console.log('add five ' + answer);

answer = addOne(number1);
console.log('add one ' + answer);

answer = subtractOne(number1);
console.log('subtract one ' + answer);

answer = subtractFive(number1);
console.log('subtract five ' + answer);

answer = subtractTen(number1);
console.log('subtract ten ' + answer);
