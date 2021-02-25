// Get the modal
var modal = document.querySelector(".rules__modal");

// Get the button that opens the modal
var btn = document.querySelector(".rules__button");

// Get the <close_btn> element that closes the modal
var close_btn = document.querySelector(".close__button");

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <close_btn> (x), close the modal
close_btn.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var random_number = 0;
var score_counter = localStorage.getItem("Score Counter");
document.querySelector('.score__number').innerHTML = score_counter;

function generateRandomPick() {
  random_number = Math.floor(Math.random() * 5);
  var house_pick_wrapper = document.querySelectorAll('.wrapper')[6];
  var house_pick = document.querySelectorAll('.circle')[6];
  if(random_number == 0){
    house_pick.innerHTML = "<img src='images/icon-spock.svg' alt=''>";
    house_pick_wrapper.style.background = 'var(--cyan_gradient)';
    house_pick.style.background = 'white';

    var outcome = document.querySelector('.outcome');
    outcome.style.display = 'block';
    if(yourPick == 0){
      outcome.innerHTML += "<div>tie</div><div class='button'><button onclick='playAgain()'>play again</button></div>";
    } else if((yourPick == 1) || (yourPick == 4)){
      outcome.innerHTML += "<div>you lose</div><div class='button'><button onclick='playAgain()'>play again</button></div>";
      score_counter--;
      document.querySelector('.score__number').innerHTML = score_counter;
      localStorage.getItem("Score Counter");
      localStorage.setItem("Score Counter", score_counter);
    } else {
      outcome.innerHTML += "<div>you win</div><div class='button'><button onclick='playAgain()'>play again</button></div>";
      score_counter++;
      document.querySelector('.score__number').innerHTML = score_counter;
      localStorage.getItem("Score Counter");
      localStorage.setItem("Score Counter", score_counter);
    }

  } else if(random_number == 1){
    house_pick.innerHTML = "<img src='images/icon-scissors.svg' alt=''>";
    house_pick_wrapper.style.background = 'var(--yellow_gradient)';
    house_pick.style.background = 'white';

    var outcome = document.querySelector('.outcome');
    outcome.style.display = 'block';
    if(yourPick == 1){
      outcome.innerHTML += "<div>tie</div><div class='button'><button onclick='playAgain()'>play again</button></div>";
    } else if((yourPick == 2) || (yourPick == 3)){
      outcome.innerHTML += "<div>you lose</div><div class='button'><button onclick='playAgain()'>play again</button></div>";
      score_counter--;
      document.querySelector('.score__number').innerHTML = score_counter;
      localStorage.getItem("Score Counter");
      localStorage.setItem("Score Counter", score_counter);
    } else {
      outcome.innerHTML += "<div>you win</div><div class='button'><button onclick='playAgain()'>play again</button></div>";
      score_counter++;
      document.querySelector('.score__number').innerHTML = score_counter;
      localStorage.getItem("Score Counter");
      localStorage.setItem("Score Counter", score_counter);
    }
    
  } else if(random_number == 2){
    house_pick.innerHTML = "<img src='images/icon-paper.svg' alt=''>";
    house_pick_wrapper.style.background = 'var(--blue_gradient)';
    house_pick.style.background = 'white';

    var outcome = document.querySelector('.outcome');
    outcome.style.display = 'block';
    if(yourPick == 2){
      outcome.innerHTML += "<div>tie</div><div class='button'><button onclick='playAgain()'>play again</button></div>";
    } else if((yourPick == 0) || (yourPick == 4)){
      outcome.innerHTML += "<div>you lose</div><div class='button'><button onclick='playAgain()'>play again</button></div>";
      score_counter--;
      document.querySelector('.score__number').innerHTML = score_counter;
      localStorage.getItem("Score Counter");
      localStorage.setItem("Score Counter", score_counter);
    } else {
      outcome.innerHTML += "<div>you win</div><div class='button'><button onclick='playAgain()'>play again</button></div>";
      score_counter++;
      document.querySelector('.score__number').innerHTML = score_counter;
      localStorage.getItem("Score Counter");
      localStorage.setItem("Score Counter", score_counter);
    }
    
  } else if(random_number == 3){
    house_pick.innerHTML = "<img src='images/icon-lizard.svg' alt=''>";
    house_pick_wrapper.style.background = 'var(--purple_gradient)';
    house_pick.style.background = 'white';

    var outcome = document.querySelector('.outcome');
    outcome.style.display = 'block';
    if(yourPick == 3){
      outcome.innerHTML += "<div>tie</div><div class='button'><button onclick='playAgain()'>play again</button></div>";
    } else if((yourPick == 0) || (yourPick == 2)){
      outcome.innerHTML += "<div>you lose</div><div class='button'><button onclick='playAgain()'>play again</button></div>";
      score_counter--;
      document.querySelector('.score__number').innerHTML = score_counter;
      localStorage.getItem("Score Counter");
      localStorage.setItem("Score Counter", score_counter);
    } else {
      outcome.innerHTML += "<div>you win</div><div class='button'><button onclick='playAgain()'>play again</button></div>";
      score_counter++;
      document.querySelector('.score__number').innerHTML = score_counter;
      localStorage.getItem("Score Counter");
      localStorage.setItem("Score Counter", score_counter);
    }
    
  } else {
    house_pick.innerHTML = "<img src='images/icon-rock.svg' alt=''>";
    house_pick_wrapper.style.background = 'var(--red_gradient)';
    house_pick.style.background = 'white';

    var outcome = document.querySelector('.outcome');
    outcome.style.display = 'block';
    if(yourPick == 4){
      outcome.innerHTML += "<div>tie</div><div class='button'><button onclick='playAgain()'>play again</button></div>";
    } else if((yourPick == 3) || (yourPick == 1)){
      outcome.innerHTML += "<div>you lose</div><div class='button'><button onclick='playAgain()'>play again</button></div>";
      score_counter--;
      document.querySelector('.score__number').innerHTML = score_counter;
      localStorage.getItem("Score Counter");
      localStorage.setItem("Score Counter", score_counter);
    } else {
      outcome.innerHTML += "<div>you win</div><div class='button'><button onclick='playAgain()'>play again</button></div>";
      score_counter++;
      document.querySelector('.score__number').innerHTML = score_counter;
      localStorage.getItem("Score Counter");
      localStorage.setItem("Score Counter", score_counter);
    }
  }
}

var game_section = document.querySelector('.game');
var duel_section = document.querySelector('.duel');
var your_pick = document.querySelectorAll('.circle')[5];
var your_pick_wrapper = document.querySelectorAll('.wrapper')[5];
var yourPick = 0;

function iconSpock(){ 
  yourPick = 0;
  game_section.style.display = 'none';
  duel_section.style.display = 'flex';
  your_pick.innerHTML = "<img src='images/icon-spock.svg' alt=''>";
  your_pick_wrapper.style.background = 'var(--cyan_gradient)';

  setTimeout(() => { generateRandomPick();}, 1000);
}
function iconScissors(){ 
  yourPick = 1;
  game_section.style.display = 'none';
  duel_section.style.display = 'flex';
  your_pick.innerHTML = "<img src='images/icon-scissors.svg' alt=''>";
  your_pick_wrapper.style.background = 'var(--yellow_gradient)';

  setTimeout(() => { generateRandomPick();}, 1000);
}
function iconPaper(){ 
  yourPick = 2;
  game_section.style.display = 'none';
  duel_section.style.display = 'flex';
  your_pick.innerHTML = "<img src='images/icon-paper.svg' alt=''>";
  your_pick_wrapper.style.background = 'var(--blue_gradient)';

  setTimeout(() => { generateRandomPick();}, 1000);
}
function iconLizard(){ 
  yourPick = 3;
  game_section.style.display = 'none';
  duel_section.style.display = 'flex';
  your_pick.innerHTML = "<img src='images/icon-lizard.svg' alt=''>";
  your_pick_wrapper.style.background = 'var(--purple_gradient)';

  setTimeout(() => { generateRandomPick();}, 1000);
}
function iconRock(){ 
  yourPick = 4;
  game_section.style.display = 'none';
  duel_section.style.display = 'flex';
  your_pick.innerHTML = "<img src='images/icon-rock.svg' alt=''>";
  your_pick_wrapper.style.background = 'var(--red_gradient)';

  setTimeout(() => { generateRandomPick();}, 1000);
}

function playAgain(){
  location.reload();
}