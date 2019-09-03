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
                            :class="fileListItemRemoveClass"
                            :size="24"
                            style="color: #FFF"
                            type="ios-trash-outline"
                            @click="handleRemove($event, file)"
                        />
                    </template>
                    <template v-else>
                        <Progress :percent="item.percentage" hide-info />
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

import upload from '../mixins/upload';
import {classPrifix} from '../utils/const';
const defaultImgExtensions = ['gif', 'jpg', 'jpeg', 'png'];
const defaultVideoExtensions = ['mp4', '.webm'];
export default {
    mixins: [upload],
    // props may from imgUpload or videoUpload
    props: {
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
            }
        };
    },
    computed: {
        classes() {
            return `${classPrifix}-mediaupload`;
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
        }
    },
    mounted() {
        this.uploader = this.uploader;
    },
    methods: {
        // 通过URL和
        isImage({name = '', url = ''}) {
            return defaultImgExtensions.some(item => {
                const reg = new RegExp(`.${item}$`);
                return reg.test(name) || reg.test(url);
            });
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
        onRemove(file) {
            const fileList = this.uploader.fileList;
            this.uploader.fileList.splice(fileList.indexOf(file), 1);
            this.uploadFileList = this.uploader.fileList.slice();
            this.handleChange();
        },
    }
};
</script>
