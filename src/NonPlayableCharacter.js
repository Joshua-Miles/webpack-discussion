// ?

/* ? */  class NonPlayableCharacter extends Character {

    constructor(name, x, y){
        super(name, x, y, 'red-character')
    }
    
    turn(){
        switch(this.direction){
            case 'left':
                this.walkDown()
            break;
            case 'down':
                this.walkRight()
            break;
            case 'right':
                this.walkUp()
            break;
            case 'up':
                this.walkLeft()
            break;
        }
    }

}