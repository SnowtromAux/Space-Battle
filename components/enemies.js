let enemies = [];
let enemiesX = [], enemiesY = [];
let enemiesB = [], enemiesBX = [], enemiesBY = [];



class Enemy1{
    constructor(hp, bd, dmg, rld, alive){
        this.hp = hp;
        this.bd = bd;
        this.dmg = dmg;
        this.rld = rld;
        this.alive = alive;
    }

    draw(x, y, w, h, rotate){
        switch(rotate){
            case 1: drawImage(spaceship[0], x, y, w, h);break;

            case 2: drawImage(spaceship[9], x, y, w, h);break;
                
            case 3: drawImage(spaceship2[18], x, y, w, h);break;
        }
    }

}


class Enemy2{
    constructor(hp, bd, dmg, rld, alive){
        this.hp = hp;
        this.bd = bd;
        this.dmg = dmg;
        this.rld = rld;
        this.alive = alive;
    }

    draw(x, y, w, h, rotate){
        switch(rotate){
            case 1: drawImage(spaceship[1], x, y, w, h);break;

            case 2: drawImage(spaceship1[10], x, y, w, h);break;
                
            case 3: drawImage(spaceship2[19], x, y, w, h);break;
        }
    }

}