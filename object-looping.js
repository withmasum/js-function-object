var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25,
    shoes: 2
}
// Array vs object
var shoppingItems = ['books', 'sunglass', 'shoes', 'pen'];
var friendsAge = [12, 45, 78, 12, 32, 14];
var friendAge = {

    rahim: 12,
    samad: 45,
    karim: 78,
    jamal: 12,
    robi: 32,
    kazi: 14
}


var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25,
    shoes: 2,
    bottle: 1,
}

const keys = Object.keys(shoppingCart);
console.log(keys);

const values = Object.values(shoppingCart);
console.log(values);


//var keys = ['books', 'sunglass', 'shoes', 'pen']; array 
for (var i = 0; i < keys.length; i++) {
    var propertyName = keys[i];
    console.log(propertyName);
}


//for in loop 

for (var propertyName in shoppingCart) {

    console.log(propertyName);
}






