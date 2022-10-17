
const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft= document.querySelector('#time-left');
const score = document.querySelector('#score');

let result = 0;
let hitPosition;
let currentTime = 60;

function randomSquare(){
  squares.forEach(square =>{
    square.classList.remove('mole');
  });

  let randomSquare = squares[Math.floor(Math.random()*9)];
  console.log(randomSquare);
  randomSquare.classList.add('mole');
  hitPosition = randomSquare.id;
}

squares.forEach(square =>{
  square.addEventListener('mousedown', () => {
    if(square.id == hitPosition){
      result++;
      score.innerHTML=result;
      hitPosition=null;
    }
  })
})

function moveMole(){
  let timerId = null;
  setInterval(randomSquare,500);
}
moveMole();

function countDown(){
  currentTime--;
  timeLeft.innerHTML=currentTime;
  if (currentTime==0)
  {
    clearInterval(countDownTimerId);
    alert('Game Over! Your score is ' + result);
  }

}

let countDownTimerId=setInterval(countDown,1000);

