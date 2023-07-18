const btndecrement=document.getElementById("btndecrement");
const btnincrement=document.getElementById("btnincrement");
const valuebtn=document.getElementById("valuebtn");
const btnReset=document.getElementById("btnReset");

btndecrement.addEventListener("click",()=>{
    const value =Number(valuebtn.innerText);
    if (value>0) {

        valuebtn.innerText = value -1;
    }else{
        alert("Negative Value not allowed");
    }
    

});
btnincrement.addEventListener("click",()=>{
    const value =Number(valuebtn.innerText);
    if (value>=10) {
        alert("10+ values are not allowed");
    } else {
      valuebtn.innerText = value + 1;
    }                                                                                                                                               
    

});
btnReset.addEventListener
    ("click", () => {
        valuebtn.innerText = 0;
});
