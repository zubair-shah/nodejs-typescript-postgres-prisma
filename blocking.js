const fs = require('fs/promises');
// const fs = require('fs');
const path = require('path');


//its a blockig code

// const read = fs.readFileSync(path.join(__dirname, 'package.json'), 'utf8'); //it blocks if file size is big
// console.log(read)
// console.log('hi')


// its a non blocking code
const read = async () => {
    const result = fs.readFile(path.join(__dirname, 'package.json'), 'utf8');
    return result
}
read().then( f => console.log(f))
console.log("hi i am async")