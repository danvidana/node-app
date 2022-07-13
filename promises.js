const e = require("express");

// 1. Creating Promise
var promise = new Promise(function(resolve, reject) {
    // do a thing, possibly async, then...

    if (/* everything turned out fine */) {
        resolve("Stuff worked!");
    }else {
        reject(Error("It broke"));
    }
});

// 2. Using Promise
promise.then(function(result) {
    console.log(result); //"Stuff worked!"
}, function(err) {
    console.log(err); // Error: "It broke"
});

function get(url) {
    // Return a new promise.
    return new Promise(function(resolve, reject) {
        // Do the usual XHR stuff
        var req = new XMLHttpRequest();
        req.open('GET', url);

        req.onload = function() {
            // This is called even on 404 etc
            // so check the status
            if (req.status == 200) {
                // Resolve the promise with the response text
                resolve(req.response);
            } else {
                // Otherwise reject with the status text
                // Which will hopefully be a meaninful error
                reject(Error(req.statusText));
            }
        };

        // Handle network errors
        req.onerror = function() {
            reject(Error("Network Error"));
        };

        // Make the request
        req.send();
    });
}

get('story.json').then(function(response) {
    console.log("Success!", response);
}, function(error) {
    console.log("Failed!", error);
})