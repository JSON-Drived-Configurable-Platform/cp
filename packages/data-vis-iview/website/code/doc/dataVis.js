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
                    }
                ]
            }
        ],
        [
            {
                charts: [
                    {
                        'tip': {
                            title: '标题1',
                            content: '内容1'
                        },
                        'label':'地域分布',
                        'type':'pie',
                        'data': [
                            {value:335, name:'直接访问'},
                            {value:310, name:'邮件营销'},
                            {value:274, name:'联盟广告'},
                            {value:235, name:'视频广告'},
                            {value:400, name:'搜索引擎'}
                        ]
                    },
                    {
                        'label':'新增用户',
                        'type':'bar',
                        'columns': ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                        'data': [120, 200, 150, 80, 70, 110, 130]
                    },
                    {
                        'label':'新增用户-水平',
                        'type':'bar',
                        'direction': 'horizontal',
                        'columns': ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                        'data': [120, 200, 150, 80, 70, 110, 130]
                    }
                ]
            },
            {
                charts: [
                    {
                        'label': '趋势图',
                        'type': 'line',
                        'dataZoom': true,
                        'columns': [
                            ['2015-1', '2015-2', '2015-3', '2015-4', '2015-5', '2015-6', '2015-7', '2015-8', '2015-9', '2015-10', '2015-11'],
                            ['2016-1', '2016-2', '2016-3', '2016-4', '2016-5', '2016-6', '2016-7', '2016-8', '2016-9', '2016-10', '2016-11', '2016-12']
                        ],
                        'data': [
                            {
                                name:'2015 邮件营销',
                                groupName: '邮件营销',
                                xAxisIndex: 0,
                                data:[120, 132, 101, 134, 90, 230, 210, 101, 134]
                            },
                            {
                                name:'2016 邮件营销',
                                groupName: '邮件营销',
                                xAxisIndex: 1,
                                data:[150, 122, 121, 164, 100, 200, 200, 141, 134, 90, 230, 210]
                            },
                            {
                                name:'2015 联盟广告',
                                groupName: '联盟广告',
                                xAxisIndex: 0,
                                data:[220, 182, 191, 234, 290, 330, 310, 101, 134, 90, 230]
                            },
                            {
                                name:'2016 联盟广告',
                                groupName: '联盟广告',
                                xAxisIndex: 1,
                                data:[20, 82, 91, 34, 90, 30, 10, 1, 34, 90, 30, 10]
                            }
                        ]
                    },
                    {
                        'tip': {
                            title: '标题2',
                            content: '内容2'
                        },
                        'label':'柱状图api2',
                        'type':'bar',
                        'api': '/chartBarApi'
                    },
                    {
                        'label':'用户转化',
                        'type':'funnel',
                        'columns':  ['展现','点击','访问','咨询','订单'],
                        'data': [
                            {value: 54, name: '访问'},
                            {value: 12, name: '咨询'},
                            {value: 5, name: '订单'},
                            {value: 83, name: '点击'},
                            {value: 100, name: '展现'}
                        ]
                    }
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
