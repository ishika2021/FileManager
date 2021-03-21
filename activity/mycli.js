//command-->
//view --tree, --flat
                //organize--> folder,multiple folder
                //help
//node mycli.js view dirName mode
//node mycli.js organize -/foldername
//node mycli.js help
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// require is used to import the code which is exported from the module.export
let {helpFn}=require("./commands/help"); // if we wrote normal let helpFile=require() then we need to call helpFile.helpFn() separately to call the function hence we write {helpFn} directly so that we can call it by name
let {organizeFn}=require("./commands/organize");
let {viewFn}=require("./commands/view");
let input=process.argv.slice(2);// to skip node and mycli words in the input
let cmd=input[0];
switch(cmd){
    case "view":
        viewFn(input[1], input[2]); //here we are using () so as to execute the body of the fucntion if we write the function name without the brackets the body of the function will not get executed only the name will be displayed
        break;
    case "organize":
        organizeFn(input[1]);
        break;
    case "help":
        helpFn();
        break;
    default: console.log("Wrong command");
}
