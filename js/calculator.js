window.onload = function() {
    var screen; // result to the result div HTML element (store the math question string or result value)
    var output; // for calculating the question string, e.g. "1 x 2 + 2"
    var limit; // limit for calculator input to 16, e.g. "1 x 2 + 2" only have 5
    var zero; // for zero button click processing
    var period; // for period button click processing
    var operator; // for handling operator click

    screen = document.getElementById("result");
    console.log(screen.innerHTML);
    console.log(output);
    screen.innerHTML = ""; // need to check this why?
    output = ""; // need to check this why?

    var elem = document.querySelectorAll(".num");
    console.log(elem);
    var len = elem.length;
    limit = 0;
    console.log(limit);
    console.log(output);
    for (var i = 0; i < len; i++) {
        elem[i].addEventListener("click", function() {
            num = this.value; // get the button value of the button being clicked
            // screen.innerHTML = screen.innerHTML + num; screen.innerHTML refer to content between <div></div>
            // output = screen.innerHTML;
            output = screen.innerHTML += num; // screen.innerHTML += num is equivalent to screen.innerHTML = screen.innerHTML + num
            limit = output.length;
            console.log(screen);
            console.log(limit);
            if (limit > 16) {
                alert("You have exceeded the maximum number of input allowed");
            }


        }, false);
    }

    var elemZero = document.querySelector(".zero");
        elemZero.addEventListener("click", function() {
            zero = this.value;

            if (screen.innerHTML === "") {
                screen.innerHTML = zero;
                output = screen.innerHTML; // output = screen.innerHTML = zero;
            } else if (screen.innerHTML === output) {
                screen.innerHTML = screen.innerHTML + zero;
                output = screen.innerHTML; // output = screen.innerHTML += zero;
            }
        }, false);
    
    document.querySelector(".period").addEventListener("click", function() {
        period = this.value;

        if (screen.innerHTML === "") {
            screen.innerHTML = screen.innerHTML.concat("0.");
            output = screen.innerHTML; // output = screen.innerHTML = screen.innerHTML.concat("0.");
        } else if (screen.innerHTML === output) {
            screen.innerHTML = screen.innerHTML + period;
            output = screen.innerHTML;
        }
    }, false);

    document.querySelector("#delete").addEventListener("click", function() {
        screen.innerHTML = "";
        output = "";
    }, false);

    var elemOperator = document.querySelectorAll(".operator");
    var len2 = elemOperator.length;

    for (var i = 0; i < len2; i++) {
        elemOperator[i].addEventListener("click", function() {
            operate = this.value;

            if (screen.innerHTML === "") {
                screen.innerHTML = screen.innerHTML.concat("");
            } else if (output) {
                screen.innerHTML = screen.innerHTML.concat(operate);
                output = screen.innerHTML;
            }
        }, false);
    }
    document.querySelector("#eqn-bg").addEventListener("click", function() {
        if (screen.innerHTML === "") {
            screen.innerHTML = "";
            output = "";
        } else if (screen.innerHTML === output) {
            screen.innerHTML = eval(output);
        }
    }, false);
}