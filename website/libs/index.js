/**
 * 常用工具集
 */

//  返回对象的类型：Object、Array、String、Boolean
 export const getType = obj => {
    return Object.prototype.toString.call(obj).slice(8, -1);
 }

 export const isArray = obj => {
     return getType(obj) === 'Array'
 }
