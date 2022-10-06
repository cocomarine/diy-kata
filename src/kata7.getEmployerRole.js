const getEmployerRole = (employeeName, employees) => {
    const matchingItem = employees.filter(x => x.name == employeeName);
    return matchingItem[0].role;
};

module.exports = getEmployerRole;
