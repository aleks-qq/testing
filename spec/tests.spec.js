const Hello = require("../hello-testing");
const dummy1 = [23, 62, 45, 234, 2, 62, 234, 62, 34, 60];
const dummy2 = [1, 2];
const dummy3 = [70];


describe("Hello module: ", function() {
	it("1. should return a message", function() {
    expect(Hello.testing1()).toEqual('Hello, testing!');
  });

  it("2. should return a string", function() {
    expect(Hello.testing2('Something')).toEqual('Something');
  });

  it("3. should return a Json", function() {
    expect(Hello.testing2(dummyJson)).toEqual(dummyJson);
  });

  it("4. should return an array with values 60 or over", function() {
    expect(Hello.testing3(dummy1)).toEqual([ 62, 234, 62, 234, 62, 60 ]);
  });
  
  it("5. should return an array with values 60 or over", function() {
    expect(Hello.testing3(dummy2)).toEqual([ ]);
  });
  
  it("6. should return an array with values 60 or over", function() {
    expect(Hello.testing3(dummy3)).toEqual([70]);
  }); 

  it("7. should return array with double-values in elements", function() {
    expect(Hello.testing4([ 1, 2 ])).toEqual([ 2, 4 ]);
  });

  it("8. should return the last element", function() {
    expect(Hello.testing5(dummy1)).toEqual([60]);
  });

  it("9. should return the last element", function() {
    expect(Hello.testing5(dummy2)).toEqual([2]);
  });


});
