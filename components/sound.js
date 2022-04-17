function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function(){
    this.sound.play();
  }
  this.stop = function(){
    this.sound.pause();
  }
}

song_start = new sound("./songs/F-777 - System Split.mp3");

let songLvl = [];
songLvl[1] = new sound("./songs/F-777 - As One (HQ).mp3");
songLvl[2] = new sound("./songs/EnV - Bonus Level.mp3");
songLvl[3] = new sound("./songs/F-777 - The Seven Seas.mp3");
songLvl[4] = new sound("./songs/F-777 - Shock Rave [FREE DOWNLOAD].mp3");
songLvl[5] = new sound("./songs/F-777 - Viking Arena.mp3");
songLvl[6] = new sound("./songs/F-777 - A New Energy.mp3");
songLvl[7] = new sound("./songs/F-777 Tuxedo Lightsaber Battle.mp3");
songLvl[8] = new sound("./songs/F-777 - Deadlocked.mp3");
songLvl[9] = new sound("./songs/F-777 - 1up [2017 VERSION].mp3");
songLvl[10] = new sound("./songs/F-777 - Viper (Full Version).mp3");
songLvl[11] = new sound("./songs/F-777 - This Isn't Science Rocket - 2015 Edition (FREE DOWNLOAD)!.mp3");
songLvl[12] = new sound("./songs/F-777 - Airborne Robots.mp3");
songLvl[13] = new sound("./songs/F-777 - Space Battle.mp3");
songLvl[14] = new sound("./songs/F 777 - Sonic Blaster.mp3");
songLvl[15] = new sound("./songs/F-777 - Hydra [FREE NEWGROUNDS DOWNLOAD!].mp3");
