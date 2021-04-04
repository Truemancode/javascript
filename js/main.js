"use strict";

{

const images = [
  "img/001.png",
  "img/002.png",
  "img/003.png",
  "img/004.png",
];


let currindex = 0 ;

const mainImage = document.getElementById("main");
mainImage.src = images[currindex];

images.forEach((image,index)=>{
  const img = document.createElement("img");
  img.src = image;

  const li = document.createElement("li");
  if(index === currindex){
    li.classList.add("cur");
  }

  li.addEventListener("click",()=>{
    mainImage.src = image;
    const thum = document.querySelectorAll(".thum > li")
    thum[currindex].classList.remove("cur");
    currindex = index;
    thum[currindex].classList.add("cur");
  });


  li.appendChild(img);
  document.querySelector(".thum").appendChild(li);
});


const next = document.getElementById("next");
next.addEventListener("click",()=>{
  let target = currindex + 1 ;
  if(target === images.length){
    target = 0;
  }
  document.querySelectorAll(".thum > li")[target].click();
});

const prev = document.getElementById("prev");
prev.addEventListener("click",()=>{
  let target = currindex - 1 ;
  if(target < 0){
    target = images.length -1;
  }
  document.querySelectorAll(".thum > li")[target].click();
});

let timeout;

function playSlide(){
  timeout = setTimeout(()=>{
    next.click();
    playSlide();
  },1000);
}

let isPlaying = false;

const play = document.getElementById("play");
play.addEventListener("click",()=>{
if(isPlaying === false){
  playSlide();
play.textContent ="Pause";
}else{
  clearTimeout(timeout);
  play.textContent ="Start";
}
isPlaying = !isPlaying;
});

}

