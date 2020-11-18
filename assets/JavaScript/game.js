//VARIABLES
let userGuesses = document.getElementById("guesses");
let correctGuesses = document.getElementById("correct");
let allUserGuesses = [];
let displayAnswer = [];
let word = ['COLLEGE', 'STRESS', 'EXAMS', 'WORK', 'BROKE'];
let wins = 0;
let losses = 0;
let guesses = 20;
let underscore = []

// let answer = '';



 let answer = word[Math.floor(Math.random() * word.length)] //choosing a random index in the array 'word' and settings its value equal to answer
for (i = 0; i < answer.length; i++) {
    underscore.push("_")
    underscore.toString()
    
    let div = document.getElementById("correct")
    div.textContent = (underscore)
    
    console.log(underscore);
    
    
}

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
                
                // console.log(underscore + "this");
                
                underscore[i] = keyPressed
                correctGuesses.textContent = underscore
                String(answer)
                let split = answer.split("")
                console.log(split); //shows the answer split into an array
                console.log(underscore); // shows the underscore array
                console.log(answer.length); // shows how many characters are in the answer

                if (underscore.length === answer.length && split.length === answer.length) { //does heck all yet...
                    wins++
                }
                
            }
            




            let html = "<h2>Wins: " + wins + "<br> Losses: " + losses + "<br> Remaining Guesses: " + guesses + "</h2>" //code used to change the html for the scoreboard


            document.getElementById("winloss").innerHTML = html;



        }

       






    };

    

   

    guesses--;
    if (guesses === 0) {
        location.reload()
        losses++;
        alert("game over")
    }
    // keyCheck(word)
    keyCheck(answer)
    console.log(guesses);

}
