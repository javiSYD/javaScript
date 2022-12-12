function AutoPlay(){}
AutoPlay.prototype.run = function(player){
    player.mute();
    player.unmute();
};


export default AutoPlay;