<template>
    <div :class="classes">
        <h3 :class="headerClasses">
            {{ title }}
            <Poptip
                v-if="tip.title"
                :class="tipClasses"
                :title="tip.title"
                placement="left-start"
            >
                <Icon
                    type="md-help-circle"
                />
                <div slot="content">
                    <p v-html="tip.content" />
                </div>
            </Poptip>
        </h3>
        <Divider
            v-if="title || tip.title"
            dashed
            size="small"
        />
        <div
            v-for="(row, rowIndex) in rows"
            :key="rowIndex"
            :class="rowClasses"
        >
            <div :class="itemBoxClasses">
                <chartItem
                    v-for="(item, index) in row"
                    :key="index"
                    :style="getItemBoxStyle(row)"
                    :chart-group="item"
                    :params-container="paramsContainer"
                    :api-base="apiBase"
                    :request-interceptor="requestInterceptor"
                />
            </div>
        </div>
    </div>
</template>
<script>
import chartItem from './chartItem';
import {classPrifix} from './utils/const';
export default {
    name: 'DataVis',
    components: {
        chartItem
    },
    props: {
        requestInterceptor: {
            type: [Function, null],
            default: null
        },
        paramsContainer: {
            type: Object,
            default() {
                return {};
            }
        },
        config: {
            type: Object,
            required: true,
            default() {
                return {};
            }
        },
        apiBase: {
            type: String,
            default: ''
        }
    },
    data () {
        return {};
    },

    computed: {
        classes() {
            return classPrifix;
        },
        tipClasses() {
            return `${classPrifix}-tip`;
        },
        headerClasses() {
            return `${classPrifix}-header`;
        },
        rowClasses() {
            return `${classPrifix}-row`;
        },
        itemBoxClasses() {
            return `${classPrifix}-items-box`;
        },
        itemStyle() {
            return {
                marginRight: '30px',
                float: 'left'
            };
        },
        tip() {
            let tip = this.config.tip || {};
            return {
                title: tip.title || '',
                content: tip.content || '',
            };
        },
        title() {
            return this.config.title || '';
        },
        rows() {
            return this.config.rows || [];
        }
    },
    methods: {
        getItemBoxStyle(row) {
            return {
                width: (100 / row.length - 3) + '%',
                float: 'left',
                height: 'auto'
            };
        }
    }
};
</script>
