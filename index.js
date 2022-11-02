// import fireApp from "firebase.mjs"

// console.log(fireApp);

setTimeout(()=>{
    location.reload();
},5000);



(async () => {
    
    const fireApp = await import('./firebase.js');
    
  })();

