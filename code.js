function countdownTimer() {
    var timer = 50;

    //start at 50
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 5;
    }, 1000);

    //45 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 5;
    }, 6000);

    //40 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 5;
    }, 11000);

    //35 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 5;
    }, 16000);

    //30 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 5;
    }, 21000);

    //25 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 5;
    }, 26000);

    //20 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 5;
    }, 31000);

    //15 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 5;
    }, 36000);

    //10 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 5;
    }, 41000);

    //5 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 5;
    }, 46000);

    //0 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 5;
    }, 51000);
    setTimeout(function () { alert("Blastoff!!!!!!!!"); }, 51100);


}

//play crap function from https://synchronic.uat.edu/courses/3843/assignments/137165?module_item_id=345115
function play() {
    //created RNG ranging from 1 through 6 for die1. Math.ceil is meant to round the number up to the nearest whole number.
    // The * 6 is to multiply the 1 by 6 to gives us our range of 1 through 6.
    var die1 = Math.ceil(Math.random() * 6);

    //created RNG ranging from 1 through 6 for die2
    var die2 = Math.ceil(Math.random() * 6);


    //This creates a variable to add die 1 and die 2 together.
    var sum = die1 + die2
    //This tells the user what they got for die1
    document.write("Die 1 = " + die1);
    //This creates a break between die1 and die2
    document.write("<br/>");
    //This tells the user what they got for die2
    document.write("Die 2 = " + die2);
    //This creates a break between die 2 and sum.
    document.write("<br/>");
    //This displays the sum of die1 and die2 for the user.
    document.write("Sum = " + sum);
    //This adds a new line
    document.write("<br/>");
    //This is letting the user know that if the sum is equal to 7 or 11 then the user will be notified with a you lose.
    if (sum == 7 || sum == 11) {
        document.write("CRAPS - you lose");
        document.write("<br/>");
    }
    //This is letting the user know that if you get two of the same even numbers you will be notified with a you win.
    else if (die1 == die2 && die1 % 2 == 0) {
        document.write("DOUBLES - you win");
        document.write("<br/>");
    }


}
