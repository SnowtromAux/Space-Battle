let bulletCount = 19;

let bulletDmg = [0, 5, 10, 20, 30, 60, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 800],
    bulletCost = [0, 0, 150, 250, 450, 700, 800, 1000, 1500, 2000, 3000, 3500, 4000, 5000, 5500, 5800, 6000, 6250, 6500, 7000];
class PlayerBullet{
    constructor(dmg , cost, type){
        this.dmg = dmg;
        this.cost = cost;
        this.type = type;
    }

    draw(x, y, w, h){
        drawImage(missile[this.type - 1], x, y, w, h);
    }
}

//Bullet Variable making
let bulletType = [];
for(let i = 0;i <= bulletCount;i++){
    bulletType.push(new PlayerBullet(bulletDmg[i], bulletCost[i], i))
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

    update(index){            
        this.y -= 3;
            
        if(this.y <= -30){
            pBullets[index] = pBullets[pBullets.length - 1];
            pBullets.pop();
        }

        for(let j = 0;j < enemies.length;j++){
            if(areColliding(this.x, 
                            this.y, 
                            this.w, 
                            this.h,
                            enemies[j].x, 
                            enemies[j].y, 
                            enemies[j].w, 
                            enemies[j].h)){

                enemies[j].hp -= player.att;
                pBullets[index] = pBullets[pBullets.length - 1];
                pBullets.pop();
                
                if(enemies[j].hp <= 0){
                    enemies[j] = enemies[enemies.length - 1];
                    enemies.pop();
                }
            }
        }
    }
}
