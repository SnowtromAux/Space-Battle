function drawBullets(){
    if(menu == "bullets"){
        drawImage(backStars, 0, 0, 800, 600);

        context.fillStyle = "#880E4F"; 
        context.strokeStyle = "black";
        context.fillRect(20, 20, 200, 200);
        context.strokeRect(20, 20, 200, 200);

        context.fillStyle = "#4A148C";
        context.fillRect(20, 220, 199, 40);

        context.fillStyle = "white";
        context.font="italic small-caps bold 30px arial";
        context.fillText(`Your Bullet` , 25, 55);


        context.fillStyle = "orange";
        context.font="italic small-caps bold 30px arial";

        bulletType[pBullet].draw(40, 60, 160, 155);
        context.fillText(`Attack: ${bulletType[pBullet].dmg}` , 25, 250);


        drawImage(sign, 450, -10, 150, 130);
        context.fillStyle = "white";
        context.font="italic small-caps bold 40px arial";
        context.fillText(`Bullet` , 453, 80);


        //Bullet buying fields
        for(let i = 1;i <= 19;i++){
            if(bulletType[i].owned)context.fillStyle = "green";
            else context.fillStyle = "red";
            

            switch(i){
                case 1:
                    context.fillRect(242, 170, 90, 90);
                    bulletType[1].draw(242, 170, 90, 90);
                    break;

                case 2:
                    context.fillRect(353, 170, 90, 90);
                    bulletType[2].draw(353, 170, 90, 90);
                    break;
                
                case 3:
                    context.fillRect(464, 170, 90, 90);
                    bulletType[3].draw(464, 170, 90, 90);
                    break;
                
                case 4:
                    context.fillRect(575, 170, 90, 90);
                    bulletType[4].draw(575, 170, 90, 90);
                    break;

                case 5:
                    context.fillRect(686, 170, 90, 90);
                    bulletType[5].draw(686, 170, 90, 90);
                    break;

                case 6:
                    context.fillRect(20, 280, 90, 90);
                    bulletType[6].draw(20, 280, 90, 90);
                    break;

                case 7:
                    context.fillRect(130, 280, 90, 90);
                    bulletType[7].draw(130, 280, 90, 90);
                    break;

                case 8:
                    context.fillRect(241, 280, 90, 90);
                    bulletType[8].draw(241, 280, 90, 90);
                    break;
                
                case 9:
                    context.fillRect(352, 280, 90, 90);
                    bulletType[9].draw(352, 280, 90, 90);
                    break;

                case 10:
                    context.fillRect(463, 280, 90, 90);
                    bulletType[10].draw(463, 280, 90, 90);
                    break;

                case 11:
                    context.fillRect(574, 280, 90, 90);
                    bulletType[11].draw(574, 280, 90, 90);
                    break;

                case 12:
                    context.fillRect(685, 280, 90, 90);
                    bulletType[12].draw(685, 280, 90, 90);
                    break;

                case 13:
                    context.fillRect(20, 390, 90, 90);
                    bulletType[13].draw(20, 390, 90, 90);
                    break;

                case 14:
                    context.fillRect(130, 390, 90, 90);
                    bulletType[14].draw(130, 390, 90, 90);
                    break;

                case 15:
                    context.fillRect(241, 390, 90, 90);
                    bulletType[15].draw(241, 390, 90, 90);
                    break;

                case 16:
                    context.fillRect(353, 390, 90, 90);
                    bulletType[16].draw(353, 390, 90, 90);
                    break;

                case 17:
                    context.fillRect(464, 390, 90, 90);
                    bulletType[17].draw(464, 390, 90, 90);
                    break;

                case 18:
                    context.fillRect(575, 390, 90, 90);
                    bulletType[18].draw(575, 390, 90, 90);
                    break;
                
                case 19:
                    context.fillRect(686, 390, 90, 90);
                    bulletType[19].draw(686, 390, 90, 90);
                    break;
            }
        }




        //Back Button
        context.fillStyle = "green";
        context.fillRect(540, 510, 240, 50);

        if(mouseX >= 540 && mouseX <= 780 && mouseY >= 510 && mouseY <= 560 && littlemenu == "nothing"){
            context.fillStyle = "purple";
        }else{
            context.fillStyle = "white";
        }

        context.font="italic small-caps bold 50px arial";
        context.fillText(`Back <<<` , 548, 551);


        //Money
        drawImage(star, 20, 515, 50,50);

        context.fillStyle = "white";
        context.font="italic small-caps 50px arial";
        context.fillText("x", 80, 560);

        context.fillStyle = "white";
        context.font="italic small-caps 62px arial";
        context.fillText(pMoney, 120, 560);




        for(let i = 1;i <= 19;i++){
            if(littlemenu == `bullet_card_${i}`){
                context.fillStyle = "purple";
                context.fillRect(300, 40, 470, 520);

                bulletType[i].draw(320, 170, 180, 180);
            
                context.fillStyle = "orange";
                context.font="italic small-caps bold 50px arial";
                context.fillText(`Attack: ${bulletType[i].dmg}` , 510, 290);
            
    
                context.fillStyle = "green";
                context.fillRect(350, 490, 150, 50);
                context.fillRect(600, 490, 150, 50);
    
                context.fillStyle = "white";
                context.font="italic small-caps bold 40px arial";
                context.fillText("Back", 625, 528);
                
                if(bulletType[i].owned){
                    context.fillText("Select", 355, 528);
                }else{
                    context.fillText("Buy", 388, 528);
                    context.font="italic small-caps bold 30px arial";
                    context.fillText(`Cost: ${bulletType[i].cost}`, 340, 390);
                }
            }
        }


        //Bullets buying card texts
        if(littlemenu == "bullet_card_1"){

            context.fillStyle = "blue";
            context.font="italic small-caps bold 60px arial";
            context.fillText(`Clement` , 405, 110);

        }else if(littlemenu == "bullet_card_2"){

            context.fillStyle = "blue";
            context.font="italic small-caps bold 60px arial";
            context.fillText(`Rimfire` , 430, 110);
        
        }else if(littlemenu == "bullet_card_3"){

            context.fillStyle = "blue";
            context.font="italic small-caps bold 60px arial";
            context.fillText(`22BB` , 470, 110);

        }else if(littlemenu == "bullet_card_4"){
  
            context.fillStyle = "blue";
            context.font="italic small-caps bold 60px arial";
            context.fillText(`Tokarev` , 410, 110);

        }else if(littlemenu == "bullet_card_5"){

            context.fillStyle = "blue";
            context.font="italic small-caps bold 47px arial";
            context.fillText(`Remington Rimfire` , 315, 110);

        }else if(littlemenu == "bullet_card_6"){

            context.fillStyle = "blue";
            context.font="italic small-caps bold 60px arial";
            context.fillText(`22CB` , 470, 110);

        }else if(littlemenu == "bullet_card_7"){

            context.fillStyle = "blue";
            context.font="italic small-caps bold 60px arial";
            context.fillText(`Bergmann` , 390, 110);

        }else if(littlemenu == "bullet_card_8"){

            context.fillStyle = "blue";
            context.font="italic small-caps bold 55px arial";
            context.fillText(`Magnum Rimfire` , 310, 110);

        }else if(littlemenu == "bullet_card_9"){

            context.fillStyle = "blue";
            context.font="italic small-caps bold 60px arial";
            context.fillText(`22LR` , 470, 110);
        }else if(littlemenu == "bullet_card_10"){

            context.fillStyle = "blue";
            context.font="italic small-caps bold 60px arial";
            context.fillText(`Power-Mag` , 390, 110);

        }else if(littlemenu == "bullet_card_11"){

            context.fillStyle = "blue";
            context.font="italic small-caps bold 60px arial";
            context.fillText(`Cor - Bon` , 390, 110);

        }else if(littlemenu == "bullet_card_12"){
       
            context.fillStyle = "blue";
            context.font="italic small-caps bold 55px arial";
            context.fillText(`Action Express` , 325, 110);

        }else if(littlemenu == "bullet_card_13"){
          
            context.fillStyle = "blue";
            context.font="italic small-caps bold 46px arial";
            context.fillText(`Remington Magnum` , 310, 110);

        }else if(littlemenu == "bullet_card_14"){
         
            context.fillStyle = "blue";
            context.font="italic small-caps bold 55px arial";
            context.fillText(`Super magnum` , 335, 110);

        }else if(littlemenu == "bullet_card_15"){
  
            context.fillStyle = "blue";
            context.font="italic small-caps bold 45px arial";
            context.fillText(`Winchester Magnum` , 303, 110);

        }else if(littlemenu == "bullet_card_16"){
            
            context.fillStyle = "blue";
            context.font="italic small-caps bold 55px arial";
            context.fillText(`Wildy Magnum` , 333, 110);

        }else if(littlemenu == "bullet_card_17"){
            
            context.fillStyle = "blue";
            context.font="italic small-caps bold 60px arial";
            context.fillText(`Tranter` , 410, 110);

        }else if(littlemenu == "bullet_card_18"){
           
            context.fillStyle = "blue";
            context.font="italic small-caps bold 60px arial";
            context.fillText(`Marlin` , 430, 110);

        }else if(littlemenu == "bullet_card_19"){
  
            context.fillStyle = "blue";
            context.font="italic small-caps bold 60px arial";
            context.fillText(`Avenger` , 405, 110);

        }
    }
}