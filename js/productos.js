var sound = new Howl ({
    src:['js/WhatsApp.mp3']
});

var btnPlay = document.getElementById("btnPlay");
btnPlay.addEventListener("click", function(){
    sound.play()
    btnPlay.className="inhabilitar"
    btnPause.className="habilitar"
});

var btnPause = document.getElementById("btnPause");
btnPause.addEventListener("click", function(){
    sound.pause()
    btnPlay.className="habilitar"
    btnPause.className="inhabilitar"
});