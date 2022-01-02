const drop = document.querySelector(".drop");
const dropBox = document.querySelector(".drop-box");
var state = false;
drop.addEventListener('click',show);
function show(){
    if(!state){
        document.querySelector(".drop i").classList.add("active");
        dropBox.classList.add("active");
        state = true;
    }else{
        document.querySelector(".drop i").classList.remove("active");
        dropBox.classList.remove("active");
        state = false;
    }
}