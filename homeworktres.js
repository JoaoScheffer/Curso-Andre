function test(testName, expected, result){
    testCase = `Test Case: ${testName}`;
    console.log(testCase);
    if (result == expected){
        console.log("Success!");
        return;
    }
    throw new Error(`Expected: ${expected} Result: ${result} `);
}


function media (numbers){
    let A = 0;
    for (i = 0; i < numbers.length; i++){
        A += numbers[i];
    }
    let final = A/numbers.length;
    return final;

 }

 test ("a media deveria ser 5", 2.5  , media([2,3,1,4,3,2]))