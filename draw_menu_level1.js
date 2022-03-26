let sx1 = 0, sy1 = 0;
let sx2 = 0 , sy2 = -600;
let earnedmny;

let drawingX, drawingY;

function drawLevel1(){



    drawImage(backStars, sx1, sy1, 800, 600);
    drawImage(backStars2, sx2, sy2, 800, 600);

    if(timer >= 50 && timer <= 100){
        context.fillStyle = "white";
        context.font="italic small-caps bold 100px arial";
        context.fillText("3" , 370, 300);
    }


    if(timer >= 100 && timer <= 150){
        context.fillStyle = "white";
        context.font="italic small-caps bold 100px arial";
        context.fillText("2" , 370, 300);
    }


    if(timer >= 150 && timer <= 200){
        context.fillStyle = "white";
        context.font="italic small-caps bold 100px arial";
        context.fillText("1" , 370, 300);
    }







    
    if(b == 0){

        earnedmny = 0;
        playerShip(pShip , 350, 480, 100, 100);
        
        context.fillStyle = "red";
        context.fillRect(350 , 590,  100, 20);
   
    }else if(b == 1){
        context.fillStyle = "gray";
        context.fillRect(0, 550, 800, 50);

        context.strokeStyle = "black";
        context.strokeRect(0, 550, 800, 50);
        
        if(mouseX < 50) drawingX = 0;
        else if(mouseX > 750) drawingX = 700;
        else drawingX = mouseX - 50;
        
        if(mouseY < 50) drawingY = 0;
        else if(mouseY > 472) drawingY = 422;
        else drawingY = mouseY - 50;

        playerShip(pShip , drawingX, drawingY, 100, 100);

        
        if(takenDmg > totalhp)takenDmg = totalhp;
        

        //Hp bar
        context.fillStyle = "red";
        context.fillRect(drawingX, drawingY + 110, ((totalhp - takenDmg) / totalhp) * 100, 13);
        
        context.fillStyle = "white";
        context.font="italic small-caps bold 13px arial";

        if(totalhp - takenDmg < 100){
            context.fillText(`${totalhp - takenDmg}`, drawingX + 39, drawingY + 122);
        }
        
        if(totalhp - takenDmg < 1000 && totalhp - takenDmg >= 100){
            context.fillText(`${totalhp - takenDmg}`, drawingX + 37, drawingY + 122);
        }
    
        if(totalhp - takenDmg < 10000 && totalhp - takenDmg >= 1000){
            context.fillText(`${totalhp - takenDmg}`, drawingX + 34, drawingY + 122);
        }


        //Reload bar
        context.fillStyle = "blue";
        context.fillRect(drawingX , drawingY + 125, (totalrld - pReload)/totalrld * 100 - 2, 3);

        for(i = 0;i < bullets.length;i++){
            bullets[i].draw(bulletX[i], bulletY[i], 30, 30);
        }


        //Coins
        drawImage(star , 10, 560, 30, 30);
        
        context.fillStyle = "white";
        context.font="italic small-caps bold 30px arial";
        context.fillText(` X `, 35, 588);

        context.fillStyle = "white";
        context.font="italic small-caps bold 34px arial";
        context.fillText(`${earnedmny}`, 71, 588);

    }else{
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




    context.fillStyle = "white";
    context.font="italic small-caps bold 30px arial";
    context.fillText("P = Pause" , 650, 585);

}