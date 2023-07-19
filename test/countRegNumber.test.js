import assert from "assert";
import countRegNumber from "../function/countRegNumber.function.js";

describe('The countRegNumber function', function(){

    it('it should take in a string parameter and return the number of registration numbers in the string. ', function(){
        var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
        assert.equal(regCount, 3);
    });

    it('it should take in a string parameter and return the number of registration numbers in the string. ', function(){
        var regCount = countRegNumber('CA 182736')
        assert.equal(regCount, 1);
    });
});





