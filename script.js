#!/usr/bin/env node
const fs = require("fs");
// console.log(process.argv);
let cmds = process.argv.slice(2);
// console.log(cmds.indexOf("w"));

function read(cmds) {
  let options = cmds.filter(function (data) {
    return data.startsWith("-");
  });
  // console.log(options);
  let files = cmds.filter(function (data) {
    return !data.startsWith("-");
  });
  if (files.length == 0) {
    console.log("Please specify the file name");
    return;
  }
  for (i in files) {
    if (!fs.existsSync(files[i])) {
      console.log(files[i] + " does not exist");
      return;
    }
  }
  //writing without line break
  if(options.includes("-ws")){
    if(options.length != 1|| files.length != 2 || cmds.indexOf("-ws") != 1){
     
      console.log("Command not found");
      return;
    }
    let file2 = fs.readFileSync(files[1],'utf-8');

    let lines = file2.split("\r\n");
    let text = "";
    for(i in lines){
      if(lines[i] != "")
        text += lines[i]+"\r\n";
    }
    fs.writeFileSync(files[0],text);
    return;
  }
  //writing with line break command
  if(options.includes("-w")){
    if(options.length != 1|| files.length != 2 || cmds.indexOf("-w") != 1){
      // console.log(cmds.indexOf("w"));
      console.log("Command not found");
      return;
    }
    let data = fs.readFileSync(files[0],'utf-8');
    fs.writeFileSync(files[1],data);
    return;
  }
  //appending command
  if(options.includes("-a")){
    if(options.length != 1|| files.length != 2 || cmds.indexOf("-a") != 1){
      console.log("Command not found");
      return;
    }
    let file1 = fs.readFileSync(files[0],'utf-8');
    let file2 = fs.readFileSync(files[1],'utf-8');

    fs.writeFileSync(files[1],file2 + "\r\n" + file1);
    return;
  }

  let count = 1;

  for (i in files) {
    let data = fs.readFileSync(files[i], "utf-8");
    //printing without line break
    if (options.includes("-s")) { 
      let lines = data.split("\r\n");
      for (j in lines) {
        if (lines[j] != "") {
          if(options.includes("-n")){
            console.log(count+". "+lines[j]);
            count++;
          }
          else
            console.log(lines[j]);
        }
      }
    } 
    //printing with numbering including breaks numbering
    else if((options.includes("-n") && options.includes("-b")&&(options.indexOf("-n")<options.indexOf("-b")))||(options.includes("-n") && !options.includes("-b"))){
      let lines = data.split("\r\n");
      for(j in lines){
        console.log(count+". "+lines[j]);
        count++;

      }
    }
    //printing numbering without numbering breaks
    else if(options.includes("-b")){
      let lines = data.split("\r\n");
            for(j in lines) {
                if(lines[j] == "") {
                    console.log(lines[j]);
                } else {
                    console.log(count + ". " + lines[j]);
                    count += 1;
                }
            }
    }
    //printing as it
    else {
      console.log(data);
    }
  }
}
read(cmds);


