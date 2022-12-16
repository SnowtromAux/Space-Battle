//Start screen moving ship Variable
screenWidth = window.innerWidth;
screenHeight = window.innerHeight;

let startX = - 420;

function updateStart(){
    if(menu == "start"){
        startX++;
        if(startX >= screenWidth + 20)startX = - 420;
    }
}