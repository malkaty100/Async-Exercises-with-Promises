///ex1
function delayedGreet(name, delay){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
     resolve(`hello ${name}`)
    },delay)
    })
    
}
delayedGreet('malka',2000).then(data=>{console.log(data)}
)
//ex2
//ex3
 function randomOperation(){
    return new Promise((resolve, reject) => {
       setTimeout(()=>{
         let num=Math.floor(Math.random()*2)
         if(num){
            resolve("success!")
         }
         else
            reject("fuilure")
       },4000)
    })
 }
 let p3=randomOperation()
 p3.then(data=>{console.log(data);})
 p3.catch(err=>{console.log(err);}
 )
 //ex4
 function raceTimers(){
    return new Promise((resolve, reject) => {
         setTimeout(()=>{
  resolve("timer A")
    },2000)
    setTimeout(()=>{
  resolve("timer B")
    },3000)
    })
   
 }
 let p4=raceTimers().then(data=>console.log(data)
 )
//ex6
function waitAll(){
    let p61=new Promise((resolve, reject) => {
        setTimeout(()=>{
    resolve("first")
        },1000)
    })
     let p62=new Promise((resolve, reject) => {
        setTimeout(()=>{
    resolve("second")
        },2000)
    })
     let p63=new Promise((resolve, reject) => {
        setTimeout(()=>{
    resolve("third")
        },3000)
    })
    return [p61,p62,p63]
}
Promise.all(waitAll()).then(data=>{console.log(data);
})
//ex8
function chainedGreetings(){
    return new Promise((resolve, reject) => {
         setTimeout(()=>{
            console.log('hi');
            
        resolve()
    },1000)
    }).then(()=>{
       return new Promise((resolve, reject) => {
             setTimeout(()=>{
                console.log('how are you');
                
        resolve()

    },2000)
        })
    }).then(()=>{
          return new Promise((resolve, reject) => {
             setTimeout(()=>{
                console.log('goodby');
                
        resolve()
    },3000)
        })
    })
   
}
chainedGreetings()
//ex9-10 EXTRA