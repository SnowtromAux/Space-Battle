//Buttons
let hangarButton = new Button("purple" , "black", 10, 50, 620, 300, 100, "Hangar", "white", "italic", "small-caps", "bold", 72, "Lucida Handwriting", 692, true);
let playButton = new Button("purple" , "black", 10, 350 + 140/3, 620, 300, 100, "Play", "white", "italic", "small-caps", "bold", 72, "Lucida Handwriting", 692, true);
let rulesButton = new Button("purple" , "black", 10, 650 + 280/3, 620, 300 ,100, "Rules", "white", "italic", "small-caps", "bold", 72, "Lucida Handwriting", 692, true);
let exitButton =  new Button("purple" , "black", 10, 950 + 420/3, 620, 300 ,100, "Exit", "white", "italic", "small-caps", "bold", 72, "Lucida Handwriting", 692, true);

function drawStart(){
    if(menu == "start"){
        drawImage(backStars, 0, 0, screenWidth, screenHeight);
        drawImage(playerShip1_blue_2 , startX , 220,  250, 250);

        context.beginPath();
        
        context.fillStyle = "violet";
        context.font=`italic small-caps bold 100px Lucida Handwriting`;
        context.fillText("Space Battle" , 450, 112);

        hangarButton.draw();
        playButton.draw();
        rulesButton.draw();
        exitButton.draw();
    } 
}