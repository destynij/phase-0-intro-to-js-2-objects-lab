const employee = {
    name: "Bob",
    streetAddress: "4811 Howard Lane"
}

function updateEmployeeWithKeyAndValue(employee) {
    return {...employee, name:"Sam", streetAddress:"11 Broadway"}
}
 function destructivelyUpdateEmployeeWithKeyAndValue(employee, streetAddress){
     employee[streetAddress] = "12 Broadway"
     return employee;
 }

 function deleteFromEmployeeByKey(employee, key) {
     return { ...employee.key,
    delete : key}
 }

 function destructivelyDeleteFromEmployeeByKey(employee, key){
     delete employee[key]
     return employee;
 }