const fizzBuzz = number => {
    let result = "";

    if (number % 3 === 0) {
        result += "Fizz";
    }
    if (number % 5 === 0) {
        result += "Buzz"
    }
    if (number % 3 != 0 && number % 5 !=0) {
        return number;
    } else {
        return result;
    }
};

module.exports = fizzBuzz;
