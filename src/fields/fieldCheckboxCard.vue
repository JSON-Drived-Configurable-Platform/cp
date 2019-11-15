<template>
    <div>
        <ul :class="checkboxCardGroupClasses">
            <li v-for="(item, index) in field.options"
                :key="index"
                :class="checkboxCardItemClasses"
                @click="handleClick(item)"
            >
                <Card
                    style="width:320px"
                >
                    <Checkbox
                        :class="checkboxCardClasses"
                        v-if="item.showCheckBox !== false"
                        :disabled="item.disabled || false"
                    >
                        {{ '' }}
                    </Checkbox>
                    <dl v-if="item.header || false" v-html="item.header">
                        {{item.header}}
                    </dl>
                    <img
                        v-if="item.type === 'image'"
                        :src="item.url"
                        :alt="item.label"
                        width="100%"
                    >
                    <dl v-if="item.footer || false" v-html="item.footer">
                        {{item.footer}}
                    </dl>
                    <div v-if="item.type === 'video'">
                        <video controls>
                            <source :src="item.url">
                        </video>
                    </div>
                </Card>
            </li>
        </ul>
    </div>
</template>
<script>
import {classPrefix} from '../utils/const';
import getOptions from '../mixins/getOptions';
export default {
    inject: ['form'],
    mixins: [getOptions],
    props: {
        field: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            loading: false,
            options: []
        };
    },
    computed: {
        classes() {
            return `${classPrefix}-${this.field.type.toLowerCase()}`;
        },
        checkboxCardGroupClasses() {
            return `${this.classes}-group`;
        },
        checkboxCardItemClasses() {
            return `${this.classes}-group-item`;
        },
        checkboxCardClasses() {
            return `${this.classes}-group-item-checkbox`;
        }
    },
    mounted() {
        // console.log(this.field);
    },
    methods: {
        handleClick(item) {
            this.$emit('on-click', item);
        }
    }
};
</script>
