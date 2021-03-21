let fs = require("fs");
let path = require("path");
let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"],
    images:['jpeg','jpg','gif','psd'],
}

//mkdirsync is used to make directory at current location, sync functions are used so that if this function doesn't work then the rest of cole doesn't get affected
//let input=process.argv.slice(2);
//let dirpath=input[0];

function dirCreator(dirpath){
    if(fs.existsSync(dirpath)==false){
        fs.mkdirSync(dirpath);
    }
}

function isFileorNOt(dirpath) {
    return fs.lstatSync(dirpath).isFile();
}
function listContent(dirpath) {
    return fs.readdirSync(dirpath);
}

function getDirectoryName(dirpath){
    let strArr=dirpath.split(".");//because the extension name is preceded by . hence split by .
    let ext=strArr.pop();//the array will have all the string before . at index 0 and all the words after . at index 1 hence pop the last element to get the ext
    for(let key in types){
        for(let i=0;i<types[key].length;i++){
            if(types[key][i]==ext){
                return key; 
            }
        }
    }
    return "others";
}
function copyFiletoFolder(dirpath,destpath){
// copyFileSync : the file never copied from org to dest rather a new file is created and the data of the file we want to copy is copied in that new file in dest 
//hence, the correct syntax is fs.copyFileSync(src,path.join)
    let orgFileName=path.basename(dirpath);
    let destFilepath=path.join(destpath,orgFileName);
    fs.copyFileSync(dirpath,destFilepath);
}
function moveFiletoFolder(dirpath,destpath){
    let orgFileName=path.basename(dirpath);
    let destFilepath=path.join(destpath,orgFileName);
    fs.renameSync(dirpath,destFilepath);
}
// function automate(dirpath){
//     let watcher=fs.watch(dirpath,(event,filename)=>{
//         if (filename && event ==='change') {
//             console.log(`${filename} file Changed`);
//           }
//         OrganizeDir(dirpath);
//     });
// }
let orgFilePath
function organizeFn(dirpath){
    
    //watcher.close();
    orgFilePath=path.join(dirpath,"organized_files");
    dirCreator(orgFilePath);
    for(let key in types){
        let innerdirPath=path.join(orgFilePath,key);
        dirCreator(innerdirPath);
    }
    let otherPath=path.join(orgFilePath,"others");
    dirCreator(otherPath);
    OrganizeDir(dirpath);
    
    

}
function OrganizeDir(dirpath){
    // console.log(dirpath);
    let isFile = isFileorNOt(dirpath);
    if (isFile == true) {
        let folderName=getDirectoryName(dirpath);
        let destpath=path.join(orgFilePath,folderName);
        moveFiletoFolder(dirpath,destpath);
        //console.log(dirpath,"->",folderName);
    } else {
        let content = listContent(dirpath);
        for (let i = 0; i < content.length; i++) {
            let childPath = path.join(dirpath, content[i]);
            OrganizeDir(childPath);
        }
        //to check if the current directory(folder) is empty and delete it
        if(fs.readdirSync(dirpath).length==0){
            fs.rmdirSync(dirpath);
        }
    }
    
}
module.exports={
    organizeFn:organizeFn
}

