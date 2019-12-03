export const config = {
    chartGroup: [
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
};
