const myObj = {
    name : "Roger0",
    hobbie : ["eat", "sleep", "code", "singing0"],
    hello: function() {
        console.log("HOLLO");
    }    
}

console.log(myObj);
console.log(myObj.name);
myObj.hello()
console.log(typeof myObj);

const sendJSON = JSON.stringify(myObj);
console.log(sendJSON);
console.log(typeof sendJSON);
console.log(sendJSON.name);
 
const receiveJSON = JSON.parse(sendJSON);
console.log(receiveJSON);
console.log(typeof receiveJSON);