<template>
    <div class="combined-forms-demo">
        <div
            v-for="(item, index) in config"
            :key="index"
            class="combined-forms-demo-item"
        >
            <component
                :is="item.type"
                :forms="item.forms"
                :model="model"
                :title="item.title"
                :params-container="paramsContainer"
                @on-form-submit="handleFormSubmit"
                @on-field-change="handleFieldChange"
            />
        </div>
    </div>
</template>
<script>
import {NomalFormsConfig, TakeOverFromsConfig, WizardFromsConfig, TabFromsConfig} from './config';

const config = [
    NomalFormsConfig,
    TabFromsConfig,
    TakeOverFromsConfig,
    WizardFromsConfig,
];

import NormalFormGenerator from './components/NormalFormGenerator.vue';
import TakeOverFormGenerator from './components/TakeOverFormGenerator.vue';
import WizardFormGenerator from './components/WizardFormGenerator.vue';
import TabFormGenerator from './components/TabFormGenerator.vue';
export default {
    components: {
        Normal: NormalFormGenerator,
        TakeOver: TakeOverFormGenerator,
        Wizard: WizardFormGenerator,
        Tab: TabFormGenerator
    },
    data() {
        return {
            config,
            model: {},
            paramsContainer: {}
        };
    },
    methods: {
        handleFieldChange(model, value) {
            this.$set(this.model, model, value);
        },

        handleFormSubmit(data) {
            console.log(data);
        }
    }
};
</script>
<style lang="less">
.combined-forms-demo {
    margin: 20px auto;
    width: 60%;

    &-item {
        margin: 30px auto;
    }
}
</style>
