function helpExecutor(){console.log(`List of all the commands:
                     1. view <dir-name> --tree
                     2. view <dir-name> --flat
                     3. organize <dir-name>/_
                     4. help
                     `);
}
//module.exports is used to differentiate the fucntion or variable that we want to export into a new file 
module.exports={
    helpFn:helpExecutor // don't use () here with helpExecutor to avoid the execution of the function body 
    // here helpFn is acting as the key to call the function helpExecutor
}
