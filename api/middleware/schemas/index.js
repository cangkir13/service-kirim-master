const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);
const SchemaPublic = [];

fs.readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    }).forEach(file => {
        const controller = require(path.join(__dirname, file))
        SchemaPublic.push(controller) ;
    })

Object.values(SchemaPublic).forEach(routename => {
    SchemaPublic[routename] 
})

let datareturn

for (let index = 0; index < SchemaPublic.length; index++) {
    let datafoo = SchemaPublic[index]
    datareturn = {
        ...datareturn,
        ...datafoo
    }
}

module.exports = datareturn