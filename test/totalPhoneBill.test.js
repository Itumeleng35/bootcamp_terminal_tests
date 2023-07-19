import assert from "assert";
import totalPhoneBill from "../function/totalPhoneBill.function.js";

describe('Test my totalPhoneBill function' , function(){
    it("it should return a string calls made and sms's sent." , function(){
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
    });

    it("it should return a string calls made and sms's sent." , function(){
        assert.equal('R3.40', totalPhoneBill('call, sms'));
    });

    it("it should return a string calls made and sms's sent." , function(){
        assert.equal('R1.30', totalPhoneBill('sms, sms'));
    });
  });