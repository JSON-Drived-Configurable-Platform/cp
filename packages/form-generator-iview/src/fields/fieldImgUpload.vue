<template>
    <media-upload
        ref="mediaUpload"
        :field="field"
        :size="size"
        :class="classes"
        :accept="computedAccept"
        :format="computedFormat"
        @on-change="handleChange"
    />
</template>

<script>
import {classPrefix} from '../utils/const';
import mediaUpload from './fieldMediaUpload';
export default {
    components: {
        mediaUpload
    },
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
            // See https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types#Image_types
            accept: 'image/gif, image/jpeg, image/png, image/apng, image/bmp, image/x-icon, image/svg+xml, image/tiff, image/webp',
            format: ['gif', 'jpg', 'jpeg', 'png', '.apng', '.bmp', '.ico', '.cur', '.svg', '.tif', '.tiff', '.webp'],
        };
    },
    computed: {
        classes() {
            return `${classPrefix}-${this.field.type.toLowerCase()}`;
        },
        computedAccept() {
            return this.field.accept || this.accept;
        },
        computedFormat() {
            return this.field.format || this.format;
        }
    },
    methods: {
        handleChange(model, value) {
            this.$emit('on-change', model, value, null, this.field);
        }
    }
};
</script>

<style>

</style>
