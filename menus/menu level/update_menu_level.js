function updateLevel(index){
    
    sy1 ++;
    if(sy1 == 600)sy1 = -600;

    sy2 ++;
    if(sy2 == 600)sy2 = -600;

    if(isKeyPressed[80]){
        songLvl[index].pause();
        littlemenu = "pause";
    }

    for(i = 0;i < pBullets.length;i++){
        pBullets[i].y-=3;
        if(pBullets[i].y <= -10){
            pBullets[i] = pBullets[pBullets.length - 1];
            pBullets.pop();
        }
    }

}