let sx1 = 0, sy1 = 0;
let sx2 = 0 , sy2 = -600;

let timeLeft;
let warmupStarted;
let earnedmny;


function drawLevel(index){

    drawImage(backStars, sx1, sy1, 1600, 1200);
    drawImage(backStars2, sx2, sy2, 1600, 1200);

    context.fillStyle = "gray";
    context.fillRect(0, 750, 1600, 80);

    context.strokeStyle = "black";
    context.strokeRect(0, 750, 1600, 80);
    
    //Coins
    drawImage(star , 10, 765, 50, 50);
        
    context.fillStyle = "white";

    context.font="italic small-caps bold 50px arial";
    context.fillText(` X `, 70, 810);

    context.font="italic small-caps bold 54px arial";
    context.fillText(`${earnedmny}`, 135, 810);

    context.font="italic small-caps bold 50px arial";
    context.fillText("P = Pause" , 1125, 805);
    
    if(littlemenu == "warmup"){
        earnedmny = 0;
        shipType[player.ship].draw(715, 360, 100, 100);
                    
        context.fillStyle = "red";
        context.fillRect(715 , 470,  100, 13);

        context.fillStyle = "white";
        context.font="italic small-caps bold 13px arial";

        if(player.gameHp < 100){
            context.fillText(`${player.gameHp}`, 758, 482);
        }
        
        if(player.gameHp < 1000 && player.gameHp >= 100){
            context.fillText(`${player.gameHp}`, 756, 482);
        }
    
        if(player.gameHp < 10000 && player.gameHp >= 1000){
            context.fillText(`${player.gameHp}`, 753, 482);
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
        
        if(mouseX < 50) player.x = 0;
        else if(mouseX >= 1380) player.x = 1330;
        else player.x = mouseX - 50;
        
        if(mouseY < 50) player.y = 0;
        else if(mouseY >= 670) player.y = 620;
        else player.y = mouseY - 50;

        player.draw(player.x, player.y, 100, 100);
        
        if(player.gameHp <= 0)player.gameHp = 0;
        

        //Hp bar
        context.fillStyle = "red";
        context.fillRect(player.x, player.y + 110, (player.gameHp / player.hp) * 100, 13);
        
        context.fillStyle = "white";
        context.font="italic small-caps bold 13px arial";

        if(player.gameHp < 100){
            context.fillText(`${player.gameHp}`, player.x + 39, player.y + 122);
        }
        
        if(player.gameHp < 1000 && player.gameHp >= 100){
            context.fillText(`${player.gameHp}`, player.x + 37, player.y + 122);
        }
    
        if(player.gameHp < 10000 && player.gameHp >= 1000){
            context.fillText(`${player.gameHp}`, player.x + 34, player.y + 122);
        }

        for(let i = 0;i < enemies.length;i++){
            enemies[i].draw();
        }

        for(let i = 0;i < pBullets.length;i++){
            pBullets[i].draw();
        }

        for(let i = 0;i < eBullets.length;i++){
            eBullets[i].draw();
        }

        //Reload bar
        context.fillStyle = "blue";
        context.fillRect(player.x , player.y + 125, (player.rld - player.gameRld)/player.rld * 100 - 2, 3);
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