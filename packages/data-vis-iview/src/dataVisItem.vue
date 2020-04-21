<template>
    <div class="">
        <component
            :is="getFieldCom(chart.type)"
            :chart="chart"
            :params-container="paramsContainer"
            :class="chartBoxClasses"
            :api-base="apiBase"
            :request-interceptor="requestInterceptor"
        />
    </div>
</template>
<script>
import chartComponents from './utils/fieldsLoader.js';
import {classPrifix} from './utils/const';
export default {
    name: 'DataVisItem',
    components: {
        ...chartComponents
    },
    props: {
        chart: {
            type: Object,
            required: true,
            default() {
                return {};
            }
        },
        paramsContainer: {
            type: Object,
            default() {
                return {};
            }
        },
        requestInterceptor: {
            type: [Function, null],
            default: null
        },
        apiBase: {
            type: String,
            default: ''
        },
    },
    data() {
        return {
            index: 0,
            model: {},
            options: {
                inline: true,
                size: 'small'
            }
        };
    },

    computed: {
        classes() {
            return `${classPrifix}-item`;
        },
        chartBoxClasses() {
            return `${this.classes}-chart-box`;
        }
    },
    methods: {
        getFieldCom(comType) {
            return `chart-${comType}`;
        }
    }
};
</script>
