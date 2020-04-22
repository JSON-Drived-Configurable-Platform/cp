const simple = {};

const config = {
    title: '整体趋势',
    tip: {
        title: '规则',
        content: '规则内容规则内容规则内容规则内容规则<br>内容规则内容规则内容规则内容规则内容规则内容规则内容规则内容规则内容规则内容规则内容规则内容规则内容规则内容规则内容规则内容规则内容规则内容规则内容',
    },
    rows: [
        [
            {
                display: 'inline',
                conditions: [
                    {
                        key: '100060',
                        type: 'DatePicker',
                        subType: 'date',
                        model: 'date',
                        placeholder: '',
                        required: true,
                        defaultValue: '2019-01-01'
                    }
                ],
                charts: [
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
                    }
                ]
            }
        ],
        [
            {
                charts: [
                    {
                        type: 'echart',
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
                    },
                    {
                        type: 'echart',
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
                ]
            },
            {
                charts: [
                    {
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
                    },
                    {
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
                    },
                ]
            }
        ],
        [
            {
                chartGroup: [
                    {
                        label: '新增留存',
                        'type':'retain',
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
                ]
            },
        ],
        [
            {
                chartGroup: [
                    {
                        'label':'活跃留存',
                        'type':'retain',
                        'api': '/chartRetainApi'
                    },
                ]
            }
        ],
        [
            {
                chartGroup: [
                    {
                        'label':'数据表格',
                        'type':'table',
                        'hideElevator': true,
                        'hideSizer': true,
                        'downloadAble': false,
                        'customColumns': ['name', 'age', 'address', 'money', 'name-1', 'age-1', 'address-1', 'money-1'],
                        // 'downLoadApi': '/tableDataDownLoad',
                        'columns': [
                            {
                                title: 'Name-api',
                                key: 'name',
                                defaultShow: true
                            },
                            {
                                title: 'Age-api',
                                key: 'age',
                                sortable: true,
                                defaultShow: false
                            },
                            {
                                title: 'Address-api',
                                key: 'address',
                                defaultShow: true
                            },
                            {
                                title: 'Date-api',
                                key: 'date',
                                defaultShow: true
                            },
                            {
                                title: 'Money',
                                key: 'money',
                                defaultShow: true
                            },
                            {
                                title: 'Name-api-1',
                                key: 'name-1',
                                defaultShow: true
                            },
                            {
                                title: 'Age-api-1',
                                key: 'age-1',
                                sortable: true,
                                defaultShow: false
                            },
                            {
                                title: 'Address-api-1',
                                key: 'address-1',
                                defaultShow: true
                            },
                            {
                                title: 'Date-api-1',
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
                                name: 'John Brown-api',
                                age: 18,
                                address: '啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
                                date: '2016-10-03',
                                money: 121212122112.22223,
                                'name-1': 'John Brown-api',
                                'age-1': 18,
                                'address-1': 'New York No. 1 Lake Park-api',
                                'date-1': '2016-10-03',
                                'money-1': 121212122112
                            },
                            {
                                name: 'John Brown-api',
                                age: 18,
                                address: '啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
                                date: '2016-10-03',
                                money: 121212122112,
                                'name-1': 'John Brown-api',
                                'age-1': 18,
                                'address-1': 'New York No. 1 Lake Park-api',
                                'date-1': '2016-10-03',
                                'money-1': 121212122112
                            },
                            {
                                name: 'John Brown-api',
                                age: 18,
                                address: '啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
                                date: '2016-10-03',
                                money: 121212122112,
                                'name-1': 'John Brown-api',
                                'age-1': 18,
                                'address-1': 'New York No. 1 Lake Park-api',
                                'date-1': '2016-10-03',
                                'money-1': 121212122112
                            },
                            {
                                name: 'John Brown-api',
                                age: 18,
                                address: '啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
                                date: '2016-10-03',
                                money: 121212122112,
                                'name-1': 'John Brown-api',
                                'age-1': 18,
                                'address-1': 'New York No. 1 Lake Park-api',
                                'date-1': '2016-10-03',
                                'money-1': 121212122112
                            },
                            {
                                name: 'John Brown-api',
                                age: 18,
                                address: '啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
                                date: '2016-10-03',
                                money: 121212122112,
                                'name-1': 'John Brown-api',
                                'age-1': 18,
                                'address-1': 'New York No. 1 Lake Park-api',
                                'date-1': '2016-10-03',
                                'money-1': 121212122112
                            },
                            {
                                name: 'John Brown-api',
                                age: 18,
                                address: '啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
                                date: '2016-10-03',
                                money: 121212122112,
                                'name-1': 'John Brown-api',
                                'age-1': 18,
                                'address-1': 'New York No. 1 Lake Park-api',
                                'date-1': '2016-10-03',
                                'money-1': 121212122112
                            },
                            {
                                name: 'John Brown-api',
                                age: 18,
                                address: '啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
                                date: '2016-10-03',
                                money: 121212122112,
                                'name-1': 'John Brown-api',
                                'age-1': 18,
                                'address-1': 'New York No. 1 Lake Park-api',
                                'date-1': '2016-10-03',
                                'money-1': 121212122112.22223
                            },
                            {
                                name: 'John Brown-api',
                                age: 18,
                                address: '啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
                                date: '2016-10-03',
                                money: 121212122112,
                                'name-1': 'John Brown-api',
                                'age-1': 18,
                                'address-1': 'New York No. 1 Lake Park-api',
                                'date-1': '2016-10-03',
                                'money-1': 121212122112
                            },
                            {
                                name: 'John Brown-api',
                                age: 18,
                                address: '啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
                                date: '2016-10-03',
                                money: null,
                                'name-1': 'John Brown-api',
                                'age-1': 18,
                                'address-1': 'New York No. 1 Lake Park-api',
                                'date-1': '2016-10-03',
                                'money-1': 121212122112
                            },
                            {
                                name: 'John Brown-api',
                                age: 18,
                                address: '啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
                                date: '2016-10-03',
                                money: 121212122112,
                                'name-1': 'John Brown-api',
                                'age-1': 18,
                                'address-1': 'New York No. 1 Lake Park-api',
                                'date-1': '2016-10-03',
                                'money-1': 121212122112
                            }
                        ]
                    },
                    {
                        'label':'数据表格API',
                        'type':'table',
                        'customColumns': ['name', 'age', 'address'],
                        'api': '/chartTableApi',
                    },
                ]
            }
        ],
    ]
};

simple.data = {
    config
};

simple.code = `

const config = ${JSON.stringify(config, null, 4)};
<template>
    <DataVis
        :config="config"
    />
</template>
<script>
export default {
    data() {
        return {
            config
        };
    }
};
</script>
`;
export default {
    simple
};
