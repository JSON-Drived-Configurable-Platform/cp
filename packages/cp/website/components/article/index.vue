<style lang="less">
    @import "./index.less";
</style>
<template>
    <div>
        <div class="wrapper">
            <div class="wrapper-container">
                <Row>
                    <i-col span="21">
                        <div class="wrapper-content">
                            <slot />
                        </div>
                    </i-col>
                    <i-col span="3">
                        <Affix :offset-top="75">
                            <div
                                v-if="list.length"
                                class="catalogue"
                            >
                                <Anchor show-ink>
                                    <AnchorLink
                                        v-for="item in list"
                                        :key="item.path"
                                        :href="'#' + item.path"
                                        :title="item.title"
                                    />
                                </Anchor>
                            </div>
                        </Affix>
                    </i-col>
                </Row>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            list: [],
        };
    },
    mounted () {
        let list = [];
        const headers = this.$slots.default[0].elm.querySelectorAll('.anchor');
        for (let i = 0; i < headers.length; i++) {
            const title = headers[i].querySelectorAll('h2')[0];
            if (title) {
                const title_name = title.innerHTML;
                const path = headers[i].querySelectorAll('h2')[0].getAttribute('id');
                list.push({
                    title: title_name,
                    path: path
                });
            }
        }

        const examples = this.$slots.default[0].elm.querySelectorAll('.example');
        // 有示例时，显示示例的目录，没有，显示标题为目录
        for (let i = 0; i < examples.length; i++) {
            const path = examples[i].querySelectorAll('header span a')[0].getAttribute('href').replace('#', '');
            const title = examples[i].querySelectorAll('header span a')[0].getAttribute('data-title').replace('#', '');
            list.push({
                title: title,
                path: path
            });
        }

        this.list = list;
    },
    methods: {
        // 控制锚点跳转
        handleClickLink (id) {
            const top = document.getElementById(id).offsetTop;
            window.location.hash = id;
            let scroll_top = top + 15;
            if (id === 'API') scroll_top -= 150;
            window.scrollTo(0, scroll_top);
        }
    },
};
</script>
