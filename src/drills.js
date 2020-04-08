function sockMerchant(n, ar) {

    let pairs = 0;

    let sockOrganizer = {}

    ar.forEach(sock => {

        if (!sockOrganizer[sock]) {
            sockOrganizer[sock] = 1;
        }
        else {
            sockOrganizer[sock] += 1;
        }
    });

    let pairedSocks = Object.values(sockOrganizer);

    pairedSocks.forEach(pair => {
        if (pair >= 2) {
            pairs += 1
        }
    })

    return pairs;


}

let result = sockMerchant(7, [1, 2, 1, 2, 1, 3, 2]);
console.log(result);