/**
 * Created by nd on 10/03/2016.
 */

Platform.prototype = new GameItem();
Platform.prototype.constructor = Platform;

function Platform (x,y,w,h) {

    if (x != null && y != null && w != null && h != null) {
        console.log("Platform() with full params");
        GameItem.call(this, x, y);


        var platform = this;
        var collider = new RectangularCollider(platform,0,0,w,h);
        console.log(collider);

        platform.addComponent(collider).doWiring();


    }
}