function RendererEngine() {
    var engine = this;
    engine.register = register;
    engine.unRegister = unRegister;
    engine.tick = tick;

    var renderers =[] ;

    function register(renderer){
        renderers[renderers.length] = renderer;
    }

    function unRegister(renderer){
        var index = renderers.indexOf(renderer);
        renderers.splice(index,1);
    }

    function tick(delta){
        for(var i =0 ; i < renderers.length; i++) {
            renderers[i].tick(delta);
        }
    }
}