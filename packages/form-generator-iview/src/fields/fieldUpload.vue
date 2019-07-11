<template>
    <Upload
        ref="upload"
        :action="field.action"
        :headers="field.headers"
        :multiple="field.multiple"
        :paste="field.paste"
        :disabled="field.disabled"
        :data="field.data"
        :name="field.name"
        :with-credentials="field.withCredentials"
        :show-upload-list="defaultFileList"
        :type="field.subType"
        :accept="field.accept"
        :format="field.format"
        :max-size="field.maxSize"
        :default-file-list="[]"
        :on-format-error="onFormatError"
        :on-exceeded-size="onExceededSize"
        :on-success="onSuccess"
        :on-remove="onRemove"
        :size="size"
    >
        <Icon
            type="ios-cloud-upload"
            size="52"
            style="color: #3399ff"
        />
        <p v-html="tip" />
    </Upload>
</template>
<script>

import upload from '../mixins/upload';
export default {
    mixins: [upload],
};
</script>
