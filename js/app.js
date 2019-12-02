//HOW TO MAKE TIC TAC TOE

/*
Make a function or a class around the Tic Tac toe.//
Make a function to change the DOM on the squares to change to an X and O. //
Make it to where X and O switch back and Forth. //
You cannot take another space of a spot
label the grid of tictactoe somehow.
Make a function to where it checks for 3 in a row every turn inbetween.
*/
// class Game {
// constructor {

// }


    
     var square = document.querySelectorAll('.lines');
     //var hidden = document.querySelectorAll("button").style.visibilty = "hidden";
    var grid = document.querySelectorAll('.lines').value;
     
     
     function init() {
         for (let i = 0; i < square.length; i++) {
             const element = square[i];
             element.addEventListener('click', function (event) {
                game();
                
             })
         }
     }
     init();
    //  function playerO() {
    //          for (let i = 0; i < square.length; i++) {
    //              const element = square[i];
    //              element.addEventListener('click', function (event) {
                    
    //                 //  if(value = "") {
    //                      element.innerHTML = 'O'
    //                      playerX();

    //                 //  }
                    
    //              })
    //          }
    //  }
    // for (let i = 0; i < square.length; i++) {
    //     const element = square[i];
    //     let grid = i;
    //     console.log(grid)
    // }

    //  function check3s() {
         
    //  }
    


//}    
    function game() {
        this ? 'x' : 'o'

        
    }
