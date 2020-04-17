<template>
    <div :class="classes">
        <h3
            v-if="tip.title || title"
            :class="headerClasses"
        >
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
                <DataVisGroup
                    v-for="(item, index) in row"
                    :key="index"
                    :style="getItemBoxStyle(row)"
                    :charts="item.charts || item.chartGroup"
                    :conditions="item.conditions"
                    :display="item.display"
                    :params-container="paramsContainer"
                    :api-base="apiBase"
                    :request-interceptor="requestInterceptor"
                />
            </div>
        </div>
    </div>
</template>
<script>
import DataVisGroup from './dataVisGroup';
import {classPrifix} from './utils/const';
export default {
    name: 'DataVis',
    components: {
        DataVisGroup
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
                width: ((100 - 2 * row.length) / row.length) + '%',
                height: 'auto'
            };
        }
    }
};
</script>
