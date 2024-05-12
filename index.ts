#! /usr/bin/env node
import inquirer from "inquirer";

let todos = [];
let condition = true;
while(condition)

{let todoquestions = await inquirer.prompt([

           { name:'todo',
             type:"input",
             message:"what would you like to add in your todos",
},

            {  name:"addmore",
                type:"confirm",
                message:"do you want to add more in your todos",
                default:"false",

             
            },
        ]
    );       



todos.push(todoquestions.todo);
condition =(todoquestions.addmore);
console.log(todos)
}
