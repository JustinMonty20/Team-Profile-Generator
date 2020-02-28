// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")
class Engineer extends Employee {
    constructor(name, id, email, gitHub){
        super(name, id ,email);

        this.gitHubAccount = gitHub;
    }
    getGitHub(){
        return this.gitHubAccount;
    }
}





module.exports = Engineer