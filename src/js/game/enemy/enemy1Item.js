function StaticEnemy1Item(x,y,w,h,sheetName,name,stageContext){
    var enemy = this;

    enemy.getRenderer = getRenderer;
    enemy.getCollider = getCollider;
    enemy.getStateHandler = getStateHandler;

    var renderer = new StaticEnemy1Renderer(x,y,w,h,sheetName);
    var collider = new RectangularCollider(enemy);
    var stateHandler = new StaticEnemy1StateHandler(enemy,stageContext);
    var name1 = name;
    enemy.getName = getName;
    enemy.getX = renderer.getX;
    enemy.getY = renderer.getY;
    enemy.getWidth = renderer.getWidth;
    enemy.getHeight = renderer.getHeight;
    enemy.playDeadAnimation = renderer.playDeadAnimation;
    enemy.getNextX = getNextX;
    enemy.getNextY = getNextY;
    enemy.getDx = getDx;
    enemy.getDy = getDy;
    enemy.canCollideBulletItem = canCollideBulletItem;
    enemy.addCollision = stateHandler.addCollision;
    enemy.treatCollisions = stateHandler.treatCollisions;
    enemy.canCollide = canCollide ;

    function getRenderer(){
        return renderer;
    }

    function getCollider(){
        return collider;
    }

    function getStateHandler(){
        return stateHandler;
    }

    function getName(){
        return name1;
    }

    function canCollide(secondGameitem){
        if (secondGameitem.canCollideStaticEnemy){
            return secondGameitem.canCollideStaticEnemy(enemy);
        }
        return false;
    }
    function canCollideBulletItem(secondGameitem){
        return Collision.types.BULLET;
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



    /*internal class*/
    function StaticEnemy1Renderer(x,y,w,h,sheetName){

        var staticEnnemyRenderer = this;
        staticEnnemyRenderer.getGraphicalElement = getGraphicalElement;
        staticEnnemyRenderer.getX = getX;
        staticEnnemyRenderer.getY = getY;
        staticEnnemyRenderer.getWidth = getWidth;
        staticEnnemyRenderer.getHeight = getHeight;
        staticEnnemyRenderer.tick = tick;
        staticEnnemyRenderer.playDeadAnimation = playDeadAnimation;

        var animationArray = {anime:[0,4],dead:[5,5]};
        var sprite;

        function getGraphicalElement(loader) {
            if(!sprite) {
                var data = new createjs.SpriteSheet({
                    "images": [loader.getResult(sheetName)],
                    "frames": {width: w, height: h},
                    "animations": animationArray
                });
                sprite = new createjs.Sprite(data);
                sprite.gotoAndPlay("anime");
                sprite.framerate = 5;
                sprite.x = x;
                sprite.y = y;
            }
            return sprite;
        }

        function playDeadAnimation(){
            sprite.gotoAndPlay("dead");
        }
        function tick(delta){

        }
        function getX(){
            return x;
        }

        function getY(){
            return y;
        }

        function getHeight(){
            return h;
        }
        function getWidth(){
            return w;
        }
    }

    function StaticEnemy1StateHandler(staticEnemyItem,stageContext){

        var handler = this;
        var collisionQueue = [];
        var states = {

            ALIVE:{

                treatCollision:function (collision){
                    if(collision.getType() == Collision.types.BULLET){
                        states.DEAD.enterState();
                    }
                },
                name:"ALIVE"
            },

            DEAD:{

                enterState:function (){
                    if(staticEnemyItem.playDeadAnimation){
                        staticEnemyItem.playDeadAnimation();
                    }
                    stageContext.removeGameItem(staticEnemyItem);
                    currentState = states.DEAD;
                },
                treatCollision:function (collision){},
                name:"DEAD"
            }
        };
        var currentState = states.ALIVE;

        handler.addCollision = addCollision;
        handler.treatCollisions = treatCollisions;
        handler.tick = tick;

        function addCollision(collision){
            collisionQueue[collisionQueue.length] = collision
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