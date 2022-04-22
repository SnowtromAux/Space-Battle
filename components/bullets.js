let bulletCount = 19;

let bulletDmg = [0, 5, 10, 20, 30, 60, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 800],
    bulletCost = [0, 0, 150, 250, 450, 700, 800, 1000, 1500, 2000, 3000, 3500, 4000, 5000, 5500, 5800, 6000, 6250, 6500, 7000],
    bulletOwned = [true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];

class PlayerBullet{
    constructor(dmg , cost, owned, type){
        this.dmg = dmg;
        this.cost = cost;
        this.owned = owned;
        this.type = type;
    }

    draw(x, y, w, h){
        drawImage(missile[this.type - 1], x, y, w, h);
    }
}

//Bullet Variable making
let bulletType = [];
for(let i = 0;i <= bulletCount;i++){
    bulletType.push(new PlayerBullet(bulletDmg[i], bulletCost[i], bulletOwned[i], i))
}


class ShotBullet{
    constructor(x, y, type, dmg, rotation){
        this.x = x;
        this.y = y;
        this.w = 30;
        this.h = 30;
        this.type = type;
        this.dmg = dmg;
        this.rotation = rotation;
    }
    
    draw(){
        drawImage(missile[this.type - 1], this.x, this.y, this.w, this.h);
    }
}
