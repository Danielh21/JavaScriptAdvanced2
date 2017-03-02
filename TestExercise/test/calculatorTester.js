const {expect} = require("chai");
const calculator = require("../calculator/calculator")
const filter = require("../modular/filterFiles")

describe('calculator', function(){
    before(function(){
    });

    describe('#multi', function(){
        it('Should return 8', function(){
            expect(calculator.multiply(2,4)).to.be.equal(8);
        });
    })

})