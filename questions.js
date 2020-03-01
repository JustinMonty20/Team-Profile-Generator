
const employee = [{
    message: "What is your employee's name?",
    type: "input",
    name: "name"
},{
    message: "What is your employee's id?",
    type: "input",
    name: "id"
},{
    message: "What is your employee's email?",
    type: "input",
    name: "email"
},{
    message: "What role does this person have in the company?",
    type: "input",
    name: "role"
}]

const manager = [
    {
        message: "What is the employee's office number?",
        type: "input",
        name: "officeNumber",
    }
]

const engineer = [
    {
        message: "What is your employee's GitHub username?",
        type: "input",
        name: "GitHub",
    }, 
]

const intern = [
    {
        message: "What is your intern's school?",
        type: "input",
        name: "school",
    },
]

const finished = [{
    message: "Want to add another team member? ",
    type: "input",
    name: "build"
}]


module.exports = {
    manager: manager,
    engineer: engineer,
    intern: intern,
    employee: employee,
    finished: finished
}