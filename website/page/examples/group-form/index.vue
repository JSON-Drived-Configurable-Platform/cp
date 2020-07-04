<template>
    <div>
        <Row class="container">
            <div class="container">
                <FormGenerator
                    ref="FormGenerator"
                    :fields="fields"
                    :model="model"
                    :options="options"
                    :params-container="paramsContainer"
                    @on-field-change="handleChange"
                    @on-field-preview="handlePreview"
                    @on-button-event="handleButtonEvent"
                    @on-label-tip-click="handleLabelEvent"
                    @on-label-tip-mouseIn="handleMouseEnterEvent"
                    @on-label-tip-mouseOut="handleMouseLeaveEvent"
                />
            </div>
        </Row>
    </div>
</template>

<script>
import {config, model, fields, options} from './config';
export default {
    data() {
        return {
            form: {
                config: JSON.stringify(config, null, 8)
            },
            model: {},
            fields,
            options,
            paramsContainer: {
                paramsContainerTest: 'xxx'
            }
        };
    },
    mounted() {
        setTimeout(() => {
            this.$set(this.paramsContainer, 'paramsContainerTest', 'xxx-1');
            this.model = model;
            // setTimeout(() => {
            //     this.$set(this.paramsContainer, 'paramsContainerTest', 'xxx-2');
            // }, 5000);
        }, 5000);
    },
    beforeDestroy() {

    },
    methods: {
        submit() {
            this.$refs.FormGenerator
                .submit().then(data => {
                    // eslint-disable-next-line no-console
                    console.log('submit', data);
                    const conditons = [];
                    Object.keys(data).map(key => {
                        conditons.push({
                            key,
                            value: data[key]
                        });
                    });
                    // eslint-disable-next-line no-console
                    console.log('submit', JSON.stringify(conditons));
                });
        },
        reset() {
            this.$refs.FormGenerator.reset();
        },
        handleChange(model, value, field) {
            console.log('handleChange', model, value, field);
        },
        handlePreview(model, value, field) {
            window.open(value.url, '_blank');
        },
        handleButtonEvent(e) {
            console.log('handleButtonEvent', e);
        },
        handleLabelEvent({field}) {
            if (field.labelTip && field.labelTip.content) {
                field.labelTip.content.ifShow = true;
            }
        },
        handleMouseEnterEvent({field}) {
            if (field.labelTip && field.labelTip.content) {
                field.labelTip.content.ifShow = true;
            }
        },
        handleMouseLeaveEvent({field}) {
            if (field.labelTip && field.labelTip.content) {
                field.labelTip.content.ifShow = false;
            }
        }
    }
};
</script>
<style lang="less">
    .container {
        margin: 10px 40px;
        width: 90%;

        .inputForbidden .ivu-icon-ios-help-circle-outline {
            left: -60px;
        }
        .ivu-icon-ios-help-circle-outline {
            position: absolute;
            top: 4px;
            left: -80px;
        }
        .example {
            width: 180px;
            padding: 5px;
            box-sizing: border-box;
            height: auto;
            line-height: 1;
            font-size: 12px;
            background: rgba(0, 0, 0, 0.7);
            color: #fff;
            pointer-events: none;
            position: absolute;
            top: -28px;
            left: -120px;
            z-index: 2;
            word-wrap: break-word;
            border-radius: 4px;
            border: 1px solid #333;
            span {
                display: block;
                width: 0;
                height: 0;
                border-width: 5px 5px 0;
                border-style: solid;
                border-color: rgba(0, 0, 0, 0.7) transparent transparent;
                position: absolute;
                bottom: -5px;
                left: 50%;/* 三角形居中显示 */
                margin-left: -5px;/* 三角形居中显示 */
            }
        }
    }
</style>
