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
            // See https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Containers#Browser_compatibility
            // See https://developer.mozilla.org/en-US/docs/Web/HTML/Supported_media_formats#Browser_compatibility
            accept: 'video/mp4, audio/webm',
            format: ['mp4', '.webm'],
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
