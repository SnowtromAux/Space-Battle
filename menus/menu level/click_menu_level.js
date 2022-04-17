function levelsClick(){
    if(menu.includes("level") && !menu.includes("levels")){
        //Restart BUTTON
        if(checkIfClicked(mouseX ,mouseY, 310, 300, 30)){
            
            drawLevel(index);

            while(bullets.length > 0){
                bullets.pop();
                bulletX.pop();
                bulletY.pop();
            }

            littlemenu = "nothing";
        }

        //Play button
        if(checkIfClicked(mouseX ,mouseY, 400, 300, 30)){
            littlemenu = "nothing";
        }

        //Back button
        if(checkIfClicked(mouseX ,mouseY, 490, 300, 30)){
            while(bullets.length > 0){
                bullets.pop();
                bulletX.pop();
                bulletY.pop();
            }
            
            song_start = new sound("songs/F-777 - System Split.mp3");
            song_start.play();

            littlemenu = "nothing";
            menu = "levels";
        }
    }
}