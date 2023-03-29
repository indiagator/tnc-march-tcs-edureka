
import { Subscriber } from "./subcriber.js";
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import * as fs from 'fs';
import path from "path";
import { fileURLToPath } from "url";
import { usernameExists,passwordExists } from "./credentialcheck.js";
import { signup } from "./signup.js";
import { displayJournalistDashboard } from "./dashboards/journalist.js";
import { getUserType } from "./userdetails.js";
import { loadNews } from "./startup.js";
import { unloadNews } from "./shutdown.js";
//import { passwordExists } from "./passwordcheck.js";

//console.log(process.env);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const __credentials = "credentials.txt";
const __news = "news.txt";
let newsList = new Array();
const credentials = fs.readFileSync(path.join(__dirname,__credentials),'utf-8');
const newsListFromFile = fs.readFileSync(path.join(__dirname,__news),'utf-8');
loadNews(newsList,newsListFromFile);

const __userdetails = null;

try{

console.log("\nWelcome to The Newspaper Conmpany TNC\n")

const prompt_1 = readline.createInterface({ input, output });
const username = await prompt_1.question(' Please Enter Username : ');
prompt_1.close();

//let credentials = Buffer.from(fs.readFileSync(path.join(__dirname,'credentials.txt'),'utf-8'));
//console.log(credentials);
//console.log(credentials);

let password;
if(usernameExists(username,credentials))
{
    const prompt_2 = readline.createInterface({ input, output });
    password = await prompt_2.question(' Please Enter Password : ');
    prompt_2.close();

    if(passwordExists(username, password, credentials ))
    {
        // Give Access to the Appropriate Dashboard

        let usertype = getUserType(username,credentials);

        if(usertype === 'journalist')
        {
            displayJournalistDashboard(username,newsList);
        }
        
    }
    else
    {
        console.log("Incorrect Password")
    }

}
else
{
    const prompt_3 = readline.createInterface({ input, output });
    let userinput = await prompt_3.question(' Do you want to signup (y/n) : ');
    if( userinput === 'y' )
    {
        let username =  await prompt_3.question("Please enter a new Username : ")
        let usertype =  await prompt_3.question("Please enter your role (subscriber/journalist/editor/salesguy/advertizer) : ");
        let password =  await prompt_3.question("Please enter a new Password : ")

        signup(username,password,usertype,__credentials);

    }
    prompt_3.close();
}


//console.log(usernameExists(answer_1,credentials));
//console.log(credentials);
//console.log("username: ",`${answer_1}`);
//console.log(subscriber_1);

}
finally{

    unloadNews(__dirname,__news,newsList);
}