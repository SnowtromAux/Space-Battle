function updateLevel(index){
    
    sy1 ++;
    if(sy1 == 600)sy1 = -600;

    sy2 ++;
    if(sy2 == 600)sy2 = -600;

    if(isKeyPressed[80]){
        songLvl[index].pause();
        littlemenu = "pause";
    }
}