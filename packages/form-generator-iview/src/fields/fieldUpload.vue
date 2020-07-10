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
        :show-upload-list="field.showUploadList"
        :type="field.subtype"
        :accept="field.accept"
        :format="field.format"
        :max-size="field.maxSize"
        :default-file-list="[]"
        :on-format-error="onFormatError"
        :on-exceeded-size="onExceededSize"
        :on-success="onSuccess"
        :on-remove="onRemove"
        :on-preview="onPreview"
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
import {getValue} from '../utils/processValue';

export default {
    inject: ['FormInstance'],
    props: {
        field: {
            type: Object,
            required: true
        },
        size: {
            type: String,
            default() {
                return 'default';
            }
        },
    },
    data() {
        return {
            defaultFileList: [],
            uploadFileList: [],
            loading: false,
            uploader: null,
            keyList: []
        };
    },
    computed: {
        tip() {
            return this.field.tip || '点击或者拖拽文件即可上传';
        },
        value() {
            let value = getValue({
                originModel: this.FormInstance.model,
                model: this.field.model
            }) || [];
            return value.map(item => {
                item.status = 'finished';
                return item;
            });
        },
        needDealUploadData() {
            return this.field.needDealUploadData || false;
        },
        accessKey() {
            return this.field.accessKey || '';
        }
    },
    watch: {
        value(value) {
            this.uploadFileList = value;
            if (this.uploader) {
                this.uploader.fileList = this.uploadFileList;
            }
        },
    },
    mounted() {
        this.uploader = this.$refs.upload || this.$refs.mediaUpload.$refs.upload;
        this.uploader.fileList = this.value;
        this.uploadFileList = this.uploader.fileList;
        // this.uploader.fileList = this.uploadFileList;
    },
    methods: {
        handleChange() {
            let ajaxData = '';
            this.needDealUploadData ? ajaxData = this.keyList : ajaxData = this.uploadFileList;
            this.$emit('on-change', this.field.model, ajaxData, null, this.field);
        },
        onSuccess({data = {}}, file) {
            const url = data[this.field.apiKey || 'url'];
            if (url) {
                this.$Message.info('上传成功!');
                file.url = url;
                this.uploadFileList = this.uploader.fileList.slice();
                this.dealExtraParams();
                this.handleChange();
            }
            else {
                // 上传失败的文件不在页面上展示
                this.uploader.fileList.map((item, i) => {
                    if (item.name === file.name) {
                        this.uploader.fileList.splice(i, 1);
                    }
                });
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
        },
        onRemove() {
            this.uploadFileList = this.uploader.fileList.slice();
            this.dealExtraParams();
            this.handleChange();
        },
        onPreview(file) {
            this.$emit('on-preview', this.field.model, file);
        },
        dealExtraParams() {
            if (this.needDealUploadData) {
                this.keyList = this.uploadFileList.map(key => {
                    let temp = {};
                    this.accessKey.map(item => {
                        if(key[item]) {
                            this.$set(temp, item, key[item]);
                        } else if (key.response.data[item]){
                            this.$set(temp, item, key.response.data[item]);
                        }
                    });
                    return temp;
                });
            }
        }
    }
};
</script>
