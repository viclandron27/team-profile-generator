const Employee = require('./lib/Employee');
const Manager = require('./lib/Manger');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');
const inquirer = require('inquirer');

function Index() {
    this.employee;
    this.employeeId;
    this.employeeEmail;
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

        this.getIdNum();
    });


};

Index.prototype.getIdNum() = function () {
    inquirer
        .prompt({
            type: 'text',
            name: 'id',
            message: "What is your team manager's employee ID?",
            validate: employeeInput => {
                if (employeeInput) {
                    return true;
                }
                else {
                    console.log('Please enter the employee ID of your team manager!');
                    return false;
                }
            }
        })
        .then(({ id }) => {
            this.employeeId = new Employee(id);

            this.getEmail();
        });

        
}

Index.prototype.getEmail() = function () {
    inquirer
        .prompt({
            type: 'text',
            name: 'email',
            message: "What is your team manager's email?",
            validate: employeeInput => {
                if (employeeInput) {
                    return true;
                }
                else {
                    console.log('Please enter the email of your team manager!');
                    return false;
                }
            }
        })
        .then(({ email }) => {
            this.this.employeeEmail = new Employee(email);
            console.log(this.email)
        });


}

module.exports = Index;

new Index().getUserName();
