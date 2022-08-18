import MediaPlayer from '/assets/MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

//agarrar el elemento para poder manipurarlo con querySelector
const video = document.querySelector('video');
const player = new MediaPlayer({ el: video, Plugins: [new AutoPlay()]});

const button = document.querySelector('playButton');
button.onclick = () => player.togglePlay();

const muteButton = document.querySelector('#muteButton');
muteButton.onclick = () =>{
    if(player.media.muted){
        player.unmute();
    }else {
        player.mute();
    }
};