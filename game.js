let counter = 0, timer = 0;

//Upgrade Variables
let hpLvl = 0, bdLvl = 0, rldLvl = 0, attLvl = 0, mnyLvl = 0, penLvl = 0;

//Array for costs of powerups levels
let powerupCost = [200, 500, 750, 1000, 1500, 2000, 3000, 3500, 4000, 5000];

//Completed level Variables
let completedLvl = [true , false, false, false, false, false, false, false, false, false, false, false, false, false, false];

//Creating variables for powerups
let hpBonus = [0 , 20, 50, 100, 150, 200, 400, 650, 1000, 1400, 2000], 
    bdBonus = [0, 10, 20, 40, 60, 80, 100, 150, 200, 300, 400],
    attBonus = [0, 20, 40, 60, 80, 100, 150, 200, 250, 300, 400], 
    rldBonus = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10],
    mnyBonus = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50];


//Menu Variable
let menu = "start", littlemenu = "nothing";

//Mousedown
let mousePress = false;

function update(){

    player.update();

    for(let i = 1; i <= 15;i++){
        if(menu == `level${i}` && littlemenu != "pause"){
            updateLevel(i);
            player.shoot();
        }
    }

    if(menu == "start"){
    
        updateStart();

    }
}

function draw() {

    switch(menu){
        case "start": 
            drawStart();
            break;
        case "levels":
            drawLevels();
            break;
        case "shop":
            drawShop();
            break;
        case "ships":
            drawShips();
            break;
        case "bullets":
            drawBullets();
            break;
    }

    for(let i = 1;i <= 15;i++){
        if(menu == `level${i}`){
            drawLevel(i);
        }
    }
};

function mouseup() {
    mousePress = false;
    switch(menu){
        case "start": 
            song_start.play();
            clickStart();
            break;
        case "levels":
            clickLevels();
            break;
        case "shop":
            clickShop();
            break;
        case "ships":
            clickShips();
            break;
        case "bullets":
            clickBullets();
            break;
    }

    for(let i = 1; i <= 15;i++){
        if(menu == `level${i}`){
            levelsClick(i);
        }
    }
};

function mousedown(){
    mousePress = true;
};
