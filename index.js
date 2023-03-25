
var arrayBtn = document.querySelectorAll(".drum")
var arrayLength = arrayBtn.length;
for(var i = 0; i < arrayLength; i++)
{
  //arrayBtn[i].addEventListener("click",handelClick);
  arrayBtn[i].addEventListener("click", function(){
    var buttonInnerHTML = this.innerHTML;
    buttonAnimation(this.innerHTML);
    switch (buttonInnerHTML) {
      case "w":
          var tom1 = new Audio("sounds/tom-1.mp3");
          tom1.play();
        break;

        case "a":
          var tom2 = new Audio("sounds/tom-2.mp3");
          tom2.play();
        break;

        case "s":
          var tom3 = new Audio("sounds/tom-3.mp3");
          tom3.play();
        break;

        case "d":
          var tom4 = new Audio("sounds/tom-4.mp3");
          tom4.play();
        break;

        case "j":
              var snare = new Audio("sounds/snare.mp3");
              snare.play();
        break;

        case "k":
          var crash = new Audio("sounds/crash.mp3");
          crash.play();
        break;

        case "l":
          var kickBass = new Audio("sounds/kick-bass.mp3");
          kickBass.play();
        break;

        default:


    }

  });
}
document.addEventListener("keydown", function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key){
  switch (key) {
      case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
      break;

      case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
      break;

      case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
      break;

      case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
      break;

      case "j":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
      break;

      case "k":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
      break;

      case "l":
        var kickBass = new Audio("sounds/kick-bass.mp3");
        kickBass.play();
      break;
    default:

  }
}

function buttonAnimation(currentKey){
  var currentButton = document.querySelector("." + currentKey);
  currentButton.classList.add("pressed");
  setTimeout(function(){
    currentButton.classList.remove("pressed");
  }, 100);
}
// function handelClick(){
  // alert("I got clicked!");
// }
//btn1.onClicked = handelClick();


// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();

// arrayBtn[i].addEventListener("click",function(){
//   this.style.color = "white";
