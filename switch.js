const color = 'yellow';
if (color === 'green') {
    console.log('You are a green friend');
}

else if (color === 'blue') {
    console.log('You are my blue friend');
}
else if (color === 'white') {

    console.log('You are my white friend');
}
else if (color === 'yellow') {

    console.log('You are my yellow friend');
}

else {
    console.log('You are a blck black friend');
}



//alternative is ['Switch']

switch (color) {
    case 'green':
        console.log('you are green firned');
        break;
    case 'blue':
        console.log('you are blue friend');
        break;
    case 'white':
        console.log('you are my white friend');
        break;
    case 'red':
        console.log('you are my red friend');
        break;
    case 'yellow':
        console.log('you are my yellow friend');
        break;
    default:
        console.log('you are a no color firned');
}

