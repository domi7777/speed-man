function BitmapItem(imageName){
    var item = this;

    item.getRenderer = getRenderer;
    var renderer = new BitmapRenderer(imageName);


    function getRenderer(){
        return renderer;
    }


    /*internal class*/
    function BitmapRenderer(imageName){

        var foregroundRenderer = this;
        foregroundRenderer.getGraphicalElement = getGraphicalElement;
        foregroundRenderer.tick = tick;

        function getGraphicalElement(loader){

            var bitmap = new createjs.Bitmap(loader.getResult(imageName));
            return bitmap;
        }


        /*Do nothing for a bitmap */
        function tick(delta){

        }
    }

}