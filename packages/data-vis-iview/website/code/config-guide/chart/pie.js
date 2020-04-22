// simple echart
const simple = {};

const chart = {
    type: 'echart',
    label:'echart实现同一组数据多图绘制',
    dataset: {
        source: [
            {product: 'Latte', 'sells': 43.3},
            {product: 'Tea', 'sells': 83.1},
            {product: 'Cocoa', 'sells': 86.4},
            {product: 'Brownie', 'sells': 72.4}
        ]
    },
    series: [
        {type: 'pie'}
    ]
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


// multiple
const multiple = {};
const multipleChart = {
    type: 'echart',
    label:'画多条线',
    dataset: {
        dimensions: ['product', '2014', '2015', '2016', '2017'],
        source: [
            ['Latte', 65.1, 53.3, 83.8, 98.7],
            ['Tea', 85.7, 83.1, 73.4, 55.1],
            ['Cocoa', 79.5, 86.4, 65.2, 82.5],
            ['Brownie', 69.2, 72.4, 53.9, 39.1]
        ]
    },
    series: [
        {
            type: 'pie',
            center: ['25%', '60%']
            // No encode specified, by default, it is '2012'.
        },
        {
            type: 'pie',
            center: ['50%', '60%'],
            encode: {
                itemName: 'product',
                value: '2015'
            }
        },
        {
            type: 'pie',
            center: ['75%', '60%'],
            encode: {
                itemName: 'product',
                value: '2016'
            }
        },
    ]
};

multiple.data = {
    chart: multipleChart
};

multiple.code = `
const chart = ${JSON.stringify(multipleChart, null, 4)};

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
    simple,
    multiple
};
