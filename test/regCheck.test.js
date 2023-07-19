import assert from "assert";
import regCheck from "../function/regCheck.function.js";

describe('The regCheck function', function(){

    it('it should check if a registration number is for GP, L, EC, MP registration plates.', function(){
        assert.equal(regCheck('DC 55 YU GP', 'GP'), true);

    });
    it('it should check if a registration number is for GP, L, EC, MP registration plates.', function(){
        assert.equal(regCheck('DC 55 YU GP', 'EC'), false);
    });

    it('it should check if a registration number is for GP, L, EC, MP registration plates.', function(){
        assert.equal(regCheck('5566 L', 'L'), true);
    });

    it('it should check if a registration number is for GP, L, EC, MP registration plates.', function(){
        assert.equal(regCheck('5566 L', 'M'), false);
    });

    it('it should check if a registration number is for GP, L, EC, MP registration plates.', function(){
        assert.equal(regCheck('ERT 123 EC', 'EC'), true);
    });

    it('it should check if a registration number is for GP, L, EC, MP registration plates.', function(){
        assert.equal(regCheck('ERT 123 EC', 'GP'), false);
    });

    it('it should check if a registration number is for GP, L, EC, MP registration plates.', function(){
        assert.equal(regCheck('FGT 123 MP', 'MP'), true);
    });

    it('it should check if a registration number is for GP, L, EC, MP registration plates.', function(){
        assert.equal(regCheck('FGT 123 MM', 'MP'), false);
    });
});













