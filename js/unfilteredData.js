// const fse = require('fs-extra');
import { fse } from '../node_modules'
export const array = fse.readJSONSync('./filteredData.txt');
