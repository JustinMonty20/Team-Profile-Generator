const questions = require("./questions")
const Manager = require("./Develop/lib/Manager");
const Engineer = require("./Develop/lib/Engineer");
const Intern = require("./Develop/lib/Intern");
const Employee = require("./Develop/lib/Employee");
const inquirer = require('inquirer');
const path = require('path');
const util = require("util")
const fs = require('fs-extra');
const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'team.html');
const fsWriteFileAsync = util.promisify(fs.writeFile);
const render = require('./Develop/lib/htmlRenderer');

let team = [];
// async function that will populate "team" with objects based on the user responses.
async function init (){
    let teamBuilding;
    // do - while loop. 
    // user will continue to be asked the questions while their answer to the team building question is "yes".
    do {
        try { response = await inquirer.prompt(questions.employee)
                let specific;
            // switch case that checks for the the answer to response.role 
            // whatever their answer to that question is will ask the user 
            switch(response.role) {
                case "Engineer":
                specific = await inquirer.prompt(questions.engineer) 
                const engineer = new Engineer(response.name, response.id, response.email, specific.GitHub)
                team.push(engineer)
                break;   
                
                case "Manager":
                specific = await inquirer.prompt(questions.manager)
                const manager = new Manager(response.name, response.id, response.email, specific.officeNumber)
                team.push(manager)
                break;

                case "Intern":
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
    

    fs.ensureDir(OUTPUT_DIR).then(()=>{
        fsWriteFileAsync(outputPath, render(team));
    })
    
 }

init();

// first attempt at the switch statement
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