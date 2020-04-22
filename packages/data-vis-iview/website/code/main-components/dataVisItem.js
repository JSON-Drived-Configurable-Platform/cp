// simple echart
const simpleEchart = {};

const chart = {
    type: 'echart',
    label:'柱状图-垂直',
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

simpleEchart.data = {
    chart
};

simpleEchart.code = `
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

// table retain
const tableRetain = {};

const tableRetainChart = {
    'label': '留存',
    'type':'retain',
    'downloadAble': false,
    'columns': [
        {
            title: '日期',
            key: 'date',
        },
        {
            title: '用户数',
            key: 'user_number'
        },
        {
            title: '1天后',
            key: '1',
        },
        {
            title: '2天后',
            key: '2',
        },
        {
            title: '3天后',
            key: '3',
        },
        {
            title: '4天后',
            key: '4',
        },
        {
            title: '5天后',
            key: '5',
        },
        {
            title: '6天后',
            key: '6',
        },
        {
            title: '7天后',
            key: '7',
        }
    ],
    'data': [
        {
            'date': '2018-01-10',
            'user_number': 123456789,
            '1': 90.70,
            '2': '',
            '3': '',
            '4': '',
            '5': '',
            '6': '',
            '7': ''
        },
        {
            'date': '2018-01-09',
            'user_number': 123456789,
            '1': 60.34,
            '2': 55.22,
            '3': '',
            '4': '',
            '5': '',
            '6': '',
            '7': ''
        },
        {
            'date': '2018-01-08',
            'user_number': 123456789,
            '1': 90.34,
            '2': 85.29,
            '3': 74.39,
            '4': '',
            '5': '',
            '6': '',
            '7': ''
        },
        {
            'date': '2018-01-07',
            'user_number': 123456789,
            '1': 60.00,
            '2': 55.01,
            '3': 44.49,
            '4': 33.29,
            '5': '',
            '6': '',
            '7': ''
        },
        {
            'date': '2018-01-06',
            'user_number': 123456789,
            '1': 60.29,
            '2': 55.47,
            '3': 54.57,
            '4': 53.29,
            '5': 52.98,
            '6': '',
            '7': ''
        },
        {
            'date': '2018-01-05',
            'user_number': 123456789,
            '1': 90.00,
            '2': 85.23,
            '3': 74.48,
            '4': 63.47,
            '5': 52.77,
            '6': 40.22,
            '7': ''
        },
        {
            'date': '2018-01-04',
            'user_number': 123456789,
            '1': 90.78,
            '2': 85.36,
            '3': 74.78,
            '4': 63.26,
            '5': 52.97,
            '6': 40.46,
            '7': 38.76
        },
        {
            'date': '2018-01-03',
            'user_number': 123456789,
            '1': 60.2,
            '2': 55.87,
            '3': 44.6,
            '4': 33.6,
            '5': 22.9,
            '6': 10.9,
            '7': 8.2
        },
        {
            'date': '2018-01-02',
            'user_number': 123456789,
            '1': 60.2,
            '2': 55.87,
            '3': 44.6,
            '4': 33.6,
            '5': 22.9,
            '6': 10.9,
            '7': 8.2
        },
        {
            'date': '2018-01-02',
            'user_number': 123456789,
            '1': 60.2,
            '2': 55.87,
            '3': 44.6,
            '4': 33.6,
            '5': 22.9,
            '6': 10.9,
            '7': 8.2
        },
        {
            'date': '2018-01-02',
            'user_number': 123456789,
            '1': 60.2,
            '2': 55.87,
            '3': 44.6,
            '4': 33.6,
            '5': 22.9,
            '6': 10.9,
            '7': 8.2
        },
        {
            'date': '2018-01-02',
            'user_number': 123456789,
            '1': 60.2,
            '2': 55.87,
            '3': 44.6,
            '4': 33.6,
            '5': 22.9,
            '6': 10.9,
            '7': 8.2
        },
    ]
};

tableRetain.data = {
    chart: tableRetainChart
};

tableRetain.code = `
const chart = ${JSON.stringify(tableRetainChart, null, 4)};

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

// simple card
const simpleCard = {};

const simpleCardChart = {
    'type':'card',
    'label': '年活跃',
    'data': [
        {
            'label': '活跃用户数',
            'value': 22246150,
            'unit': '人',
            'showChange': false
        },
        {
            'label': '日环比',
            'value': -4.88,
            'unit': '%',
            'showChange': true
        },
        {
            'label': '周同比',
            'value': -1.36,
            'unit': '%',
            'showChange': true
        }
    ],
};

simpleCard.data = {
    chart: simpleCardChart
};

simpleCard.code = `
const chart = ${JSON.stringify(simpleCardChart, null, 4)};

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
    simpleEchart,
    tableRetain,
    simpleCard
};
