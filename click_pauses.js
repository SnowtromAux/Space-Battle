function levelsClick(){
    if(b == 2){
        //Restart BUTTON
        if(checkIfClicked(mouseX ,mouseY, 310, 300, 30)){
            song_level1 = new sound("F-777 - As One (HQ).mp3");
            b = 0;

            while(bullets.length > 0){
                bullets.pop();
                bulletX.pop();
                bulletY.pop();
            }
        }

        //Play button
        if(checkIfClicked(mouseX ,mouseY, 400, 300, 30)){
            if(menu == "level1"){
                song_level1.play();
            }
            b = 1;
        }

        //Back button
        if(checkIfClicked(mouseX ,mouseY, 490, 300, 30)){
            while(bullets.length > 0){
                bullets.pop();
                bulletX.pop();
                bulletY.pop();
            }
            song_start = new sound("F-777 - System Split.mp3");
            song_level1 = new sound("F-777 - As One (HQ).mp3");
            song_start.play();
            menu = "levels";
            b = 0;
        }
    }
}