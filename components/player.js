let pBullets = [];
class Player{
    constructor(){
        this.x = 0;
        this.y = 0;
        this.w = 100;
        this.h = 100;
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

    draw(){
        shipType[this.ship].draw(this.x, this.y ,this.w ,this.h);
    }

    update(){
        this.hp = hpBonus[hpLvl] + shipType[this.ship].hp;
        this.bd = bdBonus[bdLvl] + shipType[this.ship].bd;
        this.att = attBonus[attLvl] + shipType[this.ship].att + bulletType[this.bullet].dmg;
        this.rld = rldBonus[rldLvl] + shipType[this.ship].rld;
        this.mny = mnyBonus[mnyLvl] + shipType[this.ship].mny;

        if(player.gameRld > 0)player.gameRld -= 0.5;
        
        if(this.gameRld <= 0 && mousePress == true && littlemenu.includes("level")){
            pBullets.push(new ShotBullet(this.x + 35, this.y - 10, this.bullet, this.dmg, 0));    
            this.gameRld = this.rld;
        }
    }
}

let player = new Player();