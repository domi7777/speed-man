/**
 * Created by Thundax on 28/07/2015.
 */
function Megaman(game){
    var megaman = this;

    var renderer = new MegamanRenderer(megaman);
    var collider = new RectangularCollider(megaman);
    var mobile = new MegamanMobile(megaman);
    var stateHandler = new  MegamanStateHandler(megaman);
    var weaponHandler = new  MegamanWeaponHandler(megaman);
    var inputHandler = new MegamanKeyboardHandler(game);
    var game1 = game;

    megaman.getRenderer = getRenderer;
    megaman.getCollider = getCollider;
    megaman.getMobile = getMobile ;
    megaman.getStateHandler = getStateHandler ;
    megaman.getInputHandler = getInputHandler ;
    megaman.getWeaponHandler = getWeaponHandler ;
    megaman.getInput = inputHandler.getInput ;
    megaman.canCollide = canCollide ;
    megaman.canCollideForegroundItem = canCollideForegroundItem ;
    megaman.canCollideStaticEnemy = canCollideStaticEnemy ;
    megaman.canCollideScreenBorderItem = canCollideScreenBorderItem ;
    megaman.canCollideBulletItem = canCollideBulletItem ;
    megaman.getMove = stateHandler.getMove;
    megaman.getScaleX = renderer.getScaleX;
    megaman.setX = renderer.setX;
    megaman.setY = renderer.setY;
    megaman.setDx = mobile.setDx;
    megaman.setDy = mobile.setDy;
    megaman.getX = renderer.getX;
    megaman.getY = renderer.getY;
    megaman.getDx = mobile.getDx;
    megaman.getDy = mobile.getDy;
    megaman.getNextX = mobile.getNextX;
    megaman.getNextY = mobile.getNextY;
    megaman.getWidth = renderer.getWidth;
    megaman.getHeight = renderer.getHeight;
    megaman.mustSwitchAnimation = stateHandler.mustSwitchAnimation;
    megaman.isInit = stateHandler.isInit;
    megaman.isStanding = stateHandler.isStanding;
    megaman.isJumping = stateHandler.isJumping;
    megaman.isFalling = stateHandler.isFalling;
    megaman.isFiring = stateHandler.isFiring;
    megaman.addCollision = stateHandler.addCollision;
    megaman.treatCollisions = stateHandler.treatCollisions;
    megaman.resetSwitchAnimation = stateHandler.resetSwitchAnimation;
    megaman.setCurrentWeapon = weaponHandler.setCurrentWeapon;
    megaman.getName= getName;
    megaman.restartGame= restartGame;

    // Dead
    function restartGame() {
        game1.restartGame();
    }
    function getName(){
        return "megaman";
    }

    function getRenderer(){
        return renderer;
    }

    function getCollider(){
        return collider;
    }

    function getMobile(){
        return mobile;
    }
    function getInputHandler() {
        return inputHandler;
    }

    function getStateHandler() {
        return stateHandler;
    }

    function getWeaponHandler(){
        return weaponHandler;
    }

    function canCollide(secondGameitem){
        if (secondGameitem.canCollideMegaman){
            return secondGameitem.canCollideMegaman(megaman);
        }
        return false;

    }

    function canCollideForegroundItem(secondGameitem){
        return Collision.types.PLATFORM;
    }

    function canCollideBulletItem(secondGameitem){
        return Collision.types.BULLET;
    }


    function canCollideStaticEnemy(secondGameitem){
        return Collision.types.ENEMY;
    }

    function canCollideScreenBorderItem(secondGameitem){
        return Collision.types.OUTOFBOUND;
    }

}