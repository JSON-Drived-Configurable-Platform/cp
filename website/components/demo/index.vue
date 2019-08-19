<style lang="less">
    @import './index.less';
</style>
<template>
    <Row :id="title_link" class="example" :class="{'example-vertical': isVertical}">
        <i-col class="example-demo" :span="isVertical ? 24 : 10">
            <div class="example-case">
                <slot name="demo" />
            </div>
            <header class="example-header">
                <span>
                    {{ title }}
                    <a :href="`#${title_link}`" :data-title="title">#</a>
                </span>
            </header>
            <div class="example-desc">
                <slot name="desc" />
            </div>
        </i-col>
        <div class="example-split" />
        <i-col class="example-code" :style="codeHeight" :span="isVertical ? 24 : 14">
            <div :style="style">
                <slot name="code" />
            </div>
            <div v-if="showMore" class="example-code-more" @click="showCode = !showCode">
                <Icon v-show="!showCode" type="ios-arrow-down" />
                <Icon v-show="showCode" type="ios-arrow-up" />
                <i-button v-show="isCodeHide && !showCode" type="text">
                    <template v-if="lang === 'zh-CN'">显示代码</template>
                    <template v-else>Show Code</template>
                </i-button>
            </div>
        </i-col>
    </Row>
</template>
<script>

import pinyinUtil from '../../libs/pinyin/pinyinUtil';

export default {
    name: 'Demo',
    props: {
        title: {
            type: String,
            default: ''
        },
        vertical: {
            type: Boolean,
            default: false
        },
        hideCode: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            showCode: false,
            showMore: true,
            demo_height: 0,
            code_height: 0,
            ready: false,
            lang: this.$lang
        };
    },
    computed: {
        isCodeHide () {
            return this.hideCode;
        },
        isVertical () {
            return this.vertical;
        },
        // settingCode () {
        //     return this.app.settingData.code;
        // },
        codeHeight () {
            let style = {};

            if (this.ready) {
                if (this.showCode) {
                    style.height = `${this.code_height}px`;
                } else {
                    style.height = `${this.demo_height}px`;
                }
            }

            return style;
        },
        style () {
            let style = {
                opacity: 1
            };
            if (this.isCodeHide && !this.showCode) {
                style.opacity = 0;
            }
            return style;
        },
        title_link () {
            const title = pinyinUtil.getFirstLetter(this.title);
            return title.replace(/\s/g, '_');
        }
    },
    watch: {
        settingCode () {
            this.showCode = false;
            this.showMore = true;
            this.ready = false;
            this.init();
        }
    },
    mounted () {
        this.init();
    },
    methods: {
        init () {
            this.$nextTick(() => {
                const demo_height = this.$children[0].$children[0].$el.clientHeight;
                const code_height = this.$children[0].$children[1].$el.clientHeight + 20;

                this.code_height = code_height;

                if ((code_height <= demo_height) && !this.isCodeHide) {
                    this.showMore = false;
                }

                this.demo_height = this.isCodeHide ? 30 : demo_height;
                this.ready = true;
            });
        }
    }
};
</script>
