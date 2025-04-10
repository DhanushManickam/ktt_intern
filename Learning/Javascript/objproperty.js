    let employee = {};
    employee.name = "Dhanush";
    employee.lname = "Manickam";
    employee.age = 21;
    employee.dept = "IT";
    employee.Exp = 1;

    console.log(Object.getOwnPropertyDescriptor(employee, "name"));
    Object.defineProperty(employee, "name", {
        writable : false
    })
    employee.name = "siva"
    console.log("After the wriable of property is false and changed value is", employee);
    console.log(Object.getOwnPropertyDescriptor(employee, "name"));
    
    Object.defineProperty(employee, "name", {
        configurable : false
    })

    delete employee.name;
    console.log("After changing the configure false and delete :", employee);

    Object.defineProperty(employee, "dept", {
        enumerable : false
    })

    for(let val in employee){
        console.log(val);
    }
    let Truck = {
        truck1: {
            brand: "Volvo",
            model: "Volvo FM",
            year: "2025",
            color: "Blue"
        },
        truck2: {
            brand: "Tata",
            model: "Tata Signa",
            year: "2020",
            color: "White"
        },
        truck3: {
            brand: "Ashok Leyland",
            model: "Lynx",
            year: "2021",
            color: "Red"
        }
    };
    
    Object.seal(Truck.truck1);
    Truck.truck1.model = "Volvo FH"; 
    Truck.truck1.engine = "V8"; 
    delete Truck.truck1.color;       
    console.log("Sealed truck1:", Truck.truck1);

    Object.defineProperty(employee, "Fullname",{
        get(){
            return `${this.name} ${this.lname}`
        },
        set(value){
            [this.name, this.lname] = value.split(' ');
        }
    })
    console.log("Full name of employee:", employee.Fullname);

    let object = {
        get name() {
            return this._name;
        },
        set name(value){
            if(value.length < 4){
                console.log("Invalid or name size is less than 4");
                return;
            }
            this._name = value;
        }
    }
    
    object.name = "Dhanush";
    console.log(object.name);