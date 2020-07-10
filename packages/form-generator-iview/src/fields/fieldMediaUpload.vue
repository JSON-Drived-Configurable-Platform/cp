<template>
    <div :class="classes">
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
            :show-upload-list="false"
            :type="field.subtype"
            :accept="computedAccept"
            :format="computedFormat"
            :max-size="field.maxSize"
            :default-file-list="defaultFileList"
            :on-format-error="onFormatError"
            :on-exceeded-size="onExceededSize"
            :on-success="onSuccess"
            :on-progress="onProgress"
            :size="size"
        >
            <Icon
                type="ios-cloud-upload"
                size="20"
                style="color: #3399ff"
            />
            <p v-html="tip" />
            <ul :class="fileListClass">
                <li
                    v-for="(file, index) in uploadFileList"
                    :key="index"
                    :class="fileListItemClass"
                >
                    <template v-if="file.status === 'finished'">
                        <img
                            v-if="isImage(file)"
                            :class="fileListItemMediaClass"
                            :src="file.url"
                            :alt="file.name"
                            @click="handleSmallMediaClick($event, index)"
                        >
                        <video
                            v-else
                            :class="fileListItemMediaClass"
                            :src="file.url"
                            @click="handleSmallMediaClick($event, index)"
                        />
                        <span
                            :class="fileListItemNameClass"
                            :title="file.name"
                        >{{ file.name }}</span>
                        <Poptip
                            v-if="!field.disabled"
                            :class="fileListItemEditClass"
                            title="编辑文件名称"
                            @click.native="handlePoptipClick"
                        >
                            <div slot="content">
                                <Input
                                    type="textarea"
                                    size="small"
                                    autosize
                                    :value="file.name"
                                    @input="handleFileNameInput($event, index)"
                                />
                            </div>
                            <Icon
                                :size="24"
                                style="color: #FFF"
                                type="ios-create-outline"
                            />
                        </Poptip>
                        <Icon
                            v-if="!field.disabled"
                            :class="fileListItemRemoveClass"
                            :size="24"
                            style="color: #FFF"
                            type="ios-trash-outline"
                            @click="handleRemove($event, file)"
                        />
                    </template>
                    <template v-else>
                        <Progress :percent="file.percentage" hide-info />
                    </template>
                </li>
            </ul>
        </Upload>
        <Modal
            v-model="previewModal.open"
            title="预览"
            draggable
            footer-hide
            mask-closable
        >
            <img
                v-if="isImage(previewFile)"
                :src="previewFile.url"
                :alt="previewFile.name"
                :class="previewModalMediaClasses"
            >
            <video
                v-else
                :src="previewFile.url"
                :class="previewModalMediaClasses"
                controls
            />
        </Modal>
    </div>
</template>
<script>

import {classPrefix} from '../utils/const';
import {getValue} from '../utils/processValue';

const defaultImgExtensions = ['gif', 'jpg', 'jpeg', 'png'];
const defaultVideoExtensions = ['mp4', '.webm'];
export default {
    inject: ['FormInstance'],
    // props may from imgUpload or videoUpload
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
        accept: {
            type: String,
            default: 'image/gif, image/jpeg, image/png, video/mp4'
        },
        format: {
            type: Array,
            default() {
                return [...defaultImgExtensions, ...defaultVideoExtensions];
            }
        }
    },
    data() {
        return {
            previewModal: {
                open: false,
                file: {}
            },
            uploadFileList: [],
            defaultFileList: [],
            loading: false,
            uploader: null
        };
    },
    computed: {
        classes() {
            return `${classPrefix}-mediaupload`;
        },
        fileListClass() {
            return `${this.classes}-file-list`;
        },
        fileListItemClass() {
            return `${this.classes}-file-list-item`;
        },
        fileListItemMediaClass() {
            return `${this.classes}-file-list-item-media`;
        },
        fileListItemNameClass() {
            return `${this.classes}-file-list-item-name`;
        },
        fileListItemRemoveClass() {
            return `${this.classes}-file-list-item-remove`;
        },
        fileListItemEditClass() {
            return `${this.classes}-file-list-item-edit`;
        },
        previewModalMediaClasses() {
            return `${this.classes}-modal-preview-media`;
        },
        previewFile() {
            return this.previewModal.file || {};
        },
        computedAccept() {
            return this.field.accept || this.accept;
        },
        computedFormat() {
            return this.field.format || this.format;
        },
        tip() {
            return this.field.tip || '点击或者拖拽文件即可上传';
        },
        suffixAbled() {
            return this.field.suffix || false;
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
    },
    methods: {
        suffix(str) {
            let arr = str.split('.');
            arr.pop();
            return arr.join('.');
        },
        onRemove(file) {
            const fileList = this.uploader.fileList;
            this.uploader.fileList.splice(fileList.indexOf(file), 1);
            this.uploadFileList = this.uploader.fileList.slice();
            this.handleChange();
        },
        onProgress(event, file, fileList) {
            this.uploadFileList = fileList;
        },
        onSuccess({data = {}}, file) {
            const {url} = data;
            if (url) {
                // this.$Message.info('上传成功!');
                file.url = url;
                file.name = this.suffixAbled ? this.suffix(file.name) : file.name;
                this.uploadFileList = this.uploader.fileList;
                this.handleChange();
            }
            else {
                this.onRemove(file);
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
        handleChange() {
            this.$emit('on-change', this.field.model, this.uploadFileList, null, this.field);
        },
        handleRemove(e, file) {
            if (e) {
                e.stopPropagation();
            }
            this.onRemove(file);
        },
        handlePoptipClick(e) {
            if (e) {
                e.stopPropagation();
            }
        },
        handleFileNameInput(value, index) {
            const list = this.uploadFileList.map((file, i) => {
                if (index !== i) {
                    return file;
                }
                else {
                    return {
                        ...file,
                        name: value
                    };
                }
            });
            this.uploadFileList = list;
            this.handleChange();
        },
        handleSmallMediaClick(e, index) {
            if (e) {
                e.stopPropagation();
            }
            this.previewModal = {
                open: true,
                file: this.uploadFileList[index]
            };
        },
        // 通过URL和
        isImage({name = '', url = ''}) {
            return defaultImgExtensions.some(item => {
                const reg = new RegExp(`.${item}$`);
                return reg.test(name) || reg.test(url);
            });
        },
    }
};
</script>
