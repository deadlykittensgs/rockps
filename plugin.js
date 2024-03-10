


// making the game choices
let rock;
let paper; 
let scissors;


// computer choses

const choices = [ "rock","paper","scissors" ];
const randIndex = Math.floor(Math.random() * choices.length);
comResponse = (choices[randIndex]);
console.log(comResponse)


// human choses

userResponse = prompt ("chose rock, paper, or scissors.");


console.log(userResponse.toLowerCase());


let ur = userResponse
let cr = comResponse

// compare and choose who beats who !!!!!!

if (cr === "rock" && ur === "rock") { console.log ("you tie");}
if (cr === "rock" && ur === "paper") { console.log ("you win");}
if (cr === "rock" && ur === "scissors") { console.log ("you lose");}



if (cr === "paper" && ur === "rock") { console.log ("you lose");}
if (cr === "paper" && ur === "paper") { console.log ("you tie");}
if (cr === "paper" && ur === "scissors") { console.log ("you win");}

if (cr === "scissors" && ur === "rock") { console.log ("you win");}
if (cr === "scissors" && ur === "paper") { console.log ("you lose");}
if (cr === "scissors" && ur === "scissors") { console.log ("you tie");}






// ---------------------------------





// in tne future could i make 
// something like this work? 

// values 
// rock > scissors
// rock < paper
// paper > rock
// paper < scissors
// scissors > paper
// scissors < rock
// rock > scissors > paper > rock


// if (comResponse < userResponse ) 
// { console.log ("you win!");}

// else if (comResponse > userResponse ) 
// { console.log ("you lose!");}
    
// else { console.log("it's a tie"); }

