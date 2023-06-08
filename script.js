    const gameOutcome = [];    

    const crossArray = [];
    const circleArray = [];    
    const squareFactory = square => {
        const board = document.querySelector('#game');
        const squareDiv = document.createElement('div');
        const addClass = () => squareDiv.classList.add('square');
        const addClassTwo = () => squareDiv.classList.add(square)
        const appendSquare = () => board.appendChild(squareDiv);
        const build = () => {
            addClass(),
            addClassTwo(), 
            appendSquare()
        };
        const gameBoard = (() => {
            const squares = document.querySelectorAll(`.${square}`)
        })
        const crossing = () => squareDiv.addEventListener('click', () => {
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
                    gameOutcome.push(squareDiv)
                    crossArray.push(squareDiv);
                }
                else if (gameOutcome.length < 9){
                    squareDiv.appendChild(circle);
                    gameOutcome.push(squareDiv);
                    circleArray.push(squareDiv);
                    console.log(circleArray)
                }
    
            }


            if (crossArray.includes(document.querySelector('.one')) &&
                crossArray.includes(document.querySelector('.two')) &&
                crossArray.includes(document.querySelector('.three')) ||
                crossArray.includes(document.querySelector('.four')) &&
                crossArray.includes(document.querySelector('.five')) &&
                crossArray.includes(document.querySelector('.six')) ||
                crossArray.includes(document.querySelector('.seven')) &&
                crossArray.includes(document.querySelector('.eight')) &&
                crossArray.includes(document.querySelector('.nine')) ||
                crossArray.includes(document.querySelector('.one')) &&
                crossArray.includes(document.querySelector('.four')) &&
                crossArray.includes(document.querySelector('.seven')) ||
                crossArray.includes(document.querySelector('.two')) &&
                crossArray.includes(document.querySelector('.five')) &&
                crossArray.includes(document.querySelector('.eight')) ||
                crossArray.includes(document.querySelector('.three')) &&
                crossArray.includes(document.querySelector('.six')) &&
                crossArray.includes(document.querySelector('.nine')) ||
                crossArray.includes(document.querySelector('.one')) &&                
                crossArray.includes(document.querySelector('.five')) &&
                crossArray.includes(document.querySelector('.nine')) ||
                crossArray.includes(document.querySelector('.three')) &&
                crossArray.includes(document.querySelector('.five')) &&
                crossArray.includes(document.querySelector('.seven')) 
            ) {
                setTimeout(function() {
                    window.alert('cross wins!')
                }, 0)
                gameOutcome.length = 0;
                circleArray.length = 0;
                crossArray.length = 0;
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

            }
            else if (circleArray.includes(document.querySelector('.one')) &&
            circleArray.includes(document.querySelector('.two')) &&
            circleArray.includes(document.querySelector('.three')) ||
            circleArray.includes(document.querySelector('.four')) &&
            circleArray.includes(document.querySelector('.five')) &&
            circleArray.includes(document.querySelector('.six')) ||
            circleArray.includes(document.querySelector('.seven')) &&
            circleArray.includes(document.querySelector('.eight')) &&
            circleArray.includes(document.querySelector('.nine')) ||
            circleArray.includes(document.querySelector('.one')) &&
            circleArray.includes(document.querySelector('.four')) &&
            circleArray.includes(document.querySelector('.seven')) ||
            circleArray.includes(document.querySelector('.two')) &&
            circleArray.includes(document.querySelector('.five')) &&
            circleArray.includes(document.querySelector('.eight')) ||
            circleArray.includes(document.querySelector('.three')) &&
            circleArray.includes(document.querySelector('.six')) &&
            circleArray.includes(document.querySelector('.nine')) ||
            circleArray.includes(document.querySelector('.one')) &&                
            circleArray.includes(document.querySelector('.five')) &&
            circleArray.includes(document.querySelector('.nine')) ||
            circleArray.includes(document.querySelector('.three')) &&
            circleArray.includes(document.querySelector('.five')) &&
            circleArray.includes(document.querySelector('.seven'))        
            ) {
                setTimeout(function() {
                  window.alert('circle wins!')
                 }, 0)
                gameOutcome.length = 0;
                circleArray.length = 0;
                crossArray.length = 0;
                console.log(crossArray)
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
            }

            else if (gameOutcome.length === 9) {
                setTimeout(function() {
                    window.alert(`It's a tie ):`)
                }, 0)
                gameOutcome.length = 0;
                circleArray.length = 0;
                crossArray.length = 0;
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


            }



        }
        )
        return {crossing, build, gameBoard}
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

    squareOne.crossing();
    squareTwo.crossing();
    squareThree.crossing();
    squareFour.crossing();
    squareFive.crossing();
    squareSix.crossing();
    squareSeven.crossing();
    squareEight.crossing();
    squareNine.crossing();



