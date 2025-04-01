const assert = require('assert');
const add = require("../script.js");

describe ("Addition of two numbers", function(){

    const testCases = [
        { a: 2, b: 3, expected: 5 },
        { a: -1, b: 1, expected: 0 },
        { a: 0, b: 0, expected: 0 },
        { a: 100, b: 200, expected: 300 },
        { a: -5, b: -5, expected: -10 }
      ];

    testCases.forEach(function(testcase){
    it(`add ${testcase.a} and ${testcase.b}` , function() {
        assert.strictEqual(add(testcase.a , testcase.b),testcase.expected);
    });
});

});

describe ("Addition of two numbers", function(){
    it("add 1 and 2" , function() {
        assert.strictEqual(add(1 , 2),3);
    });

    it("add 5 and 12" , function() {
        assert.strictEqual(add(5 , 12),17);
    });
});