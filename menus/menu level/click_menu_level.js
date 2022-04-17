function levelsClick(index){
    if(menu == `level${index}`){
        //Restart BUTTON
        if(checkIfClicked(mouseX ,mouseY, 310, 300, 30)){
            
            drawLevel(index);

            while(bullets.length > 0){
                bullets.pop();
                bulletX.pop();
                bulletY.pop();
            }

            littlemenu = "nothing";

            songLvl[index] = sound(songs[index]);
            songLvl[index].play();
        }

        //Play button
        if(checkIfClicked(mouseX ,mouseY, 400, 300, 30)){
            littlemenu = "nothing";
            songLvl[index].play();
        }

        //Back button
        if(checkIfClicked(mouseX ,mouseY, 490, 300, 30)){
            while(bullets.length > 0){
                bullets.pop();
                bulletX.pop();
                bulletY.pop();
            }
            
            songLvl[index] = sound(songs[index]);
            song_start = sound("songs/F-777 - System Split.mp3");
            song_start.play();

            littlemenu = "nothing";
            menu = "levels";
        }
    }
}