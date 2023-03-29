
import * as fs from 'fs';
import path from "path";
import { fileURLToPath } from "url";

export function signup(username,password,usertype,credentialfilename)
{
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    let id = (parseInt((Math.random())*10000)).toString();
    let credential = id + "," + usertype + "," + username + "," + password +"\r\n";

    fs.appendFileSync(path.join(__dirname,credentialfilename),`${credential}`,'utf-8');

}