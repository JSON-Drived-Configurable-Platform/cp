<template>
    <Upload
        :action="field.action"
        :headers="field.headers"
        :multiple="field.multiple"
        :paste="field.paste"
        :disabled="field.disabled"
        :data="field.data"
        :name="field.name"
        :with-credentials="field.withCredentials"
        :show-upload-list="field.showUploadList"
        :type="field.subType"
        :accept="field.accept"
        :format="field.format"
        :max-size="field.maxSize"
    >
        <Button icon="ios-cloud-upload-outline">
            上传
        </Button>
    </Upload>
</template>
<script>

export default {
    props: {
        field: {
            type: Object,
            required: true
        },
        formModel: {
            type: Object,
            required: true,
            default() {
                return {};
            }
        },
    },
    data() {
        return {
            loading: false
        };
    },
    methods: {
        handleChange(value) {
            this.$emit('on-change', this.field.model, value, null, this.field);
        }
    }
};
</script>
