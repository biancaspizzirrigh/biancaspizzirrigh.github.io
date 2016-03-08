$(document).ready(function() {

  var circleOrEx = "o"; // defaults the first input to the letter o
  var isGameInProgress = true; // defaults that a game is in progress
  var winningCombos = { // this basically outlines which games win based on where they are placed on the board. For example it outlines that if the top row is completely filled with x's then x wins. Tells the function what counts as a winning game.
    0: [ //0 is key
      [1, 2], //this multiDimensional Array is values
      [3, 6],
      [4, 8]
    ],
    1: [
      [0, 2],
      [4, 7]
    ],
    2: [
      [0, 1],
      [5, 8],
      [4, 6]
    ],
    3: [
      [0, 6],
      [4, 5]
    ],
    4: [
      [1, 8],
      [2, 6],
      [1, 7],
      [3, 5]
    ],
    5: [
      [2, 8],
      [3, 4]
    ],
    6: [
      [0, 3],
      [2, 4],
      [7, 8]
    ],
    7: [
      [1, 4],
      [6, 8]
    ],
    8: [
      [0, 4],
      [2, 5],
      [6, 7]
    ]
  };

  // When you click on a box the program searches the document to  find that div. If the div is .empty class it then adds a class and fills the space
  $("#board").find("div").on("click", function() {

    if (isGameInProgress && $(this).hasClass("empty")) { //If a game is currently in progress and the targeted element has a class of empty it removes the empty class and adds the class of either x or o
      $(this).removeClass("empty").append("<span class='" + circleOrEx + "'>" + circleOrEx + "</span");

      checkIfWon($(this).index(), circleOrEx); //Calls a function that checks to see if the input matches one of the winning games outlined in winningCombos, if not it loops to the next players turn

      if (circleOrEx === "o") {
        circleOrEx = "x";
      } else {
        circleOrEx = "o";
      }
    }

  });

  // Creates a new, empty game board
  $("#newGame").on("click", function() {

    var boardSquares = $("#board").find("div"); //locates the old board
    var firstEmptyMemorySquare = $(".container").find(".nine").filter(function() { //finds out how many games there are
      return $.trim($(this).text()) === "" && $(this).children().length === 0;
    }).not("#board").first();

    if (firstEmptyMemorySquare.length == 1) { //if there is only one board, then start the game
      firstEmptyMemorySquare.html($("#board").html());
    } else { // find/move old board. find/create new board
      $(".container").find(".nine").not("#board").empty();
      $(".container").find(".nine").first().html($("#board").html());
    }

    //makes new game
    boardSquares.each(function() {
      $(this).addClass("empty").empty();
    })
    isGameInProgress = true;
  })

  //Explain this funciton, describe the parameters; what are the possible values of the paramaters
  //It is going to check to see if the square inputted is equal to one of the winning combos, if they have the program stops, if they haven't it runs again
  function checkIfWon(chosenSquare) {

    var mulitArr = winningCombos[chosenSquare];
    var playerWon;

    for (var i = 0; i < mulitArr.length; i++) { //as long as the value of i is less than the length of the multiarray, playerwon is true
      playerWon = true;
      for (var j = 0; j < mulitArr[i].length; j++) {
        if (!$("#board").find("div").eq(mulitArr[i][j]).find("span").hasClass(circleOrEx)) { //if the div does not have the class circleOrEx then playerWon will return as false
          playerWon = false;
        }
      }

      if (playerWon) { //Explain the condition and every line in the block
        // If player wins,  alert that the appropriate case won then set gameinprogress to false, ending the loop

        for (var j = 0; j < mulitArr[i].length; j++) {//for this loop to run the value of j must be less than the length of the multiarray
          $("#board").find("div").eq(mulitArr[i][j]).find("." + circleOrEx).addClass("green"); //it finds the board that has equal value to one of the winning cases and changes the elements in that winning case to green
        } //
        $("#board").find("div").eq(chosenSquare).find("." + circleOrEx).addClass("green");// find which won, x or o
        alert("Winner is " + circleOrEx.toUpperCase() + "!");
        isGameInProgress = false;
        return false; //this ends the loop
      }
    }


  }
})
