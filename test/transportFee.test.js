import assert from "assert";
import transportFee from "../function/transportFee.function.js";

describe('Test my transportFee function' , function(){
    it("it should return the right price based on the shift you are working." , function(){
        assert.equal(transportFee('morning'), 'R20');
    });

    it("it should return the right price based on the shift you are working." , function(){
        assert.equal(transportFee('afternoon'), 'R10');
    });

    it("it should return the right price based on the shift you are working." , function(){
        assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');
    });
});