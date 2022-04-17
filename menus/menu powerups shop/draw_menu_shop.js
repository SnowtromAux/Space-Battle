function drawCost(variable , i){

    context.fillStyle = "white";
    context.font="italic small-caps bold 36px arial";
    let position = 53 + (i - 1)*102.5;
    
    if(variable < 10){
        if(powerupCost[variable] < 1000)
            context.fillText(powerupCost[variable] , 393, position);
        

        if(powerupCost[variable] >= 1000 && powerupCost[variable] < 10000)
            context.fillText(powerupCost[variable] , 383, position);
        
        
    }else{
        context.fillText("MAX" , 380, position);   
    }
    context.strokeStyle = "black";
}

function drawShop(){
    if(menu == "shop"){
        //Powerup Icons
        drawImage(backStars, 0, 0, 800, 600);
        drawImage(heartSmall, 10, 10, 60, 60);
        drawImage(flyMan, 15, 114, 50, 50);  
        drawImage(explosion, 10, 214, 60, 60);
        drawImage(bullet, 10, 318, 60, 60);
        drawImage(star, 10, 422, 60, 60);

        context.fillStyle = "white";
        context.font="italic small-caps 20px arial";

        context.fillText("Max health" , 160, 40);
        context.fillText("Body damage" , 150, 140);
        context.fillText("Attack damage" , 140, 245);
        context.fillText("Reload" , 175, 345);
        context.fillText("Earnings" , 165, 445);


        //Health
        context.beginPath();
        
        context.strokeStyle = "black";

        for(let i = 1;i <= 10;i++){
            if(hpLvl >= i)context.fillStyle = "pink";
            else context.fillStyle = "gray";

            context.fillRect(+90 + + 25*(i-1), 50, 25, 20);
            context.strokeRect(+90 + + 25*(i-1), 50, 25, 20);
        }
        context.strokeStyle = "black";

        //Body damage
        for(let i = 1;i <= 10;i++){
            if(bdLvl >= i)context.fillStyle = "red";
            else context.fillStyle = "gray";

            context.fillRect(+90 + + 25*(i-1), 154, 25, 20);
            context.strokeRect(+90 + + 25*(i-1), 154, 25, 20);
        }
        context.strokeStyle = "black";

        //Attack damage
        for(let i = 1;i <= 10;i++){
            if(attLvl >= i)context.fillStyle = "orange";
            else context.fillStyle = "gray";

            context.fillRect(+90 + + 25*(i-1), 258, 25, 20);
            context.strokeRect(+90 + + 25*(i-1), 258, 25, 20);
        }
        context.strokeStyle = "black";

        //Reload
        for(let i = 1;i <= 10;i++){
            if(rldLvl >= i)context.fillStyle = "green";
            else context.fillStyle = "gray";

            context.fillRect(+90 + + 25*(i-1), 358, 25, 20);
            context.strokeRect(+90 + + 25*(i-1), 358, 25, 20);
        }
        context.strokeStyle = "black";

        //Stars
        for(let i = 1;i <= 10;i++){
            if(mnyLvl >= i)context.fillStyle = "yellow";
            else context.fillStyle = "gray";

            context.fillRect(+90 + + 25*(i-1), 462, 25, 20);
            context.strokeRect(+90 + + 25*(i-1), 462, 25, 20);
        }
        

        //Buying buttons
        context.fillStyle = "green";
        context.strokeStyle = "black";

        //health buy button
        context.fillRect(355, 15, 140, 50);
        context.strokeRect(355, 15, 140, 50);

        //Body damage buy button
        context.fillRect(355, 119, 140, 50);
        context.strokeRect(355, 119, 140, 50);

        //Attack damage buy button
        context.fillRect(355, 219, 140, 50);
        context.strokeRect(355, 219, 140, 50);

        //Reload buy button
        context.fillRect(355, 323, 140, 50);
        context.strokeRect(355, 323, 140, 50);

        //Earnings buy button
        
        context.fillRect(355, 427, 140, 50);
        context.strokeRect(355, 427, 140, 50);

        //Cost Price
        drawCost(hpLvl , 1);
        drawCost(bdLvl , 2);
        drawCost(attLvl , 3);
        drawCost(rldLvl , 4);
        drawCost(mnyLvl , 5);


        //Player ship
        context.strokeStyle = "black";
        context.strokeRect(540, 30, 200, 200);
        context.strokeRect(539, 29, 202, 202);
        context.strokeRect(538, 28, 204, 204);

        context.fillStyle = "purple";
        context.fillRect(540, 30, 200, 200);
        
        shipType[pShip].draw(540, 30, 200, 200);


        //Player Bullet
        context.strokeStyle = "black";
        context.strokeRect(540, 280, 200, 200);
        context.strokeRect(539, 279, 202, 202);
        context.strokeRect(538, 278, 204, 204);

        context.fillStyle = "purple";
        context.fillRect(540, 280, 200, 200);

        bulletType[pBullet].draw(540, 280, 200, 200)

        //Back Button
        context.fillStyle = "purple";
        context.fillRect(530, 530, 220 ,50);

        context.fillStyle = "white";
        context.font="italic small-caps bold 40px arial";
        context.fillText("Back", 595, 565);


        //Money
        drawImage(star, 10, 530, 50,50);

        context.fillStyle = "white";
        context.font="italic small-caps 50px arial";
        context.fillText("x", 70, 570);

        context.fillStyle = "white";
        context.font="italic small-caps 62px arial";
        context.fillText(pMoney, 110, 578);
        
    }
}