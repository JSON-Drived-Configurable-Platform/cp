// simple echart
const simple = {};

const chart = {
    type: 'echart',
    label:'地图',
    dataset: {
        source: [
            {
                name: '江苏省',
                value: 5003
            },
            {
                name: '北京市',
                value: 3008
            },
            {
                name: '上海',
                value: 4006
            },
            {
                name: '重庆',
                value: 3006
            },
            {
                name: '河北',
                value: 3004
            },
            {
                name: '河南',
                value: 3002
            },
            {
                name: '云南',
                value: 1006
            },
            {
                name: '辽宁',
                value: 4003
            },
            {
                name: '黑龙江',
                value: 4001
            },
            {
                name: '湖南',
                value: 2004
            },
            {
                name: '安徽',
                value: 3003
            },
            {
                name: '山东',
                value: 31000
            },
            {
                name: '新疆',
                value: 11000
            },
            {
                name: '江苏',
                value: 3009
            },
            {
                name: '浙江',
                value: 3005
            },
            {
                name: '江西',
                value: 21000
            },
            {
                name: '湖北',
                value: 2001
            },
            {
                name: '广西',
                value: 31000
            },
            {
                name: '甘肃',
                value: 1002
            },
            {
                name: '山西',
                value: 3002
            },
            {
                name: '内蒙古',
                value: 3005
            },
            {
                name: '陕西',
                value: 2005
            },
            {
                name: '吉林',
                value: 4005
            },
            {
                name: '福建',
                value: 2008
            },
            {
                name: '贵州',
                value: 1008
            },
            {
                name: '广东',
                value: 3007
            },
            {
                name: '青海',
                value: 10006
            },
            {
                name: '西藏',
                value: 10004
            },
            {
                name: '四川',
                value: 3003
            },
            {
                name: '宁夏',
                value: 10008
            },
            {
                name: '海南',
                value: 1009
            },
            {
                name: '台湾',
                value: 10001
            },
            {
                name: '香港',
                value: 10001
            },
            {
                name: '澳门',
                value: 10001
            }
        ]
    },
    series: [
        {
            type: 'map',
            map: 'china',
            symbolSize: function (val) {
                return val[2] / 10;
            },
            label: {
                formatter: '{b}',
                position: 'right'
            },
            itemStyle: {
                color: '#ddb926'
            },
            emphasis: {
                label: {
                    show: true
                }
            }
        }
    ],
    visualMap: {
        seriesIndex: 0,
        min: 0,
        max: 10000,
        left: 'left',
        top: 'bottom',
        text: ['高','低'],           // 文本，默认为数值文本
        calculable: true
    },
    legend: null
};

simple.data = {
    chart
};

simple.code = `
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


export default {
    simple
};
