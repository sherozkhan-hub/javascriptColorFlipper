const pair = ['green', 'red', 'blue', 'orange'];

const colors = document.getElementById('color');
const btn = document.querySelector('.btn');

btn.addEventListener('click', function(){

  let randomNumber = getRandomNumber();
  colors.innerHTML = pair[randomNumber];
  document.body.style.backgroundColor = pair[randomNumber];



});

function getRandomNumber(){
  return Math.floor(Math.random() * pair.length);
}
