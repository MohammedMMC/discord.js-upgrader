const fs = require('fs');
const path = require('path');

/**
 * @param {String} filePath 
 * @param {String} key 
 * @param {String} value 
 * @returns {Boolean}
 */
function addDataAfter(filePath, key, value) {
    if (typeof filePath !== 'string' || typeof key !== 'string' || typeof value !== 'string') throw new Error("filePath/key/value must be a string");
    let typesData = fs.readFileSync(path.join(__dirname, filePath)).toString();
    if (typesData.includes(value)) return false;
    let newTypesData = typesData.replace(key, `${key}\n${value}`);
    fs.writeFileSync(path.join(__dirname, filePath), newTypesData);
    return true;
}

/**
* @param {String} name 
* @param {String} listenerTypes 
* @returns {Boolean}
*/
function addEventType(name, listenerTypes) {
    if (typeof name !== 'string' || typeof listenerTypes !== 'string') throw new Error("item/value must be a string");
    return addDataAfter("../../discord.js/typings/index.d.ts", "export interface ClientEvents extends BaseClientEvents {", `${name}: ${listenerTypes};`);
}

module.exports = { addDataAfter, addEventType };