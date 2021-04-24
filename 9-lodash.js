const _ =require('lodash')
const Item= [1,[2,[3,4]]]
const newItem=_.flattenDeep(Item)
console.log(newItem);
console.log('hello');