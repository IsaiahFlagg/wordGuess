//VARIABLES
let userGuesses = document.getElementById("guesses");
let correctGuesses = document.getElementById("correct");
let allUserGuesses = [];
let displayAnswer = [];
let word = ['COLLEGE', 'STRESS', 'EXAMS', 'WORK', 'BROKE'];
let wins = 0;
let losses = 0;
let guesses = 10;
// let answer = '';



let answer = word[Math.floor(Math.random() * word.length)] //choosing a random index in the array 'word' and settings its value equal to answer

document.onkeyup = function (event) {
    console.log(answer + " answer");


    keyPressed = event.key //takes the key pressed and gives its value to the variable
    keyPressed = keyPressed.toUpperCase() //takes the value of keyPressed upper cases it and puts it back into the variable keyPressed
    // console.log(keyPressed);


    allUserGuesses.push(keyPressed)  //pushes the value of keyPressed variable into the array variable allUserGuesses
    userGuesses.textContent = allUserGuesses //displays the array using the gitElementById method
    console.log(allUserGuesses);

    console.log(word[0].charAt(0));

    function keyCheck(arg) {
        for (let i = 0; i < arg.length; i++) {
            if (keyPressed === arg.charAt(i)) {
                displayAnswer.push(keyPressed) //pushes the value of keyPressed variable into the array
                correctGuesses.textContent = displayAnswer
                
            }

            
            

            
            let html = "<h2>Wins: " + wins + "<br> Losses: " + losses + "<br> Remaining Guesses: " + guesses +  "</h2>" //code used to change the html for the scoreboard
            

            document.getElementById("win/loss").innerHTML = html;


            
        }
        
            // if (allUserGuesses === ){
            //     location.reload()
            //     alert("You Got It!")
            // }
        
        
        
        
        
        
    };
    
    guesses--;
    if (guesses === 0) {
        location.reload()
        alert("game over")
    }
    // keyCheck(word)
    keyCheck(answer)
    console.log(guesses);
    
}
