
console.log('utils.js running')

const square = (x) => x * x;
export const add = (a,b) => a + b;
const subtract = (a,b) => a-b;

export {square, subtract as default} 
//could use export default var here
//this is not an object. 
//export/import only works when webpack installed. 
//Cannot have more than one default export


