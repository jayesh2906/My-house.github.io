//  Door handle
const doorToggle = document.querySelector('.doorToggle');
const leftGate = document.querySelector('.left');
const rightGate = document.querySelector('.right');

doorToggle.addEventListener('click', () => {
   leftGate.classList.toggle('open-door-l');
   rightGate.classList.toggle('open-door-r');
   doorToggle.classList.toggle('open-door');

   if(doorToggle.classList.contains('open-door')){
   doorToggle.innerHTML = 'Close Gate';
   }else{
       doorToggle.innerHTML = 'Open Gate';
   }
})


// Slides handle
const slideToggle = document.querySelector('.slideToggle');
const rightSlide = document.querySelector('.right-slide');
const rightSlide1 = document.querySelector('.right-slide1');
const rightSlide2 = document.querySelector('.right-slide2');

slideToggle.addEventListener('click', () => {
   rightSlide.classList.toggle('open-slide');
   rightSlide1.classList.toggle('open-slide');
   rightSlide2.classList.toggle('open-slide');
   slideToggle.classList.toggle('slide-window');

   if(slideToggle.classList.contains('slide-window')){
   slideToggle.innerHTML = 'Close Slide';
   }else{
       slideToggle.innerHTML = 'Open Slide';
   }
})


// Right side windows handle
const windowToggle = document.querySelector('.windowToggle');
const leftWindow = document.querySelector('.left-small-window');
const rightWindow = document.querySelector('.right-small-window');

const leftWindow1 = document.querySelector('.left-large-window');
const rightWindow1 = document.querySelector('.right-large-window');

const leftWindow2 = document.querySelector('.left-small-window1');
const rightWindow2 = document.querySelector('.right-small-window1');

const leftWindow3 = document.querySelector('.left-large-window1');
const rightWindow3 = document.querySelector('.right-large-window1');

windowToggle.addEventListener('click', () => {
   leftWindow.classList.toggle('open-window-l');
   rightWindow.classList.toggle('open-window-r');

   leftWindow1.classList.toggle('open-window-l');
   rightWindow1.classList.toggle('open-window-r');

   leftWindow2.classList.toggle('open-window-l');
   rightWindow2.classList.toggle('open-window-r');

   leftWindow3.classList.toggle('open-window-l');
   rightWindow3.classList.toggle('open-window-r');

   windowToggle.classList.toggle('open-window');

   if(windowToggle.classList.contains('open-window')){
   windowToggle.innerHTML = 'Close Window';
   }else{
       windowToggle.innerHTML = 'Open Window';
   }
})


// Rotate 360 degree //
const rotateToggle = document.querySelector('.rotateToggle');
const box = document.querySelector('.box');

rotateToggle.addEventListener('click', () => {
box.style.animation = "rotate 7s linear infinite";
rotateToggle.classList.toggle('rotate3d');

if(rotateToggle.classList.contains('rotate3d')){
   rotateToggle.innerHTML = 'Rotate Off';
   }else{
       rotateToggle.innerHTML = 'Rotate 360';
       box.style.animation = "";
   }
})


// Light and dark mode
function toggleClass() {
    const body = document.querySelector('body');
    const topPart = document.querySelector('.top-part');
    body.classList.toggle('light');
    topPart.classList.toggle('top-part-light'); 
}
