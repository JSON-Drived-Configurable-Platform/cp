/**
 * @file: 处理各组件同步输入值及验证规则
 * @author: zhw(zhenghaiwang@baidu.com)
 * @Date: 2020-03-16 11:31:22
 * @Last Modified by: zhw
 * @Last Modified time: 2020-03-18 17:59:05
 */

export default {
    methods: {
        setMultistageValue({originModel, model, value}) {
            let path = [];
            if (model.indexOf('.') !== -1) {
                path = model.split('.');
            }
            let formModel = originModel;
            if (path.length) {
                while (path.length) {
                    if (!formModel[path[0]] && path.length !== 1) {
                        this.$set(formModel, path[0], {});
                    }
                    if (path.length === 1) {
                        this.$set(formModel, path[0], value);
                    }
                    formModel = formModel[path[0]];
                    path.shift();
                }
            } else {
                this.$set(formModel, model, value);
            }
            return formModel;
        },
        handleChangeExecuteSequence(e) {
            const value = e.target.value;
            this.setMultistageValue({
                originModel: this.form.model,
                model: this.field.model,
                value
            });
            this.emitEvent(e, value);
        },
        getValue(model) {
            let computeModel = this.form.model;
            let path = [];
            if (model.indexOf('.') !== -1) {
                path = model.split('.');
            } else {
                path.push(model);
            }
            while (path.length) {
                computeModel = computeModel[path[0]];
                path.shift();
            }
            return computeModel;
        },
        emitEvent(e, value) {
            this.$emit('on-change', this.field.model, value, e, this.field);
        }
    }
};
