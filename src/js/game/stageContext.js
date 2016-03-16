function StageContext(loader, canvasG, collisionEngine,movementEngine,rendererEngine,stateEngine,weaponEngine,megaman) {

    var context = this;
    var canvas = canvasG;

    context.loadManifest = loadManifest;
    context.removeAllEventListeners = removeAllEventListeners;
    context.getCanvasWidth = getCanvasWidth;
    context.getCanvasHeight = getCanvasHeight;
    context.addGameItem = addGameItem;
    context.removeGameItem = removeGameItem;
    context.initMegaman = initMegaman;
    context.resetCanvas = resetCanvas;
    context.registerToMultiplexHandler = registerToMultiplexHandler;

    function registerToMultiplexHandler(handler){
        multiplexHandler.register(handler)
    }

    function loadManifest(manifest, completeResourceLoad){
        removeAllEventListeners();
        loader.addEventListener("complete", completeResourceLoad);
        loader.loadManifest(manifest);
    }

    function removeAllEventListeners(){
        loader.removeAllEventListeners();
    }

    function resetCanvas(){
        canvas.removeAllChildren();
    }
    function getCanvasWidth(){
        return canvas.canvas.width;
    }

    function getCanvasHeight(){
        return canvas.canvas.height;
    }

    function addGameItem(gameItem){
        if (gameItem.getRenderer) {
            var itemRenderer = gameItem.getRenderer();
            rendererEngine.register(itemRenderer);
            canvas.addChild(itemRenderer.getGraphicalElement(loader));
        }

        if (gameItem.getCollider) {
            var collider = gameItem.getCollider();
            collisionEngine.register(collider);
        }

        if (gameItem.getMobile){
           var mobile = gameItem.getMobile();

            movementEngine.register(mobile);
        }

        if (gameItem.getStateHandler){
            var state = gameItem.getStateHandler();
            stateEngine.register(state);
        }

        if (gameItem.getWeaponHandler){
            var weaponHandler = gameItem.getWeaponHandler();
            weaponHandler.setStageContext(context);
            weaponEngine.register(weaponHandler);
        }

    }


    function removeGameItem(gameItem) {
        if (gameItem.getRenderer) {
            var itemRenderer = gameItem.getRenderer();
            canvas.removeChild(itemRenderer.getGraphicalElement(loader));
            rendererEngine.unRegister(itemRenderer);
        }
        if (gameItem.getCollider) {
            var collider = gameItem.getCollider();
            collisionEngine.unRegister(collider);
        }

        if (gameItem.getMobile){
            var mobile = gameItem.getMobile();
            movementEngine.unRegister(mobile);
        }

        if (gameItem.getStateHandler){
            var state = gameItem.getStateHandler();
            stateEngine.unRegister(state);
        }

        if (gameItem.getWeaponHandler){
            var weaponHandler = gameItem.getWeaponHandler();
            weaponEngine.unRegister(weaponHandler);
        }
    }




    // Init megaman in the context of the stage, load appropriate spriteSheet and set start position + default weapon
    function initMegaman(x,y){
        megaman.setX(x);
        megaman.setY(y);
        megaman.setCurrentWeapon(new PCannon());
        addGameItem(megaman);
    }
}