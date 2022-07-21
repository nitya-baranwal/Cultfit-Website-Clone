

let img_arr = ["https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:595/dpr_2/image/vm/5202889c-e166-40eb-8a1e-e3cf3aa57632.png",
"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:595/dpr_2/image/vm/dc6538da-9ee5-4326-ad26-f3cee3a6322e.png"];

let crauser = document.querySelector("#crauser");

// let left = document.querySelector("#left-btn");

// let right = document.querySelector("#right-btn");

let img_state = 0;

document.querySelector("#right-btn").addEventListener("click",function(){
  // event.preventDefault();
  crauselRightFunc();
});

function crauselRightFunc(){


  console.log("right");
  img_state++;

  if(img_state == img_arr.length){
    img_state = 0;
  }
  
  crauser.src = img_arr[img_state];
  
  console.log(img_state);
};


document.querySelector("#left-btn").addEventListener("click",function(){
  // event.preventDefault();
  crauselLeftFunc();
});

function crauselLeftFunc(){


  console.log("left");
  img_state--;

  if(img_state < 0){
    img_state = img_arr.length-1;
  }
  
  crauser.src = img_arr[img_state];
  
  console.log(img_state);
};



var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
