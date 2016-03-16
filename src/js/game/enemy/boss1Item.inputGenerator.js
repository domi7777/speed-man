function Boss1InputGenerator() {
    var handler = this;
    var jump = false;
    var fire = false;
    var jumpRate=100;
    var fireRate=200;
    var tickCountJump=0;
    var tickCountFire=0;

    handler.getInput = getInput;
    handler.tick = tick;


    function tick() {
        tickCountJump++;
        tickCountFire++;
        if(tickCountFire%fireRate == 0){
            fire = true;
        }
        if(tickCountFire%(fireRate+20) == 0){
            fire = false;
            tickCountFire=0;
        }
        if(tickCountJump%jumpRate == 0){
            jump = true;
        }

        if(tickCountJump%(jumpRate+1) == 0){
            jump = false;
            tickCountJump=0
        }
    }

    function getInput(){
        return new Input(0,fire,jump);
    }
}