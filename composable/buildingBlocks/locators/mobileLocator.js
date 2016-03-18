/**
 * Created by nd on 8/03/2016.
 */

MobileLocator.movementCalculationXTypes = {
    CURRENT: 0,
    NEXT: 1,
    BIGGEST:-1,
    SMALLEST:-3
};

MobileLocator.movementCalculationYTypes = {
    CURRENT: 0,
    NEXT: 1,
    BIGGEST:-1,
    SMALLEST:-3
};

function MobileLocator(parent,dx,dy,originLocator){
    var mobile = this;





    mobile.getDx = getDx;
    mobile.setDx = setDx;
    mobile.getDy = getDy;
    mobile.setDy = setDy;

    mobile.getX = getX;
    mobile.getY = getY;

    mobile.getOriginLocator = getOriginLocator;
    mobile.setOriginLocator = setOriginLocator;

    mobile.addToComposable = addToComposable;
    mobile.getMethodsToPullUp = getMethodsToPullUp;

    function getDx() {
        return dx;
    }
    function setDx(dxParam) {
        dx = dxParam;
    }

    function getDy() {
        return dy;
    }
    function setDy(dyParam) {
        dy = dyParam;
    }

    function getX(calculationModes){
        if (!originLocator){
            return false;
        }

        var movementCalculationType = 0;
        if (calculationModes && calculationModes.movementCalculationXType) {
            movementCalculationType = calculationModes.movementCalculationXType;
        }

        var value = 0;
        if (movementCalculationType <0){
            // movementCalculationType must be 1 or -1
            movementCalculationType += 2;

            /*
             0 < dx && BIGGEST (1)   => dx
             0 < dx && SMALLEST (-1) => 0
             0 > dx && BIGGEST (1)   => 0
             0 > dx && SMALLEST (-1) => dx
             */
            value = (0<dx*movementCalculationType?dx:0);
        } else {
            value = dx*movementCalculationType;
        }

        return originLocator.getX(calculationModes) + value;
    }

    function getY(calculationModes){
        if (!originLocator){
            return false;
        }
        var movementCalculationType = 0;
        if (calculationModes && calculationModes.movementCalculationYType) {
            movementCalculationType = calculationModes.movementCalculationYType;
        }

        var value = 0;
        if (movementCalculationType <0){
            // movementCalculationType must be 1 or -1
            movementCalculationType += 2;

            /*
             0 < dx && BIGGEST (1)   => dx
             0 < dx && SMALLEST (-1) => 0
             0 > dx && BIGGEST (1)   => 0
             0 > dx && SMALLEST (-1) => dx
             */
            value = (0<dy*movementCalculationType?dy:0);
        } else {
            value = dy*movementCalculationType;
        }

        return originLocator.getY(calculationModes) + value;
    }


    function getOriginLocator () {
        return originLocator;
    }

    function setOriginLocator (locator) {

        originLocator = locator;

    }


    function addToComposable(composable){
        if (composable.addLocator){
            composable.addLocator(mobile);
        }
    }

    function getMethodsToPullUp(){
        return [
            "getDx",
            "getDy",
            "setDx",
            "setDy",
            "getX",
            "getY"
        ];
    }

}