const {expect} = require("chai");

describe("Testing async behaviour", function(){
  var foo = false;
  before(function(done){
    setTimeout(function(){
      foo = true;
      done();  //Test will fail without this
    }, 1000);
  });
  
  xit("should pass (with done called)", function(){
    expect(foo).to.equal(true);
  });
}); 