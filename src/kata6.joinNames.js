const joinNames = namesObj => {
    
    if (namesObj.length == 1) {
        return namesObj[0].name;
    }
    
    let allNames = [];
    let lastItem = namesObj.pop();

    namesObj.forEach((item) => {
        allNames.push(item.name);
    });

    return allNames.join(', ') + " & " + lastItem.name;
};

module.exports = joinNames;
