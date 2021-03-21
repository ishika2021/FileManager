//file system -> nodejs modules
// google
let fs=require("fs"); // file system is a module in node js
let path=require("path");
function isFileorNot(dirPath){ // this method will check wheather the passed file exists or not
    return fs.lstatSync(dirPath).isFile(); // returns true if exist
}
function listContent(dirPath){ // this will read content of the passed file (files or folders)
    return fs.readdirSync(dirPath);
}
function viewFlat(dirPath){
    //path->File/Folder
    let isFile=isFileorNot(dirPath); // will return true only if the passed file is a file not a folder
    if(isFile==true){
        console.log(dirPath+"*"); // * is used to differentiate between files and folders
    }else{
        //directory
        //console.log
        //print path
        console.log(dirPath); // to print the name of the folder we are dealing with
        //get childrens
        let childrens=listContent(dirPath); 
        //call for view flat
        for(let i=0;i<childrens.length;i++){
            viewFlat(path.join(dirPath,childrens[i])); // we are basically concatinating the childrent with their root folder with the help of /
        }
    }
}

//viewFlat("D:\\PepWeb\\1_file_system_13feb");

function viewtree(dirPath,indent){
    //path->File/Folder
    let isFile=isFileorNot(dirPath); 
    if(isFile==true){
        console.log(indent,path.basename(dirPath+"*")); 
    }else{
        //directory
        //console.log
        //print path
        console.log(indent,path.basename(dirPath)); // to print the name of the folder we are dealing with
        //get childrens
        let childrens=listContent(dirPath); 
        //call for view flat
        for(let i=0;i<childrens.length;i++){
            viewtree(path.join(dirPath,childrens[i]),indent+"\t"); // we are concatinating \t to indent with every children
        }
    }
}
//viewtree("D:\\PepWeb\\1_file_system_13feb","");