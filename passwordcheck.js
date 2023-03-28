

export function passwordExists(username, password, credentialsFileBody)
{
    let lines = credentialsFileBody.split("\r\n");
    //console.log(lines);

    for( let line in lines)
    {
        //console.log(lines[line] + "\n");
        let credentialValues = lines[line].split(",");

        if(credentialValues[2] === username)
        {
            console.log(username);
            console.log(credentialValues[3]);

            if( credentialValues[3] === password);
            {
                console.log(password)
            return true
            }
            
        }
        
    }    

    return false;

}