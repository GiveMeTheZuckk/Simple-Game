var character = document.getElementById("character");
var enemy = document.getElementById("enemy");


function jump(){
   //if not jumping 
    if( character.classList != "animate"){
        // characters class adding animate(jump)
    character.classList.add("animate");
    // every 500ms(how long it takes to jump) remove the animation 
    setTimeout(function(){
        character.classList.remove("animate");
    },500);
}
}

// checking every 10ms to see if hit character 
var checkdead = setInterval(function(){
    // getting characters top pos
var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
// getting enemys left pos
var enemyLeft = parseInt(window.getComputedStyle(enemy).getPropertyValue("left"));
// if enemy is between 0 and 20 aka under charcter and charcter jumps less than 20px aka havent jumped over entire block
if(enemyLeft < 20 && enemyLeft>0 && characterTop >=130){
    enemy.style.aninmation = "none";
    enemy.style.display = "none";
    alert("You Lose");
}
}, 10)