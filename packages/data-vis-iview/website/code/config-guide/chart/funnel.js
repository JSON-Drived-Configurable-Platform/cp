// simple echart
const simple = {};

const chart = {
    type: 'dataset',
    label:'dataset实现同一组数据多图绘制',
    dataset: {
        source: [
            {step: 'visit', 'per': 96},
            {step: 'click', 'per': 53.1},
            {step: 'buy', 'per': 16.4},
            {step: 'paid', 'per': 2.4}
        ]
    },
    series: [
        {type: 'funnel'}
    ]
};

simple.data = {
    chart
};

simple.code = `
const chart = ${JSON.stringify(chart, null, 4)};

<template>
    <DataVisItem
        :chart='chart'
    />
</template>
<script>
export default {
    data() {
        return {
            chart
        };
    }
};
</script>
`;


export default {
    simple
};
