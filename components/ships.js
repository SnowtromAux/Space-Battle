let shipCount = 12;

let shipHp = [0, 15, 35, 70, 170, 300, 500, 700, 1000, 1300, 1500, 2000, 3000],
    shipBd = [0, 0, 5, 10, 25, 45, 100, 150, 200, 250, 300, 400, 500],
    shipAtt = [0, 5, 10, 20, 45, 100, 150, 200, 250, 300, 350, 400, 500],
    shipRld = [0, 50, 45, 41, 38, 35, 32, 30, 28, 26, 24, 22, 20],
    shipMny = [0, 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 100],
    shipCost = [0, 0, 300, 500, 1000, 1500, 2000, 3000, 4000, 5000, 6000, 7500, 10000],
    shipOwned = [true, true, false, false, false, false, false, false, false, false, false, false, false],
    ShipsBNum = [0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3];

class PlayerShip{
    constructor(hp, bd, att, rld, mny, cost, owned, type, bNum){
        this.hp = hp;
        this.bd = bd;
        this.att = att;
        this.rld = rld;
        this.mny = mny;
        this.cost = cost;
        this.owned = owned;
        this.type = type;
        this.bNum = bNum;
        this.ownedPatrons = [];
        this.slot1 = 0;
        this.slot2 = 0;
        this.slot3 = 0;
        this.curSlot = 0; 
    }

    draw(x, y, w, h){
        drawImage(playerShip[this.type - 1], x, y, w, h);
    }

    setupShips(){
        for(let i = 0;i < this.bNum;i++){
            this.ownedPatrons[i] = [];
            for(let j = 0; j <= bulletCount;j++){
                if(j == 0 || j == 1)
                    this.ownedPatrons[i][j] = true;
                else
                    this.ownedPatrons[i][j] = false;
            }
        }

        switch(this.bNum){
            case 1:
                this.slot1 = 1;
                break;
            case 2:
                this.slot2 = 1;
                this.slot3 = 1;
                break;
            case 3:
                this.slot1 = 1;
                this.slot2 = 1;
                this.slot3 = 1;
                break;
        }
    }
}


let shipType = [];

for(let i = 0;i <= shipCount;i++){
    shipType.push(new PlayerShip(shipHp[i], shipBd[i], shipAtt[i], shipRld[i], shipMny[i], shipCost[i], shipOwned[i], i, ShipsBNum[i]));
    shipType[i].setupShips();
}