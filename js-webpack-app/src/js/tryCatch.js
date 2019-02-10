const tryCatch = (opts) => {
    return (...args) => {
        try {
            opts.tryer(args);
        } catch(e) {
            return opts.catcher(e);
        }
    }
}

const add=tryCatch({
    tryer: (args) => { console.log('hello try',args)} ,
    catcher: (e) => {console.log('Error:',e)} 
})

var globalx= 1;
change = (function() {
    var globalx = 2;
})();

console.log(globalx)
