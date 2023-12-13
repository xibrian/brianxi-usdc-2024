/** 
 * RECOMMENDATION
 * 
 * To test your code, you should open "tester.html" in a web browser.
 * You can then use the "Developer Tools" to see the JavaScript console.
 * There, you will see the results unit test execution. You are welcome
 * to run the code any way you like, but this is similar to how we will
 * run your code submission.
 * 
 * The Developer Tools in Chrome are available under the "..." menu, 
 * futher hidden under the option "More Tools." In Firefox, they are 
 * under the hamburger (three horizontal lines), also hidden under "More Tools." 
 */

/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for. 
 * @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 * */ 
 function findSearchTermInBooks(searchTerm, scannedTextObj) {
    /** You will need to implement your search and 
     * return the appropriate object here. */

    var result = {
        "SearchTerm": "",
        "Results": []
    };

    // Double for loop to iterate over all content objects across all books
    // Note: scannedTextObj and content are a JSON arrays, therefore we can iterate over them
    for (var i = 0; i < scannedTextObj.length; i++) {
        var bookObject = scannedTextObj[i];

        var title = bookObject["Title"];
        var ISBN = bookObject["ISBN"];
        var content = bookObject["Content"];


        for (var j = 0; j < content.length; j++) {
            var lineObject = content[j];

            var text = lineObject["Text"];
            var page = lineObject["Page"];
            var line = lineObject["Line"];

            // If we find a match, add this to our results
            if (text.includes(searchTerm)) {
                var resultObject = {
                    "ISBN": ISBN,
                    "Page": page,
                    "Line": line
                };

                result.Results.push(resultObject);
            }
        }
    }

    // Update result's SearchTerm before returning
    result.SearchTerm = searchTerm;
    
    return result; 
}

/** Example input object. */
const twentyLeaguesIn = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ] 
    }
]

const inputNoContent = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [] 
    }
]

const inputNoBook = []
    
/** Example output object */
const twentyLeaguesOut = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
}

const outputTest3 = {
    "SearchTerm": "The",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 8
        }
    ]
}

const outputTest4 = {
    "SearchTerm": "elephant",
    "Results": []
}

const outputTest5 = {
    "SearchTerm": "and",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        },
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 10
        }
    ]
}

const outputTest6 = {
    "SearchTerm": "and",
    "Results": []
}

const outputTest7 = outputTest6

const outputTest8 = {
    "SearchTerm": "own momentum",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 8
        }
    ]
}

/*
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____  
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___| 
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \ 
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/ 
                                                      
 */

/* We have provided two unit tests. They're really just `if` statements that 
 * output to the console. We've provided two tests as examples, and 
 * they should pass with a correct implementation of `findSearchTermInBooks`. 
 * 
 * Please add your unit tests below.
 * */

/** We can check that, given a known input, we get a known output. */
const test1result = findSearchTermInBooks("the", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test1result)) {
    console.log("PASS: Test 1");
    console.log(test1result);
} else {
    console.log("FAIL: Test 1");
    console.log("Expected:", twentyLeaguesOut);
    console.log("Received:", test1result);
}

/** We could choose to check that we get the right number of results. */
const test2result = findSearchTermInBooks("the", twentyLeaguesIn); 
if (test2result.Results.length == 1) {
    console.log("PASS: Test 2");
} else {
    console.log("FAIL: Test 2");
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test2result.Results.length);
}

/** Case sensitive test 
 *  Tests that "The" is matched and not "the"
*/
const test3result = findSearchTermInBooks("The", twentyLeaguesIn);
if (JSON.stringify(outputTest3) == JSON.stringify(test3result)) {
    console.log("PASS: Test 3");
    console.log(test3result);
} else {
    console.log("FAIL: Test 3");
    console.log("Expected:", outputTest3);
    console.log("Received:", test3result);
}

/** Negative test 
 *  Tests that result contains an empty list
*/
const test4result = findSearchTermInBooks("elephant", twentyLeaguesIn);
if (JSON.stringify(outputTest4) == JSON.stringify(test4result)) {
    console.log("PASS: Test 4");
    console.log(test4result);
} else {
    console.log("FAIL: Test 4");
    console.log("Expected:", outputTest4);
    console.log("Received:", test4result);
}

/** Positive test
 *  Tests that multiple matches are included in results, if applicable
 */
const test5result = findSearchTermInBooks("and", twentyLeaguesIn);
if (JSON.stringify(outputTest5) == JSON.stringify(test5result)) {
    console.log("PASS: Test 5");
    console.log(test5result);
} else {
    console.log("FAIL: Test 5");
    console.log("Expected:", outputTest5);
    console.log("Received:", test5result);
}

/** Unusual parameter test
 *  Tests when scannedTextObj has a book object with zero content objects
 */
const test6result = findSearchTermInBooks("and", inputNoContent);
if (JSON.stringify(outputTest6) == JSON.stringify(test6result)) {
    console.log("PASS: Test 6");
    console.log(test6result);
} else {
    console.log("FAIL: Test 6");
    console.log("Expected:", outputTest6);
    console.log("Received:", test6result);
}

/** Unusual parameter test
 *  Tests when scannedTextObj has zero book objects
 */
const test7result = findSearchTermInBooks("and", inputNoBook);
if (JSON.stringify(outputTest7) == JSON.stringify(test7result)) {
    console.log("PASS: Test 7");
    console.log(test7result);
} else {
    console.log("FAIL: Test 7");
    console.log("Expected:", outputTest7);
    console.log("Received:", test7result);
}

/** Unusual parameter test
 *  Tests when searchTerm is a phrase and contains multiple words
 */
const test8result = findSearchTermInBooks("own momentum", twentyLeaguesIn);
if (JSON.stringify(outputTest8) == JSON.stringify(test8result)) {
    console.log("PASS: Test 8");
    console.log(test8result);
} else {
    console.log("FAIL: Test 8");
    console.log("Expected:", outputTest8);
    console.log("Received:", test8result);
}