// simple echart
const simple = {};

const chart = {
    'label':'数据表格',
    'type':'table',
    'hideElevator': true,
    'hideSizer': true,
    'customColumns': ['name', 'age', 'address', 'money', 'name-1', 'age-1', 'address-1', 'money-1'],
    'downloadAble': true,
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
            title: '整型（不格式化）',
            renderDisabled: true,
            key: 'money',
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
            defaultShow: true,
            sortable: true,
            sortType: 'desc'
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
            date: '2016-10-09',
            money: 121212122112.22223,
            'name-1': 'John Brown-api',
            'age-1': 18,
            'address-1': 'New York No. 1 Lake Park-api',
            'date-1': '2016-10-09',
            'money-1': 121212122112
        },
        {
            name: 'John Brown-api',
            age: 18,
            address: '啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
            date: '2016-10-08',
            money: 121212122112,
            'name-1': 'John Brown-api',
            'age-1': 18,
            'address-1': 'New York No. 1 Lake Park-api',
            'date-1': '2016-10-08',
            'money-1': 121212122112
        },
        {
            name: 'John Brown-api',
            age: 18,
            address: '啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
            date: '2016-10-02',
            money: 121212122112,
            'name-1': 'John Brown-api',
            'age-1': 18,
            'address-1': 'New York No. 1 Lake Park-api',
            'date-1': '2016-10-02',
            'money-1': 121212122112
        },
        {
            name: 'John Brown-api',
            age: 18,
            address: '内容1',
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
            address: '内容1',
            date: '2016-10-03',
            money: 121212122112,
            'name-1': 'John Brown-api',
            'age-1': 18,
            'address-1': 'New York No. 1 Lake Park-api',
            'date-1': '2016-10-03',
            'money-1': 121212122112
        }
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

const api = {};

const apiChart = {
    'label':'数据表格API',
    'type':'table',
    'customColumns': ['name', 'age', 'address'],
    'api': '/chartTableApi',
    // apiParams: 'all'
    // 'downLoadApi': '/tableDataDownLoad',
};

api.data = {
    chart: apiChart
};

api.code = `
const chart = ${JSON.stringify(apiChart, null, 4)};

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
    api
};
