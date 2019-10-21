<template>
    <div>
        <FormGenerator
            :fields="fields"
            :model="model"
            :options="model"
            @on-button-event="handleButtonEvent"
        />
    </div>
</template>
<script>
export default {
    props: {
        fields: {
            type: Array,
            required: true
        },
        options: {
            type: Object,
            default(){
                return {};
            }
        },
        model: {
            type: Object,
            default() {
                return {};
            }
        },
        index: Number
    },
    methods: {
        handleButtonEvent($event) {
            switch ($event.name) {
                case 'save':
                    this.$emit('on-save-event', $event, this.index, this.model);
                    break;
                case 'cancel':
                    this.$emit('on-cancel-event', $event, this.index);
                    break;
                default:
                    this.$emit('on-button-event', $event, this.index, this.model);
                    break;
            }
        },
    }
};
</script>
