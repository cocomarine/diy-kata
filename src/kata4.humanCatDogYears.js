const humanCatDogYears = number => {
    let humanYrs = number;
    let catYrs = dogYrs = 0;

    if (humanYrs >= 1) {
        catYrs += 15;
        dogYrs += 15;
        if (humanYrs > 1) {
            catYrs += 9;
            dogYrs += 9;
            if (humanYrs > 2) {
                catYrs += (humanYrs - 2) * 4;
                dogYrs += (humanYrs - 2) * 5;
            }
        } 
    }
    return Array(humanYrs, catYrs, dogYrs);
};

module.exports = humanCatDogYears;
