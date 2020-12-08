var expected = {foo: 5, bar: 6};
var actual = {foo: 7, bar: 6}
function assertObjectsEqual(actual, expected, testName){
 console.log(JSON.stringify(actual)===JSON.stringify(expected) ? true : false);
}

assertObjectsEqual(actual,expected);