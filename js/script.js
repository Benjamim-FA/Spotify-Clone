var audioPlayer = document.querySelector('#audioPlayer')
var loaded = false;
var playBtn = document.querySelector('#playBtn')
var pauseBtn = document.querySelector('#pauseBtn')


pauseBtn.addEventListener('click', (e)=>{
    e.preventDefault();

    playBtn.style.display ="inline";
    pauseBtn.style.display ="none";
    audioPlayer.pause()
    return false;
    
})

const playSong = (file) => {
    if (loaded == false){
        loaded = true
        audioPlayer.innerHTML =`<source src="${file}" type="audio/mp3" />`


        
    }

    audioPlayer.play()

    playBtn.style.display ="none"
    pauseBtn.style.display ="inline"
}

document.querySelectorAll('.main__col').forEach(item =>{
    item.addEventListener('click', event=>{
        let image = item.children[0].getAttribute('data-image')
        let artist = item.children[0].getAttribute('data-artist')
        let song = item.children[0].getAttribute('data-song')
        let file = item.children[0].getAttribute('data-file')

        console.log(image)

        let playerArtistComponent = document.getElementsByClassName('player__artist')

        playerArtistComponent[0].innerHTML = `
            <img src="${image}" />

            <h3>${artist} <br/><span>${song}</span></h3>

        `
        playSong(file)
    })
})