/**
 * Created by Thundax on 21/07/2015.
 */
function MultiplexKeyboardHandler() {

    var handler = this;
    handler.register = register;
    handler.unRegister = unRegister;

    var handlers =[] ;

    function handleKeyDown(e) {
        if(!e){ var e = window.event; }

        for(var i=0; i<handlers.length;i++){
            if(handlers[i].handleKeyDown && handlers[i].isActive()){
                handlers[i].handleKeyDown(e);
            }
        }


    }
    function handleKeyUp(e) {
        if(!e){ var e = window.event; }

        for(var i=0; i<handlers.length;i++){
            if(handlers[i].handleKeyUp && handlers[i].isActive()){
                handlers[i].handleKeyUp(e);
            }
        }


    }

    document.onkeydown = handleKeyDown;
    document.onkeyup = handleKeyUp;

    function register(handler){
        handlers[handlers.length] = handler;
    }

    function unRegister(handler){
       var index = handlers.indexOf(handler);
        handlers.splice(index,1);
    }

}