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
                    @on-button-event="handleButtonEvent"
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
        handleChange(model, value) {
            console.log(model, value);
        },
        handleButtonEvent(e) {
            console.log(e);
        }
    }
};
</script>
<style lang="less" scoped>
    .container {
        margin: 10px 40px;
        width: 90%;
    }
</style>
