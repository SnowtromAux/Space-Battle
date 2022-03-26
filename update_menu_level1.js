function updateLevel1(){

    if(b == 0){
        timer++;
        console.log(timer);


        if(timer == 200){
            song_level1.play();
            timer = 0
            b = 1;
        }
    }

    if(b == 1){
        if(isKeyPressed[80]){
            song_level1.stop();
            b = 2;
        }
        
        if(pReload > 0){
            pReload -= 0.5;
        }

        sy1 ++;
        if(sy1 == 600)sy1 = -600;

        sy2 ++;
        if(sy2 == 600)sy2 = -600;
        

        //console.log(pReload, mousePress);
        

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

}