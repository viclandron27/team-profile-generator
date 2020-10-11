class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        if (this.name.length) {
            return this.name;
        }
        return false;
    }
    
    getId() {
        if (this.id > 0) {
            return this.id;
        }
        return false;
    }

    getEmail() {
        if (this.email.length) {
            return this.email;
        }
        return false;
    }

    getRole() {
        return "Employee"
    }
}

module.exports = Employee;