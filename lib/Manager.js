const Employee = require("./Employee");
// TODO: Write code to define and export the Manager class. 

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super (name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        const role = "Manager";
        return role;
    }

    getOfficeNumber() {
        const officeNumber = this.officeNumber;
        return officeNumber;
    }
}

module.exports = Manager;