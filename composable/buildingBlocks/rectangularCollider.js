/**
 * Created by nd on 16/03/2016.
 */

RectangularCollider.prototype = new Collider();
RectangularCollider.prototype.constructor = RectangularCollider;

function RectangularCollider (parent,x,y,w,h) {

    if (x != null && y != null && w != null && h != null ) {
        console.log("RectangularCollider() with full params");
        Collider.call(this, parent, x, y);


        var collider = this;

        var zone = new RectangularZoneLocator(collider,w,h);
        console.log(zone);
        collider.addComponent(zone).doWiring();


    }
}
