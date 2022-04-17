function checkIfClicked(x, y, o1, o2, r){
    if((x - o1) * (x - o1) + (y - o2) * (y - o2) > r*r) return false; 
    return true;
}

function clickLevels(){
    if(menu == "levels"){

        if(mouseX >= 300 && mouseX <= 500 && mouseY >= 530 && mouseY <= 580){
            menu = "start";
            littlemenu = "nothing";
        } 


        for(let i = 1; i<= 15;i++){
            let oX = + 100 + + 150 * ((i - 1) % 5);
            let oY = + 105 + + 150 * (Math.floor((i - 1) / 5));
            if(checkIfClicked(mouseX, mouseY, oX, oY, 50) && completedLvl[i-1] === true){
                warmupStarted = false;
                menu = `level${i}`;
                littlemenu = "warmup";
                song_start.pause();
            }
        }
    }
}