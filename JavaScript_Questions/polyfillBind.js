const  dname = {
    first: "Vasu",
    last: "Jhawar"
}

let printName = function(home, state){
    console.log(this.first + " " + this.last+ " from "+ home+ " " + state);
}

let printmyName = printName.bind(dname, "Bhopal", "MP");
printmyName();

Function.prototype.myBind = function(...args){
    let func = this;
    // let remain = args.slice(1);
    return function(...params){
        func.call(...args, ...params);  //cool
        // func.apply(args[0], [...remain, ...params]);
    }
}

let printmyName2 = printName.myBind(dname, "Mumbai");
printmyName2("Maharashtra");