const Employee = require('./lib/Employee');
const Manager = require('./lib/Manger');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');

function Index() {
    this.employee;
}

Index.prototype.getUserName = function () {
    inquirer
    .prompt({
        type: 'text',
        name: 'name',
        message: "What is your team manager's name?",
        validate: employeeInput => {
            if (employeeInput) {
                return true;
            }
            else {
                console.log('Please enter the name of your team manager!');
                return false;
            }
        }
    })
    //destructre name from prompt object
    .then(({ name }) => {
        this.employee = new Employee(name);
    });

    console.log(Employee);
};
