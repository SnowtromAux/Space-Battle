function clickShips(){
    if(menu == "ships"){
        if(mouseX >= 630 && mouseX <= 770 && mouseY >= 558 && mouseY <= 583 && littlemenu == "nothing"){
            menu = "shop";
        }

       

        if(littlemenu == "nothing"){
            for(let i = 1;i <= 12;i++){
                
                let posX =  + 300 + + 123 * ((i - 1) % 4);
                let posY =  + 190 + + 120 * Math.floor((i-1) / 4);
                
                console.log(i + ": " + posX + " | " + posY)
                if(mouseX >= posX && mouseX <= + posX + + 100 && mouseY >= posY && mouseY <= + posY + + 100)
                    littlemenu = `ship${i}_card`;
                
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