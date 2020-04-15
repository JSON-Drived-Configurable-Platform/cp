<template>
    <div>
        <Row class="container">
            <div class="container">
                <FormGenerator
                    ref="FormGenerator"
                    :fields="fields"
                    :model="model"
                    :options="options"
                    @on-field-change="handleChange"
                    @on-field-preview="handlePreview"
                    :params-container="paramsContainer"
                    @on-button-event="handleButtonEvent"
                    @on-label-tip-click="handleLabelEvent"
                    @on-label-tip-hoverIn="handleMouseEnterEvent"
                    @on-label-tip-hoverOut="handleMouseLeaveEvent"
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
            model,
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
            setTimeout(() => {
                this.$set(this.paramsContainer, 'paramsContainerTest', 'xxx-2');
            }, 5000);
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
        handleLabelEvent(field) {
            this.fields[1].labelTips.content.ifShow = true;
        },
        handleMouseEnterEvent(field) {
            this.fields[4].labelTips.content.ifShow = true;
        },
        handleMouseLeaveEvent(field) {
            console.log(field);
            this.fields[4].labelTips.content.ifShow = false;
        }
    }
};
</script>
<style lang="less">
    .container {
        margin: 10px 40px;
        width: 90%;
        .ivu-icon-ios-help-circle-outline {
            position: absolute;
            top: 4px;
            left: -80px;
        }
        .ivu-icon-ios-alert-outline {
            position: absolute;
            top: 5px;
            left: -30px;
        }
        .example {
            pointer-events: none;
        }
    }
</style>
