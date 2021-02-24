

const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);
const routespublic = [];

fs.readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    }).forEach(file => {
        const controller = require(path.join(__dirname, file))
        routespublic.push(controller) ;
    })

Object.values(routespublic).forEach(routename => {
    routespublic[routename] 
})

let datareturn

for (let index = 0; index < routespublic.length; index++) {
    let datafoo = routespublic[index]
    datareturn = {
        ...datareturn,
        ...datafoo
    }
}

module.exports = datareturn