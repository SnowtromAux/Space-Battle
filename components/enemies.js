let enemies = [];
let enemiesB = [];

class Enemy{
    constructor(x, y, hp, bd, dmg, rld, alive, type, bType){
        this.x = x;
        this.y = y;
        this.hp = hp;
        this.bd = bd;
        this.dmg = dmg;
        this.rld = rld;
        this.alive = alive;
        this.type = type;
        this.bType = bType;
        this.w = 50;
        this.h = 50;
    }

    draw(rotate){
        switch(rotate){
            case 0: drawImage(spaceship[this.type], this.x, this.y, this.w, this.h);break;

            case 90: drawImage(spaceship[this.type + 9], this.x, this.y, this.w, this.h);break;
                
            case -90: drawImage(spaceship[this.type + 18], this.x, this.y, this.w, this.h);break;
        }
    }

    shoot(){
        if(this.rld <= 0){
            enemiesB.push(new EnemyBullet(this.x, this.y, this.w, this.h, this.dmg, true, this.bType));
        }
    }

}

class EnemyBullet{
    constructor(x, y, w, h, dmg, alive, type){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.dmg = dmg;
        this.alive = alive;
        this.type = type;
    }

    draw(){
        bulletType[type].draw(this.x, this.y, this.w, this.h)
    }
}