export const config = [
    {
        title: '整体趋势1',
        rows: [
            [
                {
                    conditions: [
                        {
                            type: 'DatePicker',
                            subtype: 'date',
                            model: 'date',
                            placeholder: '',
                            required: true,
                            defaultValue: '2019-01-01',
                            width: 120
                        }
                    ],
                    chartGroup: [
                        {
                            'tip': {
                                title: '标题1',
                                content: '内容1'
                            },
                            'label':'饼图api',
                            'type':'pie',
                            'api': '/chartPieApi'
                        },
                        {
                            'tip': {
                                title: '标题2',
                                content: '内容2'
                            },
                            'label':'柱状图api',
                            'type':'bar',
                            'api': '/chartBarApi'
                        },
                        {
                            'tip': {
                                title: '标题1',
                                content: '内容1'
                            },
                            'label': '折线图api',
                            'type': 'line',
                            'dataZoom': true,
                            'api': '/chartLineApi'
                        }
                    ]
                },
                {
                    conditions: [
                        {
                            type: 'DatePicker',
                            subtype: 'date',
                            model: 'date',
                            placeholder: '',
                            required: true,
                            defaultValue: '2019-01-01',
                            width: 120
                        }
                    ],
                    chartGroup: [
                        {
                            'tip': {
                                title: '标题1',
                                content: '内容1'
                            },
                            'label':'饼图api',
                            'type':'pie',
                            'api': '/chartPieApi'
                        },
                        {
                            'tip': {
                                title: '标题2',
                                content: '内容2'
                            },
                            'label':'柱状图api',
                            'type':'bar',
                            'api': '/chartBarApi'
                        },
                        {
                            'tip': {
                                title: '标题1',
                                content: '内容1'
                            },
                            'label': '折线图api',
                            'type': 'line',
                            'dataZoom': true,
                            'api': '/chartLineApi'
                        }
                    ]
                }
            ]
        ]
    },
    {
        title: '整体趋势2',
        rows: [
            [
                {
                    conditions: [
                        {
                            type: 'Radio',
                            subtype: 'button',
                            model: 'radioButton',
                            required: true,
                            options: [
                                {
                                    label: '选项一',
                                    value: '1'
                                },
                                {
                                    label: '选项二',
                                    value: '2'
                                }
                            ],
                            width: 130
                        },
                        {
                            type: 'DatePicker',
                            subtype: 'date',
                            model: 'date',
                            placeholder: '',
                            required: true,
                            defaultValue: '2019-01-01',
                            width: 120
                        }
                    ],
                    chartGroup: [
                        {
                            'tip': {
                                title: '标题1',
                                content: '内容1'
                            },
                            'label':'饼图api',
                            'type':'pie',
                            'api': '/chartPieApi'
                        },
                        {
                            'tip': {
                                title: '标题2',
                                content: '内容2'
                            },
                            'label':'柱状图api',
                            'type':'bar',
                            'api': '/chartBarApi'
                        },
                        {
                            'tip': {
                                title: '标题1',
                                content: '内容1'
                            },
                            'label': '折线图api',
                            'type': 'line',
                            'dataZoom': true,
                            'api': '/chartLineApi'
                        }
                    ]
                }
            ]
        ]
    },
];
