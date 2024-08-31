const countainer = document.getElementById('countainer');
const text=document.getElementById('text');
const totaltime=16000;
const breathTime = 4000;
const holdTime = 4800;
breathAnimation();
function breathAnimation(){
    text.innerText='Breath In!';
    countainer.className='countainer grow';
    setTimeout(() =>{
      text.innerText='Hold';
    
    setTimeout(() =>{
    text.innerText='Breath out!';
    countainer.className='countainer shrink';
    },holdTime)
 }, breathTime)
}
setInterval(breathAnimation,totaltime);
