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
                charts: [
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
                        'label':'饼图api1',
                        'type':'pie',
                        'api': '/chartPieApi1'
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
                    },
                    {
                        'tip': {
                            title: '标题1',
                            content: '内容1'
                        },
                        'label': '折线图区域api',
                        'type': 'line',
                        'api': '/chartLineAreaApi'
                    },
                ]
            }
        ]
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
