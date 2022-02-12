var file=require("fs");

// let [, ,command]=process.argv;
let command=process.argv[2];
if(command=="add"){
//    const [, , ,title]=process.argv;
   const title=process.argv[3];
//    const todo={title} ;
// const object={id:title};


const data=JSON.parse(file.readFileSync('file.json',{encoding:'utf-8'}));
var id=data.length+1;
data.push({id:id,title});   
file.writeFileSync("file.json",JSON.stringify(data));

}else if(command=="list"){
const data=JSON.parse(file.readFileSync('file.json',{encoding:'utf-8'}));
console.log(data);
}else if(command=="delete"){
    const id=process.argv[3];

    const data=JSON.parse(file.readFileSync('file.json',{encoding:'utf-8'}));
   const  newdata=data.filter((val)=> val.id!==id);
    file.writeFileSync("file.json",JSON.stringify(newdata));
}