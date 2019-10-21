export const classPrefix = 'fg-ivu';

/**
 *
 * eq 等于
 * neq 不等于
 * gt 大于
 * egt 大于等于
 * lt 小于
 * elt 小于等于
 * like LIKE
 */
export const logicInputMap = {
    'eq': {
        label: '等于',
        valueType: 'single',
    },
    '=': {
        label: '等于',
        valueType: 'single',
    },
    '>': {
        label: '大于',
        valueType: 'single',
    },
    'gt': {
        label: '大于',
        valueType: 'single',
    },
    '>=': {
        label: '大于等于',
        valueType: 'single',
    },
    'egt': {
        label: '大于等于',
        valueType: 'single',
    },
    '<': {
        label: '小于',
        valueType: 'single',
    },
    'lt': {
        label: '小于',
        valueType: 'single',
    },
    '<=': {
        label: '小于等于',
        valueType: 'single',
    },
    'elt': {
        label: '小于等于',
        valueType: 'single',
    },
    'like': {
        label: '模糊等于',
        valueType: 'single',
    },
    'betweenIn': {
        label: '开区间(不包含)',
        valueType: 'double',
    },
    'betweenWith': {
        label: '闭区间(包含)',
        valueType: 'double',
    },
    '!=': {
        label: '不等于',
        valueType: 'single',
    },
    'neq': {
        label: '不等于',
        valueType: 'single',
    },
    'multiple': {
        label: '等于多个',
        valueType: 'multiple',
    },
    'multipleNot': {
        label: '不等于多个',
        valueType: 'multiple',
    },
};
