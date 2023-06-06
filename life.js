
function lifeLeft(age) {
    var age = prompt("How old are you?");
    var wishAge = prompt("How old do you wish to live on earth?");

    let x = document.getElementById("demo");
    
    let yearsLeft = wishAge - age;
    let monthsLeft = yearsLeft * 12;
    let weeksLeft = yearsLeft * 52;
    let daysLeft = yearsLeft * 365;

    x.innerHTML =`You have ${yearsLeft} years left; <br> 
    ${monthsLeft}  month left; <br>
    ${weeksLeft} weeks left; <br>
    ${daysLeft} days left to live. <br>
    MAKE WISE USE OF YOUR LIFE!!`
}
