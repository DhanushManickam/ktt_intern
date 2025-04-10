const {drivers, trucks} = require(`./real_time_tn_dataset`);


class Employee {
    static counter = 0;
    constructor(name, dept, DOB, officeplace, salary ){
        this.name = name;
        this.dept = dept;
        this.DOB = DOB;
        this.officeplace = officeplace;
        this.salary = salary;
        Employee.counter++;
    }
    setemail(value){
        this.email = value;
    }
    getemail(){
        return this.email;
    }
    ['display'+'details'](){
        return this;
    }
}

let emp1 = new Employee("Siva", "IT", "08-10-2005", "Salem", 60_000);
emp1.setemail("2k21cse017@kiot.ac.in");

console.log("Employee 1 Details: ",emp1);
console.log("Get the Email address of Employee:",emp1.getemail())

console.log("Custom defined dyanamic name for display output",emp1.displaydetails())

class Developer extends Employee {
    constructor(name, dept, DOB, officeplace, salary, techStack) {
        super(name, dept, DOB, officeplace, salary);
        this.techStack = techStack;
    }

    displaydetails() {
        return {
            Name: this.name,
            Department: this.dept,
            Tech: this.techStack,
            Email: this.email,
        };
    }

    code() {
        console.log(`${this.name} is coding in ${this.techStack.join(', ')}`);
    }
}

let dev1 = new Developer("Kavin", "DevOps", "07-12-2000", "Coimbatore", 90_000, ["Node.js", "DBMS", "AWS"]);
dev1.setemail("2k21cse018@kiot.ac.in");

console.log("\nDeveloper 1 Details:", dev1.displaydetails());
dev1.code();

console.log("Total Number of employees:",Employee.counter);


class PowerArray extends Array {
    isEmpty() {
      return this.length === 0;
    }
  }
  
  let arr = new PowerArray(1, 2, 5, 10, 50);
  console.log("Check the array is empty by custom in build function",arr.isEmpty()); 

  let filteredArr = arr.filter(item => item >= 10);
  console.log(filteredArr);
  console.log("Check the array is empty by custom in build function",filteredArr.isEmpty());