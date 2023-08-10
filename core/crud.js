const fs = require ("fs");
const DB_FILE_PATH = "./CORE/DB";

console.log ("[CRUD]");

function create(content) {
// salvar o content no sistema

fs.writeFileSync(DB_FILE_PATH,content)

    return content;
}

console.log(create("Hoje eu preciso estudar um pouco de Dev Soutinho!"));