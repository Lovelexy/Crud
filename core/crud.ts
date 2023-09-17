import fs from "fs"; // ES6
 
// const fs = require("fs"); - CommonJS
const DB_FILE_PATH = "./CORE/DB";

console.log ("[CRUD]");

function create(content: string) {
// salvar o content no sistema

fs.writeFileSync(DB_FILE_PATH,content)

    return content;
}

console.log(create("Hoje eu preciso estudar um pouco de Dev Soutinho!"));