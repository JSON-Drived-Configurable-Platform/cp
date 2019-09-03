export default {
    inject: ['form'],
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
            uploader: null
        };
    },
    watch: {
        value(value) {
            this.uploadFileList = value;
            if (this.uploader) {
                this.uploader.fileList = this.uploadFileList;
            }
        }
    },
    computed: {
        tip() {
            return this.field.tip || '点击或者拖拽文件即可上传';
        },
        value() {
            let value = this.form.model[this.field.model] || [];
            return value.map(item => {
                item.status = 'finished';
                return item;
            });
        }
    },
    mounted() {
        this.uploader = this.$refs.upload || this.$refs.mediaUpload.$refs.upload;
        this.uploadFileList = this.value;
        this.uploader.fileList = this.uploadFileList;
    },
    methods: {
        handleChange() {
            this.$set(this.form.model, this.field.model, this.uploadFileList);
            this.$emit('on-change', this.field.model, this.uploadFileList, null, this.field);
        },
        onSuccess({data = {}}, file) {
            const {url} = data;
            if (url) {
                this.$Message.info('上传成功!');
                file.url = url;
                this.uploadFileList = this.uploader.fileList.slice();
                this.handleChange();
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
