//Player equipments
let pShip = 1, pBullet = 1, pMoney = 1000000, pReload = 0;
let counter = 0, timer = 0, b = 0;

let bullets = [], bulletX = [], bulletY = [];

//Upgrade Variables
let hpLvl = 0, bdLvl = 0, rldLvl = 0, attLvl = 0, mnyLvl = 0, penLvl = 0;

//Array for costs of powerups levels
let powerupCost = [200, 500, 750, 1000, 1500, 2000, 3000, 3500, 4000, 5000];

//Completed level Variables
let level0 = true, level1 = false , level2 = false, level3 = false, level4 = false;
let level5 = false, level6 = false, level7 = false, level8 = false, level9 = false;
let level10 = false, level11 = false, level12 = false, level13 = false, level14 = false;

//Creating variables for powerups
let hpBonus = 0, bdBonus = 0, attBonus = 0, rldBonus = 0, mnyBonus = 0;

let totalhp = 0, totalbd = 0, totalatt = 0, totalrld = 0, totalmny = 0;

//Menu Variable
let menu = "start", littlemenu = "nothing";

//Mousedown
let mousePress = false;

function update(){



    if(menu == "level1"){

        updateLevel1();
        if(pReload <= 0 && mousePress == true && b == 1){
            shoot();
        }

    }else if(menu == "start"){
    
        updateStart();
        updateSound();

    }else if(menu == "start" || menu == "shop" || menu == "bullets" || menu == "ships" || menu == "levels" || menu == "rules"){
        
        updateSound();
        updatePlayer();
    }

}

function draw() {

    if(menu == "start"){

        drawStart();

    }else if(menu == "levels"){
    
        drawLevels();
    
    }else if(menu == "shop"){
        
        drawShop();

    }else if(menu == "ships"){
        
        drawShips();

    }else if(menu == "bullets"){

        drawBullets();
        
    }else if(menu == "level1"){

        drawLevel1();
        
    }
    
    

};

function mouseup() {
    mousePress = false;

    triggerSound();
    
    console.log(mouseX, mouseY, menu, littlemenu, drawingX, drawingY);
    if(menu == "start"){
        
        clickStart();
    
    }else if(menu == "levels"){
    
        clickLevels();
    
    }else if(menu == "shop"){
    
        clickShop();
    
    }else if(menu == "ships"){

        clickShips();

    }else if(menu == "bullets"){

        clickBullets();

    }else if(menu == "level1"){

        levelsClick();

    }
    
};

function mousedown(){
    mousePress = true;
};
