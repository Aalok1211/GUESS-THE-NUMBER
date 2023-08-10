let btn = document.getElementById('btn');
let output = document.getElementById('OUTPUTTEXT');

let number = [Math.floor(Math.random() * 100)];

btn.addEventListener('click',function(){
    let input = document.getElementById('userInput').value;
    if(input==number){
        output.innerHTML = `YOU GUESSED RIGHT!!!, your number was ${number}`
    }else if(input<number){
        output.innerHTML = "YOU GUESSED LOWER THAN THE NUMBER!"
    }else{
        output.innerHTML = "YOU GUESSED HIGHER THAN THE NUMBER!"
    };
});
