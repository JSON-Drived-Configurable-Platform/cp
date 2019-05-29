<template>
    <Table
        ref="table"
        stripe
        size="small"
        :show-header="false"
        :columns="columns"
        :data="data"
    />
</template>
<script>
const expandRow = {
    props:  {
        data: {
            type: Array,
            default() {
                return [];
            }
        },
        columns: {
            type: Array,
            default() {
                return {};
            }
        }
    },
};

export default expandRow;
</script>
