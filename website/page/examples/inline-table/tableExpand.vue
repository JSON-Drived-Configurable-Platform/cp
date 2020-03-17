<template>
    <div>
        <Form
            ref="form"
            :model="model"
        >
            <FieldGenerator
                v-for="(field, i) in fields"
                :key="i"
                :field="field"
                @on-button-event="handleButtonEvent($event)"
            />
        </Form>
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
        editModel: {
            type: Object,
            default() {
                return {};
            }
        },
        index: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            model: {}
        };
    },
    created() {
        this.model = this.editModel;
    },
    methods: {
        handleButtonEvent($event) {
            switch ($event.name) {
                case 'save':
                    this.$refs.form.validate(valid => {
                        console.log(valid);
                        if (valid) {
                            this.$emit('on-save-event', $event, this.index, this.model);
                        }
                    });
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
