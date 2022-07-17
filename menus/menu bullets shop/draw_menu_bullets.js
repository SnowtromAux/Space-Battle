let bulletRectangle = new Button("#880E4F", "black", 5, 55, 50, 310, 300, "Your Bullet", "white", "", "", "bold", 30, "arial", 85, true);
let bulletStatsRectangle = new Button("#4A148C", "black", 5, 55, 345, 310, 50, `Damage: ${5}` , "orange", "", "", "bold", 30, "arial", 382, true);

let ammoButton = [
    "",
    new Button("green", "black", 5, 395, 255, 140, 140, "" , "", "", "", "", 0, "", 0, true),
    new Button("red", "black", 5, 565, 255, 140, 140, "" , "", "", "", "", 0, "", 0, true),
    new Button("red", "black", 5, 735, 255, 140, 140, "" , "", "", "", "", 0, "", 0, true),
    new Button("red", "black", 5, 905, 255, 140, 140, "" , "", "", "", "", 0, "", 0, true),
    new Button("red", "black", 5, 1075, 255, 140, 140, "" , "", "", "", "", 0, "", 0, true),
    new Button("red", "black", 5, 1245, 255, 140, 140, "" , "", "", "", "", 0, "", 0, true),
    new Button("red", "black", 5, 55, 425, 140, 140, "" , "", "", "", "", 0, "", 0, true),
    new Button("red", "black", 5, 225, 425, 140, 140, "" , "", "", "", "", 0, "", 0, true),
    new Button("red", "black", 5, 395, 425, 140, 140, "" , "", "", "", "", 0, "", 0, true),
    new Button("red", "black", 5, 565, 425, 140, 140, "" , "", "", "", "", 0, "", 0, true),
    new Button("red", "black", 5, 735, 425, 140, 140, "" , "", "", "", "", 0, "", 0, true),
    new Button("red", "black", 5, 905, 425, 140, 140, "" , "", "", "", "", 0, "", 0, true),
    new Button("red", "black", 5, 1075, 425, 140, 140, "" , "", "", "", "", 0, "", 0, true),
    new Button("red", "black", 5, 1245, 425, 140, 140, "" , "", "", "", "", 0, "", 0, true),
    new Button("red", "black", 5, 55, 595, 140, 140, "" , "", "", "", "", 0, "", 0, true),
    new Button("red", "black", 5, 225, 595, 140, 140, "" , "", "", "", "", 0, "", 0, true),
    new Button("red", "black", 5, 395, 595, 140, 140, "" , "", "", "", "", 0, "", 0, true),
    new Button("red", "black", 5, 565, 595, 140, 140, "" , "", "", "", "", 0, "", 0, true),
    new Button("red", "black", 5, 735, 595, 140, 140, "" , "", "", "", "", 0, "", 0, true)
];



let bulletsBackButton = new Button("purple", "black", 5, 980, 620, 300, 100, "Back", "white", "italic", "small-caps", "bold", 60, "arial", 690, true); 

let bulletCard = new Button("purple", "black", 5, 300, 40, 470, 520, ``, "blue", "italic", "small-caps", "bold", 60, "arial", 100, true);
let bulletCardBuyButton = new Button("green", "black", 5, 350, 490, 150, 50, `Buy`, "blue", "italic", "small-caps", "bold", 60, "arial", 528, true);
let bulletCardSelectButton = new Button("green", "black", 5, 350, 490, 150, 50, `Select`, "blue", "italic", "small-caps", "bold", 60, "arial", 528, true);
let bulletCardBackButton = new Button("green", "black", 5, 600, 490, 150, 50, `Back`, "blue", "italic", "small-caps", "bold", 60, "arial", 528, true);
let textCard = ["", "Clement", "Rimfire", "22BB", "Tokarev", "Remington Rimfire", "22CB", "Bergmann", "Magnum Rimfire", "22LR", 
                "Power - Mag", "Cor - Bon", "Action Express", "Remington Magnum", "Super magnum", "Winchester Magnum", "Wildy Magnum",
                "Tranter", "Marlin", "Avenger"];

let selectedSlot;
function drawBullets(){
    if(menu == "bullets"){
        switch(shipType[player.ship].curSlot){
            case 1:
                selectedSlot = shipType[player.ship].slot1;
                break; 
            case 2:
                selectedSlot = shipType[player.ship].slot2;
                break;
            case 3:
                selectedSlot = shipType[player.ship].slot3;
                break;
        }
        drawImage(backStars, 0, 0, 1600, 1200);

        bulletRectangle.draw();
        bulletStatsRectangle.draw();

        bulletType[selectedSlot].draw(100, 110, 220, 220);

        drawImage(sign, 700, -20, 200, 200);
        context.fillStyle = "white";
        context.font="italic small-caps bold 55px arial";
        context.fillText(`Bullets` , 705, 115);

        bulletsBackButton.draw();



        //Bullet buying fields
        for(let i = 1;i <= bulletCount;i++){
            if(shipType[player.ship].bNum == 2){
                if(shipType[player.ship].ownedPatrons[shipType[player.ship].curSlot - 2][i])ammoButton[i].color = "green";
                else ammoButton[i].color = "red";
            }else{
                if(shipType[player.ship].ownedPatrons[shipType[player.ship].curSlot - 1][i])ammoButton[i].color = "green";  
                else ammoButton[i].color = "red";
            }
    
            ammoButton[i].draw();
            bulletType[i].draw(ammoButton[i].x + 20, ammoButton[i].y + 20, ammoButton[i].w - 40, ammoButton[i].h - 40);
         
        }





        /*//Money
        drawImage(star, 20, 515, 50,50);

        context.fillStyle = "white";
        context.font="italic small-caps 50px arial";
        context.fillText("x", 80, 560);

        context.fillStyle = "white";
        context.font="italic small-caps 62px arial";
        context.fillText(player.money, 120, 560);*/


        

        for(let i = 1;i <= bulletCount;i++){
            if(littlemenu == `bullet_card_${i}`){
                bulletCard.text = textCard[i];
                bulletCard.draw();
                bulletType[i].draw(320, 170, 180, 180);
            
                context.fillStyle = "orange";
                context.font="italic small-caps bold 50px arial";
                context.fillText(`Attack: ${bulletType[i].dmg}` , 510, 290);
            
                if(shipType[player.ship].bNum == 2){
                
                    if(shipType[player.ship].ownedPatrons[shipType[player.ship].curSlot - 2][i]){
                        bulletCardSelectButton.draw();
                    }else{ 
                        bulletCardBuyButton.draw();
                        context.fillText(`Cost: ${bulletType[i].cost}`, 340, 390);
                    }
                }else{
                    if(shipType[player.ship].ownedPatrons[shipType[player.ship].curSlot - 1][i]){
                        bulletCardSelectButton.draw();
                    }else{
                        bulletCardBuyButton.draw();
                        context.fillText(`Cost: ${bulletType[i].cost}`, 340, 390);
                    }
                }
                bulletCardBackButton.draw(); 
            }
        }
    }
}