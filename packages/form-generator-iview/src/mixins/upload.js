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
        size: {
            type: String,
            default() {
                return 'default';
            }
        },
    },
    data() {
        return {
            fileList: this.formModel[this.field.model],
            loading: false
        };
    },
    computed: {
        tip() {
            return this.field.tip || '点击或者拖拽文件即可上传';
        }
    },
    methods: {
        handleChange() {
            this.$emit('on-change', this.field.model, this.fileList, null, this.field);
        },
        onSuccess({data = {}}, file) {
            const {url} = data;
            if (url) {
                this.$Message.info('上传成功!');
                const fileList = this.fileList || [];
                fileList.push({
                    ...file,
                    ...data
                });
                this.fileList = fileList.slice();
                this.handleChange();
            }
            else {
                this.$Message.error('上传失败!');
            }
        },
        onRemove(file, fileList) {
            this.fileList = fileList.slice();
            this.handleChange();
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
