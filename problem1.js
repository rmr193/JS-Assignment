function radiansToDegree(radians) {
    return (radians * (180 / Math.PI)).toFixed(2);
}

let radians = parseFloat(prompt('Enter radians:'));

let degrees = radiansToDegree(radians);

console.log(`${degrees}`);
