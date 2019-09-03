export const fields = [
    {
        type: 'Divider',
        label: '输入框',
        orientation: 'left',
        dashed: true,
        size: 'small'
    },
    {
        key: '1000',
        type: 'Input',
        label: '输入框',
        model: 'input',
        placeholder: '请输入用户名',
        required: true,
        defaultHide: false
    },
    {
        key: '10001',
        type: 'Input',
        label: '用户名-禁用',
        model: 'inputForbidden',
        readonly: true,
        disabled: true,
        placeholder: '请输入用户名',
        defaultHide: false
    },
    {
        key: '10002',
        type: 'Input',
        subtype: 'textarea',
        label: '输入框',
        model: 'textarea',
        placeholder: '请输入用户名',
        required: true,
        defaultHide: false
    },
    {
        key: '100021',
        type: 'InputNumber',
        label: '数值多行输入框',
        model: 'inputNumber',
        placeholder: '',
        required: true,
        //defaultHide: true
    },
    {
        type: 'Divider',
        label: '下拉选择',
        orientation: 'left',
        dashed: true,
        size: 'small'
    },
    {
        key: '1002',
        type: 'Select',
        label: '单选下拉',
        model: 'singleSelect',
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
        //defaultHide: true
    },
    {
        key: '100211',
        type: 'Select',
        label: '单选下拉可搜索',
        model: 'singleSelectApi',
        required: true,
        api: '/selectApi',
        apiParams: ['radio'],
        //defaultHide: true
    },
    {
        key: '10021',
        type: 'Select',
        label: '多选下拉',
        multiple: true,
        model: 'multiSelect',
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
        required: true,
        //defaultHide: true
    },
    {
        key: '10023',
        type: 'Select',
        multiple: true,
        label: '多选下拉支持搜索',
        api: '/selectApi',
        apiParams: ['radio'],
        model: 'multiSelectApi',
        //defaultHide: true
    },
    // {
    //     key: '10023',
    //     type: 'Select',
    //     label: '多选下拉支持搜索',
    //     multiple: true,
    //     api: '',
    //     model: 'multiSelectRemote',
    //     options: [
    //         {
    //             label: '选项一',
    //             value: '1'
    //         },
    //         {
    //             label: '选项二',
    //             value: '2'
    //         }
    //     ]
    // },
    {
        type: 'Divider',
        label: '单选框',
        orientation: 'left',
        dashed: true,
        size: 'small'
    },
    {
        key: '1003',
        type: 'Radio',
        label: '单选',
        model: 'radio',
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
        required: true,
        //defaultHide: true
    },
    {
        key: '100311',
        type: 'Radio',
        subtype: 'button',
        label: '单选按钮',
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
        //defaultHide: true
    },
    {
        type: 'Divider',
        label: '复选框',
        orientation: 'left',
        dashed: true,
        size: 'small'
    },
    {
        key: '1004',
        type: 'Checkbox',
        label: '多选',
        model: 'checkbox',
        checkAll: true,
        options: [
            {
                label: '选项一',
                value: '1'
            },
            {
                label: '选项二',
                value: '2'
            },
            {
                label: '选项三',
                value: '3'
            },
            {
                label: '选项四',
                value: '4'
            }
        ],
        required: true,
        //defaultHide: true
    },
    {
        type: 'Divider',
        label: '级联选择',
        orientation: 'left',
        dashed: true,
        size: 'small'
    },
    {
        key: '1005',
        type: 'Cascader',
        label: '省/城市/景点',
        model: 'cascader',
        required: true,
        changeType: 'all',
        // changeType: 'step',
        options: [{
            value: 'beijing',
            label: '北京',
            children: [
                {
                    value: 'gugong',
                    label: '故宫'
                },
                {
                    value: 'tiantan',
                    label: '天坛'
                },
                {
                    value: 'wangfujing',
                    label: '王府井'
                }
            ]
        }, {
            value: 'jiangsu',
            label: '江苏',
            children: [
                {
                    value: 'nanjing',
                    label: '南京',
                    children: [
                        {
                            value: 'fuzimiao',
                            label: '夫子庙',
                        }
                    ]
                },
                {
                    value: 'suzhou',
                    label: '苏州',
                    children: [
                        {
                            value: 'zhuozhengyuan',
                            label: '拙政园',
                        },
                        {
                            value: 'shizilin',
                            label: '狮子林',
                            children: [
                                {
                                    value: '1',
                                    label: '选项一',
                                },
                                {
                                    value: '2',
                                    label: '选项2',
                                }
                            ]
                        }
                    ]
                }
            ],
        }],
        //defaultHide: true
    },
    {
        key: '1005',
        type: 'Cascader',
        label: '省/城市/景点-api',
        model: 'cascaderApi',
        required: true,
        api: '/cascaderApi',
        apiParams: ['radio'],
        //defaultHide: true,
        options: [{
            value: 'beijing',
            label: '北京',
            children: [
                {
                    value: 'gugong',
                    label: '故宫'
                },
                {
                    value: 'tiantan',
                    label: '天坛'
                },
                {
                    value: 'wangfujing',
                    label: '王府井'
                }
            ]
        }],

    },
    {
        type: 'Divider',
        label: '日期时间',
        orientation: 'left',
        dashed: true,
        size: 'small'
    },
    {
        key: '10006',
        type: 'DatePicker',
        subtype: 'date',
        label: '日期选择',
        model: 'date',
        placeholder: '',
        required: true,
        //defaultHide: true
    },
    {
        key: '100061',
        type: 'DatePicker',
        subtype: 'daterange',
        label: '日期区间选择',
        model: 'daterange',
        placeholder: '',
        required: true,
        //defaultHide: true
    },
    {
        key: '100062',
        type: 'DatePicker',
        subtype: 'datetime',
        label: '日期时间选择',
        model: 'datetime',
        placeholder: '',
        required: true,
        editable: true,
        clearable: true
        //defaultHide: true
    },
    {
        key: '100063',
        type: 'DatePicker',
        subtype: 'datetimerange',
        label: '日期时间区间选择',
        model: 'datetimerange',
        placeholder: '',
        required: true,
        //defaultHide: true
    },
    {
        type: 'Divider',
        label: '逻辑输入',
        orientation: 'left',
        dashed: true,
        size: 'small'
    },
    {
        key: '10007',
        type: 'LogicInput',
        label: '逻辑输入',
        model: 'logicInput',
        required: true,
        enables: ['=', '>', '>=', '<', '<=', 'betweenIn', 'betweenWith', '!=', 'multiple'],
        //defaultHide: true
    },
    {
        key: '10008',
        type: 'LogicSelect',
        label: '逻辑选择',
        model: 'logicSelect',
        required: true,
        enables: ['=', '>', '>=', '<', '<=', 'betweenIn', 'betweenWith', '!=', 'multiple'],
        options: [
            {
                label: '选项一',
                value: '1'
            },
            {
                label: '选项二',
                value: '2'
            },
            {
                label: '选项三',
                value: '3'
            },
            {
                label: '选项四',
                value: '4'
            }
        ],
        //defaultHide: true
    },
    {

        key: '100081',
        type: 'LogicSelect',
        label: '逻辑选择Api',
        model: 'logicSelectApi',
        required: true,
        enables: ['=', '>', '>=', '<', '<=', 'betweenIn', 'betweenWith', '!=', 'multiple'],
        api: '/selectApi',
        apiParams: ['radio'],
        //defaultHide: true
    },
    {
        type: 'Divider',
        label: '切换',
        orientation: 'left',
        dashed: true,
        size: 'small'
    },
    {
        key: '10009',
        type: 'Switch',
        label: '切换',
        trueValue: 'A',
        falseValue: 'B',
        model: 'switch',
    },
    {
        type: 'Divider',
        label: '文件上传',
        orientation: 'left',
        dashed: true,
        size: 'small'
    },
    {
        key: '1000111111',
        type: 'Upload',
        subtype: 'drag',
        accept: 'image/gif, image/jpeg, image/png',
        format: ['jpg','jpeg','png'],
        maxSize: 20000,
        action: '/uploadApi',
        multiple: false,
        paste: true,
        disabled: false,
        data: {
            userName: 'bingblog'
        },
        withCredentials: true,
        showUploadList: true,
        apiParams: ['radio'],
        label: '文件上传',
        model: 'upload',
        tip: '上传的提示信息或者帮助信息'
    },
    {
        key: '10001111111',
        type: 'ImgUpload',
        subtype: 'drag',
        accept: 'image/gif, image/jpeg, image/png',
        format: ['jpg','jpeg','png'],
        maxSize: 20000,
        action: '/uploadApi',
        multiple: true,
        paste: true,
        data: {
            userName: 'bingblog'
        },
        nameEditable: true,
        withCredentials: true,
        showUploadList: true,
        apiParams: ['radio'],
        label: '图片上传',
        model: 'imgUpload',
        tip: '上传的提示信息或者帮助信息'
    },
    {
        key: '1002311a',
        type: 'Select',
        label: '省',
        api: '/selectApi',
        model: 'province',
        //defaultHide: true
    },
    {
        key: '100231aaa',
        type: 'Select',
        label: '市',
        api: '/selectApi',
        apiParams: ['province'],
        model: 'cidy',
        defaultHide: true
    },
    {
        key: '10023acc',
        type: 'Select',
        label: '县',
        api: '/selectApi',
        apiParams: ['province', 'cidy'],
        model: 'town',
        defaultHide: true
    },
    {
        type: 'Submit',
        subtype: 'primary',
        text: '提交',
        width: '50%',
        inline: true
    },
    {
        type: 'Reset',
        subtype: 'primary',
        text: '重置',
        width: '50%',
        labelWidth: 0,
        inline: true
    }
];


export const model = {
    input: 'wangbing',
    'inputForbidden': 'wangbing',
    'textarea': '啊啊啊啊啊',
    singleSelect: '1',
    radioButton: '1',
    singleSelectApi: '1',
    multiSelect: ['1', '2'],
    multiSelectApi: ['1', '2'],
    checkbox: ['1', '2'],
    radio: '1',
    date: '2016-01-01',
    daterange: ['2016-01-01', '2016-02-15'],
    datetime: '2019-04-22 00:00:00',
    datetimerange: ['2019-04-22 00:00:00', '2019-05-30 00:00:00'],
    cascader: ['jiangsu', 'suzhou', 'shizilin', '1'],
    cascaderApi: ['jiangsu', 'suzhou', 'shizilin', '2'],
    inputNumber: 7,
    logicInput: {
        logic: 'betweenIn',
        value: ['1', '2']
    },
    logicSelect: {
        logic: 'betweenIn',
        value: ['1', '2']
    },
    logicSelectApi: {
        logic: 'betweenIn',
        value: ['1', '2']
    },
    switch: false,
    upload: [
        {
            id: '13414214123412421341234',
            name: 'img1img1img1img1img1.jpg',
            url: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3276523708,1156514398&fm=173&app=49&f=JPEG?w=218&h=146&s=DAB210C768C5AA471C5DFBA403007081'
        },
        {
            id: '13414214123412421341234',
            name: 'img2img2img2img2img2.jpg',
            url: 'https://pics1.baidu.com/feed/500fd9f9d72a6059c36c75cfc82edd9f023bba83.jpeg?token=e779a49797d7d1ed7ea5bf253dccd408&s=6151AB6415402EEE28D4C09B03009082'
        }
    ],
    imgUpload: [
        {
            id: '13414214123412421341234',
            name: 'img1img1img1img1img1.jpg',
            url: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3276523708,1156514398&fm=173&app=49&f=JPEG?w=218&h=146&s=DAB210C768C5AA471C5DFBA403007081'
        },
        {
            id: '13414214123412421341234',
            name: 'img2img2img2img2img2.jpg',
            url: 'https://pics1.baidu.com/feed/500fd9f9d72a6059c36c75cfc82edd9f023bba83.jpeg?token=e779a49797d7d1ed7ea5bf253dccd408&s=6151AB6415402EEE28D4C09B03009082'
        }
    ],
    province: '',
    city: '',
    town: ''
};

export const options = {
    labelWidth: 120,

    title: ' 分组表单',
    labelPosition: 'left',
    tip: {
        title: '规则',
        content: '规则内容',
    },
    // extraType: 'bottom',
    // inline: true,
    // itemWidth: '400',
    // apiBase: '',
    // size: 'small'
};


export const config = {
    fields: fields.map(item => {
        item.defaultValue = model[item.model];
        return item;
    }),
    options
};
