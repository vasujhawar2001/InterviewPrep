///https://roadsidecoder.hashnode.dev/javascript-interview-questions-currying-output-based-questions-partial-application-and-more

// Curry Function Implementation
// In this lab, you will implement a curry function that takes a given function as its argument and returns a curried version of that function. A curried function is a function that accepts a fewer or equal number of parameters as the original function and returns either another curried function or the same value the original function would have returned.

// To better understand this concept, let's take a look at some examples:

// Original function: sum(1, 2, 3) would return 6.
// Curried function: csum(1)(2)(3) should also return 6. You can also call the curried function as csum(1)(2, 3), csum(1, 2)(3), or csum(1, 2, 3). All possible methods of calling the curried function should return the same value as the original function.
// Here are a few more examples for clarity:

// Example 1:

// Input:

// function sum(a, b, c) {
//   return a + b + c;
// }
// const csum = curry(sum);
// Output:

// csum(1)(2)(3) === 6; // true
// Explanation: The curried function csum(1)(2)(3) should return the same value as sum(1, 2, 3), which is 6.

// Example 2:

// Input:

// function sum(a, b, c) {
//   return a + b + c;
// }
// const csum = curry(sum);
// Output:

// csum(1, 2)(3) === 6; // true
// Explanation: The curried function csum(1,2)(3) should return the same value as sum(1, 2, 3), which is 6.

// Example 3:

// Input:

// function sum(a, b, c) {
//   return a + b + c;
// }
// const csum = curry(sum);
// Output:

// csum()()(1, 2, 3) === 6; // true
// Explanation: You should be able to pass the parameters in any way, including all at once or none at all. The curried function csum()()(1, 2, 3) should return the same value as sum(1, 2, 3), which is 6.

const curry = function(fn) {

    //start currying function
	return function curried(...args) {
        // basically if args.length<fn.length, then we need to repeat this process until we
        //cover all the arguments
		if (args.length < fn.length) {
            return function (...args2) {
                return curried(...args, ...args2)
            }
		}
        else{
            //If the total number of arguments is equal or more than the expected
            // number, apply the original function with the collected arguments.
            return fn(...args);
        }
	}
}

function sum(a,b,c, d){
    return a+b+c+d;
}
const csum = curry(sum);

console.log(csum(1,2,3,4))
console.log(csum(2)(3)(4,5));