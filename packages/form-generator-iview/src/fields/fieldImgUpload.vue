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
            :accept="field.accept"
            :format="field.format"
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
                    <img
                        :class="fileListItemImgClass"
                        :src="file.url"
                        :alt="file.name"
                        @click="handleSmallImgClick($event, index)"
                    >
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
                </li>
            </ul>
        </Upload>
        <Modal
            v-model="previewModal.open"
            title="大图预览"
            draggable
            footer-hide
        >
            <img
                v-if="previewModal.open"
                :src="previewFile.url"
                style="width: 100%"
            >
        </Modal>
    </div>
</template>
<script>

import upload from '../mixins/upload';
import {classPrifix} from '../utils/const';
export default {
    mixins: [upload],
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
            return `${classPrifix}-${this.field.type.toLowerCase()}`;
        },
        fileListClass() {
            return `${this.classes}-file-list`;
        },
        fileListItemClass() {
            return `${this.classes}-file-list-item`;
        },
        fileListItemImgClass() {
            return `${this.classes}-file-list-item-img`;
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
        previewFile() {
            return this.previewModal.file || {};
        }
    },
    methods: {
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
        handleSmallImgClick(e, index) {
            if (e) {
                e.stopPropagation();
            }
            this.previewModal = {
                open: true,
                file: this.uploadFileList[index]
            };
        },
        onRemove(file) {
            const fileList = this.$refs.upload.fileList;
            this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
            this.uploadFileList = this.$refs.upload.fileList.slice();
            this.handleChange();
        },
    }
};
</script>
