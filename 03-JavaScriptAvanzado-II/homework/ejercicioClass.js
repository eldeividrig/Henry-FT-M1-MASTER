/*function producto(a) {
    return function(b) {
        return a*b;
    }
}

var producto2 = producto(2);
var producto3 = producto(3)

for (let i = 0; i <= 10; i++) {
    console.log(producto2([i])); 
    console.log(producto3([i])); 
}*/

   
/*function contador(a) {
    return function() {
        return a + 1;
    }
}

var contador1 = contador(0);
console.log(contador1());
console.log(contador1());
console.log(contador1());*/

const cb = function(x) {
    return x * 2;
};

function cacheFunction(cb) {
    var cache = {};    
    return function(arg) {
      if (cache.hasOwnProperty(arg)) {
        console.log(cache);
        return cache[arg];
      }else{
        
        cache[arg] = cb(arg);
        console.log(cache);
        return cache[arg];        
      }      
    }  
}

const cachedFunction = cacheFunction(cb);

console.log(cachedFunction(10));
console.log(cachedFunction(5));
console.log(cachedFunction(5));
console.log(cachedFunction(6));
