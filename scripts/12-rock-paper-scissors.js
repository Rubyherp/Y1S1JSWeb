  // Removed
      // const score = { 
      //   wins: 0,
      //   losses: 0,
      //   ties: 0
      // };

      let score = JSON.parse(localStorage.getItem('score')) /*change score from JSON to JS object*/
      || { 
          wins: 0,
          losses: 0,
          ties: 0
        }

      // if (!score){ // default score or === null. null is a falsy value. shortcut above
      //   score = {
      //     wins: 0,
      //     losses: 0,
      //     ties: 0
      //   }
      // }

      updateScoreElement(); //call to initialise and display
      

    
      function pickComputerMove(){
          const  randomNumber = Math.random();
          let computerMove = '';

          if (randomNumber >=0 && randomNumber <= 1/3){
              computerMove = 'Rock';
          } else if ((randomNumber >= 1/3 && randomNumber <= 2/3)){
              computerMove = 'Paper';
          } else {
              computerMove = 'Scissors';
          };
          return computerMove;
      }
    
      function updateScoreElement(){
        document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`; //update score on page
      }

      let isAutoPlaying = false;
      let intervalID; //this is to stop autoplaying
      // setInterval returns a number. we can use the ID to stop the interval. But everytime we run the interval, we get a new ID. so we need set variable outside of the function. 

      function autoplay() {
        const buttonElement = document.querySelector('.auto-play-css');
        
        if (!isAutoPlaying) {
          intervalID = setInterval(() => {
            const playerMove = pickComputerMove();
            playGame(playerMove);
          }, 1);
          isAutoPlaying = true;
          buttonElement.innerHTML = 'Auto Playing...';
          buttonElement.classList.remove('auto-play-button');
          buttonElement.classList.add('auto-playing');
          
        } else {
          clearInterval(intervalID); //give it an id we want to stop
          isAutoPlaying = false;
          buttonElement.innerHTML = 'Auto Play';
          buttonElement.classList.add('auto-play-button');
          buttonElement.classList.remove('auto-playing');
        }
      } 

      //removed onclick, replace with addEventListener
      document.querySelector('.js-rock-button').addEventListener('click', () => playGame('Rock')) //it must be a function. just 'playGame('rock')' will not work. It returns undefined.

      document.querySelector('.js-paper-button').addEventListener('click', () => playGame('Paper'))

      document.querySelector('.js-scissors-button').addEventListener('click', () => playGame('Scissors'))

      document.querySelector('.js-auto-play-button').addEventListener('click', () => autoplay())

      document.querySelector('.js-reset-score-button').addEventListener('click', () => {
        score.wins = 0;
        score.losses = 0;
        score.ties = 0;
        localStorage.removeItem('score'); //remove score object
        updateScoreElement(); //update score aft resetting
      })

      //for keyboard
      document.body.addEventListener('keydown', (event) => {
        if (event.key === "r") {
          playGame('Rock');
        } else if (event.key === 'p') {
          playGame('Paper');
        } else if (event.key === 's') {
          playGame('Scissors');
        }
      })


      function playGame(playerMove){
        const computerMove = pickComputerMove();
        let result = '';
        
        if (playerMove === 'Paper'){
          if (computerMove === 'Rock'){
            result = 'You Win';
          } else if (computerMove === 'Paper' ){
            result = 'Tie';
          } else if (computerMove === 'Scissors'){
            result = 'You Lose';
          }
        } else if (playerMove === 'Scissors'){
          if (computerMove === 'Rock'){
            result = 'You Win';
          } else if (computerMove === 'Paper' ){
            result = 'You Lose';
          } else if (computerMove === 'Scissors'){
            result = 'Tie';
          }
        } else if (playerMove === "Rock"){
          if (computerMove === 'Rock'){
            result = 'Tie';
          } else if (computerMove === 'Paper' ){
            result = 'You Lose';
          } else if (computerMove === 'Scissors'){
            result = 'You Win';
          }
        };

        if (result === 'You Win'){
          score.wins += 1;
        } else if (result === 'You Lose'){
          score.losses += 1;
        } else if (result === 'Tie'){
          score.ties += 1;
        };

        updateScoreElement(); //update every game
        document.querySelector('.js-result').innerHTML =  result; //select .js-result class element. replace its HTML with result
        document.querySelector('.js-moves').innerHTML = `
        You
        <img src="images/${playerMove}-emoji.png" class="move-icon">
        <img src="images/${computerMove}-emoji.png" class="move-icon">
        Computer`;

        localStorage.setItem('score', JSON.stringify(score)); //local storage only supports strings. save score into local storage

//         alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}.
// Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
      }