// function sockMerchant(n, ar) {

//     let pairs = 0;

//     let sockOrganizer = {}

//     ar.forEach(sock => {

//         if (!sockOrganizer[sock]) {
//             sockOrganizer[sock] = 1;
//         }
//         else {
//             sockOrganizer[sock] += 1;
//         }
//     });

//     let pairedSocks = Object.values(sockOrganizer);

//     pairedSocks.forEach(pair => {
//         if (pair % 2 && pair >= 2) {
//             pairs += 1
//         }
//     })

//     return pairs;


// }

// let result = sockMerchant(7, [1, 2, 1, 2, 1, 3, 2]);
// console.log(result);

// function FindIntersection(input) {

//     const [firstList, secondList] = input.map(s => s.split(","));
//     // 1. input.map

//     // 2. s.split

//     console.log(firstList, secondList);

//     const resultMap = {};
//     const result = [];

//     // 3
//     for (const number of firstList) {
//         resultMap[number] = true;
//     }

//     // 4
//     for (const number of secondList) {
//         if (resultMap[number]) {
//             result.push(number);
//         }
//     }

//     // if then ternary
//     // 5. return
//     return result.length ? result.join(",") : false;
// }

// "1, 3, 4, 7, 13".split(",") = ["1", " 3", " 4", " 7", " 13"]
// ", 3, 4, 7,".split(",") = [" 3", " 4", " 7"]
// "1, 3, 4, 7, 13".split(", ") = ["1", "3", "4","7","13"]


// console.log(FindIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]));


function QuestionsMarks(str) {

    // str = "acc?7??sss?3rr1??????5"
    // str = "acc?7??sss?7rr7??????7"

    let numbersAndQMarks = []; // [{"?": 2}, {"7": 3}, "?", "?", "?", "3", "1", "?", …]
    let numbersOnly = []; // // [ {7:4}, {3:14}, {1:20}, {5:30} ]
    let strArray = str.split('');
    let result = false;

    // populate numbersAndQMarks
    for (let i = 0; i < strArray.length; i++) {
        if (parseInt(strArray[i]) || strArray[i] === '?') {
            const charAndIndex = {};
            charAndIndex[strArray[i]] = i;
            numbersAndQMarks.push(charAndIndex);
        }
    }

    // populate numbersOnly
    for (let i = 0; i < strArray.length; i++) {
        if (parseInt(strArray[i])) {
            const numAndIndex = {};
            numAndIndex[strArray[i]] = i;
            numbersOnly.push(numAndIndex);
        }
    }

    // 1. only look for sequential numbers that add up to 10
    // 2. there should only be a total of 3 ?s in between those numbers
    // 3. those question marks can include letters


    // 7, 3, 1, 5
    for (let i = 0; i < numbersOnly.length - 1; i++) {
        // setting the pairs to look at
        let key = Object.keys(numbersOnly[i]); //[7]
        let secondKey = Object.keys(numbersOnly[i + 1]); //3

        let value = Object.values(numbersOnly[i]); //[4]
        let secondValue = Object.values(numbersOnly[i + 1]); //[14]

        // counting the number of ?s
        if (parseInt(key[0]) + parseInt(secondKey[0]) === 10) { // check for sum of 10: [rule 1]
            let qMarkCounter = 0; // reset the counter
            let qMarksAndChar = str.substring(value[0], secondValue[0]); // ??sss?

            for (let i = 0; i < qMarksAndChar.length; i++) {
                var char = qMarksAndChar.charAt(i);
                if (char === '?') {
                    qMarkCounter++; // increase counter
                }
            }

            if (qMarkCounter === 3) {
                result = true;
            }

        }
    }

    return result;

}

// keep this function call here 
console.log(QuestionsMarks("aa6?9"));


// let index = 0;
//         console.log('go in here??');

//         if (parseInt(num) && (num + 1) === '?' && (num + 2) === "?" && (num + 3) === '?') {
//             let sum = pairs[index].reduce((a, b) => a + b, 0);
//             console.log('this is sum', sum);
//             if (sum === 10) {
//                 result = true
//                 index += 1
//                 console.log(result, 'then');
//             }
//             else {
//                 result = false
//             }
//         }