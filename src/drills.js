function sockMerchant(n, ar) {

    let pairs = 0;

    let sockOrganizer = {}

    for (let i = 0; i < ar.length; i++) {
        if (!sockOrganizer[i]) {
            sockOrganizer[i] = 1;
        }
        if (sockOrganizer[i] === 2) {
            pairs += 1;
        }
        else {
            sockOrganizer[i] += 1;
        }
    }

    return pairs;


}

let result = sockMerchant(7, [1, 2, 1, 2, 1, 3, 2]);
console.log(result);