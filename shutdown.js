import * as fs from 'fs';
import path from "path";


export function unloadNews(__dirname,__filename,newsList)
{

    fs.writeFileSync(path.join(__dirname,__filename),JSON.stringify(newsList),'utf-8');

}