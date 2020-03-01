const questions = require("./questions")
const Manager = require("./Develop/lib/Manager");
const Engineer = require("./Develop/lib/Engineer");
const Intern = require("./Develop/lib/Intern");
const Employee = require("./Develop/lib/Employee");
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
let team = [];

const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'team.html');

const render = require('./Develop/lib/htmlRenderer');



// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```

async function init (){
    let teamBuilding;
    do {
        try { response = await inquirer.prompt(questions.employee)
                let specific;
            switch(response.role) {
                case "Engineer".toLowerCase():
                specific = await inquirer.prompt(questions.engineer) 
                const engineer = new Engineer(response.name, response.id, response.email, specific.GitHub)
                team.push(engineer)
                break;   
                
                case "Manager".toLowerCase():
                specific = await inquirer.prompt(questions.manager)
                const manager = new Manager(response.name, response.id, response.email, specific.officeNumber)
                team.push(manager)
                break;

                case "Intern".toLowerCase():
                specific = await inquirer.prompt(questions.intern)
                const intern = new Intern(response.name, response.id, response.email, specific.school)
                team.push(intern)
                break;

                default: 
                console.log("You need to pick a Manager or an Engineer or an Intern for your team")
                return init();
            }

        } catch (error) {
            console.log(error);
        }

        teamBuilding = await inquirer.prompt(questions.finished)
    
    } while (teamBuilding.build === "Yes".toLocaleLowerCase())
    
 }

init();
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above to target this location.

// Hint: you may need to check if the `output` folder exists and create it if it
// does not. The fs npm package may have methods to check if a directory exists, and they
// may also have methods to create a directory that doesn't...



// const employee = await inquirer.prompt(questions.role)
//     console.log(employee)
      
//     switch(employee.role) {
//       case "Engineer":
//             inquirer.prompt(questions.engineer).then((res)=>{
//              team.push(new Engineer(res.engineerName, res.engineerId, res.engineerEmail, res.GitHub))
//          })
//          break;
                
//          case "Intern":
//          inquirer.prompt(questions.intern).then((res)=>{
//              team.push(new Intern(res.internName, res.internId, res.internEmail, res.school))
//          })
//          break;
//      }