// simple echart
const simple = {};

const chart = {
    type: 'dataset',
    label:'dataset实现同一组数据多图绘制',
    xAxis: {type: 'category'},
    yAxis: {},
    dataset: {
        source: [
            {date: 'Mon', data: 120},
            {date: 'Tue', data: 200},
            {date: 'Wed', data: 150},
            {date: 'Thu', data: 80},
            {date: 'Fri', data: 70},
            {date: 'Sat', data: 110},
            {date: 'Sun', data: 130},
        ]
    },
    series: [
        {type: 'bar'},
        {type: 'line'}
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
