function updateLevel(index){
    
    sy1 ++;
    if(sy1 == 600)sy1 = -600;

    sy2 ++;
    if(sy2 == 600)sy2 = -600;

    if(isKeyPressed[80]){
        songLvl[index].pause();
        littlemenu = "pause";
    }

    if(pReload > 0)pReload -= 0.5;

    for(i = 0;i < bullets.length;i++){
        bulletY[i]-=3;
        if(bulletY[i] <= -10){
            bulletY[i] = bulletY[bullets.length - 1];
            bulletX[i] = bulletX[bullets.length - 1];
            bullets[i] = bullets[bullets.length - 1];

            bulletY.pop();
            bulletX.pop();
            bullets.pop();
        }
    }

}