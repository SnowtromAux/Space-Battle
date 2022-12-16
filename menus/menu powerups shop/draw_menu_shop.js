let hpButton = new Button("green", "black", 5, 342, 115, 140, 50, `${200}`, "white", "italic", "small-caps", "bold", 36, "arial", 153, true);
let bdButton = new Button("green", "black", 5, 342, 215, 140, 50, `${200}`, "white", "italic", "small-caps", "bold", 36, "arial", 251.5, true);
let attButton = new Button("green", "black", 5, 342, 315, 140, 50, `${200}`, "white", "italic", "small-caps", "bold", 36, "arial", 354, true);
let rldButton = new Button("green", "black", 5, 342, 415, 140, 50, `${200}`, "white", "italic", "small-caps", "bold", 36, "arial", 452.5, true);
let mnyButton = new Button("green", "black", 5, 342, 515, 140, 50, `${200}`, "white", "italic", "small-caps", "bold", 36, "arial", 554, true);

let shipButton = new Button("purple", "black", 5, 1050, 375, 200, 200, "", "white", "", "", "", 0, "", 0, true)
let bulletButton_1 = new Button("purple", "black", 5, 1075, 150, 150, 150, "", "white", "", "", "", 0, "", 0, true)
let bulletButton_2 = new Button("purple", "black", 5, 885, 280, 150, 150, "", "white", "", "", "", 0, "", 0, false)
let bulletButton_3 = new Button("purple", "black", 5, 1265, 280, 150, 150, "", "white", "", "", "", 0, "", 0, false)

let ShopBackButton = new Button("purple", "black", 5, 530, 680, 320, 70, "Back", "white", "italic", "small-caps", "bold", 40, "arial", 728, true); 

let powerup_1Button = new Button("orange", "black", 5, 530, 110, 150,150, "", "white", "italic", "small-caps", "bold", 40, "arial", 0, true); 
let powerup_2Button = new Button("orange", "black", 5, 530, 280, 150,150, "", "white", "italic", "small-caps", "bold", 40, "arial", 0, true); 
let powerup_3Button = new Button("orange", "black", 5, 530, 450, 150,150, "", "white", "italic", "small-caps", "bold", 40, "arial", 0, true); 
let powerup_4Button = new Button("orange", "black", 5, 700, 110, 150,150, "", "white", "italic", "small-caps", "bold", 40, "arial", 0, true); 
let powerup_5Button = new Button("orange", "black", 5, 700, 280, 150,150, "", "white", "italic", "small-caps", "bold", 40, "arial", 0, true); 
let powerup_6Button = new Button("orange", "black", 5, 700, 450, 150,150, "", "white", "italic", "small-caps", "bold", 40, "arial", 0, true); 


function drawShop(){
    if(menu == "shop"){
        //Powerup Icons
        drawImage(backStars, 0, 0, screenWidth, screenHeight);
        
        drawImage(heartSmall, 10, 110, 100, 100);
        drawImage(flyMan, 25, 222, 70, 70);  
        drawImage(explosion, 25, 320, 70, 70);
        drawImage(bullet, 25, 420, 70, 70);
        drawImage(star, 25, 520, 70, 70);

        context.fillStyle = "white";

        context.font="italic small-caps 80px arial";
        context.fillText("Upgrades", 90, 75)
        context.fillText("Bonuses", 545, 75)
        context.fillText("Statistics", 975, 75)

        context.font="italic small-caps 20px arial";


        context.fillText("Max health" , 140, 140);
        context.fillText("Body damage" , 140, 240);
        context.fillText("Attack damage" , 140, 345);
        context.fillText("Reload" , 140, 445);
        context.fillText("Earnings" , 140, 545);


        //Health
        context.beginPath();
        
        context.strokeStyle = "black";

        for(let i = 1;i <= 10;i++){
            if(hpLvl >= i)context.fillStyle = "pink";
            else context.fillStyle = "gray";

            context.fillRect(+130 + + 35*(i-1), 175, 35, 20);
            context.strokeRect(+130 + + 35*(i-1), 175, 35, 20);
        }
        context.strokeStyle = "black";

        //Body damage
        for(let i = 1;i <= 10;i++){
            if(bdLvl >= i)context.fillStyle = "red";
            else context.fillStyle = "gray";

            context.fillRect(+130 + + 35*(i-1), 275, 35, 20);
            context.strokeRect(+130 + + 35*(i-1), 275, 35, 20);
        }
        context.strokeStyle = "black";

        //Attack damage
        for(let i = 1;i <= 10;i++){
            if(attLvl >= i)context.fillStyle = "orange";
            else context.fillStyle = "gray";

            context.fillRect(+130 + + 35*(i-1), 375, 35, 20);
            context.strokeRect(+130 + + 35*(i-1), 375, 35, 20);
        }
        context.strokeStyle = "black";

        //Reload
        for(let i = 1;i <= 10;i++){
            if(rldLvl >= i)context.fillStyle = "green";
            else context.fillStyle = "gray";

            context.fillRect(+130 + + 35*(i-1), 475, 35, 20);
            context.strokeRect(+130 + + 35*(i-1), 475, 35, 20);
        }
        context.strokeStyle = "black";

        //Stars
        for(let i = 1;i <= 10;i++){
            if(mnyLvl >= i)context.fillStyle = "yellow";
            else context.fillStyle = "gray";

            context.fillRect(+130 + + 35*(i-1), 575, 35, 20);
            context.strokeRect(+130 + + 35*(i-1), 575, 35, 20);
        }
        

        hpButton.draw();
        bdButton.draw();
        attButton.draw();
        rldButton.draw();
        mnyButton.draw();
        
        powerup_1Button.draw();
        powerup_2Button.draw();
        powerup_3Button.draw();
        powerup_4Button.draw();
        powerup_5Button.draw();
        powerup_6Button.draw();

        shipButton.draw();
        shipType[player.ship].draw(1055, 380, 190, 190);


        ShopBackButton.draw();


        //Money
        drawImage(star, 50, 680, 50,50);

        context.fillStyle = "white";
        context.font="italic small-caps 50px arial";
        context.fillText("x", 110, 720);

        context.fillStyle = "white";
        context.font="italic small-caps 62px arial";
        context.fillText(player.money, 150, 728);
       
        switch(shipType[player.ship].bNum){
            case 1:
                bulletButton_1.visibility = true;
                bulletButton_2.visibility = false;
                bulletButton_3.visibility = false;
                
                bulletButton_1.draw();

                bulletType[shipType[player.ship].slot1].draw(1075, 150, 150, 150);
                break;

            case 2:
                bulletButton_1.visibility = false;
                bulletButton_2.visibility = true;
                bulletButton_3.visibility = true;

                bulletButton_2.draw();
                bulletButton_3.draw();
                
                bulletType[shipType[player.ship].slot2].draw(885, 280, 150, 150);
                bulletType[shipType[player.ship].slot3].draw(1265, 280, 150, 150);

                break;

            case 3:
                bulletButton_1.visibility = true;
                bulletButton_2.visibility = true;
                bulletButton_3.visibility = true;
                
                bulletButton_1.draw();
                bulletButton_2.draw();
                bulletButton_3.draw();

                bulletType[shipType[player.ship].slot1].draw(1075, 150, 150, 150);
                bulletType[shipType[player.ship].slot2].draw(885, 280, 150, 150);
                bulletType[shipType[player.ship].slot3].draw(1265, 280, 150, 150);
                break;
        }
    }
}