let takenDmg = 0;

function updatePlayer(){

    totalhp = hpBonus + shipType[pShip].hp;
    totalbd = bdBonus + shipType[pShip].bd;
    totalatt = attBonus + shipType[pShip].att;
    totalrld = rldBonus + shipType[pShip].rld;
    totalmny = mnyBonus + shipType[pShip].mny;
    
    totalatt += bulletType[pBullet].dmg;
    
    pReload = totalrld;
}
