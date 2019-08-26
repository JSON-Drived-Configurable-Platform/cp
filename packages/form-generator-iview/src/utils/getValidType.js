export const getValidType = function(field) {
    const type = field.type.toLowerCase();
    const subtype = field.subtype;
    const multiple = field.multiple;
    if (type === 'input') {
        return 'string';
    }
    if (type === 'inputnumber') {
        return 'number';
    }
    if (type === 'select') {
        if (multiple) {
            return 'array';
        }
        else {
            return 'string';
        }
    }
    if (type === 'radio') {
        return 'string';
    }
    if (type === 'checkbox') {
        return 'array';
    }
    if (type === 'datepicker') {
        if (['daterange', 'datetimerange'].includes(subtype)){
            return 'array';
        }
        else {
            return 'string';
        }
    }
    if (type === 'cascader') {
        return 'array';
    }
    if (['logicinput', 'logicselect'].includes(type)) {
        return 'object';
    }
    if (['imgupload', 'upload'].includes(type)) {
        return 'array';
    }
};
