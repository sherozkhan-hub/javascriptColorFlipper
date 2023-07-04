const pair = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C","D", "E", "F"];
const colors = document.getElementById('color');
const btn = document.querySelector('.btn');
const body = document.body;

body.addEventListener('click', function(){
  let hex = "#";
  for(let i = 0; i < 6; i++)
  {
    
    hex += pair[getRandomNumber()];
  }

  document.body.style.backgroundColor = hex;
});

function getRandomNumber(){
  return Math.floor(Math.random() * pair.length);
}

console.log("Damnn");
