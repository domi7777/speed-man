function MenuKeyboardHandler(game) {

    var handler = this;
    var currentPressedKey= "EMPTY";
    var keyDownTreated = false;

    handler.handleKeyDown = handleKeyDown;
    handler.setKeyTreated = setKeyTreated;
    handler.handleKeyUp = handleKeyUp;
    handler.isActive = isActive;
    handler.isDown = isDown;
    handler.isUp = isUp;



    function handleKeyDown(e) {

        if(!e){ var e = window.event; }
        switch(e.keyCode) {
            case KEYCODE_SPACE:
                game.startStage();
                return false;

            case KEYCODE_ENTER:
                game.startStage();
                return false;
        }
        currentPressedKey = e.keyCode;

    }
    function handleKeyUp(e) {

        if(!e){ var e = window.event; }
        keyDownTreated = false;
        currentPressedKey = KEYCODE_EMPTY;
    }



    function isActive(){
        return game.isInMenu();
    }

    function setKeyTreated(){
        keyDownTreated = true;
    }


    function isDown(){
        return keyDownTreated ? false : currentPressedKey == KEYCODE_S;
    }

    function isUp(){
        return keyDownTreated ? false : currentPressedKey == KEYCODE_Z ;
    }

}