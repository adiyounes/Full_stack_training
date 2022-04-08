// const call_3 = require("./export.js");

// ca.call_2();
// ca.call();
// call_3();

// const fs=require('fs');
// const data=fs.readFileSync('./read-me.txt', {encoding:'utf8', flag:'r'})
// fs.writeFileSync('./read-me.txt', "\nhello motherfucker",{encoding:'utf-8',flag:'w'})
// console.log(data);

const path=require('path');
const call=require('./main.js');
const funcpath=path.join(__dirname,"css.txt")
console.log(funcpath);
const relation=path.relative("import.js","C:\Users\Surface\Desktop\MC\Full_stack_training\Home_Works\JS_Home_Work_3.js");
console.log(relation);
call.call();
