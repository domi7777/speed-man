/**
 * Created by Thundax on 9/08/2015.
 */

function Input(move,firing,jumping) {

    var input = this;

    input.getMove = getMoving;
    input.isFiring = isFiring;
    input.isJumping = isJumping;


    function getMoving() {
        return move;
    }

    function isFiring() {
        return firing;
    }

    function isJumping() {
        return jumping;
    }



}