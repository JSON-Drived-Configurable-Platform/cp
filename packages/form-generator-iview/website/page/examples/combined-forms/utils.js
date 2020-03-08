import schema from 'async-validator';

/**
 * @param {Object} model 数据源
 * @param {Object} showOnConfig 展示的校验配置
 * @param {Object} hiddenOnConfig 隐藏的校验配置
 * @return {Boolean} 是否展示
 **/
export function showValidate(model, showOnConfig, hiddenOnConfig) {
    let show = true;
    if (hiddenOnConfig) {
        let descriptor = hiddenOnConfig;
        let validator = new schema(descriptor);
        validator.validate(model, (errors) => {
            if(!errors) {
                show = false;
            }
        });
    }
    if (showOnConfig) {
        let descriptor = showOnConfig;
        let validator = new schema(descriptor);
        validator.validate(model, (errors) => {
            if(errors) {
                show = false;
            }
        });
    }
    // console.log(field.model, valid, model);
    return show;
}
