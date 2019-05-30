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
        :on-format-error="onFormatError"
        :on-exceeded-size="onExceededSize"
        :on-success="onSuccess"
        :default-file-list="formModel[field.model]"
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
        },
        onSuccess({data = {}}) {
            const {url} = data;
            if (url) {
                this.$Message.info('上传成功!');
            }
            else {
                this.$Message.error('上传失败!');
            }
        },
        onFormatError() {
            this.$Message.error({
                content: `上传文件格式需为:${this.field.accept},且后缀名为:${this.field.format}`,
                duration: 2,
            });
        },
        onExceededSize() {
            this.$Message.error({
                content: `上传文件大小不能超过:${this.field.maxSize / 1024}MB`,
                duration: 2,
            });
        }
    }
};
</script>
