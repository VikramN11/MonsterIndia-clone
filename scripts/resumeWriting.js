import {Jobs} from "./jobserchhtml.js"
document.getElementById("jobloc").innerHTML=Jobs()

let btn1=document.getElementById("Rbtn")
btn1.addEventListener("click",()=>{
    let month=document.getElementById("month1").innerText
    let price=document.getElementById("price1").innerText
    let data={
        month,
        price
    }
    console.log(data)
    window.location.href="#"
});

function rrr(){
    return `<div id="div">
    <img src="https://media.monsterindia.com/trex/public/default/images/career-services/career-contactUs/success.svg" alt="">
    <p>We’ve received your request and will call you back within 48 hours.</p>
    </div>`
}
let button=document.getElementById("callm")
button.addEventListener("click",()=>{
    callme()

})

// function callme(){
//     let cont=document.getElementById("rigt")
    
//     let name=document.getElementById("name").value
//     let mobile=document.getElementById("mobile").value
//     let email=document.getElementById("email").value
    
//     if(name==""||mobile==""|| email==""){
//         alert("Fill All Data")
//     }
//     else{
//         cont.innerHTML=null
//         cont.innerHTML=rrr()
//         // AddData(name,email,mobile)
//     }
//     // console.log(data)
// }
// // let AddData=async(name,email,mobile)=>{
//     let data={
//        name,
//        email,
//        mobile,
//        id:Date.now()
//     }
//     let res=await fetch(`https://fierce-gorge-77743.herokuapp.com/userCall`,{
//         method:"POST",
//         body:JSON.stringify(data),
//         headers:{
//             "Content-Type":"application/json"
//         }
        
//     })
//     res=await res.json()
//     console.log(res)

// }


document.getElementById("f").addEventListener("click",()=>{
    window.location.href="http://127.0.0.1:5501/enormous-weight-975/index.html"
    console.log("feature")
})

document.getElementById("resume").addEventListener("click",()=>{
    window.location.href="http://127.0.0.1:5501/enormous-weight-975/resumewritting.html"
    console.log("kkkkk")
})
document.getElementById("career").addEventListener("click",()=>{
    // window.location.href="../index.html"
    console.log("career")
})
document.getElementById("highlighter").addEventListener("click",()=>{
    window.location.href="http://127.0.0.1:5501/enormous-weight-975/profileHilighter.html"
    console.log("high")
})
document.getElementById("linkedIn").addEventListener("click",()=>{
    // window.location.href="../index.html"
    console.log("linkdn")
})
document.getElementById("mock").addEventListener("click",()=>{
    // window.location.href="../index.html"
    console.log("mock")
})


let getData=async()=>{
    let todo=document.getElementById('todo')
    let res=await fetch("https://fierce-gorge-77743.herokuapp.com/image")
    let data=await res.json();
    return data
}
let images= await getData()
let imgtag1=document.getElementById("img1")
let imgtag2=document.getElementById("img2")
let imgtag3=document.getElementById("img3")
let imgNum=0;
let Gbtn1=document.getElementById("btt1");
Gbtn1.addEventListener("click",()=>{
    
    if(imgNum>2){
        imgtag1.src=images[imgNum--]
    imgtag2.src=images[imgNum--]
    imgtag3.src=images[imgNum--]
    }
    if(imgNum===0){
        Gbtn1.style.backgroundColor="#72619f"
    }
})


let Gbbt=document.getElementById("btt2")
Gbbt.addEventListener("click",()=>{
    if(imgNum<images.length-2){
        imgtag1.src=images[imgNum++]
    imgtag2.src=images[imgNum++]
    imgtag3.src=images[imgNum++]
    }
    if(imgNum===images.length-3){
        Gbbt.style.backgroundColor="#72619f"
    }
})
