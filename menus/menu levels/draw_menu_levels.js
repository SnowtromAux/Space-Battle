function drawLevels(){
    if(menu == "levels"){
        drawImage(backStars , 0, 0, 800, 600);
        context.beginPath();

        context.fillStyle = "purple";
        context.fillRect(300, 530, 200, 50);

        context.fillStyle = "white";
        context.font="italic small-caps bold 40px arial";
        context.fillText("Back", 350, 565);

        for(let i = 1;i <= 15;i++){
            context.beginPath();
        
            if(completedLvl[i-1])context.fillStyle = "green";
            else context.fillStyle = "red";
            let oX = + 100 + + 150 * ((i - 1) % 5);
            let oY = + 105 + + 150 * (Math.floor((i - 1) / 5));
            context.arc(oX, oY , 50, 0,  2 * Math.PI);
            context.fill();
            
            context.fillStyle = "white";
            context.font="italic small-caps bold 60px arial";
            if(i < 10)context.fillText(`${i}`, oX - 17, oY + 18);
            else context.fillText(`${i}`, oX - 35, oY + 18);
        }
    }
}