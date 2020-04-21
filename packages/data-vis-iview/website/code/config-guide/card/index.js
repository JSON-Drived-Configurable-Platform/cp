// simple
const simple = {};
const simpleCharts = [
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
];


simple.data = {
    charts: simpleCharts
};


simple.code = `
const charts = ${JSON.stringify(simpleCharts, null, 4)};

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


export default {
    simple,
};
