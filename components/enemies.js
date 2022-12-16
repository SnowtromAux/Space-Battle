let enemies = [];
let eBullets = [];
let destroyed;

class Enemy{
    constructor(x, y, hp, bd, dmg, rld, type, bNum, rotate, bType, bSpeed, startTime, speed){
        this.x = x;
        this.y = y;
        this.hp = hp;
        this.bd = bd;
        this.dmg = dmg;
        this.rld = rld;
        this.type = type;
        this.bNum = bNum;
        this.bType = bType;
        this.bSpeed = bSpeed;
        this.rotate = rotate;
        this.startTime = startTime;
        this.speed = speed;
        this.w = 100;
        this.h = 100;
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

        this.rld--;

        if(this.hp <= 0)destroyed++;

        if((this.y >= 1000 && this.rotate == 0) || (this.x >= 1500 && this.rotate == 90) || (this.x <= -200 && this.rotate == -90) || this.hp <= 0){
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
            switch(this.bNum){
                case 1:
                    eBullets.push(new EnemyBullet(this.x + this.w, this.y + (100 - this.h) / 2, 30, 30, this.dmg, this.rld, this.bType, this.bSpeed, this.rotate));
                    break;
            }
        }        
    }

}

class EnemyBullet{
    constructor(x, y, w, h, dmg, rld, type, speed, rotate){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.dmg = dmg;
        this.rld = rld;
        this.type = type;
        this.speed = speed;
        this.rotate = rotate;
    }

    draw(){
        switch(this.rotate){
            case 0: 
                bulletType[this.type].draw(this.x, this.y, this.w, this.h);
                break;
            case 90: 
                bulletType[this.type + 19].draw(this.x, this.y, this.w, this.h);
                break;
            case -90: 
                bulletType[this.type + 38].draw(this.x, this.y, this.w, this.h);
                break;
        }
    }

    update(){
        for(let i = 0;i < eBullets.length;i++){
            switch(eBullets[i].rotate){
                case 0:
                    eBullets[i].y -= this.speed;
                    break;
                case 90:
                    eBullets[i].x += this.speed;
                    break;
                case -90:
                    eBullets[i].x -= this.speed;
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
enemiesLvl[1] = [new Enemy(-100, 200, 30, 20, 5, 50, 2, 1, 90, 3, 2, 5, 2)] 
