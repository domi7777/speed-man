/**
 * Created by Thundax on 17/01/2016.
 *
 * Initial weapon of megaman
 */

function PCannon() {
    var weapon = this;

    weapon.canCreateBullet = canCreateBullet;
    weapon.bulletMobileFactory = PCannonBulletMobile;
    weapon.bulletStateHandlerFactory = PCannonBulletStateHandler;
    weapon.getBulletData = getBulletData;
    weapon.getXRelativePostion = getXRelativePostion;
    weapon.getYRelativePostion = getYRelativePostion;
    weapon.coolDown = coolDown;
    var weaponCooldown= 0;


    function canCreateBullet(){
        if(weaponCooldown < 0){
            weaponCooldown = 0.2;
            return true;
        } else {
            return false;
        }

    }

    function coolDown(delta){
        weaponCooldown -= delta;
    }
    function getXRelativePostion(){
        return 20;
    }

    function getYRelativePostion(){
        return 40;
    }

    function getBulletData(){
        return {
            w:20,
            h:20,
            sheetName:"pCannonBullet",
            animationTable:[0,0]
        };
    }

    function PCannonBulletMobile(bulletItem){

        var mobile = this;
        var dX=0;
        var dY=0;
        mobile.computeNextPosition = computeNextPosition;
        mobile.tick = tick;
        mobile.getNextX = getNextX;
        mobile.getNextY = getNextY;
        mobile.setDx = setDx;
        mobile.setDy = setDy;
        mobile.getDx = getDx;
        mobile.getDy = getDy;


        function computeNextPosition(delta){
            dX = bulletItem.getMove()*PCANON_DX*delta;
        }

        function tick(delta){
            bulletItem.setX( bulletItem.getX() + dX*delta);
        }

        function getNextX(delta){
            return bulletItem.getX() + dX*delta;
        }

        function getNextY(delta){
            return bulletItem.getY() + dY*delta;
        }

        function setDx(newDx){
            dX = newDx;
        }

        function setDy(newDy){
            dY = newDy;
        }

        function getDx(delta){
            return dX*delta;
        }

        function getDy(delta){
            return dY*delta;
        }

    }

    function PCannonBulletStateHandler(bulletItem,stageContext){

        var handler = this;
        var collisionQueue = [];
        var states = {

            EXISTING:{

                treatCollision:function (collision){
                      console.log("TREAT COLLISION BULLET");
                      states.FADING.enterState();
                },
                name:"EXISTING"
            },

            FADING:{

                enterState:function (){
                    stageContext.removeGameItem(bulletItem);
                    currentState = states.FADING;
                },
                treatCollision:function (collision){
                },
                name:"EXISTING"
            }
        };
        var currentState = states.EXISTING;

        handler.addCollision = addCollision;
        handler.treatCollisions = treatCollisions;
        handler.tick = tick;

        function addCollision(collision){
            collisionQueue[collisionQueue.length] = collision;
        }

        function treatCollisions(){
            for(var j =0 ; j < collisionQueue.length; j++) {
                currentState.treatCollision(collisionQueue[j]);
            }
            collisionQueue = [];
        }

        function tick(delta){
            treatCollisions();
            if(currentState.tick){
                currentState.tick(delta);
            }
        }
    }

}

