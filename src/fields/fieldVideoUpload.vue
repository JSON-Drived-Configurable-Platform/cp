<template>
    <media-upload
        ref="mediaUpload"
        :field="field"
        :size="size"
        :class="classes"
        :accept="computedAccept"
        :format="computedFormat"
    />
</template>

<script>
import {classPrifix} from '../utils/const';
import mediaUpload from './fieldMediaUpload';
export default {
    components: {
        mediaUpload
    },
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
            // See https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Containers#Browser_compatibility
            // See https://developer.mozilla.org/en-US/docs/Web/HTML/Supported_media_formats#Browser_compatibility
            accept: 'video/mp4, audio/webm',
            format: ['mp4', '.webm'],
        };
    },
    computed: {
        classes() {
            return `${classPrifix}-${this.field.type.toLowerCase()}`;
        },
        computedAccept() {
            return this.field.accept || this.accept;
        },
        computedFormat() {
            return this.field.format || this.format;
        }
    }
};
</script>

<style>

</style>
