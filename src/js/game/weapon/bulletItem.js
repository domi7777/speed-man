/**
 * Created by Thundax on 17/01/2016.
 */
function BulletItem(x,y,move,mobileFactory,stateHandlerFactory,bulletData,stageContext){
    var item = this;

    item.getRenderer = getRenderer;
    item.getCollider = getCollider;
    item.getMobile = getMobile;
    item.getStateHandler = getStateHandler;

    var renderer = new BulletRenderer(x,y,bulletData);
    var collider = new RectangularCollider(item);
    var mobile = new mobileFactory(item);
    var stateHandler = new stateHandlerFactory(item,stageContext);
    var sprite;
    
    item.getX = renderer.getX;
    item.getY = renderer.getY;
    item.getWidth = renderer.getWidth;
    item.getHeight = renderer.getHeight;
    item.getNextX = getNextX;
    item.getNextY = getNextY;
    item.getDx = getDx;
    item.getDy = getDy;
    item.canCollideForegroundItem = canCollideForegroundItem ;
    item.canCollideScreenBorderItem = canCollideScreenBorderItem ;
    item.canCollideStaticEnemy = canCollideStaticEnemy;

    item.getMove = getMove;
    item.setX = renderer.setX;
    item.setY = renderer.setY;
    item.setDx = mobile.setDx;
    item.setDy = mobile.setDy;
    item.getX = renderer.getX;
    item.getY = renderer.getY;
    item.getDx = mobile.getDx;
    item.getDy = mobile.getDy;
    item.getNextX = mobile.getNextX;
    item.getNextY = mobile.getNextY;
    item.getWidth = renderer.getWidth;
    item.getHeight = renderer.getHeight;
    item.addCollision = stateHandler.addCollision;
    item.treatCollisions = stateHandler.treatCollisions;



    item.treatCollisions = function(){};
    item.canCollide = canCollide ;

    function getRenderer(){
        return renderer;
    }

    function getCollider(){
        return collider;
    }

    function getMobile(){
        return mobile;
    }

    function getStateHandler(){
        return stateHandler;
    }

    function canCollide(secondGameitem){
        if (secondGameitem.canCollideBulletItem){
            return secondGameitem.canCollideBulletItem(item);
        }
        return false;
    }
    function canCollideForegroundItem(secondGameitem){
        return Collision.types.PLATFORM;
    }
    function canCollideScreenBorderItem(secondGameitem){
        return true;
    }

    function canCollideStaticEnemy(secondGameitem){
        return Collision.types.ENEMY;
    }
    function getNextX(delta){
        return x;
    }

    function getNextY(delta){
        return y;
    }

    function getDx(delta){
        return 0;
    }

    function getDy(delta){
        return 0;
    }

    function getMove(){
        return move;
    }

    /*internal class*/
    function BulletRenderer(x,y,bulletData){

        var bulletRenderer = this;
        bulletRenderer.getGraphicalElement = getGraphicalElement;
        bulletRenderer.getX = getX;
        bulletRenderer.getY = getY;
        bulletRenderer.setX = setX;
        bulletRenderer.setY = setY;
        bulletRenderer.getWidth = getWidth;
        bulletRenderer.getHeight = getHeight;
        bulletRenderer.tick = tick;

        function getGraphicalElement(loader){
            if(!sprite){
                var data = new createjs.SpriteSheet({
                    "images": [loader.getResult(bulletData.sheetName)],
                    "frames": {width:bulletData.w, height:bulletData.h},
                    "animations":  bulletData.animationTable
                });
                sprite = new createjs.Sprite(data);
                sprite.gotoAndPlay("init");
                sprite.framerate=36;
                sprite.x = x;
                sprite.y = y;
            }
            return sprite;
        }
        function tick(delta){
            sprite.x = x;
            sprite.y = y;
        }
        function getX(){
            return x;
        }

        function getY(){
            return y;
        }
        function setX(newX){
            x=newX;
        }

        function setY(newY){
            y=newY;
        }
        function getHeight(){
            return bulletData.h;
        }
        function getWidth(){
            return bulletData.w;
        }
    }

}