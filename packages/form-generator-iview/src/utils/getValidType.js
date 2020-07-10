
export const getValidType = function getValidTypeFunc(field) {
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
    if (type === 'checkbox' || type === 'inputmultiple' || type === 'timepickermultiple') {
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
    if (type === 'timepicker' || type === 'timecycleselect') {
        if (['timerange'].includes(subtype)){
            return 'array';
        }
        else {
            return 'string';
        }
    }
    if (type === 'cascader') {
        return 'array';
    }
    if (['logicinput', 'logicselect', 'radiocard'].includes(type)) {
        return 'object';
    }
    if (['mediaupload', 'imgupload', 'upload', 'checkboxcard', 'videoupload'].includes(type)) {
        return 'array';
    }
};
