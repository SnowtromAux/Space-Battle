function updateLevel(index){
    
    sy1 ++;
    if(sy1 == 600)sy1 = -600;

    sy2 ++;
    if(sy2 == 600)sy2 = -600;

    if(isKeyPressed[80]){
        songLvl[index].pause();
        littlemenu = "pause";
    }

    if(player.gameRld > 0)player.gameRld -= 0.5;

    for(i = 0;i < bullets.length;i++){
        bullets[i].y-=3;
        if(bullets[i].y <= -10){
            bullets[i] = bullets[bullets.length - 1];
            bullets.pop();
        }
    }

}