
/**
 * Will be used to controll Employee object.
 * Delete, create, update and claculate employee salary
 */
const EmployeeController = ( function () {

    class Employee {
        constructor(id, firstName, lastName, Age, salary, zip, city, street, country, poBox) {
            this.id = id;
            this.firstName = firstName;
            this.lastName = lastName;
            this.Age = Age;
            this.salary = salary;
            this.zip = zip;
            this.city = city;
            this.street = street;
            this.country = country;
            this.poBox = poBox;
        }
    }

    /**
     * Will be used to store all the employees
     */
    const data = {
        allEmployees: [],
        totalIncome: 0,
    }

    return {
        /**
         * Add item to all data array
         */
        addEmployee: function(fName, lName, Age, salary, city, street, country, poBox) {
            let newEmployee, ID

            /**
             * Check if there are any other employees on the array
             * if present select the last employee id and add one
             */
            if ( data.allEmployees.length > 0 ) {
                ID = data.allEmployees[data.allEmployees.length - 1].id + 1
            } else {
                ID = 0
            }

            newEmployee = new Employee(ID, fName, lName, Age, salary, city, street, country, poBox)

            data.allEmployees.push(newEmployee)

            console.log('data', data);

            return newEmployee
        }
    }


})();





/**
 * Closure function will be used to read data from user interface.
 * Updata data and display data in UI
 */
const UIController = ( function () {

    /**
     * Will be used to store DOM strings from UI
     * store classes/ids
     */
    const DOMStrings = {
        firstName: '#fname',
        lastName: '#lname',
        inputAge: '#age',
        inputSalary: '#salary',
        inputZip: '#zip',
        inputCity: '#city',
        inputStreet: '#street',
        inputCountry: '#country',
        inputPoBox: '#pobox',
        submitEntry: '#entry',
        totalSalary: '#totalSalary',
        employeeDisplay: "#display",
    }



    /**
     * return functions that can be accesed by other controllers
     */
    return {
        /**
         * Exposes the classes/ids stored
         * @returns DOM strings
         */
        getDomStrings: function() {
            return DOMStrings;
        },

        /**
         * Reads or Get data
         */
        getInputs: function() {
            return {
                fName: document.querySelector(DOMStrings.firstName).value,
                lName: document.querySelector(DOMStrings.lastName).value,
                age: document.querySelector(DOMStrings.inputAge).value,
                salary: document.querySelector(DOMStrings.inputSalary).value,
                zip: document.querySelector(DOMStrings.inputZip).value,
                city: document.querySelector(DOMStrings.inputCity).value,
                street: document.querySelector(DOMStrings.inputStreet).value,
                country: document.querySelector(DOMStrings.inputCountry).value,
                poBox: document.querySelector(DOMStrings.inputPoBox).value,
            }
        },

        /**
         * Add Employee to UI table
         */
        uiAddEmployees: function(employee) {
            // let row, emplContainer;

            console.log(document.querySelector(DOMStrings.employeeDisplay));

            emplContainer = document.querySelector(DOMStrings.employeeDisplay)

            // Create table
            row = 1
            const newRow = emplContainer.insertRow(row);

            // insert columns
            const cel1  = newRow.insertCell(0);
            const cel2  = newRow.insertCell(1);
            const cel3  = newRow.insertCell(2);
            const cel4  = newRow.insertCell(3);
            const cel5  = newRow.insertCell(4);
            const cel6  = newRow.insertCell(5);
            const cel7  = newRow.insertCell(6);
            const cel8  = newRow.insertCell(7);
            const cel9  = newRow.insertCell(8);


            cel1.innerHTML = employee.firstName;
            cel2.innerHTML = employee.lastName;
            cel3.innerHTML = employee.Age;
            cel4.innerHTML = employee.salary;
            cel5.innerHTML = employee.zip;
            cel6.innerHTML = employee.city;
            cel7.innerHTML = employee.street;
            cel8.innerHTML = employee.country;
            cel9.innerHTML = employee.poBox;

            row++;


        }
    }
})();




/**
 * Used to control the flow of the app.
 * Connect the EmployeeController and UIController
 */
const AppController = ( function (employeeCtrl, UIctrl) {

    /**
     * Starting the application
     */
    const initFunction = function () {
        
        /**
         * Get the Elements
         */
        const DOM = UIctrl.getDomStrings();

        /**
         * Add event Listener to the button and call the callback function when it is clicked
         */
        document.querySelector(DOM.submitEntry).addEventListener('click', ctrlAddEmployee);
    }

    /**
     * Adding employee on UX.
     */
    const ctrlAddEmployee = function () {
        let input, newEmployee;

        input = UIController.getInputs();

        console.log('input', input);

        newEmployee = EmployeeController.addEmployee(input.fName, input.lName, input.age, input.salary, input.street, input.country, input.poBox, input.city );

        console.log('Employee', newEmployee);

        UIController.uiAddEmployees(newEmployee);

    }



    return {
        /**
         * Exposing the init function for starting the application
         */
        init: function () {
            console.log('Application has started');
            initFunction();
        }
    }


})(EmployeeController, UIController);


/**
 * Calling the init function
 */
AppController.init()