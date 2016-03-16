function ScreenBorderItem(x,y,w,h){
    var item = this;

    item.getCollider = getCollider;
    var collider = new RectangularCollider(item);

    item.getX = getX;
    item.getY = getY;
    item.getWidth = getWidth;
    item.getHeight = getHeight;
    item.getNextX = getNextX;
    item.getNextY = getNextY;
    item.getDx = getDx;
    item.getDy = getDy;


    item.treatCollisions = function(){};
    item.canCollide = canCollide ;


    function getCollider(){
        return collider;
    }


    function canCollide(secondGameitem){
        if (secondGameitem.canCollideScreenBorderItem){
            return secondGameitem.canCollideScreenBorderItem(item);
        }
        return false;
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

    function getY(delta){
        return y;
    }

    function getX(delta){
        return x;
    }

    function getWidth(delta){
        return w;
    }

    function getHeight(delta){
        return h;
    }
}