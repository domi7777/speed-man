/**
 * Created by Thundax on 1/08/2015.
 */
function Collision(type,direction,params) {
    var collision = this;
    collision.getParams = getParams;
    collision.getType = getType;
    collision.getDirection = getDirection;
    collision.params = params;


    function getParams(){
        return params;
    }
    function getType(){
        return type;
    }
    function getDirection (){
        return direction;
    }


}

Collision.directions = {
    LEFT:"left",
    RIGHT:"right",
    UP:"up",
    DOWN:"down",
    INSIDE:"inside"
};

Collision.types = {
    BULLET:"bullet",
    PLATFORM:"platform",
    ENEMY:"enemy",
    OUTOFBOUND:"outOfBound"
};