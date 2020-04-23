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
                paramsContainerTest: 'xxx',
                isShow: 0,
                isShowTwo: 1,
                isHidden: 2,
                isHiddenTwo: 1

            }
        };
    },
    mounted() {
        // ???
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
