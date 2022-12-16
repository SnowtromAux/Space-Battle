function clickStart(){
    if(menu == "start"){
        
        if(hangarButton.click()){
            menu = "shop";
        }

        if(playButton.click()){
            menu = "levels";
        }

        if(rulesButton.click()){
            menu = "rules";
        }
    }
}