const{readFileSync,writeFileSync}=require(`fs`);
const first =readFileSync('./content/first.txt','utf8');//To read a file 
console.log(first);
const second=writeFileSync('./content/second.txt','This is Second file',{flag:'a' });//To append to a alreading existing file we use flag and set it as a which means append
