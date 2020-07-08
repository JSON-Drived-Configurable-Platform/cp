export const isFunction =  function checkIsFunction(f) {
    return f && {}.toString.call(f) === '[object Function]';
};
