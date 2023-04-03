
import { News } from '../news.js';
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import * as fs from 'fs';
import path from "path";
import { stringify } from 'node:querystring';


export async function displayJournalistDashboard(journalistname,newsList,__dirname,__newsfile)
{
    console.log("\nWelcome to the News Editing Dashboard\nPlease create a News Article\n\n");

    const journalistInput = readline.createInterface({ input, output });

    let category = await journalistInput.question("Category: ")
    let headline = await journalistInput.question("Headline: ")
    let text =  await journalistInput.question("Text: ")

    journalistInput.close();

    let news = new News(category,journalistname,headline,text);
    let newsJson = JSON.stringify(news);
    console.log(newsJson);

    newsList.push(newsJson); // [{news obj 1}, {news obj 2}, {news obj 3}...]

    console.log(JSON.stringify(newsList));

    fs.writeFileSync(path.join(__dirname,__newsfile),`${JSON.stringify(newsList)}`,'utf-8');

    //console.log(newsList);


}