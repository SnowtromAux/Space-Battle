function clickShips(){
    if(menu == "ships"){
        if(mouseX >= 630 && mouseX <= 770 && mouseY >= 558 && mouseY <= 583 && littlemenu == "nothing"){
            menu = "shop";
        }



        if(littlemenu == "nothing"){
            if(mouseX >= 300 && mouseX <= 400 && mouseY >= 190 && mouseY <= 290){
                littlemenu = "ship1_card";
            }

            if(mouseX >= 423 && mouseX <= 523 && mouseY >= 190 && mouseY <= 290){
                littlemenu = "ship2_card";
            }

            if(mouseX >= 546 && mouseX <= 646 && mouseY >= 190 && mouseY <= 290){
                littlemenu = "ship3_card";
            }        

            if(mouseX >= 669 && mouseX <= 769 && mouseY >= 190 && mouseY <= 290){
                littlemenu = "ship4_card";
            }



            if(mouseX >= 300 && mouseX <= 400 && mouseY >= 310 && mouseY <= 410){
                littlemenu = "ship5_card";
            }

            if(mouseX >= 423 && mouseX <= 523 && mouseY >= 310 && mouseY <= 410){
                littlemenu = "ship6_card";
            }

            if(mouseX >= 546 && mouseX <= 646 && mouseY >= 310 && mouseY <= 410){
                littlemenu = "ship7_card";
            }        

            if(mouseX >= 669 && mouseX <= 769 && mouseY >= 310  && mouseY <= 410){
                littlemenu = "ship8_card";
            }  



            if(mouseX >= 300 && mouseX <= 400 && mouseY >= 430 && mouseY <= 530){
                littlemenu = "ship9_card";
            }

            if(mouseX >= 423 && mouseX <= 523 && mouseY >= 430 && mouseY <= 530){
                littlemenu = "ship10_card";
            }

            if(mouseX >= 546 && mouseX <= 646 && mouseY >= 430 && mouseY <= 530){
                littlemenu = "ship11_card";
            }        

            if(mouseX >= 669 && mouseX <= 769 && mouseY >= 430 && mouseY <= 530){
                littlemenu = "ship12_card";
            }
        }else{
            for(let i = 1;i <= 12;i++){
                if(littlemenu == `ship${i}_card`){
                    //buy ship
                    if(mouseX >= 350 && mouseX <= 500 && mouseY >= 490 && mouseY <= 540 && shipType[i].owned == false && pMoney >= shipType[i].cost){
                        pShip = i;
                        shipType[i].owned = true;
                        pMoney -= shipType[i].cost;
                    }
    
                    //select ship 1
                    if(mouseX >= 350 && mouseX <= 500 && mouseY >= 490 && mouseY <= 540 && shipType[i].owned == true){
                        pShip = i;
                    }
    
                    //Back
                    if(mouseX >= 600 && mouseX <= 750 && mouseY >= 490 && mouseY <= 540){
                        littlemenu = "nothing";
                    }          
                }
            }
        }
    }
}