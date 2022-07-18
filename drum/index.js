var l=document.querySelectorAll(".drum").length;
for (var i=0;i<l;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
      var Inner=this.innerHTML;
      audiochecking(Inner);
      animation(Inner);
     
    })
}
document.addEventListener("keydown",function(event){
    audiochecking(event.key);
    console.log(event);
    animation(event.key);
})
function audiochecking(Inner){
    switch(Inner){
        case "w":
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio=new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio=new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
      } 
}
function animation(val){
    var location=document.querySelector("."+val);
    location.classList.add("pressed");
    setTimeout(function(){
        location.classList.remove("pressed");
    },100);
}
