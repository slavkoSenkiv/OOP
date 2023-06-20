let thisMonthSalary = 30_000;
let thisMonthOvertime = 10;
let thisMonthRate = 20;

function getWage(salary, overtime, rate){
    return salary + (overtime * rate);
}

console.log(getWage(thisMonthSalary, thisMonthOvertime, thisMonthRate));


let employee = {
 salary: 30_000,
 overtime: 10,
 rate: 20,
 getWage: function(){
    return this.salary + (this.overtime * this.rate);
 }  
}

console.log(employee.getWage());