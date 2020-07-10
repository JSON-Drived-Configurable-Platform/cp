<template>
    <div v-if="loading" :class="loadingClasses">
        <Spin :class="loadingSpinClasses" :size="size" />
    </div>
    <Steps
        v-else
        :current="value"
        :status="field.status"
        :size="field.size"
        :direction="field.direction"
    >
        <Step
            v-for="item in computedOptions"
            :key="item.value"
            :title="item.title"
            :content="item.content"
            :status="item.status"
            :icon="item.icon"
        />
    </Steps>
</template>
<script>
import {classPrefix} from '../utils/const';
import getOptions from '../mixins/getOptions';
import {getValue} from '../utils/processValue';

export default {
    inject: ['FormInstance'],
    mixins: [getOptions],
    props: {
        field: {
            type: Object,
            required: true
        },
        size: {
            type: String,
            default() {
                return 'default';
            }
        },
    },
    data() {
        return {
            loading: false,
            options: [],
        };
    },
    computed: {
        classes() {
            return `${classPrefix}-${this.field.type.toLowerCase()}`;
        },
        loadingClasses() {
            return `${this.classes}-loading`;
        },
        loadingSpinClasses() {
            return `${this.classes}-loading-spin`;
        },
        computedOptions() {
            return this.options.length > 0 ? this.options : (Array.isArray(this.field.options) ? this.field.options : []);
        },
        optionsApi() {
            return !Array.isArray(this.field.options) ? this.field.options : '';
        },
        value() {
            return getValue({
                originModel: this.FormInstance.model,
                model: this.field.model
            }) || 0;
        }
    },
    methods: {
        remoteMethod() {
            if (!this.field.api && !this.optionsApi) {
                return;
            }
            this.getRemoteOptions();
        }
    }
};
</script>
