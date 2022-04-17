let takenDmg = 0;

function updatePlayer(){

    totalhp = hpBonus[hpLvl] + shipType[pShip].hp;
    totalbd = bdBonus[bdLvl] + shipType[pShip].bd;
    totalatt = attBonus[attLvl] + shipType[pShip].att;
    totalrld = rldBonus[rldLvl] + shipType[pShip].rld;
    totalmny = mnyBonus[mnyLvl] + shipType[pShip].mny;
    
    totalatt += bulletType[pBullet].dmg;
}
