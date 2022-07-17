let enemies = [];
let eBullets = [];

class Enemy{
    constructor(x, y, hp, bd, dmg, rld, type, rotate, bType, startTime, speed){
        this.x = x;
        this.y = y;
        this.hp = hp;
        this.bd = bd;
        this.dmg = dmg;
        this.rld = rld;
        this.type = type;
        this.bType = bType;
        this.rotate = rotate;
        this.startTime = startTime;
        this.speed = speed;
        this.w = 50;
        this.h = 50;
    }

    draw(){
        switch(this.rotate){
            case 0: 
                drawImage(spaceship[this.type], this.x, this.y, this.w, this.h);
                break;
            case 90: 
                drawImage(spaceship[this.type + 9], this.x, this.y, this.w, this.h);
                break;
            case -90: 
                drawImage(spaceship[this.type + 18], this.x, this.y, this.w, this.h);
                break;
        }
    }

    update(index){
        let enemyInterval = setInterval(() => {
            if(this.startTime <= 0){
                clearInterval(enemyInterval);
            }else{
                this.startTime--;
            }
        }, 1000);
        if(this.y >= 800 && this.rotate == 0){
            enemies[index] = enemies[enemies.length - 1];
            enemies.pop();
        }

        if(this.x >= 1000 && this.rotate == 90){
            enemies[index] = enemies[enemies.length - 1];
            enemies.pop();
        }

        if(this.x <= -200 && this.rotate == -90){
            enemies[index] = enemies[enemies.length - 1];
            enemies.pop();
        }

        if(this.startTime <= 0){
            switch(this.rotate){
                case 0:
                    this.y += this.speed;
                    break;
                case 90:
                    this.x += this.speed;
                    break;
                case -90:
                    this.x -= this.speed;
                    break;
            }
        }

        if(this.rld <= 0 && littlemenu.includes("level") && areColliding(
            0, 0, 1600, 1200, this.x, this.y, this.w, this.h  
        )){
            eBullets.push(new EnemyBullet(this.x, this.y, this.w, this.h, this.dmg, true, this.bType, this.rotate));
        }        
    }

}

class EnemyBullet{
    constructor(x, y, w, h, dmg, rld, type, rotate){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.dmg = dmg;
        this.rld = rld;
        this.type = type;
        this.rotate = rotate;
    }

    draw(){
        switch(rotate){
            case 0: 
                bulletType[type].draw(this.x, this.y, this.w, this.h);
                break;
            case 90: 
                bulletType[type + 19].draw(this.x, this.y, this.w, this.h);
                break;
            case -90: 
                bulletType[type + 38].draw(this.x, this.y, this.w, this.h);
                break;
        }
    }

    update(){
        for(let i = 0;i < eBullets.length;i++){
            switch(eBullets[i].rotate){
                case 0:
                    eBullets[i].y -= 2;
                    break;
                case 90:
                    eBullets[i].x += 2;
                    break;
                case -90:
                    eBullets[i].x -= 2;
                    break;
            }

            if(areColliding(eBullets[i].x,
                            eBullets[i].y,
                            eBullets[i].w,
                            eBullets[i].h,
                            player.x,
                            player.y,
                            player.w,
                            player.h
                            )){
                player.hp -= eBullets[i].dmg;
                if(player.hp <= 0){
                    //Game over
                }
            }
        }
    }
}




//Level1 enemies
let enemiesLvl = [];
enemiesLvl[1] = [new Enemy(-100, 200, 30, 100, 100, 60, 1, 90, 2, 4, 1), 
                new Enemy(-100, 300, 20, 100, 100, 40, 2, 90, 3, 4, 1)]
