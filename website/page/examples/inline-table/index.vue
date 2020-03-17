<template>
    <Table :columns="columns" :data="data" />
</template>
<script>
import { fields, datas, columns } from './config';
import tableExpand from './tableExpand';

export default {
    components: {
        // eslint-disable-next-line vue/no-unused-components
        tableExpand
    },
    data() {
        if(columns[0].type !== 'expand'){
            columns.unshift({
                type: 'expand',
                width: 50,
                render: (h, params) => {
                    return h(tableExpand, {
                        props: {
                            fields: fields,
                            editModel: Object.assign({}, params.row),
                            index: params.index
                        },
                        on: {
                            'on-save-event': this.handleSaveEvent,
                            'on-cancel-event': this.handleCancelEvent
                        }
                    });
                }
            });
        }
        return {
            columns: columns,
            data: datas
        };
    },
    methods: {
        handleSaveEvent($event, index, row) {
            this.data.splice(
                index,
                1,
                Object.assign({}, this.data[index], row, { _expanded: false })
            );
        },
        handleCancelEvent($event, index){
            this.data[index]._expanded = false;
            this.data.push();
        }
    }
};
</script>
