

export function usernameExists( username, credentialsFileBody )
{
    let lines = credentialsFileBody.split("\r\n");
    //console.log(lines);

    for( let line in lines)
    {
        //console.log(lines[line] + "\n");
        let credentialValues = lines[line].split(",");
        if(credentialValues[2] === username)
        return true;
    }

    return false;

}

