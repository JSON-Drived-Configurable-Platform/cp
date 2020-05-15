export const config = [
    {
        title: '数据概览',
        tip: {
            title: '规则',
            content: '规则内容规则内容规则内容规则内容规则<br>内容规则内容规则内容规则内容规则内容规则内容规则内容规则内容规则内容规则内容规则内容规则内容规则内容规则内容规则内容规则内容规则内容规则内容规则内容',
        },
        rows: [
            [
                {
                    display: 'inline',
                    charts: [
                        {
                            'type':'card',
                            'label': '新增用户',
                            'api': '/chartCardApi'
                        },
                        {
                            'type':'card',
                            'label': '活跃用户',
                            'api': '/chartCardApi'
                        },
                        {
                            'type':'card',
                            'label': '月活',
                            'api': '/chartCardApi'
                        }
                    ],
                },
            ],
        ],
    },
    {
        title: '图表',
        rows: [
            [
                {
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
                            type: 'echart',
                            label:'折线图',
                            xAxis: {type: 'category'},
                            yAxis: {},
                            dataset: '/chartLineDatasetApi',
                            series: [
                                {type: 'line'}
                            ]
                        },
                        {
                            type: 'echart',
                            label:'柱状图',
                            xAxis: {type: 'category'},
                            yAxis: {},
                            dataset: '/chartLineDatasetApi',
                            series: [
                                {type: 'bar'}
                            ]
                        },
                        {
                            type: 'echart',
                            label:'混合图',
                            xAxis: {type: 'category'},
                            yAxis: {},
                            dataset: '/chartLineDatasetApi',
                            series: [
                                {type: 'bar'},
                                {type: 'line'}
                            ]
                        },
                    ]
                },
                {
                    conditions: [
                        {
                            key: '100061',
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
                            type: 'echart',
                            label:'柱状图',
                            xAxis: {type: 'category'},
                            yAxis: {},
                            dataset: '/chartLineDatasetApi',
                            series: [
                                {type: 'bar'}
                            ]
                        },
                        {
                            type: 'echart',
                            label:'混合图',
                            xAxis: {type: 'category'},
                            yAxis: {},
                            dataset: '/chartLineDatasetApi',
                            series: [
                                {type: 'bar'},
                                {type: 'line'}
                            ]
                        },
                        {
                            type: 'echart',
                            label:'折线图',
                            xAxis: {type: 'category'},
                            yAxis: {},
                            dataset: '/chartLineDatasetApi',
                            series: [
                                {type: 'line'}
                            ]
                        },
                    ]
                }
            ],
        ]
    },
    {
        title: '留存',
        rows: [
            [
                {
                    charts: [
                        {
                            'label':'日留存',
                            'type':'retain',
                            'hideElevator': true,
                            'hideSizer': true,
                            'downloadAble': true,
                            'customColumns': ['name', 'age', 'address', 'money', 'name-1', 'age-1', 'address-1', 'money-1'],
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
                {
                    charts: [
                        {
                            'label':'周留存',
                            'type':'retain',
                            'api': '/chartRetainApi'
                        },
                    ]
                }
            ]
        ]
    },
    {
        title: '明细',
        rows: [
            [
                {
                    charts: [
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
                            // apiParams: 'all'
                            // 'downLoadApi': '/tableDataDownLoad',
                        },
                        {
                            'label':'数据表格NoColumnsApi',
                            'type':'table',
                            'customColumns': ['name', 'age', 'address'],
                            'columns': [
                                {
                                    title: 'Name-api',
                                    key: 'name',
                                    defaultShow: true,
                                    sortable: true
                                },
                                {
                                    title: 'Age-api',
                                    key: 'age',
                                    defaultShow: false,
                                    sortable: true,
                                    unit: '%'
                                },
                                {
                                    title: 'Address-api',
                                    key: 'address',
                                    defaultShow: true,
                                    sortable: true,
                                },
                                {
                                    title: 'Date-api',
                                    key: 'date',
                                    defaultShow: true,
                                    sortable: true,
                                }
                            ],
                            'api': '/chartTableNoColumnsApi',
                            apiParams: ['test1']
                            // 'downLoadApi': '/tableDataDownLoad',
                        },
                        {
                            'label':'数据表格-可扩展',
                            'type':'table',
                            'customColumns': ['name', 'age', 'address'],
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
                                }
                            ],
                            'data': [
                                {
                                    name: 'John Brown-api',
                                    age: 18,
                                    address: 'New York No. 1 Lake Park-api',
                                    date: '2016-10-03',
                                    children: [
                                        {
                                            name: 'John Brown-api-children-1',
                                            age: 18,
                                            address: 'New York No. 1 Lake Park-api',
                                            date: '2016-10-03',
                                            children: [
                                                {
                                                    name: 'John Brown-api-children-2',
                                                    age: 18,
                                                    address: 'New York No. 1 Lake Park-api',
                                                    date: '2016-10-03',
                                                    children: [
                                                        {
                                                            name: 'John Brown-api-children-3',
                                                            age: 18,
                                                            address: 'New York No. 1 Lake Park-api',
                                                            date: '2016-10-03',
                                                        },
                                                        {
                                                            name: 'John Brown-api-children-3',
                                                            age: 18,
                                                            address: 'New York No. 1 Lake Park-api',
                                                            date: '2016-10-03',
                                                        },
                                                        {
                                                            name: 'John Brown-api-children-3',
                                                            age: 18,
                                                            address: 'New York No. 1 Lake Park-api',
                                                            date: '2016-10-03',
                                                        },
                                                        {
                                                            name: 'John Brown-api-children-3',
                                                            age: 18,
                                                            address: 'New York No. 1 Lake Park-api',
                                                            date: '2016-10-03',
                                                        }
                                                    ]
                                                },
                                                {
                                                    name: 'John Brown-api-children-2',
                                                    age: 18,
                                                    address: 'New York No. 1 Lake Park-api',
                                                    date: '2016-10-03',
                                                },
                                                {
                                                    name: 'John Brown-api-children-2',
                                                    age: 18,
                                                    address: 'New York No. 1 Lake Park-api',
                                                    date: '2016-10-03',
                                                },
                                                {
                                                    name: 'John Brown-api-children-2',
                                                    age: 18,
                                                    address: 'New York No. 1 Lake Park-api',
                                                    date: '2016-10-03',
                                                }
                                            ]
                                        },
                                        {
                                            name: 'John Brown-api-children-1',
                                            age: 18,
                                            address: 'New York No. 1 Lake Park-api',
                                            date: '2016-10-03',
                                        },
                                        {
                                            name: 'John Brown-api-children',
                                            age: 18,
                                            address: 'New York No. 1 Lake Park-api',
                                            date: '2016-10-03',
                                        },
                                        {
                                            name: 'John Brown-api-children',
                                            age: 18,
                                            address: 'New York No. 1 Lake Park-api',
                                            date: '2016-10-03',
                                        }
                                    ]
                                },
                                {
                                    name: 'Jim Green',
                                    age: 24,
                                    address: 'London No. 1 Lake Park',
                                    date: '2016-10-01'
                                },
                                {
                                    name: 'Joe Black',
                                    age: 30,
                                    address: 'Sydney No. 1 Lake Park',
                                    date: '2016-10-02'
                                },
                                {
                                    name: 'Jon Snow',
                                    age: 26,
                                    address: 'Ottawa No. 2 Lake Park',
                                    date: '2016-10-04'
                                },
                                {
                                    name: 'John Brown',
                                    age: 18,
                                    address: 'New York No. 1 Lake Park',
                                    date: '2016-10-03'
                                },
                                {
                                    name: 'Jim Green',
                                    age: 24,
                                    address: 'London No. 1 Lake Park',
                                    date: '2016-10-01'
                                },
                                {
                                    name: 'Joe Black',
                                    age: 30,
                                    address: 'Sydney No. 1 Lake Park',
                                    date: '2016-10-02'
                                },
                                {
                                    name: 'Jon Snow',
                                    age: 26,
                                    address: 'Ottawa No. 2 Lake Park',
                                    date: '2016-10-04'
                                },
                                {
                                    name: 'John Brown',
                                    age: 18,
                                    address: 'New York No. 1 Lake Park',
                                    date: '2016-10-03'
                                },
                                {
                                    name: 'Jim Green',
                                    age: 24,
                                    address: 'London No. 1 Lake Park',
                                    date: '2016-10-01'
                                },
                                {
                                    name: 'Joe Black',
                                    age: 30,
                                    address: 'Sydney No. 1 Lake Park',
                                    date: '2016-10-02'
                                },
                                {
                                    name: 'Jon Snow',
                                    age: 26,
                                    address: 'Ottawa No. 2 Lake Park',
                                    date: '2016-10-04'
                                },
                                {
                                    name: 'John Brown',
                                    age: 18,
                                    address: 'New York No. 1 Lake Park',
                                    date: '2016-10-03'
                                },
                                {
                                    name: 'Jim Green',
                                    age: 24,
                                    address: 'London No. 1 Lake Park',
                                    date: '2016-10-01'
                                },
                                {
                                    name: 'Joe Black',
                                    age: 30,
                                    address: 'Sydney No. 1 Lake Park',
                                    date: '2016-10-02'
                                },
                                {
                                    name: 'Jon Snow',
                                    age: 26,
                                    address: 'Ottawa No. 2 Lake Park',
                                    date: '2016-10-04'
                                },
                                {
                                    name: 'John Brown',
                                    age: 18,
                                    address: 'New York No. 1 Lake Park',
                                    date: '2016-10-03'
                                },
                                {
                                    name: 'Jim Green',
                                    age: 24,
                                    address: 'London No. 1 Lake Park',
                                    date: '2016-10-01'
                                },
                                {
                                    name: 'Joe Black',
                                    age: 30,
                                    address: 'Sydney No. 1 Lake Park',
                                    date: '2016-10-02'
                                },
                                {
                                    name: 'Jon Snow',
                                    age: 26,
                                    address: 'Ottawa No. 2 Lake Park',
                                    date: '2016-10-04'
                                }
                            ]
                        },
                    ]
                }
            ]
        ]
    }
];
