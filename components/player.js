class Player{
    constructor(){
        this.gameHp = 0;
        this.gameRld = 0;
        this.ship = 1;
        this.bullet = 1;
        this.money = 100000;
        this.hp = 0;
        this.bd = 0;
        this.att = 0;
        this.rld = 0;
        this.mny = 0;
    }

    draw(x, y, w, h){
        shipType[this.ship].draw(x, y ,w ,h);
    }

    update(){
        this.hp = hpBonus[hpLvl] + shipType[this.ship].hp;
        this.bd = bdBonus[bdLvl] + shipType[this.ship].bd;
        this.att = attBonus[attLvl] + shipType[this.ship].att + bulletType[this.bullet].dmg;
        this.rld = rldBonus[rldLvl] + shipType[this.ship].rld;
        this.mny = mnyBonus[mnyLvl] + shipType[this.ship].mny;
    }

    shoot(){
        if(this.gameRld <= 0 && mousePress == true && littlemenu.includes("level")){
            bullets.push(new ShotBullet(shipX + 35, shipY - 10, this.bullet, this.dmg, 0));    
            this.gameRld = this.rld;
        }
    }
}

let player = new Player();