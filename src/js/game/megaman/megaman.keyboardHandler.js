function MegamanKeyboardHandler(game) {
    var handler = this;


    var D = false;
    var A = false;
    var move = 0;
    var jump = false;
    var fire = false;
    var playAnimation = false;

    handler.handleKeyDown = handleKeyDown;
    handler.handleKeyUp = handleKeyUp;
    handler.getInput = getInput;
    handler.isActive = isActive;


    function handleKeyDown(e) {

        if(!e){ var e = window.event; }

        switch(e.keyCode) {
            case KEYCODE_D:
                D = true;
                move=1;
                return false;
            case KEYCODE_A:
                A = true;
                move=-1;
                return false;

            case KEYCODE_SPACE:
                jump=true;
                return false;

            case KEYCODE_1:
                if(!fire){
                    playAnimation=true;
                }
                fire=true;

                return false;
        }
    }

    function handleKeyUp(e) {
        if(!e){ var e = window.event; }

        switch(e.keyCode) {
            case KEYCODE_D:
                D = false;
                if(!A){
                    move=0;
                }else {
                    move=-1;
                }
                return false;
            case KEYCODE_A:
                A = false;
                if(!D){
                    move=0;
                }else {
                    move=1;
                }
                return false;

            case KEYCODE_1:
                if(fire){
                    playAnimation=true;
                }
                fire=false;

                return false;

            case KEYCODE_SPACE:
                jump=false;
                return false;
        }
    }


    function isActive(){
        return ! game.isInMenu();
    }

    function getInput(){
        return new Input(move,fire,jump);
    }



}