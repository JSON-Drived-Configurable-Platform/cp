export default {
    model: {
        plt: 'ALL',
        status: 'ALL'
    },
    options: {
        labelWidth: 70,
        // apiBase: '/checkboxCardApi',
        pageSize: 5,
        showPage: true,
        showPageTotal: true,
        title: '我的表单'
    },
    data: [
        {
            "name": "王小明",
            "age": 18,
            "gender": "男",
            "birthday": "1999-2-21"
        },
        {
            "name": "张小刚",
            "age": 25,
            "gender": "男",
            "birthday": "1992-1-23"
        },
        {
            "name": "李晓红",
            "age": 30,
            "gender": "女",
            "birthday": "1987-11-10"
        },
        {
            "name": "周小伟",
            "age": 26,
            "gender": "男",
            "birthday": "1991-10-10"
        },
        {
            "name": "张大明",
            "age": 18,
            "gender": "男",
            "birthday": "1999-2-21"
        },
        {
            "name": "张小刚",
            "age": 25,
            "gender": "男",
            "birthday": "1992-1-23"
        },
        {
            "name": "李小红",
            "age": 30,
            "gender": "女",
            "birthday": "1987-11-10"
        },
        {
            "name": "周晓伟",
            "age": 26,
            "gender": "男",
            "birthday": "1991-10-10"
        }
    ],
    columns: [
        {
            title: '姓名',
            key: 'name'
        },
        {
            title: '年龄',
            key: 'age'
        },
        {
            title: '性别',
            key: 'gender'
        },
        {
            title: '出生日期',
            key: 'birthday'
        }
    ],
    fields: [
        {
            type: 'DatePicker',
            model: 'createDate',
            subType: 'daterange',
            label: '创建日期',
            labelWidth: 60,
            inline: true,
            width: 290,
            clearable: true
        },
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

