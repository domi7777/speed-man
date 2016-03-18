/**
 * Created by nd on 10/03/2016.
 */

Platform.prototype = new GameItem();
Platform.prototype.constructor = Platform;

function Platform (x,y,w,h,fileName) {

    if (x != null && y != null && w != null && h != null) {
        console.log("Platform() with full params");
        GameItem.call(this, x, y);


        var platform = this;
        var collider = new RectangularCollider(platform,0,0,w,h);


        var renderer = new Renderer(platform);
        renderer.addComponent(new BitmapVisual(renderer,0,0,fileName,w,h))


        platform
            .addComponent(collider)
            .addComponent(renderer)
            .doWiring();


    }
}