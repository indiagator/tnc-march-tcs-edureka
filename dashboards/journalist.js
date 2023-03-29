
import { News } from '../news.js';
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';



export async function displayJournalistDashboard(journalistname,newsList)
{
    console.log("\nWelcome to the News Editing Dashboard\nPlease create a News Article\n\n");

    const journalistInput = readline.createInterface({ input, output });

    let category = await journalistInput.question("Category: ")
    let headline = await journalistInput.question("Headline: ")
    let text =  await journalistInput.question("Text: ")

    let news = new News(category,journalistname,headline,text);
    let newsJson = JSON.stringify(news);
    //console.log(newsJson);

    newsList.push(newsJson);

    console.log(newsList);


}