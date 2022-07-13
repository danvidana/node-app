const e = require("express");

var promise = new Promise(function(resolve, reject) {
    // do a thing, possibly async, then...

    if (/* everything turned out fine */ true) {
        resolve("Stuff worked!");
    }else {
        reject(Error("It broke"));
    }
});

promise.then(function(result) {
    console.log(result); //"Stuff worked!"
}, function(err) {
    console.log(err); // Error: "It broke"
});