 const { forEach, map } = require('./index');

 let sum = 0;
 forEach([1, 2, 3], value => {
    sum += value;
 })
 console.log(sum);

//  if(sum !== 6){
//     throw new Error('Expected summary Array to equal 6')
//  }

const result = map([1, 2, 3], value => {
    return value * 2;
})

if(result[0] !==2 ){
    throw new Error (`Expected to find 2, but found ${result[0]}`);
}
if(result[1] !==4 ){
    throw new Error (`Expected to find 2, but found ${result[1]}`);
}
if(result[2] !==6 ){
    throw new Error (`Expected to find 2, but found ${result[2]}`);
}