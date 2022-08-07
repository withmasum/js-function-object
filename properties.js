var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25
}

// when you know the property name, use dot notaion 
var penCount = shoppingCart.pen

//alternative system 
// when you know the property name, use dot notaion 

var penCount = shoppingCart['pen']
console.log(shoppingCart);


// How to find object keys or properties name 
var properties = Object.keys(shoppingCart);
console.log(properties);

// How to find object porperties values
var propertyValues = Object.values(shoppingCart);
console.log(propertyValues);

var propertyName = 'mouse';
var propertyValue = shoppingCart[propertyName]
console.log('here is the name of property :', propertyName, propertyValue);


// set property values 

shoppingCart.mouse = 15;
shoppingCart['mouse'] = 29;
console.log(shoppingCart);

shoppingCart[propertyName] = 89;
console.log(shoppingCart);