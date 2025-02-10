const bill= document.querySelector(".bill");
const percent= document.querySelector(".percent");
let output=document.querySelector(".output");
let btn=document.querySelector(".btn");
btn.addEventListener('click',function(){
    let m1=parseFloat(bill.value);
    let m2=parseFloat(percent.value);
    let ans=m1+((m1*m2)/100);
    output.textContent="TOTAl:"+ans
});
