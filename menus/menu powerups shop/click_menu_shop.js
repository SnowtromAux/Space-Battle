

function clickShop(){
    if(ShopBackButton.click()){
        menu = "start";
    }

    if(bulletButton_1.click()){
        menu = "bullets";
        shipType[player.ship].curSlot = 1;
    }

    if(bulletButton_2.click()){
        menu = "bullets";
        shipType[player.ship].curSlot = 2;
    }

    if(bulletButton_3.click()){
        menu = "bullets";
        shipType[player.ship].curSlot = 3;
    }

    if(shipButton.click()){
        menu = "ships";
    }

    if(hpButton.click()){
        if(player.money >= powerupCost[hpLvl]){
            player.money -= powerupCost[hpLvl];
            hpLvl++;
            hpButton.text = `${powerupCost[hpLvl]}`;
            if(hpLvl >= 10)hpButton.text = "MAX";
        }else{
            //izpisva not enough money
        }    
    }
    
    if(bdButton.click()){
        if(player.money >= powerupCost[bdLvl]){
            player.money-= powerupCost[bdLvl];
            bdLvl++;
            bdButton.text = `${powerupCost[bdLvl]}`;
            if(bdLvl >= 10)bdButton.text = "MAX";
        }else{
            //izpisva not enough money
        }    
    }

    if(attButton.click()){
        if(player.money >= powerupCost[attLvl]){
            player.money -= powerupCost[attLvl];
            attLvl++;
            attButton.text = `${powerupCost[attLvl]}`
            if(attLvl >= 10)attButton.text = "MAX";
        }else{
            //izpisva not enough money
        }    
    }

    if(rldButton.click()){
        if(player.money >= powerupCost[rldLvl]){
            player.money -= powerupCost[rldLvl];
            rldLvl++;
            rldButton.text = `${powerupCost[rldLvl]}`
            if(rldLvl >= 10)rldButton.text = "MAX";
        }else{
            //izpisva not enough money
        }    
    }

    if(mnyButton.click()){
        if(player.money >= powerupCost[mnyLvl]){
            player.money -= powerupCost[mnyLvl];
            mnyLvl++;
            mnyButton.text = `${powerupCost[mnyLvl]}`
            if(mnyLvl >= 10)mnyButton.text = "MAX";
        }else{
            //izpisva not enough money
        }    
    }
}