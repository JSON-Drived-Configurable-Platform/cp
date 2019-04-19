<template>
    <div class="container">
        <FormGenerator
            :fields="fields"
            :model="model"
            :options="options"
        />
    </div>
</template>

<script>
    import FormGenerator from '../src/index';
    export default {
        components: {
            FormGenerator
        },
        data() {
            return {
                model: {
                    name: 'wangbing',
                    'name-forbidden': 'wangbing'
                },
                options: {
                    labelWidth: 100
                },
                fields: [
                    {
                        type: 'Input',
                        label: '用户名',
                        model: 'name',
                        placeholder: '请输入用户名'
                    },
                    {
                        type: 'Input',
                        label: '用户名',
                        model: 'name',
                        placeholder: '请输入用户名',
                        options: [

                        ]
                    },
                    {
                        type: 'Input',
                        label: '用户名-禁用',
                        model: 'name-forbidden',
                        readonly: true,
                        disabled: true,
                        placeholder: '请输入用户名'
                    }
                ]
            }
        },
        mounted: function() {

        },
        beforeDestroy: function() {

        },
        methods: {

        }
    }
</script>
<style lang="less" scoped>
    .container {
        padding: 30px
    }
</style>
