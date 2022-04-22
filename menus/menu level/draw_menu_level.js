let sx1 = 0, sy1 = 0;
let sx2 = 0 , sy2 = -600;

let timeLeft;
let warmupStarted;
let earnedmny;

let shipX , shipY;

function drawLevel(index){

    drawImage(backStars, sx1, sy1, 800, 600);
    drawImage(backStars2, sx2, sy2, 800, 600);

    context.fillStyle = "gray";
    context.fillRect(0, 550, 800, 50);

    context.strokeStyle = "black";
    context.strokeRect(0, 550, 800, 50);
    
    //Coins
    drawImage(star , 10, 560, 30, 30);
        
    context.fillStyle = "white";

    context.font="italic small-caps bold 30px arial";
    context.fillText(` X `, 35, 588);

    context.font="italic small-caps bold 34px arial";
    context.fillText(`${earnedmny}`, 71, 588);

    context.font="italic small-caps bold 30px arial";
    context.fillText("P = Pause" , 650, 585);
    
    if(littlemenu == "warmup"){
        earnedmny = 0;
        shipType[player.ship].draw(350, 380, 100, 100);
                    
        context.fillStyle = "red";
        context.fillRect(350 , 490,  100, 13);

        context.fillStyle = "white";
        context.font="italic small-caps bold 13px arial";

        if(player.gameHp < 100){
            context.fillText(`${player.gameHp}`, 389, 502);
        }
        
        if(player.gameHp < 1000 && player.gameHp >= 100){
            context.fillText(`${player.gameHp}`, 387, 502);
        }
    
        if(player.gameHp < 10000 && player.gameHp >= 1000){
            context.fillText(`${player.gameHp}`, 384, 502);
        }

        context.font="italic small-caps bold 100px arial";
        context.fillText(`${timeLeft}` , 370, 300);
        
        if(!warmupStarted){
            timeLeft = 3;
            warmupStarted = true;
            let countdown = setInterval(() => {
                if(littlemenu == "pause"){
                    clearInterval(countdown);
                }else if(timeLeft == 1){
                    littlemenu = `level${index}`;
                    songLvl[index].play();
                    clearInterval(countdown);
                }else{
                    timeLeft--;
                }
            }, 1000);
        }
    }
    
    if(littlemenu == `level${index}`){
        
        if(mouseX < 50) shipX = 0;
        else if(mouseX > 750) shipX = 700;
        else shipX = mouseX - 50;
        
        if(mouseY < 50) shipY = 0;
        else if(mouseY > 472) shipY = 422;
        else shipY = mouseY - 50;

        player.draw(shipX, shipY, 100, 100);
        
        if(player.gameHp <= 0)player.gameHp = 0;
        

        //Hp bar
        context.fillStyle = "red";
        context.fillRect(shipX, shipY + 110, (player.gameHp / player.hp) * 100, 13);
        
        context.fillStyle = "white";
        context.font="italic small-caps bold 13px arial";

        if(player.gameHp < 100){
            context.fillText(`${player.gameHp}`, shipX + 39, shipY + 122);
        }
        
        if(player.gameHp < 1000 && player.gameHp >= 100){
            context.fillText(`${player.gameHp}`, shipX + 37, shipY + 122);
        }
    
        if(player.gameHp < 10000 && player.gameHp >= 1000){
            context.fillText(`${player.gameHp}`, shipX + 34, shipY + 122);
        }


        //Reload bar
        context.fillStyle = "blue";
        context.fillRect(shipX , shipY + 125, (player.rld - player.gameRld)/player.rld * 100 - 2, 3);

        for(i = 0;i < pBullets.length;i++){
            pBullets[i].draw();
        }
    }

    if(littlemenu == "pause"){
        //Pause menu
        context.fillStyle = "purple";
        context.fillRect(250, 250, 300, 100);

        context.beginPath();
        
        context.fillStyle = "gray";
        context.strokeStyle = "black";

        //restart button
        context.arc(310, 300, 30, 0, 2*Math.PI);   
        context.stroke();
        context.fill();

        //Play button
        context.arc(400, 300, 30, 0, 2*Math.PI);   
        context.stroke();
        context.fill();

        //Back button
        context.arc(490, 300, 30, 0, 2*Math.PI);   
        context.stroke();
        context.fill();
    }
}