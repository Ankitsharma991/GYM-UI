
var height = document.getElementsByClassName("").value;
var weight = document.getElementsById("exampleInputPassword1height").value;
var Btn = document.getElementsByClassName("btn").addEventListener("click",()=>{
    var bmi=weight/(height*height);
    alert(`Your BMI is ${bmi}`);
});

