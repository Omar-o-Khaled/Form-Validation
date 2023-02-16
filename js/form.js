let inputArray=document.querySelectorAll("input");
let allSmall=document.querySelectorAll("small");
let container=document.querySelector(".container")
let btn=document.querySelector('[type="submit"]');

btn.addEventListener("click",checkValues)
function checkValues(event){
    event.preventDefault()
    showError()
    done()
}
function greenborder(ele){
    ele.style.borderColor="#bdbd"
}
function redborder(ele){
    ele.style.borderColor="#b71c1c"
}
function showError(){
    for(let i=0;i<inputArray.length;i++){
        if((inputArray[i].value).trim()!==""){
            greenborder(inputArray[i]);
            allSmall[i].style.cssText="visibility: hidden;"
            if(inputArray[i].id==="username"){
                checkname(i)
            }else if(inputArray[i].id==="Email"){
                checkemail(i)
            }else if(inputArray[i].id==="Password"){
                checkpass(i)
            }else if(inputArray[i].id==="confirm"){
                checkconfirm(i)
            }
        }else{
            arraysmall(i)
        }
    }
}
function arraysmall(index){
    redborder(inputArray[index]);
    allSmall[index].style.cssText="visibility: visible;"
}
function checkname(i){
    if(inputArray[i].value.length>=3 &&  !(Math.trunc(inputArray[i].value))){
    }else{
        arraysmall(i)
    }
}
function checkemail(i){
    if(!(/\w+@\w+\.\w+/.test(inputArray[i].value))){
        arraysmall(i)
    }
}
function checkpass(i){
    if(!(inputArray[i].value.length>=6)){
        arraysmall(i)
    }
}
function checkconfirm(i){
    if(inputArray[i].value.length>=6 && inputArray[i].value==inputArray[i-1].value){
    }else{
        arraysmall(i)
    }
}
function done(){
    let checkhidden=[]
    for(let k=0;k<allSmall.length;k++){
        if(allSmall[k].style.visibility==="hidden"){
            // console.log(allSmall[k])
            checkhidden.push(allSmall[k].style.visibility)
        }
    }
    if(checkhidden.length==4){
        congatulation()
    }else{
        badnews()
    }
}
function congatulation(){
    btn.style.background="#4CAF50";
    container.style.background="#F5F5F5";
}
function badnews(){
    btn.style.background="#b71c1c";
    container.style.background="white";
}
