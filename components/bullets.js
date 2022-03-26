//Bullet classes
class Bullet1{
    constructor(){
        this.dmg = 5;
        this.cost = 0; 
        this.owned = true;
    }

    draw(x, y, w, h){
        drawImage(laserBlue[0], x, y, w, h);
    }
}

class Bullet2{
    constructor(){
        this.dmg = 10;
        this.cost = 150;
        this.owned = false;
    }

    draw(x, y, w, h){
        drawImage(laserBlue[1], x, y, w, h);
    }
}

class Bullet3{
    constructor(){
        this.dmg = 20;
        this.cost = 250;
        this.owned = false;
    }

    draw(x, y, w, h){
        drawImage(laserBlue[2], x, y, w, h);
    }
}

class Bullet4{
    constructor(){
        this.dmg = 30;
        this.cost = 450;
        this.owned = false;
    }

    draw(x, y, w, h){
        drawImage(laserGreen[0], x, y, w, h);
    }
}

class Bullet5{
    constructor(){
        this.dmg = 60;
        this.cost = 700;
        this.owned = false;
    }

    draw(x, y, w, h){
        drawImage(laserGreen[1], x, y, w, h);
    }
}

class Bullet6{
    constructor(){
        this.dmg = 100;
        this.cost = 800;
        this.owned = false;
    }

    draw(x, y, w, h){
        drawImage(laserGreen[2], x, y, w, h);
    }
}

class Bullet7{
    constructor(){
        this.dmg = 150;
        this.cost = 1000;
        this.owned = false;
    }

    draw(x, y, w, h){
        drawImage(laserRed[0], x, y, w, h);
    }
}


class Bullet8{
    constructor(){
        this.dmg = 200;
        this.cost = 1500;
        this.owned = false;
    }

    draw(x, y, w, h){
        drawImage(laserRed[1], x, y, w, h);
    }
}

class Bullet9{
    constructor(){
        this.dmg = 250;
        this.cost = 2000;
        this.owned = false;
    }

    draw(x, y, w, h){
        drawImage(laserRed[2], x, y, w, h);
    }
}

class Bullet10{
    constructor(){
        this.dmg = 300;
        this.cost = 3000;
        this.owned = false;
    }

    draw(x, y, w, h){
        drawImage(missile[0], x, y, w, h);
    }
}

class Bullet11{
    constructor(){
        this.dmg = 350;
        this.cost = 3500;
        this.owned = false;
    }

    draw(x, y, w, h){
        drawImage(missile[1], x, y, w, h);
    }
}

class Bullet12{
    constructor(){
        this.dmg = 400;
        this.cost = 4000
        this.owned = false;
    }

    draw(x, y, w, h){
        drawImage(missile[2], x, y, w, h);
    }
}

class Bullet13{
    constructor(){
        this.dmg = 450;
        this.cost = 5000;
        this.owned = false;
    }

    draw(x, y, w, h){
        drawImage(missile[3], x, y, w, h);
    }
}

class Bullet14{
    constructor(){
        this.dmg = 500;
        this.cost = 5500;
        this.owned = false;
    }

    draw(x, y, w, h){
        drawImage(missile[4], x, y, w, h);
    }
}

class Bullet15{
    constructor(){
        this.dmg = 550;
        this.cost = 5800;
        this.owned = false;
    }

    draw(x, y, w, h){
        drawImage(missile[5], x, y, w, h);
    }
}

class Bullet16{
    constructor(){
        this.dmg = 600;
        this.cost = 6000;
        this.owned = false;
    }

    draw(x, y, w, h){
        drawImage(missile[6], x, y, w, h);
    }
}

class Bullet17{
    constructor(){
        this.dmg = 650;
        this.cost = 6250;
        this.owned = false;
    }

    draw(x, y, w, h){
        drawImage(missile[7], x, y, w, h);
    }
}

class Bullet18{
    constructor(){
        this.dmg = 700;
        this.cost = 6500;
        this.owned = false;
    }

    draw(x, y, w, h){
        drawImage(missile[8], x, y, w, h);
    }
}

class Bullet19{
    constructor(){
        this.dmg = 800;
        this.cost = 7000;
        this.owned = false;
    }

    draw(x, y, w, h){
        drawImage(missile[9], x, y, w, h);
    }
}

//Bullet Variable making
let bulletType = [,
    new Bullet1(),
    new Bullet2(),
    new Bullet3(),
    new Bullet4(),
    new Bullet5(),
    new Bullet6(),
    new Bullet7(),
    new Bullet8(),
    new Bullet9(),
    new Bullet10(),
    new Bullet11(),
    new Bullet12(),
    new Bullet13(),
    new Bullet14(),
    new Bullet15(),
    new Bullet16(),
    new Bullet17(),
    new Bullet18(),
    new Bullet19()
];


