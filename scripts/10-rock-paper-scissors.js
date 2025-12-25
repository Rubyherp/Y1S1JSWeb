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

        alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}.
Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
      }