function clickBullets(){
    if(menu == "bullets"){
        
        
        //Back button 
        if(mouseX >= 540 && mouseX <= 780 && mouseY >= 510 && mouseY <= 560 && littlemenu == "nothing"){
            menu = "shop";  
        }

        
        if(littlemenu == "nothing"){
            
            //Bullet card 1 click
            if(mouseX >= 242 && mouseX <= 332 && mouseY >= 170 && mouseY <= 260){
                littlemenu = "bullet_card_1";
            }



            //Bullet card 2 click
            if(mouseX >= 353 && mouseX <= 443 && mouseY >= 170 && mouseY <= 260){
                littlemenu = "bullet_card_2";
            }



            //Bullet card 3 click
            if(mouseX >= 464 && mouseX <= 554 && mouseY >= 170 && mouseY <= 260){
                littlemenu = "bullet_card_3";
            }



            //Bullet card 4 click
            if(mouseX >= 575 && mouseX <= 665 && mouseY >= 170 && mouseY <= 260){
                littlemenu = "bullet_card_4";
            }



            //Bullet card 5 click
            if(mouseX >= 686 && mouseX <= 776 && mouseY >= 170 && mouseY <= 260){
                littlemenu = "bullet_card_5";
            }



            //Bullet card 6 click
            if(mouseX >= 20 && mouseX <= 110 && mouseY >= 280 && mouseY <= 370){
                littlemenu = "bullet_card_6";
            }



            //Bullet card 7 click
            if(mouseX >= 130 && mouseX <= 220 && mouseY >= 280 && mouseY <= 370){
                littlemenu = "bullet_card_7";
            }



            //Bullet card 8 click
            if(mouseX >= 241 && mouseX <= 331 && mouseY >= 280 && mouseY <= 370){
                littlemenu = "bullet_card_8";
            }



            //Bullet card 9 click
            if(mouseX >= 352 && mouseX <= 442 && mouseY >= 280 && mouseY <= 370){
                littlemenu = "bullet_card_9";
            }



            //Bullet card 10 click
            if(mouseX >= 463 && mouseX <= 553 && mouseY >= 280 && mouseY <= 370){
                littlemenu = "bullet_card_10";
            }



            //Bullet card 11 click
            if(mouseX >= 574 && mouseX <= 664 && mouseY >= 280 && mouseY <= 370){
                littlemenu = "bullet_card_11";
            }



            //Bullet card 12 click
            if(mouseX >= 685 && mouseX <= 775 && mouseY >= 280 && mouseY <= 370){
                littlemenu = "bullet_card_12";
            }



            //Bullet card 13 click
            if(mouseX >= 20 && mouseX <= 110 && mouseY >= 390 && mouseY <= 480){
                littlemenu = "bullet_card_13";
            }



            //Bullet card 14 click
            if(mouseX >= 130 && mouseX <= 220 && mouseY >= 390 && mouseY <= 480){
                littlemenu = "bullet_card_14";
            }



            //Bullet card 15 click
            if(mouseX >= 241 && mouseX <= 331 && mouseY >= 390 && mouseY <= 480){
                littlemenu = "bullet_card_15";
            }



            //Bullet card 16 click
            if(mouseX >= 353 && mouseX <= 443 && mouseY >= 390 && mouseY <= 480){
                littlemenu = "bullet_card_16";
            }


            //Bullet card 17 click
            if(mouseX >= 464 && mouseX <= 554 && mouseY >= 390 && mouseY <= 480){
                littlemenu = "bullet_card_17";
            }


            //Bullet card 18 click
            if(mouseX >= 575 && mouseX <= 665 && mouseY >= 390 && mouseY <= 480){
                littlemenu = "bullet_card_18";
            }


            //Bullet card 19 click
            if(mouseX >= 686 && mouseX <= 776 && mouseY >= 390 && mouseY <= 480){
                littlemenu = "bullet_card_19";
            }



        }

        for(let i = 1;i <= 19;i++){
            if(littlemenu == `bullet_card_${i}`){
                //Buy button
                if(mouseX >= 350 && mouseX <= 500 && mouseY >= 490 && mouseY <= 540 && pMoney >= bulletType[i].cost && bulletType[i].owned == false){
                    bulletType[i].owned = true;
                    pBullet = i;
                    pMoney -= bulletType[i].cost;
                }
        
        
                //Select button
                if(mouseX >= 350 && mouseX <= 500 && mouseY >= 490 && mouseY <= 540 && bulletType[i].owned == true){
                    pBullet = i;
                }
        
        
                //Back button
                if(mouseX >= 600 && mouseX <= 750 && mouseY >= 490 && mouseY <= 540){
                    littlemenu = "nothing";
                }
                
        
            }
        }
    }
}