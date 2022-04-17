function clickShop(){
    if(mouseX >= 520 && mouseX <= 760 && mouseY >= 520 && mouseY <= 580){
        menu = "start";
    }

    if(mouseX >= 538 && mouseX <= 742 && mouseY >= 278 && mouseY <= 492){
        menu = "bullets";
    }

    if(mouseX >= 538 && mouseX <= 742 && mouseY >= 28 && mouseY <= 232){
        menu = "ships";
    }

        
    //Upgrading health:
    if(mouseX >= 355 && mouseX <= 495 && mouseY >= 15 && mouseY <= 65){   
        if(pMoney >= powerupCost[hpLvl]){
            pMoney -= powerupCost[hpLvl];
            hpLvl++;
        }else if(hpLvl == 10){

        }else{
            //izpisva not enough money
        }    
    }
        
    //Upgrading body damage:
    if(mouseX >= 355 && mouseX <= 495 && mouseY >= 119 && mouseY <= 169){
        if(pMoney >= powerupCost[bdLvl]){
            pMoney -= powerupCost[bdLvl];
            bdLvl++;
        }else if(bdLvl == 10){

        }else{
            //izpisva not enough money
        }    
    }

    //Upgrading attack damage:
    if(mouseX >= 355 && mouseX <= 495 && mouseY >= 219 && mouseY <= 269){
        if(pMoney >= powerupCost[attLvl]){
            pMoney -= powerupCost[attLvl];
            attLvl++;
        }else if(attLvl == 10){

        }else{
            //izpisva not enough money
        }    
    }

    //Upgrading reload:
    if(mouseX >= 355 && mouseX <= 495 && mouseY >= 323 && mouseY <= 373){
        if(pMoney >= powerupCost[rldLvl]){
            pMoney -= powerupCost[rldLvl];
            rldLvl++;
        }else if(rldLvl == 10){

        }else{
            //izpisva not enough money
        }        
    }

    //Upgrading money gathering
    if(mouseX >= 355 && mouseX <= 495 && mouseY >= 427 && mouseY <= 477){
        if(pMoney >= powerupCost[mnyLvl]){
            pMoney -= powerupCost[mnyLvl];
            mnyLvl++;
        }else if(mnyLvl == 10){

        }else{
            //izpisva not enough money
        }       
    }
}