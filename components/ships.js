let shipCount = 12;

let shipHp = [0, 15, 35, 70, 170, 300, 500, 700, 1000, 1300, 1500, 2000, 3000],
    shipBd = [0, 0, 5, 10, 25, 45, 100, 150, 200, 250, 300, 400, 500],
    shipAtt = [0, 5, 10, 20, 45, 100, 150, 200, 250, 300, 350, 400, 500],
    shipRld = [0, 50, 45, 41, 38, 35, 32, 30, 28, 26, 24, 22, 20],
    shipMny = [0, 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 100],
    shipCost = [0, 0, 300, 500, 1000, 1500, 2000, 3000, 4000, 5000, 6000, 7500, 10000],
    shipOwned = [true, true, false, false, false, false, false, false, false, false, false, false, false];
class PlayerShip{
    constructor(hp, bd, att, rld, mny, cost, owned, type){
        this.hp = hp;
        this.bd = bd;
        this.att = att;
        this.rld = rld;
        this.mny = mny;
        this.cost = cost;
        this.owned = owned;
        this.type = type;
    }

    draw(x, y, w, h){
        drawImage(playerShip[this.type - 1], x, y, w, h);
    }
}


let shipType = [];

for(let i = 0;i <= shipCount;i++){
    shipType.push(new PlayerShip(shipHp[i], shipBd[i], shipAtt[i], shipRld[i], shipMny[i], shipCost[i], shipOwned[i], i));
}