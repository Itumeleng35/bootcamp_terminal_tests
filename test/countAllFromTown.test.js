import assert from "assert";
import countAllFromTown from "../function/countAllFromTown.function.js";

describe('Test my countAllFromTown function' , function(){
    it("it should return a string parameter with registration numbers separated with commas and the registration number start string. It should return the number of registration numbers in the string that is for that town." , function(){
        var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
//fromStellies should contains
assert.equal(fromStellies, 3);
    });

    it("it should return a string parameter with registration numbers separated with commas and the registration number start string. It should return the number of registration numbers in the string that is for that town." , function(){
        var fromKuilsriver = countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341','CF');
//fromStellies should contains
assert.equal(fromKuilsriver, 1);
    });
});  
        