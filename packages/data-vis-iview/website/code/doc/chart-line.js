const simple = {};

const charts = [
    {
        type: 'dataset',
        label: '折线图',
        xAxis: {type: 'category'},
        yAxis: {},
        dataset: '/chartLineDatasetApi',
        series: [
            {type: 'line'}
        ]
    }
];

const multipleCharts = [
    {
        type: 'dataset',
        label: '折线图-多条',
        dataset: [
            {
                source: [
                    {date: 'Mon', sells: 120, score: 60},
                    {date: 'Tue', sells: 200, score: 70},
                    {date: 'Wed', sells: 150, score: 80},
                    {date: 'Thu', sells: 80, score: 90},
                    {date: 'Fri', sells: 70, score: 100},
                    {date: 'Sat', sells: 110, score: 110},
                    {date: 'Sun', sells: 130, score: 120},
                ]
            }
        ],
        series: [
            {name: '销量', type: 'line'},
            {name: '得分', type: 'line'}
        ],
        xAxis: {type: 'category'},
        yAxis: {},
    }
];
const Multiaxial = [
    {
        label: '折线图-多轴',
        dataset: [
            {
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
            {
                source: [
                    {date: 'Mon', data: 245},
                    {date: 'Tue', data: 205},
                    {date: 'Wed', data: 55},
                    {date: 'Thu', data: 195},
                    {date: 'Fri', data: 275},
                    {date: 'Sat', data: 215},
                    {date: 'Sun', data: 35},
                ]
            }
        ],
        series: [
            {name: '第一周', type: 'line', datasetIndex: 0},
            {name: '第二周', type: 'line', datasetIndex: 1, xAxisIndex:1,}
        ],
        xAxis: [
            {type: 'category'},
            {type: 'category'}
        ],
        yAxis: {},
    }];
simple.data = {
    charts,
    multipleCharts,
    Multiaxial
};

simple.chartsCode = `
const charts = ${JSON.stringify(charts, null, 4)};

<template>
    <DataVisGroup
        :charts='charts'
    />
</template>
<script>
export default {
    data() {
        return {
            charts
        };
    }
};
</script>
`;

simple.multipleChartsCode = `
const charts = ${JSON.stringify(multipleCharts, null, 4)};

<template>
    <DataVisGroup
        :charts='multipleCharts'
    />
</template>
<script>
export default {
    data() {
        return {
            charts
        };
    }
};
</script>
`;

simple.MultiaxialCode = `
const charts = ${JSON.stringify(Multiaxial, null, 4)};

<template>
    <DataVisGroup
        :charts='Multiaxial'
    />
</template>
<script>
export default {
    data() {
        return {
            charts
        };
    }
};
</script>
`;
export default {
    simple
};
