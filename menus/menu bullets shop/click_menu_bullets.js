function clickBullets(){
    if(menu == "bullets"){
        
        
        //Back button 
        if(bulletsBackButton.click()){
            menu = "shop";
        }


        
        if(littlemenu == "nothing"){
            console.log("here 1 and littlemenu = " + littlemenu);
            for(let i = 1;i <= bulletCount;i++){
                if(ammoButton[i].click()){
                    littlemenu = `bullet_card_${i}`;
                    console.log("here 2 and littlemenu = " + littlemenu);
                }
            }
        }

        for(let i = 1;i <= bulletCount;i++){
            if(littlemenu == `bullet_card_${i}`){
                //Buy button
                if(bulletCardBuyButton.click() && player.money >= bulletType[i].cost){
                    if(shipType[player.ship].bNum == 2){
                        shipType[player.ship].ownedPatrons[shipType[player.ship].curSlot - 2][i] = true;
                        ammoButton[i].color = "green";
                    }else{
                        shipType[player.ship].ownedPatrons[shipType[player.ship].curSlot - 1][i] = true;
                        ammoButton[i].color = "green";
                    }

                    
                    
                    switch(shipType[player.ship].curSlot){
                        case 1:
                            shipType[player.ship].slot1 = i;
                            break;
                        case 2:
                            shipType[player.ship].slot2 = i;
                            break;
                        case 3:
                            shipType[player.ship].slot3 = i;
                            break;
                    }
                    player.money -= bulletType[i].cost;
                }
        
        
                //Select button
                if(bulletCardSelectButton.click()){
                    if(shipType[player.ship].bNum == 2 &&  shipType[player.ship].ownedPatrons[shipType[player.ship].curSlot - 2][i]){
                        switch(shipType[player.ship].curSlot){
                            case 1:
                                shipType[player.ship].slot1 = i;
                                break;
                            case 2:
                                shipType[player.ship].slot2 = i;
                                break;
                            case 3:
                                shipType[player.ship].slot3 = i;
                                break;
                        }
                    }else if(shipType[player.ship].ownedPatrons[shipType[player.ship].curSlot - 1][i]){
                        switch(shipType[player.ship].curSlot){
                            case 1:
                                shipType[player.ship].slot1 = i;
                                break;
                            case 2:
                                shipType[player.ship].slot2 = i;
                                break;
                            case 3:
                                shipType[player.ship].slot3 = i;
                                break;
                        }
                    }
                    player.bullet = i;
                }
        
        
                //Back button
                if(mouseX >= 600 && mouseX <= 750 && mouseY >= 490 && mouseY <= 540){
                    littlemenu = "nothing";
                }
                
        
            }
        }
    }
} 