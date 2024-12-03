let grow = document.querySelector(".grow")
let h4 = document.querySelector("h4")
let btn = document.querySelector("button")

let incrs = 0;


let flag = 0;
btn.addEventListener("click",function(){
   
    if(flag ==0){
        btn.disabled = true
        let rand = Math.floor(Math.random()*50) 
   let inter = rand*10
   let int =  setInterval(function(){
        incrs++;
        h4.innerHTML = incrs + "%"
        grow.style.width = incrs + "%"
        
        
    },50)

    setTimeout(function(){
        clearInterval(int)
        btn.disabled = false
    },5000)
    flag =1;

    }else{
        flag =0;
    }

    
    
   
})




