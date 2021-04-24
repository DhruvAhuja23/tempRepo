const EventEmmitter=require('events');

const customEmit=new EventEmmitter()
customEmit.on('response',()=>{
console.log('data recieved');

});
customEmit.emit('response')