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
        shipType[pShip].draw(350, 380, 100, 100);
                    
        context.fillStyle = "red";
        context.fillRect(350 , 490,  100, 13);

        context.fillStyle = "white";
        context.font="italic small-caps bold 13px arial";

        if(totalhp - takenDmg < 100){
            context.fillText(`${totalhp - takenDmg}`, 389, 502);
        }
        
        if(totalhp - takenDmg < 1000 && totalhp - takenDmg >= 100){
            context.fillText(`${totalhp - takenDmg}`, 387, 502);
        }
    
        if(totalhp - takenDmg < 10000 && totalhp - takenDmg >= 1000){
            context.fillText(`${totalhp - takenDmg}`, 384, 502);
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

        shipType[pShip].draw(shipX, shipY, 100, 100);
        
        if(takenDmg > totalhp)takenDmg = totalhp;
        

        //Hp bar
        context.fillStyle = "red";
        context.fillRect(shipX, shipY + 110, ((totalhp - takenDmg) / totalhp) * 100, 13);
        
        context.fillStyle = "white";
        context.font="italic small-caps bold 13px arial";

        if(totalhp - takenDmg < 100){
            context.fillText(`${totalhp - takenDmg}`, shipX + 39, shipY + 122);
        }
        
        if(totalhp - takenDmg < 1000 && totalhp - takenDmg >= 100){
            context.fillText(`${totalhp - takenDmg}`, shipX + 37, shipY + 122);
        }
    
        if(totalhp - takenDmg < 10000 && totalhp - takenDmg >= 1000){
            context.fillText(`${totalhp - takenDmg}`, shipX + 34, shipY + 122);
        }


        //Reload bar
        context.fillStyle = "blue";
        context.fillRect(shipX , shipY + 125, (totalrld - pReload)/totalrld * 100 - 2, 3);

        for(i = 0;i < bullets.length;i++){
            bullets[i].draw(bulletX[i], bulletY[i], 30, 30);
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