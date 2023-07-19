import assert from "assert";
import isFromBellville from "../function/isFromBellville.function.js";

describe('The isFromBellville function', function(){

    it('it should return true if a registration number is for Bellville otherwise returns false', function(){
        assert.equal(isFromBellville('CY 123'), true);
    });
    it('it should return true if a registration number is for Bellville otherwise returns false', function(){
        assert.equal(isFromBellville('CJ 123'), false);
    });
});

