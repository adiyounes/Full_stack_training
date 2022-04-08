// let p= new Promise((resolve,reject)=>{
//     let a=2+1;
//     if(a==2){
//         resolve('success')
//     }else{
//         reject('failed');
//     }
// })

// p.then((message)=>{
//     console.log(message);
// })
// .catch((message)=>{
//     console.log(message);
// })

const video1=new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let a=0;
    if(a==2){
        resolve("VideoOneRecorded")
    }else{
        reject("fuck")
    }
    },1000)
})

const video2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("VideoTwoRecorded")
    },12000)
})

Promise.all([
    video1,
    video2
]).then((message)=>{
    console.log(message);
}).catch((message)=>{
    console.log(message);
})

// const promiseA = new Promise( (resolutionFunc,rejectionFunc) => {
//     resolutionFunc(777);
// });
// // At this point, "promiseA" is already settled.

// promiseA.then( (val) => console.log("asynchronous logging has val:",val) );
// setTimeout(()=>{
//     console.log("immediate logging");
// },10)

// produces output in this order:
// immediate logging
// asynchronous logging has val: 777
