function MovableTextItem(text2,x,menuHandler,possibleYPositions){
    var item = this;
    var selectedItem = 0;
    var text = new createjs.Text(text2, "bold 56px Script", "#ffffff");

    item.getRenderer = getRenderer;
    var renderer = new MovableTextRenderer(x,possibleYPositions[selectedItem]);


    function getRenderer(){
        return renderer;
    }


    /*internal class*/
    function MovableTextRenderer(newX,newY){

        var textRenderer = this;
        textRenderer.getGraphicalElement = getGraphicalElement;
        textRenderer.tick = tick;

        function getGraphicalElement(loader){
            text.x = newX;
            text.y = newY;
            return text;
        }

        function setY(newY2){
            text.y = newY2;
        }

        /*Do nothing for a bitmap */
        function tick(delta){
            if (menuHandler.isDown()){
                selectedItem++;
                selectedItem %= possibleYPositions.length;
                menuHandler.setKeyTreated();
            }

            if (menuHandler.isUp()){
                selectedItem == 0 ? selectedItem = 0 :selectedItem--;
                menuHandler.setKeyTreated();
            }

            setY(possibleYPositions[selectedItem]);
        }
    }

}