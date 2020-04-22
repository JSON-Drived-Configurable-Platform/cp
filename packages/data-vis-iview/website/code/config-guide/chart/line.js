// simple echart
const simple = {};

const chart = {
    type: 'echart',
    label:'echart实现同一组数据多图绘制',
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


// multiple
const multiple = {};
const multipleChart = {
    type: 'echart',
    label:'画多条线',
    xAxis: {type: 'category'},
    yAxis: {},
    dataset: {
        source: [
            {date: 'Mon', sells: 120, score: 60},
            {date: 'Tue', sells: 200, score: 70},
            {date: 'Wed', sells: 150, score: 80},
            {date: 'Thu', sells: 80, score: 90},
            {date: 'Fri', sells: 70, score: 100},
            {date: 'Sat', sells: 110, score: 110},
            {date: 'Sun', sells: 130, score: 120},
        ]
    },
    series: [
        {name: '销量', type: 'line'},
        {name: '得分', type: 'line'}
    ],
};

multiple.data = {
    chart: multipleChart
};

multiple.code = `
const chart = ${JSON.stringify(multipleChart, null, 4)};

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

// multipleAxis
const multipleAxis = {};
const multipleAxisChart = {
    label: '折线图-多轴',
    type: 'echart',
    dataset: [
        {
            source: [
                {date: '3-29', data: 120},
                {date: '3-30', data: 200},
                {date: '3-31', data: 150},
                {date: '4-01', data: 80},
                {date: '4-02', data: 70},
                {date: '4-03', data: 110},
                {date: '4-04', data: 130},
            ]
        },
        {
            source: [
                {date: '4-05', data: 245},
                {date: '4-06', data: 205},
                {date: '4-07', data: 55},
                {date: '4-08', data: 195},
                {date: '4-09', data: 275},
                {date: '4-10', data: 215},
                {date: '4-11', data: 35},
            ]
        }
    ],
    series: [
        {name: '第一周', type: 'line', echartIndex: 0},
        {name: '第二周', type: 'line', echartIndex: 1, xAxisIndex:1,}
    ],
    xAxis: [
        {type: 'category'},
        {type: 'category'}
    ],
    yAxis: {},
};

multipleAxis.data = {
    chart: multipleAxisChart
};

multipleAxis.code = `
const chart = ${JSON.stringify(multipleAxisChart, null, 4)};

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
    simple,
    multiple,
    multipleAxis
};
