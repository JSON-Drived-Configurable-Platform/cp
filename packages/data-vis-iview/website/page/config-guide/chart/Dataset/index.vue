<template>
    <i-article>
        <article>
            <h1>Dataset图</h1>
            <inAnchor title="概述" h2 />
            <p>折线图是用折线将各个数据点标志连接起来的图表，用于展现数据的变化趋势。</p>
        </article>
    </i-article>
</template>

<script>
import iArticle from 'website/components/article';
import inAnchor from 'website/components/anchor';
// import iCode from 'website/components/code';
// import Demo from 'website/components/Demo';

export default {
    components: {
        iArticle,
        inAnchor,
        // iCode,
        // Demo
    },
    data() {
        return {
            code: {}
        };
    },
    methods: {
        handleFieldChange(model, value) {
            // eslint-disable-next-line no-console
            console.log(model, value);
        }
    }
};
</script>
