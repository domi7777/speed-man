function LoadingScreen(stageContext){
    var stage = this;
    stage.draw = draw;




    function draw(){
        var shape = new StaticEnemy1Item(0, 0, stageContext.getCanvasWidth(), stageContext.getCanvasHeight(),"primaryBg");
        stageContext.addGameItem(shape);
        stageContext.addGameItem(new TextItem("Loading",704,500));

    }
}