const fs = require("fs");
const path = require("path");


const client = require("pg/lib/native/client");

console.log(__dirname);

console.log(__filename);

const currentFileName = path.basename(__filename);
///home/user/MY-TASKS/SERVER/SERVER-MVC-CRUD-ROMAN/sandbox/index.js

const db = {};

const fileNames = fs.readdirSync(__dirname);
console.log(fileNames);

const filtredArray = fileNames.filter(
  (currentFile) => /.js$/.test(currentFile) && currentFile !== currentFileName
);
console.log(filtredArray);

filtredArray.forEach((currentFile)=>{
  const absPathToFile =  path.resolve(__dirname, currentFile)
  const Model = require(absPathToFile);
  Model.__client = client;
  db[Model._tableName] = Model;
});