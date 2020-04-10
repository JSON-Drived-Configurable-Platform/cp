export default {
    model: {
        plt: 'ALL',
        status: 'ALL'
    },
    options: {
        labelWidth: 70,
        apiBase: '/checkboxCardApi',
        pageSize: 5,
        showPage: true,
        showPageTotal: true,
        title: '我的表单'
    },
    columns: [
        {
            title: '姓名',
            key: 'name',
            width: 100
        },
        {
            title: '年龄',
            key: 'age',
            width: 90
        },
        {
            title: '性别',
            key: 'gender',
            width: 90
        },
        {
            title: '出生日期',
            key: 'birthday',
            width: 150
        }
    ],
    fields: [
        {
            type: 'Input',
            model: 'name',
            label: '姓名',
            labelWidth: 36,
            inline: true,
            width: 280,
            clearable: true
        },
        {
            type: 'Select',
            model: 'gender',
            label: '性别',
            inline: true,
            width: 180,
            changeToSearch: true,
            options: [
                {label: '全部', value: 'ALL'},
                {label: '男', value: '男'},
                {label: '女', value: '女'},
            ]
        },
        {
            type: 'Button',
            model: 'search',
            subType: 'primary',
            labelWidth: 10,
            inline: true,
            text: '搜索',
            action: {
                type: 'event'
            }
        }
    ]
}

