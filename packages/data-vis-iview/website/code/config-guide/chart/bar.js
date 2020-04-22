// simple echart
const simple = {};

const chart = {
    type: 'echart',
    label:'柱状图',
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
        {type: 'bar'}
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
    label:'同一组数据多条线',
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
        {name: '销量', type: 'bar'},
        {name: '得分', type: 'bar'}
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
    label: '维度',
    type: 'echart',
    dataset: {
        dimensions: ['product', '2015', '2016', '2017'],
        source: [
            {product: 'Matcha Latte', '2015': 43.3, '2016': 85.8, '2017': 93.7},
            {product: 'Milk Tea', '2015': 83.1, '2016': 73.4, '2017': 55.1},
            {product: 'Cheese Cocoa', '2015': 86.4, '2016': 65.2, '2017': 82.5},
            {product: 'Walnut Brownie', '2015': 72.4, '2016': 53.9, '2017': 39.1}
        ]
    },
    xAxis: {type: 'category'},
    yAxis: {},
    series: [
        {type: 'bar'},
        {type: 'bar'},
        {type: 'bar'}
    ]
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
