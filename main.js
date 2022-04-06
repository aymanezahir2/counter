// amm buttons i need 
const btn_minus = document.getElementById("minus");
const btn_reset = document.getElementById("return");
const btn_plus = document.getElementById("plus");
// change
const change = document.getElementsByClassName("current-change")[0]



function MyFunction(){
    let i =0
    btn_minus.addEventListener("click",function(){
        i--
        change.textContent=i
        if(i>0){
            change.style.color="green"
        }else if(i<0){
            change.style.color="red"
        }else{
            change.style.color="#222222"
        }
        return i
    })
    btn_reset.addEventListener("click",function(){
        i=0
        change.textContent=i
        if(i>0){
            change.style.color="green"
        }else if(i<0){
            change.style.color="red"
        }else{
            change.style.color="#222222"
        }
        return i
    })
    btn_plus.addEventListener("click",function(){
        i++
        change.textContent=i
        if(i>0){
            change.style.color="green"
        }else if(i<0){
            change.style.color="red"
        }else{
            change.style.color="#222222"
        }
        return i
    })
  
}
MyFunction()