function BackgroundItem(x,y,w,h,imageName){
    var item = this;

    item.getRenderer = getRenderer;

    var renderer = new BackgroundRenderer(x,y,w,h,imageName);

    item.getX = renderer.getX;
    item.getY = renderer.getY;
    item.getWidth = renderer.getWidth;
    item.getHeight = renderer.getHeight;
    item.getNextX = getNextX;
    item.getNextY = getNextY;
    item.getDx = getDx;
    item.getDy = getDy;

    function getRenderer(){
        return renderer;
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
    function BackgroundRenderer(x,y,w,h,imageName){

        var backgroundRenderer = this;
        backgroundRenderer.getGraphicalElement = getGraphicalElement;
        backgroundRenderer.getX = getX;
        backgroundRenderer.getY = getY;
        backgroundRenderer.getWidth = getWidth;
        backgroundRenderer.getHeight = getHeight;
        backgroundRenderer.tick = tick;

        var shape = new createjs.Shape();

        function getGraphicalElement(loader){

            var groundImg = loader.getResult(imageName);
            shape.graphics.beginBitmapFill(groundImg).drawRect(x, y, w, h);

            return shape;
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

}