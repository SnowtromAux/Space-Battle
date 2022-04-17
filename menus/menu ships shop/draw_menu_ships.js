function drawShips(){
    if(menu == "ships"){
        
        drawImage(backStars, 0, 0, 800, 600);
        context.fillStyle = "#4A148C";
        context.fillRect(20, 240, 250,340)

        context.fillStyle = "#880E4F";
        context.fillRect(20, 20, 250 ,220);

        context.strokeStyle = "purple";
        context.strokeRect(20, 20, 250, 560);

        shipType[pShip].draw(70, 80, 150, 150);

        context.fillStyle = "white";
        context.font="italic small-caps bold 40px arial";
        context.fillText(`Your Ship` , 45, 60);


        //Statistics draw
        context.font="italic small-caps bold 30px arial";
        
        //health drawing
        context.fillStyle = "pink";
        context.fillText(`Health: ${totalhp}` , 40, 280);

        //body damage drawing
        context.fillStyle = "red";
        context.fillText(`B.DMG: ${totalbd}` , 40, 340);

        //attack drawing
        context.fillStyle = "orange";
        context.fillText(`Attack: ${totalatt}` , 40, 400);

        //reload drawing
        context.fillStyle = "green";
        context.fillText(`Reload: ${totalrld}` , 40, 460);

        //earnings drawing
        context.fillStyle = "yellow";
        context.fillText(`Earning: ${totalmny}%` , 40, 520);

        


        drawImage(sign, 450, -10, 170, 170);
        context.fillStyle = "white";
        context.font="italic small-caps bold 55px arial";
        context.fillText(`Ships` , 456, 105);

        
        

        for(let i = 1;i <= 12;i++){
            if(shipType[i].owned)context.fillStyle = "green";
            else context.fillStyle = "red";

            context.fillRect(300 + ((i-1) % 4) * 123, 190 + Math.floor((i-1) / 4) * 120, 100, 100);
            shipType[i].draw(300 + ((i-1) % 4) * 123, 190 + Math.floor((i-1) / 4) * 120, 100, 100);
        }
    
    
        
        context.fillStyle = "green";
        context.fillRect(630, 558, 140, 25);

        if(mouseX >= 630 && mouseX <= 770 && mouseY >= 558 && mouseY <= 583 && littlemenu == "nothing"){
            context.fillStyle = "purple";
        }else{
            context.fillStyle = "white";
        }

        context.font="italic small-caps bold 30px arial";
        context.fillText(`Back <<<` , 630, 580);


        for(let i = 1;i <= 12;i++){
            if(littlemenu == `ship${i}_card`){
                context.fillStyle = "purple";
                context.fillRect(300, 40, 470, 520);

                shipType[i].draw(320, 170, 180, 180);
            
                context.font="italic small-caps bold 30px arial";

                context.fillStyle = "pink";
                context.fillText(`Health: ${shipType[i].hp}` , 550, 190);
    
                context.fillStyle = "red";
                context.fillText(`B.DMG: ${shipType[i].bd}` , 550, 240);
    
                context.fillStyle = "orange";
                context.fillText(`Attack: ${shipType[i].att}` , 550, 290);
                
                context.fillStyle = "green";
                context.fillText(`Reload: ${shipType[i].rld}` , 550, 340);
    
                context.fillStyle = "yellow";
                context.fillText(`Earning: ${shipType[i].mny}%` , 550, 390);
    
                context.fillStyle = "green";
                context.fillRect(350, 490, 150, 50);
                context.fillRect(600, 490, 150, 50);
    
                context.fillStyle = "white";
                context.font="italic small-caps bold 40px arial";
                context.fillText("Back", 625, 528);
                
                if(shipType[i].owned){
                    context.fillText("Select", 355, 528);
                }else{
                    context.fillText("Buy", 388, 528);
                    context.font="italic small-caps bold 30px arial";
                    context.fillText(`Cost: ${shipType[i].cost}`, 350, 390);
                }

                
                context.fillStyle = "blue";

                switch(i){
                    case 1:
                        context.font="italic small-caps bold 60px arial";
                        context.fillText(`SA-23E Aurora` , 305, 110);
                        break;

                    case 2:
                        context.font="italic small-caps bold 48px arial";
                        context.fillText(`SA-43 HammerHead` , 305, 110);            
                        break;

                    case 3:
                        context.font="italic small-caps bold 45px arial";
                        context.fillText(`ARC170 StarFighter` , 305, 110);
                        break;

                    case 4:
                        context.font="italic small-caps bold 45px arial";
                        context.fillText(`Raider Fighter` , 370, 110);
                        break;
                    
                    case 5:
                        context.font="italic small-caps bold 60px arial";
                        context.fillText(`Eagle 5` , 440, 110);
                        break;
                    
                    case 6:
                        context.font="italic small-caps bold 60px arial";
                        context.fillText(`Cyclon Raider` , 310, 110);
                        break;

                    case 7:
                        context.font="italic small-caps bold 60px arial";
                        context.fillText(`Explorer` , 400, 110);
                        break;

                    case 8:
                        context.font="italic small-caps bold 60px arial";
                        context.fillText(`Phoenix` , 420, 110);
                        break;

                    case 9:
                        context.font="italic small-caps bold 60px arial";
                        context.fillText(`Death Glider` , 340, 110);
                        break;

                    case 10:
                        context.font="italic small-caps bold 45px arial";
                        context.fillText(`Colonial Blackbird` , 310, 110);
                        break;

                    case 11:
                        context.font="italic small-caps bold 60px arial";
                        context.fillText(`Liberty` , 430, 110);
                        break;

                    case 12:
                        context.font="italic small-caps bold 42px arial";
                        context.fillText(`Battlestar Galactica` , 305, 110);
                        break;
                }
            }
        }
    }
}