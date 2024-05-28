#! /usr/bin/env node
import inquirer from "inquirer";
import { data } from "./data.js";
let score = 0;
console.log(`\n--------------------------------`);
console.log(` # Welcome To Typescript Quiz #`);
console.log(`--------------------------------\n`);
for (let i = 0; i < data.length; i++) {
    console.log("-----------------------------------------------------");
    let mcqs = await inquirer.prompt({
        name: "mcq",
        message: data[i].title,
        type: "list",
        choices: data[i].choices,
    });
    console.log("-----------------------------------------------------");
    mcqs.mcq === data[i].correct && score++;
}
console.log(`\n\t> You got ${score}\\10`);
console.log(`\n ############################### `);
console.log(` # ThankYou for attemting quiz #`);
console.log(` ############################### `);
