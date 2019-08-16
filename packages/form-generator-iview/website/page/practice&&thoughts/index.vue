<template>
    <i-article>
        <article>
            <h1>FormGeneratorIView的一些思考与实践</h1>
        </article>
    </i-article>
</template>

<script>
import iArticle from '../../components/article';
// import inAnchor from '../../components/anchor';
// import iCode from '../../components/code';
// import Demo from '../../components/Demo';
import Code from '../../code/guide';
export default {
    components: {
        iArticle,
        // inAnchor,
        // iCode,
        // Demo
    },
    data() {
        return {
            code: Code
        };
    }
};
</script>

<style>

</style>
