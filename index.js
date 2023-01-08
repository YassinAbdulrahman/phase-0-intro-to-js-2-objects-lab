// Write your solution in this file!
const employee = {
    name: 'Yassin',
    streetAddress: 'Swan',
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObj = { ...employee };
    newObj[key] = value;

    return newObj;
}

const newemployee = updateEmployeeWithKeyAndValue(employee, "name", "Yassin")

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "Abdo");

function deleteFromEmployeeByKey(employee, key) {
    const obj = { ...employee };
    delete obj[key];
    return obj;
}
deleteFromEmployeeByKey(employee , "name");

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}

destructivelyDeleteFromEmployeeByKey(employee , "name");