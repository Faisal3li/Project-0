// tic tac toe

$(document).ready(function() {
  var player = 1;
  var $square = $(".square");
  var countO = 0;
  var countX = 0;
  var countDraw = 0;

  $(".square").on("click", function(event) {
    var squareSelected = $(this);
    if (
      squareSelected.hasClass("fas fa-times") ||
      squareSelected.hasClass("far fa-circle")
    ) {
      alert("This square has been selected! Please choose another one.");
    } else {
      if (player === 1) {
        squareSelected.addClass("fas fa-times");
        if (checkIfPlayerWon("fas fa-times", "X")) {
          window.setTimeout(function() {
            alert("Congrats! Player X has won!");
            $(".resultBoxX")
              .text(countX)
              .addClass("bounce animated");
            countDraw = 0;
            for (var i = 0; i < $square.length; i++) {
              $square.eq(i).removeClass("fas fa-times far fa-circle");
            }
          }, 200);
        } else {
          player = 2;
        }
      } else if (player === 2) {
        squareSelected.addClass("far fa-circle");
        if (checkIfPlayerWon("far fa-circle", "O")) {
          window.setTimeout(function() {
            alert("Congrats! Player O has won! ");
            $(".resultBoxO")
              .text(countO)
              .addClass("bounce animated");
            countDraw = 0;
            for (var i = 0; i < $square.length; i++) {
              $square.eq(i).removeClass("far fa-circle fas fa-times");
            }
          }, 200);
        } else {
          player = 1;
        }
      }
    }

    function checkIfPlayerWon(symbol, XO) {
      if (
        $(".sq1").hasClass(symbol) &&
        $(".sq2").hasClass(symbol) &&
        $(".sq3").hasClass(symbol)
      ) {
        if (XO === "O") {
          countO++;
        } else if (XO === "X") {
          countX++;
        }
        return true;
      } else if (
        $(".sq4").hasClass(symbol) &&
        $(".sq5").hasClass(symbol) &&
        $(".sq6").hasClass(symbol)
      ) {
        if (XO === "O") {
          countO++;
        } else if (XO === "X") {
          countX++;
        }
        return true;
      } else if (
        $(".sq7").hasClass(symbol) &&
        $(".sq8").hasClass(symbol) &&
        $(".sq9").hasClass(symbol)
      ) {
        if (XO === "O") {
          countO++;
        } else if (XO === "X") {
          countX++;
        }
        return true;
      } else if (
        $(".sq1").hasClass(symbol) &&
        $(".sq4").hasClass(symbol) &&
        $(".sq7").hasClass(symbol)
      ) {
        if (XO === "O") {
          countO++;
        } else if (XO === "X") {
          countX++;
        }
        return true;
      } else if (
        $(".sq2").hasClass(symbol) &&
        $(".sq5").hasClass(symbol) &&
        $(".sq8").hasClass(symbol)
      ) {
        if (XO === "O") {
          countO++;
        } else if (XO === "X") {
          countX++;
        }
        return true;
      } else if (
        $(".sq3").hasClass(symbol) &&
        $(".sq6").hasClass(symbol) &&
        $(".sq9").hasClass(symbol)
      ) {
        if (XO === "O") {
          countO++;
        } else if (XO === "X") {
          countX++;
        }
        return true;
      } else if (
        $(".sq1").hasClass(symbol) &&
        $(".sq5").hasClass(symbol) &&
        $(".sq9").hasClass(symbol)
      ) {
        if (XO === "O") {
          countO++;
        } else if (XO === "X") {
          countX++;
        }
        return true;
      } else if (
        $(".sq3").hasClass(symbol) &&
        $(".sq5").hasClass(symbol) &&
        $(".sq7").hasClass(symbol)
      ) {
        if (XO === "O") {
          countO++;
        } else if (XO === "X") {
          countX++;
        }
        return true;
      } else {
        countDraw++;
        if (countDraw == 9) {
          alert("It's a Tie! Try again.");
          for (var i = 0; i < $square.length; i++) {
            $square.eq(i).removeClass("fas fa-times far fa-circle");
            countDraw = 0;
          }
        }
        return false;
      }
    }
  });
});
