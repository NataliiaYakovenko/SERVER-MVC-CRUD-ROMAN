const { Client } = require("pg");
const config = require("../configs/postgres.json");

const env = process.env.NODE_ENV || "development";
const dbConfig = config[env];

const client = new Client(dbConfig);

client.connect();

const db = {
    client
};

const fileNames = fs.readdirSync(__dirname);
console.log(fileNames);

const filtredArray = fileNames.filter(
  (currentFile) => /.js$/.test(currentFile) && currentFile !== currentFileName
);
console.log(filtredArray);

filtredArray.forEach((currentFile) => {
  const absPathToFile = path.resolve(__dirname, currentFile);
  const Model = require(absPathToFile);
  Model.__client = client;
  db[Model._name] = Model;
});

process.on("beforeExit", () => {
  client.end();
});

module.exports = { db };
