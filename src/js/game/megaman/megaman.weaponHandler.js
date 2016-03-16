/**
 * Created by Thundax on 17/01/2016.
 */


function MegamanWeaponHandler(megaman) {

    var weaponHandler = this;
    var currentWeapon;
    var stageContext;

    weaponHandler.tick = tick;
    weaponHandler.setCurrentWeapon = setCurrentWeapon;
    weaponHandler.setStageContext = setStageContext;



    function tick(delta){
        currentWeapon.coolDown(delta);
        if(megaman.isFiring() &&  currentWeapon.canCreateBullet() ){
            var xRelativePosition = megaman.getScaleX() > 0 ? megaman.getWidth() : -currentWeapon.getXRelativePostion();
            var bullet = new BulletItem(
                megaman.getX()+ xRelativePosition,
                megaman.getY()+ currentWeapon.getYRelativePostion(),
                megaman.getScaleX(),
                currentWeapon.bulletMobileFactory,
                currentWeapon.bulletStateHandlerFactory,
                currentWeapon.getBulletData(),
                stageContext
            );
            stageContext.addGameItem(bullet);
        }
    }

    function setCurrentWeapon(weapon){
        currentWeapon = weapon;
    }

    function setStageContext(context){
        stageContext = context;
    }

}
