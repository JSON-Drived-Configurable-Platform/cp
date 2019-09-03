export const columns = [
    {
        title: '姓名',
        slot: 'name',
        formField: {
            type: 'Input',
            model: 'name',
            placeholder: '请输入用户名',
            rules: [
                {
                    type: 'string',
                    required: true,
                    pattern:  /^[\u4e00-\u9fa5]+$/,
                    message: '请输入中文姓名'
                }
            ]
        }
    },
    {
        title: '年龄',
        slot: 'age',
        formField: {
            type: 'InputNumber',
            model: 'age',
            placeholder: '请输入年龄',
            required: true,
            max: 150,
            min: 0
        }
    },
    {
        title: '性别',
        slot: 'gender',
        formField: {
            type: 'Select',
            model: 'gender',
            placeholder: '请输入性别',
            required: true,
            options: [
                {
                    label: '男',
                    value: '男'
                },
                {
                    label: '女',
                    value: '女'
                },
                {
                    label: '保密',
                    value: '保密'
                }
            ]
        }
    },
    {
        title: '出生日期',
        slot: 'birthday',
        formField: {
            type: 'DatePicker',
            subtype: 'date',
            model: 'birthday',
            placeholder: '请输入出生日期',
            required: true
        }
    },
    {
        title: '地址',
        key: 'address'
        // formField: {
        //     type: 'Input',
        //     model: 'address',
        //     placeholder: '请输入地址',
        //     required: true
        // }
    },
    {
        title: '操作',
        slot: 'action',
        formField: {
            type: 'Submit',
            text: '保存'
        }
    }
];

export const data = [
    {
        name: '王小明',
        age: 18,
        gender: '男',
        birthday: '1999-2-21',
        address: '北京市朝阳区芍药居'
    },
    {
        name: '张小刚',
        age: 25,
        gender: '男',
        birthday: '1992-1-23',
        address: '北京市海淀区西二旗'
    },
    {
        name: '李小红',
        age: 30,
        gender: '女',
        birthday: '1987-11-10',
        address: '上海市浦东新区世纪大道'
    },
    {
        name: '周小伟',
        age: 26,
        gender: '男',
        birthday: '1991-10-10',
        address: '深圳市南山区深南大道'
    }
];
