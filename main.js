// tic tac toe

$(document).ready(function () {
    var player = 1;

    $(".square").on("click", function (event) {
        var squareSelected = $(this);

        if (squareSelected.hasClass("fas fa-times") || squareSelected.hasClass("far fa-circle")) {
            alert("This square has been selected! Please choose another one.");
        } else {
            if (player === 1) {
                squareSelected.addClass("fas fa-times");
                if (checkIfPlayerWon("fas fa-times")) {
                    window.setTimeout(function () {
                        alert("Congrats! Player " + player + " has won!")
                    }, 200)

                } else {
                    player = 2;
                }
            } else {
                squareSelected.addClass("far fa-circle");
                if (checkIfPlayerWon("far fa-circle")) {
                    window.setTimeout(function () {
                        alert("Congrats! Player " + player + " has won!")
                    }, 200)

                } else {
                    player = 1;
                }
            }
        };

        function checkIfPlayerWon(symbol) {

            if ($(".sq1").hasClass(symbol) && $(".sq2").hasClass(symbol) && $(".sq3").hasClass(symbol)) {
                return true;
            } else if ($(".sq4").hasClass(symbol) && $(".sq5").hasClass(symbol) && $(".sq6").hasClass(symbol)) {
                return true;
            } else if ($(".sq7").hasClass(symbol) && $(".sq8").hasClass(symbol) && $(".sq9").hasClass(symbol)) {
                return true;
            } else if ($(".sq1").hasClass(symbol) && $(".sq4").hasClass(symbol) && $(".sq7").hasClass(symbol)) {
                return true;
            } else if ($(".sq2").hasClass(symbol) && $(".sq5").hasClass(symbol) && $(".sq8").hasClass(symbol)) {
                return true;
            } else if ($(".sq3").hasClass(symbol) && $(".sq6").hasClass(symbol) && $(".sq9").hasClass(symbol)) {
                return true;
            } else if ($(".sq1").hasClass(symbol) && $(".sq5").hasClass(symbol) && $(".sq9").hasClass(symbol)) {
                return true;
            } else if ($(".sq3").hasClass(symbol) && $(".sq5").hasClass(symbol) && $(".sq7").hasClass(symbol)) {
                return true;
            } else {
                return false;
            }

        }


    });





});