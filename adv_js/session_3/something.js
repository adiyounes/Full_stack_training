// setTimeout(()=>{
//     console.log("hi");
// },2000);
// console.log("gogogogog");
// setTimeout(() => {
//     console.log("hawai");
// }, 1000);

// setTimeout(() => {
//     console.log("no hi");
//     setTimeout(() => {
//         console.log("hi");
//     }, 5000);
// }, 5000);
// const {readFile,writeFile}=require("fs");
// readFile('file.txt','utf-8',(err,text)=>{
//     console.log(text);
//     writeFile('file.txt')
// })
// console.log("hi");
// ----------------------------------------------------------------------
// const myTicket= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(msg={
//             content:"how may i help u",
//             num: "ticket number 3"
//         });
//     },3000)
// });
// myTicket.then((res)=>{
//     console.log("hi,",msg.content," ");
// })
let myFirstPromise=new Promise((resolve,reject)=>{
    if(x=1){
        setTimeout(() => {
            resolve("Success")
        }, 3000);
    }else{
        setTimeout(() => {
            reject("failure")
        }, 2000);
    }

})
let x=1;
myFirstPromise.then((successMessage)=>{
    console.log("Yay "+ successMessage);
}).catch((err)=>{
    console.log("nah "+err);
})