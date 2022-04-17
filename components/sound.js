let songs = [ "",
              "./songs/F-777 - As One (HQ).mp3",
              "./songs/EnV - Bonus Level.mp3",
              "./songs/F-777 - The Seven Seas.mp3",
              "./songs/F-777 - Shock Rave [FREE DOWNLOAD].mp3",
              "./songs/F-777 - Viking Arena.mp3",
              "./songs/F-777 - A New Energy.mp3",
              "./songs/F-777 Tuxedo Lightsaber Battle.mp3",
              "./songs/F-777 - Deadlocked.mp3",
              "./songs/F-777 - 1up [2017 VERSION].mp3",
              "./songs/F-777 - Viper (Full Version).mp3",
              "./songs/F-777 - This Isn't Science Rocket - 2015 Edition (FREE DOWNLOAD)!.mp3",
              "./songs/F-777 - Airborne Robots.mp3",
              "./songs/F-777 - Space Battle.mp3",
              "./songs/F 777 - Sonic Blaster.mp3",
              "./songs/F-777 - Hydra [FREE NEWGROUNDS DOWNLOAD!].mp3" ]

function sound(src) {
  song = document.createElement("audio");
  song.src = src;
  song.setAttribute("preload", "auto");
  song.setAttribute("controls", "none");
  song.style.display = "none";
  document.body.appendChild(song);
  return song;
}

song_start = sound("./songs/F-777 - System Split.mp3");
song_start.loop = true;

let songLvl = [];
for(let i = 1;i < 15;i++){
  songLvl[i] = sound(songs[i]);
}