// ?

let wait = time => new Promise(resolve => setTimeout(resolve, time))
document.addEventListener('DOMContentLoaded', async () => {
    
    let character = new PlayableCharacter( "Link", 150, 150 )
    
    let raul = new NonPlayableCharacter( 'Raúl', 300, 300 )
    raul.walkLeft()
    while(true){
        await wait(1000)
        raul.turn()
    }
})