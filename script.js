    const gameOutcome = [];    
    const crossArray = [];
    const circleArray = [];    
    const victoryMessage = document.querySelector('#game-result');
    const crossScore = document.querySelector('#cross-score');
    const circleScore = document.querySelector('#circle-score');

    let crossCount = 0;
    let circleCount = 0;

    function checkVictory(playerArray) {
      if (                
      playerArray.includes(document.querySelector('.one')) &&
      playerArray.includes(document.querySelector('.two')) &&
      playerArray.includes(document.querySelector('.three')) ||
      playerArray.includes(document.querySelector('.four')) &&
      playerArray.includes(document.querySelector('.five')) &&
      playerArray.includes(document.querySelector('.six')) ||
      playerArray.includes(document.querySelector('.seven')) &&
      playerArray.includes(document.querySelector('.eight')) &&
      playerArray.includes(document.querySelector('.nine')) ||
      playerArray.includes(document.querySelector('.one')) &&
      playerArray.includes(document.querySelector('.four')) &&
      playerArray.includes(document.querySelector('.seven')) ||
      playerArray.includes(document.querySelector('.two')) &&
      playerArray.includes(document.querySelector('.five')) &&
      playerArray.includes(document.querySelector('.eight')) ||
      playerArray.includes(document.querySelector('.three')) &&
      playerArray.includes(document.querySelector('.six')) &&
      playerArray.includes(document.querySelector('.nine')) ||
      playerArray.includes(document.querySelector('.one')) &&                
      playerArray.includes(document.querySelector('.five')) &&
      playerArray.includes(document.querySelector('.nine')) ||
      playerArray.includes(document.querySelector('.three')) &&
      playerArray.includes(document.querySelector('.five')) &&
      playerArray.includes(document.querySelector('.seven')) 
      ) {
         return true
      }
    }

    const squareFactory = square => {
        const board = document.querySelector('#game');
        const squareDiv = document.createElement('div');
        const addClass = () => squareDiv.classList.add('square');
        const addClassTwo = () => squareDiv.classList.add(square);
        const appendSquare = () => board.appendChild(squareDiv);
        const build = () => {
            addClass(),
            addClassTwo(), 
            appendSquare()
        };     
        
        const moves = () => squareDiv.addEventListener('click', () => {
      
            const cross = document.createElement('img');
            const circle = document.createElement('img');
            cross.setAttribute('src', 'img/cross.png');
            circle.setAttribute('src', 'img/O.png');
            if (!squareDiv.querySelector('img')) {
      
                if (gameOutcome.length === 0 || 
                    gameOutcome.length === 2 ||
                    gameOutcome.length === 4 ||
                    gameOutcome.length === 6 ||
                    gameOutcome.length === 8) {
                    squareDiv.appendChild(cross);
                    gameOutcome.push(squareDiv);
                    crossArray.push(squareDiv);
               }
                else if (gameOutcome.length < 9){
                    squareDiv.appendChild(circle);
                    gameOutcome.push(squareDiv);
                    circleArray.push(squareDiv);
                } 
                
                if (document.querySelector('#computer-check').checked) {
                  const squares = document.querySelectorAll('.square');
                  const emptySquares = Array.from(squares).filter(square => !square.hasChildNodes());
                
                  if (emptySquares.length > 0 && !checkVictory(crossArray)) {
                    const randomSquare = emptySquares[Math.floor(Math.random() * emptySquares.length)];
                    randomSquare.appendChild(circle);
                    gameOutcome.push(randomSquare);
                    circleArray.push(randomSquare);   
                  }      
                }

            }


            if (checkVictory(crossArray)) {
                setTimeout(function() {
                  const modal = document.querySelector('#game-score');
                  const overlay = document.querySelector('#overlay-two');
                  modal.classList.add('active');
                  overlay.classList.add('active');
                  const crossName = document.querySelector('#cross-player-name').value;
                  const circleName = document.querySelector('#circle-player-name').value;
                  crossCount += 1;
                  if (crossCount === 3) {
                     if (crossName === '') {
                        victoryMessage.textContent = `Cross Has Won The Battle!`;
                        crossScore.textContent = `Cross: ${crossCount}`;
                        circleScore.textContent = `Circle: ${circleCount}`;      
                     }
                     else {
                        victoryMessage.textContent = `${crossName} Has Won The Battle!`;
                        crossScore.textContent = `${crossName}: ${crossCount}`;
                        circleScore.textContent = `${circleName}: ${circleCount}`;      
                     }
                  }
                  else {
                     if (crossName === '') {
                        victoryMessage.textContent = `Cross Player Wins!`
                        crossScore.textContent = `Cross: ${crossCount}`;
                        circleScore.textContent = `Circle: ${circleCount}`;      
                     }
                     else {
                        victoryMessage.textContent = `${crossName} Wins!`
                        crossScore.textContent = `${crossName}: ${crossCount}`;
                        circleScore.textContent = `${circleName}: ${circleCount}`;      
                     }
                  }
               }, 0)
                gameOutcome.length = 0;
                circleArray.length = 0;
                crossArray.length = 0;
            }
            else if (checkVictory(circleArray)) {
                setTimeout(function() {
                  const modal = document.querySelector('#game-score');
                  const overlay = document.querySelector('#overlay-two');
                  modal.classList.add('active')
                  overlay.classList.add('active')
                  const crossName = document.querySelector('#cross-player-name').value;
                  const circleName = document.querySelector('#circle-player-name').value;
                  circleCount += 1;
                  if (circleCount === 3) {
                     if (circleName === '') {
                        victoryMessage.textContent = `Circle Has Won The Battle!`;
                        crossScore.textContent = `Cross: ${crossCount}`;
                        circleScore.textContent = `Circle: ${circleCount}`;      
                     }
                     else {
                        victoryMessage.textContent = `${circleName} Has Won The Battle!`;
                        crossScore.textContent = `${crossName}: ${crossCount}`;
                        circleScore.textContent = `${circleName}: ${circleCount}`;      
                     }
                  }
                  else {
                     if (circleName === '') {
                        victoryMessage.textContent = `Circle Player Wins!`;
                        crossScore.textContent = `Cross: ${crossCount}`;
                        circleScore.textContent = `Circle: ${circleCount}`;      
                     }
                     else {
                        victoryMessage.textContent = `${circleName} Wins!`;
                        crossScore.textContent = `${crossName}: ${crossCount}`;
                        circleScore.textContent = `${circleName}: ${circleCount}`;      f
                     }
                     crossScore.textContent = `Cross: ${crossCount}`;
                     circleScore.textContent = `Circle: ${circleCount}`;   
                  }

                 }, 0)
                gameOutcome.length = 0;
                circleArray.length = 0;
                crossArray.length = 0;
            }

            else if (gameOutcome.length === 9) {
                setTimeout(function() {
                  const modal = document.querySelector('#game-score');
                  const overlay = document.querySelector('#overlay-two');
                  modal.classList.add('active')
                  overlay.classList.add('active')
                  victoryMessage.textContent = `It's a tie ):`
                  crossScore.textContent = `Cross: ${crossCount}`;
                  circleScore.textContent = `Circle: ${circleCount}`;   
                }, 0)
                gameOutcome.length = 0;
                circleArray.length = 0;
                crossArray.length = 0;

            }



        }
        )
        return {moves, build}
    }

    const squareOne = squareFactory('one');
    const squareTwo = squareFactory('two');
    const squareThree = squareFactory('three');
    const squareFour = squareFactory('four');
    const squareFive = squareFactory('five');
    const squareSix = squareFactory('six');  
    const squareSeven = squareFactory('seven');    
    const squareEight = squareFactory('eight');      
    const squareNine = squareFactory('nine');

    squareOne.build();
    squareTwo.build();
    squareThree.build();
    squareFour.build();
    squareFive.build();
    squareSix.build();
    squareSeven.build();
    squareEight.build();
    squareNine.build();

    squareOne.moves();
    squareTwo.moves();
    squareThree.moves();
    squareFour.moves();
    squareFive.moves();
    squareSix.moves();
    squareSeven.moves();
    squareEight.moves();
    squareNine.moves();



    const openModalButton = document.querySelector('[data-modal-target]');
    const closeModalButtons = document.querySelectorAll('[data-close-button]');
    const squareButtons = document.querySelectorAll('.square');

    openModalButton.addEventListener('click', (event) => {
      event.preventDefault()
      const modal = document.querySelector('#menu');
      const overlay = document.querySelector('#overlay');
      modal.classList.add('active')
      overlay.classList.add('active')
    })

   squareButtons.forEach(square => {
      square.addEventListener('click', () => {
         })
      
      })
         
   closeModalButtons.forEach(button => {
      button.addEventListener('click', (event) => {
         event.preventDefault()
         const modal = document.querySelector('#menu');
         const modalTwo = document.querySelector('#game-score');
         const overlay = document.querySelector('#overlay');
         const overlayTwo = document.querySelector('#overlay-two');
         modal.classList.remove('active')
         modalTwo.classList.remove('active')
         overlay.classList.remove('active')
         overlayTwo.classList.remove('active')      

         setTimeout(function(){
            const squareOne = document.querySelector('.one');
            const squareTwo = document.querySelector('.two'); 
            const squareThree = document.querySelector('.three'); 
            const squareFour = document.querySelector('.four'); 
            const squareFive = document.querySelector('.five'); 
            const squareSix = document.querySelector('.six'); 
            const squareSeven = document.querySelector('.seven'); 
            const squareEight = document.querySelector('.eight'); 
            const squareNine = document.querySelector('.nine'); 

             if (squareOne.hasChildNodes('img')) {
                const image = document.querySelector('img')
                squareOne.removeChild(image)
             }
             if (squareTwo.hasChildNodes('img')) {
                const image = document.querySelector('img')
                squareTwo.removeChild(image)
             }
             if (squareThree.hasChildNodes('img')) {
                const image = document.querySelector('img')
                squareThree.removeChild(image)
             }
             if (squareFour.hasChildNodes('img')) {
                const image = document.querySelector('img')
                squareFour.removeChild(image)
             }
             if (squareFive.hasChildNodes('img')) {
                const image = document.querySelector('img')
                squareFive.removeChild(image)
             }
             if (squareSix.hasChildNodes('img')) {
                const image = document.querySelector('img')
                squareSix.removeChild(image)
             }
             if (squareSeven.hasChildNodes('img')) {
                const image = document.querySelector('img')
                squareSeven.removeChild(image)
             }
             if (squareEight.hasChildNodes('img')) {
                const image = document.querySelector('img')
                squareEight.removeChild(image)
             }
             if (squareNine.hasChildNodes('img')) {
                const image = document.querySelector('img')
                squareNine.removeChild(image)
             }

         }, 0)

         if (circleCount === 3 || crossCount === 3) {
            circleCount = 0;
            crossCount = 0;
         }

       })
    })


      