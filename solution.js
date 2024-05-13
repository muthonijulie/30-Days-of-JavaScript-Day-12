  //promises
//   const p=new Promise((resolve,reject)=>{
//     const sum=2+1;
//     if(sum===5){
//         resolve("SUCCESS");
//     }
//     else{
//         reject("FAILED");
//     }
//   });
 // p.then(message=>console.log(message)).catch(message=>console.log(message));

  //promise.all()
  const p1=new Promise((resolve,reject)=>{
    const sum=2+3;
    if(sum===5){
        resolve(sum);
    }
    else{
        reject("FAILED");
    }
  });
  const p2=new Promise((resolve,reject)=>{
    const sum=5+2;
    if(sum===7){
        resolve(sum);
    }
    else{
        reject("FAILED");
    }
  });
 const p3= Promise.all([p1,p2]);
 p3.then(([response1,response2])=>console.log(response1+response2))
 .catch((response)=>console.log(response));

 //solution
 function addTwoPromises(promise1,promise2){
    return Promise.all([promise1,promise2]).then(([result1,result2])=>result1+result2);
 }
 promise1 = new Promise(resolve =>
 setTimeout(() => resolve(10), 50));
 promise2 = new Promise(resolve =>
 setTimeout(() => resolve(-12), 30));

 addTwoPromises(promise1,promise2)
 .then((sum)=>console.log(sum))
 .catch((error)=>console.log(error));