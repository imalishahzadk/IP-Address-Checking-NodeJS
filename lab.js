///////////////////////////////////Lab part 1////////////////////////

// const os= require("os")
// const { uptime } = require("process")
// console.log(uptime());
// const path=require("path")
// var pathObj=path.parse(__filename)
// console.log(pathObj);
/////////////////////////////////////Lab part 2///////////////////////
import fs from "fs"
import validator from "validator";
import prompt from "prompt"
import chalk from "chalk"
import colors from "colors"
prompt.start();
prompt.get(["name"], (err, data)=>{
    console.log("input is recieved!")
    console.log(("name:" +data.name))
    var result= validator.isUppercase(data.name[0])
    if(result==true)
    console.log(chalk.green.inverse("Data Valid!"))
    else
    console.log(chalk.red.inverse("Data inValid!"))

})
/////////////////////////////////Lab Part 3 (a)///////////////////////////
prompt.get(["email", "ipv4"],(err, data)=>{
    console.log("input is recieved!")
    var result= validator.isEmail(data.email)
    if(result==true)
    console.log(chalk.green.inverse("Valid Email:"))
    else
    console.log(chalk.red.inverse("Invalid Email:"))

    
    var result= validator.isIP(data.ipv4)
    if(result==true)
    console.log(chalk.green.inverse("This is Valid IP Address:"))
    else
    console.log(chalk.red.inverse("This is not Valid IP Address:"))
})
prompt.get(["ipv4"],(err, result1)=>{
    console.log("Input is recieved!")
    var result = validator.isIP(result1.ipv4)
    if(result== true){
      //  fs.openSync("White.txt")
        fs.readFile("White.txt","utf-8", (err, data)=>{
             if(err)
             console.log("Error! "+err)
             else {
                const data_arr=data.split("\n");
                for(var i of data_arr){
                  if(i === result1.ipv4){
                    console.log(colors.green.inverse("Valid IP Address!"))
                    console.log(colors.red.inverse("The user should contact the administrator regarding this matter"))
                    break;
                  }  
                }
            }     
        })
        fs.readFile("Black.txt","utf-8", (err, data)=>{
            if(err)
            console.log("Error! "+err)
            else  {
                const data_arr=data.split("\n");
                for(var i of data_arr){
                //  console.log(i);
                  if(i===result1.ipv4){
                  console.log(colors.red.inverse("IP is Blocked!"))
                  break;
                  }
                  
                }
            }            
        })
           fs.writeFile("pending.txt","utf-8",(err)=>{
            if(err)
            console.log("Error!", err)
            else{
              fs.appendFileSync("pending.txt",result1.ipv4.toString()+"\n")
              console.log(chalk.red.inverse("System is unable to authenticate the IP."))

            }
           })
           
  }
  
    
})





