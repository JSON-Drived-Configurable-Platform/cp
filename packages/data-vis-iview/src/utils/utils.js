
/**
 * @description 绑定事件 on(element, event, handler)
 */
export const on = (function () {
    if (document.addEventListener) {
        return function (element, event, handler) {
            if (element && event && handler) {
                element.addEventListener(event, handler, false);
            }
        };
    } else {
        return function (element, event, handler) {
            if (element && event && handler) {
                element.attachEvent('on' + event, handler);
            }
        };
    }
})();

/**
   * @description 解绑事件 off(element, event, handler)
   */
export const off = (function () {
    if (document.removeEventListener) {
        return function (element, event, handler) {
            if (element && event) {
                element.removeEventListener(event, handler, false);
            }
        };
    } else {
        return function (element, event, handler) {
            if (element && event) {
                element.detachEvent('on' + event, handler);
            }
        };
    }
})();

/**
 * add commas per three number letter
 *
 * @param {string} x 输入
 * @return {string}
 */
export function addCommas(x) {
    if (isNaN(x)) {
        return '-';
    }
    x = (x + '').split('.');
    return x[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,')
        + (x.length > 1 ? ('.' + x[1]) : '');
}


/**
 * 是否是数字, 期望如下
 * 0= true
 * 1= true
 * 2= true
 * -1= true
 * 134500000000000000= true
 * Infinity= true
 * false= false
 * true= false
 * NaN= false
 * '1'= false
 * '0'= false
 * @param {any} n 输入
 * @return {boolean} 返回值
 */
export function isNumber(n){
    return Number(n)=== n;
}


export function calculateTableCellWidth(value) {
    if (value === null) {
        return 0;
    }
    let str = value.toString();
    str = str.replace(/[\u4e00-\u9fa5]/g, '00');

    let length = str.length;
    // 考虑数字加逗号
    if (isNumber(value)) {
        length = (length / 3) + length;
    }

    return length * 6 + 20;
}

/**
 * 值 < 9999                        保持原样
 * 10000 <= 值 < 1000000            单位为万
 * 100000000 <= 值                  单位为亿
 * 小数点后四舍五入保留2位
 * @param {number} number 输入值
 * @return {string} 返回值
 */
export function makeNumberReadable(number) {
    number = parseInt(number, 10);
    if (number > 99999999) {
        number = Math.round(number / 10000000);
        return (number / 10) + '亿';
    }
    if (number > 9999) {
        number = Math.round(number / 1000);
        return (number / 10) + '万';
    }
    return number;
}

/**
 * 取整，仅保留一位有效数值
 * 9523 -> 9000
 *
 * @param {number} number
 */
export function roundNumber(number) {
    number = parseInt(number, 10);
    let length = number.toString().length;
    let tail = Math.pow(10, length - 1);
    return Math.floor(number / tail) * tail;
}

/**
 * 获取object的类型
 *
 * @param {obj} object
 * @return {string} 当前obj的数据类型，如果：Array String Boolean Object Number
 */
export function getType(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1);
}

/**
 * 是否为数组类型
 *
 * @param {obj} object
 * @return {boolean}
 */
export function isArray(obj) {
    return getType(obj) === 'Array';
}
