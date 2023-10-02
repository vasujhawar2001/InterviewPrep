// Write a add function which can have multiple functions args
// add(1)(2)(3) -> 6
// add(5)(4)(1)() -> 10
// add(1)(2)(3)(24)() -> 30

function add(a){
    return function(b){
        if(b) return add(a+b);
        return a;
    }
}

console.log(add(1,4)(2)(3)())