
import { Subscriber } from "./subcriber.js";
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import * as fs from 'fs';
import path from "path";
import { fileURLToPath } from "url";
import { usernameExists } from "./usernamecheck.js";
import { passwordExists } from "./passwordcheck.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("\nWelcome to The Newspaper Conmpany TNC\n")

const prompt_1 = readline.createInterface({ input, output });
const username = await prompt_1.question(' Please Enter Username : ');
prompt_1.close();

let credentials = fs.readFileSync(path.join(__dirname,'credentials.txt'),'utf-8');

let password;
if(usernameExists(username,credentials))
{
    const prompt_2 = readline.createInterface({ input, output });
    password = await prompt_2.question(' Please Enter Password : ');
    prompt_2.close();
}
else
{
    const prompt_3 = readline.createInterface({ input, output });
    password = await prompt_3.question(' Do you want to signup : ');
    prompt_3.close();
}

if(passwordExists(username, password, credentials ))
{
    // Give Access to the Appropriate Dashboard
    console.log("Welcome to the Dashboard!")
}
else
{
    console.log("Incorrect Password")
}

//console.log(usernameExists(answer_1,credentials));
//console.log(credentials);
//console.log("username: ",`${answer_1}`);
//console.log(subscriber_1);