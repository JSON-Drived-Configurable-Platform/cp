/**
 * for some reason we don't use the origin required prop:
 * (1)、we have cutom components like logicinput which need to cutom the required rule too;
 * (2)、the origin require validate for empty array is valid, which not meet our need;
 *
 * notice: consider the iview use the old version of async-validator
 */
import {getValidType} from './getValidType';
export const getRequiredRules = function getRequiredRulesFunc(field) {
    let rules = [];
    const type = field.type;
    const subtype = field.subtype;
    // 解决区间输入时的required校验失效问题
    if (['TimePicker', 'DatePicker'].includes(type) && ['daterange', 'datetimerange'].includes(subtype)) {
        rules.push({
            validator(rule, value, callback) {
                if (value.length === 2 && value[0] && value[1]) {
                    callback();
                }
                else {
                    callback(new Error(field.label + '不可为空'));
                }
            },
            trigger: 'change'
        });
    }
    // 自定义组件的required校验
    if (['logicinput', 'logicselect'].includes(type)) {
        rules.push({
            validator(rule, value, callback) {
                if (value.logic && value.value) {
                    callback();
                }
                else {
                    callback(new Error(field.label + '不可为空'));
                }
            },
            trigger: 'change'
        });
    }
    rules.push({
        required: true,
        type: getValidType(field),
        message: (field.label || field.model) + '不可为空',
        trigger: 'change'
    });
    return rules;
};
