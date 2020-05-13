const simple = {};

const charts = [
    {
        type: 'echart',
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
    },
    {
        type: 'echart',
        label:'柱状图-水平',
        xAxis: {},
        yAxis: {type: 'category'},
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
    },
    {
        type: 'echart',
        label:'漏斗',
        dataset: {
            source: [
                {date: 'Mon', data: 420},
                {date: 'Tue', data: 300},
                {date: 'Wed', data: 250},
                {date: 'Thu', data: 190},
                {date: 'Fri', data: 170},
                {date: 'Sat', data: 90},
                {date: 'Sun', data: 30},
            ]
        },
        series: [
            {type: 'funnel'}
        ]
    },
    {
        type: 'echart',
        label: '饼图',
        dataset: {
            source: [
                {sells: 'Mon', value: 120},
                {sells: 'Tue', value: 200},
                {sells: 'Wed', value: 150},
                {sells: 'Thu', value: 80},
                {sells: 'Fri', value: 70},
                {sells: 'Sat', value: 110},
                {sells: 'Sun', value: 130},
            ]
        },
        series: [
            {
                type: 'pie'
            }
        ]
    },
    {
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
    },
    {
        'label':'数据表格',
        'type':'table',
        'hideElevator': true,
        'hideSizer': true,
        'downloadAble': false,
        'customColumns': ['name', 'age', 'address', 'money', 'name-1', 'age-1', 'address-1', 'money-1'],
        'columns': [
            {
                title: 'Name',
                key: 'name',
                defaultShow: true
            },
            {
                title: 'Age',
                key: 'age',
                sortable: true,
                defaultShow: false
            },
            {
                title: 'Address',
                key: 'address',
                defaultShow: true
            },
            {
                title: 'Date',
                key: 'date',
                defaultShow: true
            },
            {
                title: 'Money',
                key: 'money',
                defaultShow: true
            },
            {
                title: 'Name-1',
                key: 'name-1',
                defaultShow: true
            },
            {
                title: 'Age-1',
                key: 'age-1',
                sortable: true,
                defaultShow: false
            },
            {
                title: 'Address-1',
                key: 'address-1',
                defaultShow: true
            },
            {
                title: 'Date-1',
                key: 'date-1',
                defaultShow: true
            },
            {
                title: 'Money-1',
                key: 'money-1',
                defaultShow: true
            }
        ],
        'data': [
            {
                name: 'John Brown',
                age: 18,
                address: '啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
                date: '2016-10-03',
                money: 121212122112.22223,
                'name-1': 'John Brown',
                'age-1': 18,
                'address-1': 'New York No. 1 Lake Park',
                'date-1': '2016-10-03',
                'money-1': 121212122112
            },
            {
                name: 'John Brown',
                age: 18,
                address: '啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
                date: '2016-10-03',
                money: 121212122112,
                'name-1': 'John Brown',
                'age-1': 18,
                'address-1': 'New York No. 1 Lake Park',
                'date-1': '2016-10-03',
                'money-1': 121212122112
            },
            {
                name: 'John Brown',
                age: 18,
                address: '啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
                date: '2016-10-03',
                money: 121212122112,
                'name-1': 'John Brown',
                'age-1': 18,
                'address-1': 'New York No. 1 Lake Park',
                'date-1': '2016-10-03',
                'money-1': 121212122112
            },
            {
                name: 'John Brown',
                age: 18,
                address: '啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
                date: '2016-10-03',
                money: 121212122112,
                'name-1': 'John Brown',
                'age-1': 18,
                'address-1': 'New York No. 1 Lake Park',
                'date-1': '2016-10-03',
                'money-1': 121212122112
            },
            {
                name: 'John Brown',
                age: 18,
                address: '啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
                date: '2016-10-03',
                money: 121212122112,
                'name-1': 'John Brown',
                'age-1': 18,
                'address-1': 'New York No. 1 Lake Park',
                'date-1': '2016-10-03',
                'money-1': 121212122112
            },
            {
                name: 'John Brown',
                age: 18,
                address: '啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
                date: '2016-10-03',
                money: 121212122112,
                'name-1': 'John Brown',
                'age-1': 18,
                'address-1': 'New York No. 1 Lake Park',
                'date-1': '2016-10-03',
                'money-1': 121212122112
            },
            {
                name: 'John Brown',
                age: 18,
                address: '啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
                date: '2016-10-03',
                money: 121212122112,
                'name-1': 'John Brown',
                'age-1': 18,
                'address-1': 'New York No. 1 Lake Park',
                'date-1': '2016-10-03',
                'money-1': 121212122112.22223
            },
            {
                name: 'John Brown',
                age: 18,
                address: '啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
                date: '2016-10-03',
                money: 121212122112,
                'name-1': 'John Brown',
                'age-1': 18,
                'address-1': 'New York No. 1 Lake Park',
                'date-1': '2016-10-03',
                'money-1': 121212122112
            },
            {
                name: 'John Brown',
                age: 18,
                address: '啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
                date: '2016-10-03',
                money: null,
                'name-1': 'John Brown',
                'age-1': 18,
                'address-1': 'New York No. 1 Lake Park',
                'date-1': '2016-10-03',
                'money-1': 121212122112
            },
            {
                name: 'John Brown',
                age: 18,
                address: '啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
                date: '2016-10-03',
                money: 121212122112,
                'name-1': 'John Brown',
                'age-1': 18,
                'address-1': 'New York No. 1 Lake Park',
                'date-1': '2016-10-03',
                'money-1': 121212122112
            }
        ]
    }
];

simple.data = {
    charts
};


simple.code = `
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


// inline
const inline = {};
const inlineCharts = [
    {
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
    },
    {
        'type': 'card',
        'label':  '年活跃',
        'data':  [
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
    },
    {
        'type': 'card',
        'label':  '年活跃',
        'data':  [
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
    },
    {
        type: 'echart',
        label:'柱状图-水平',
        xAxis: {},
        yAxis: {type: 'category'},
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
    },
    {
        type: 'echart',
        label:'漏斗',
        dataset: {
            source: [
                {date: 'Mon', data: 420},
                {date: 'Wed', data: 250},
                {date: 'Sat', data: 90},
                {date: 'Sun', data: 30},
            ]
        },
        series: [
            {type: 'funnel'}
        ]
    },
    {
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
    }
];


inline.data = {
    charts: inlineCharts
};


inline.code = `
const charts = ${JSON.stringify(inlineCharts, null, 4)};

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


// 查询条件
const search = {};
const searchCharts = [
    {
        type: 'echart',
        label:'柱状图',
        xAxis: {},
        yAxis: {type: 'category'},
        dataset: '/chartBarDatasetApi',
        series: [
            {type: 'bar'}
        ]
    },
    {
        type: 'echart',
        label:'漏斗',
        dataset: '/chartFunnelDatasetApi',
        series: [
            {type: 'funnel'}
        ]
    },
    {
        type: 'echart',
        label: '折线图',
        dataset: '/chartLineDatasetApi',
        apiParams: ['date'],
        series: [
            {name: '第一周', type: 'line'},
        ],
        xAxis: [
            {type: 'category'},
            {type: 'category'}
        ],
        yAxis: {},
    }
];

const conditions = [
    {
        type: 'DatePicker',
        subType: 'daterange',
        model: 'date',
        placeholder: '',
        required: true,
        defaultValue: ['2019-01-01', '2019-01031']
    }
];


search.data = {
    charts: searchCharts,
    conditions,
    paramsContainer: {
        username: 'bingblog'
    }
};


search.code = `
const charts = ${JSON.stringify(searchCharts, null, 4)};
const conditions = ${JSON.stringify(conditions, null, 4)};
<template>
    <DataVisGroup
        :conditions="conditions"
        :params-container="paramsContainer"
        :charts='charts'
    />
</template>
<script>
export default {
    data() {
        return {
            charts,
            conditions
        };
    }
};
</script>
`;

export default {
    simple,
    inline,
    search
};
