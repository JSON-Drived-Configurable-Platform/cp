export const fields = [
    {
        type: 'Divider',
        // label: '输入框',
        orientation: 'left',
        dashed: true,
        size: 'small'
    },
    {
        type: 'Input',
        label: '输入框',
        model: 'input',
        placeholder: '请输入用户名',
        required: true,
        defaultHide: false,
        labelTip: {
            icon: {
                name: 'ios-help-circle-outline',
                size: 24
            },
            content: {
                body: '<div class="example"><span></span>输入框：自定义提示</div>',
                ifShow: false
            }
        }
    },
    {
        type: 'Input',
        label: '用户名-禁用',
        model: 'inputForbidden',
        readonly: true,
        disabled: true,
        placeholder: '请输入用户名',
        defaultHide: false,
        labelTip: {
            class: 'inputForbidden',
            icon: {
                name: 'ios-help-circle-outline',
                size: 24
            },
            content: {
                body: '<div class="example"><span></span>用户名：自定义提示</div>',
                ifShow: false
            }
        }
    },
    {
        type: 'Input',
        subtype: 'textarea',
        label: '输入框',
        model: 'textarea',
        placeholder: '请输入用户名',
        required: true,
        defaultHide: false
    },
    {
        type: 'InputNumber',
        label: '数值多行输入框',
        model: 'inputNumber',
        placeholder: '',
        required: true
        //defaultHide: true
    },
    {
        type: 'InputMultiple',
        label: '多条记录输入框',
        model: 'inputMultiple',
        placeholder: '输入内容必须是英文字母和数字，并且英文字母开头',
        required: true,
        defaultList: ['默认用户'],
        succMessage: '添加成功',
        delMessage: '删除成功',
        inputRules: {
            type: 'string',
            required: true,
            pattern: /^[A-z]+\d*$/g,
            message: '输入内容必须是英文字母和数字，并且英文字母开头'
        },
    },
    {
        type: 'TimePickerMultiple',
        label: '多条记录时间输入框',
        model: 'timePickerMultiple',
        placeholder: '',
        required: true,
        tips: '支持多时间段：05:00 - 06:00',
        format: 'HH:mm',
        timeSplit: ' - '
    },
    {
        type: 'Divider',
        label: '下拉选择',
        orientation: 'left',
        dashed: true,
        size: 'small'
    },
    {
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
        type: 'Select',
        label: '单选下拉可搜索',
        model: 'singleSelectApi',
        required: true,
        api: '/selectApi',
        apiParams: ['radio', 'paramsContainerTest'],
        //defaultHide: true
    },
    {
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
        type: 'Select',
        multiple: true,
        label: '多选下拉支持搜索',
        api: '/selectApi',
        apiParams: 'all',
        model: 'multiSelectApi',
        //defaultHide: true
    },
    // {
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
        label: '卡片多选',
        type: 'CheckboxCard',
        model: 'card',
        checkAll: true,
        pageLation: true, // 是否分页
        pageSize: 3, // 分页数目
        'headerEditable': true,
        'footerEditable': true,
        'cardWidth': '220px',
        'cardHeight': '245px',
        'optionsType': 'image',
        'options': '/checkboxCardApi',
        inline: true,
        required: true
    },
    {
        type: 'Divider',
        label: '表格选择',
        orientation: 'left',
        dashed: true,
        size: 'small'
    },
    {
        type: 'TableSelect',
        label: '表格单选',
        model: 'tableSelect',
        columns: [
            {
                title: '名称',
                key: 'name'
            },
            {
                title: '描述',
                key: 'description'
            }
        ],
        options: [
            {
                id: 1,
                name: 'admin',
                description: '超级管理员，拥有所有权限',
                create_time: '2019-9-10',
                update_time: '2019-10-10'
            },
            {
                id: 2,
                name: 'user',
                description: '普通用户，只有浏览的权限',
                create_time: '2019-9-10',
                update_time: '2019-10-10'
            },
            {
                id: 3,
                name: 'editor',
                description: '编辑，可以编辑、发布文章等',
                create_time: '2019-9-10',
                update_time: '2019-10-10'
            },
            {
                id: 4,
                name: 'auditor',
                description: '审核人员，可以查看、审核文案',
                create_time: '2019-9-10',
                update_time: '2019-10-10'
            }
        ]
    },
    {
        type: 'TableSelect',
        label: '表格多选',
        multiple: true,
        model: 'multipleTableSelect',
        columns: [
            {
                title: '名称',
                key: 'name'
            },
            {
                title: '描述',
                key: 'description'
            }
        ],
        options: [
            {
                id: 1,
                name: 'admin',
                description: '超级管理员，拥有所有权限',
                create_time: '2019-9-10',
                update_time: '2019-10-10'
            },
            {
                id: 2,
                name: 'user',
                description: '普通用户，只有浏览的权限',
                create_time: '2019-9-10',
                update_time: '2019-10-10'
            },
            {
                id: 3,
                name: 'editor',
                description: '编辑，可以编辑、发布文章等',
                create_time: '2019-9-10',
                update_time: '2019-10-10'
            },
            {
                id: 4,
                name: 'auditor',
                description: '审核人员，可以查看、审核文案',
                create_time: '2019-9-10',
                update_time: '2019-10-10'
            }
        ]
    },
    {
        type: 'Divider',
        label: '树形选择',
        orientation: 'left',
        dashed: true,
        size: 'small'
    },
    {
        type: 'Tree',
        label: '树形单选',
        model: 'tree',
        options: [
            {
                id: '1',
                title: '用户管理',
                children: [
                    {
                        id: '2',
                        title: '查看用户',
                    },
                    {
                        id: '3',
                        title: '新增用户',
                    },
                    {
                        id: '4',
                        title: '编辑用户',
                    },
                    {
                        id: '5',
                        title: '删除用户',
                    },
                    {
                        id: '11',
                        title: '编辑用户角色',
                    }
                ]
            },
            {
                id: '6',
                title: '角色管理',
                children: [
                    {
                        id: '7',
                        title: '查看角色',
                    },
                    {
                        id: '8',
                        title: '新增角色',
                    },
                    {
                        id: '9',
                        title: '编辑角色',
                    },
                    {
                        id: '10',
                        title: '删除角色',
                    }
                ]
            }
        ]
    },
    {
        type: 'Tree',
        label: '树形多选',
        model: 'multipleTree',
        multiple: true,
        showCheckbox: true,
        options: [
            {
                id: '1',
                title: '用户管理',
                children: [
                    {
                        id: '2',
                        title: '查看用户',
                    },
                    {
                        id: '3',
                        title: '新增用户',
                    },
                    {
                        id: '4',
                        title: '编辑用户',
                    },
                    {
                        id: '5',
                        title: '删除用户',
                    },
                    {
                        id: '11',
                        title: '编辑用户角色',
                    }
                ]
            },
            {
                id: '6',
                title: '角色管理',
                children: [
                    {
                        id: '7',
                        title: '查看角色',
                    },
                    {
                        id: '8',
                        title: '新增角色',
                    },
                    {
                        id: '9',
                        title: '编辑角色',
                    },
                    {
                        id: '10',
                        title: '删除角色',
                    }
                ]
            }
        ]
    },
    {
        type: 'Divider',
        label: '级联选择',
        orientation: 'left',
        dashed: true,
        size: 'small'
    },
    {
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
        type: 'Cascader',
        label: '省/城市/景点-api',
        model: 'cascaderApi',
        required: true,
        api: '/cascaderApi',
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
        type: 'DatePicker',
        subtype: 'date',
        label: '日期选择',
        model: 'date',
        placeholder: '',
        required: true,
        //defaultHide: true
    },
    {
        type: 'DatePicker',
        subtype: 'daterange',
        label: '日期区间选择',
        model: 'daterange',
        placeholder: '',
        required: true,
        //defaultHide: true
    },
    {
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
        type: 'LogicInput',
        label: '逻辑输入',
        model: 'logicInput',
        required: true,
        enables: ['=', '>', '>=', '<', '<=', 'betweenIn', 'betweenWith', '!=', 'multiple'],
        //defaultHide: true
    },
    {
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
        type: 'Upload',
        subtype: 'drag',
        accept: 'application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        format: ['doc', 'docx'],
        maxSize: 20000,
        action: '/uploadApi',
        apiKey: 'url',

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
        tip: '上传的提示信息或者帮助信息',
        required: true,
    },
    {
        type: 'ImgUpload',
        subtype: 'drag',
        maxSize: 20000,
        action: '/uploadApi',
        multiple: true,
        paste: true,
        data: {
            userName: 'bingblog'
        },
        nameEditable: true,
        withCredentials: true,
        label: '图片上传',
        model: 'imgUpload',
        tip: '上传的提示信息或者帮助信息',
        required: true,
    },
    {
        type: 'VideoUpload',
        subtype: 'drag',
        maxSize: 20000,
        action: '/uploadVideoApi',
        multiple: true,
        paste: true,
        data: {
            userName: 'bingblog'
        },
        nameEditable: true,
        withCredentials: true,
        label: '视频上传',
        model: 'videoUpload',
        tip: '上传的提示信息或者帮助信息',
        required: true,
    },
    {
        type: 'MediaUpload',
        subtype: 'drag',
        maxSize: 200000,
        action: '/uploadVideoApi',
        multiple: true,
        paste: true,
        // disabled: true,
        data: {
            userName: 'bingblog'
        },
        nameEditable: true,
        withCredentials: true,
        label: '媒体上传',
        model: 'mediaUpload',
        tip: '上传的提示信息或者帮助信息',
        required: true,
    },
    {
        type: 'Select',
        label: '省',
        api: '/selectApi',
        model: 'province',
        //defaultHide: true
    },
    {
        type: 'Select',
        label: '市',
        api: '/selectApi',
        apiParams: ['province'],
        model: 'city',
    },
    {
        type: 'Input',
        label: '根据model值变换规则',
        model: 'inputRule',
        rules: {
            // input: [{
            //     value: 'wang',
            //     rules: [
            //         {
            //             type: 'enum',
            //             enum: ['haha'],
            //             message: '请填入正确的值'
            //         }
            //     ]
            // },
            // {
            //     value: 'xxx-1',
            //     rules: [
            //         {
            //             type: 'string',
            //             // required: true,
            //             message: '请填写表单信息'
            //         }
            //     ]
            // }],
            paramsContainerTest: [{
                value: 'xxx',
                rules: [
                    {
                        type: 'string',
                        required: true,
                        message: '请填写表单信息'
                    }
                ]
            },
            {
                value: 'xxx-1',
                rules: [
                    {
                        type: 'string',
                        // required: true,
                        message: '请填写表单信息'
                    }
                ]
            }]
        }
    },
    {
        type: 'Select',
        label: '县',
        api: '/selectApi',
        apiParams: ['province', 'city'],
        model: 'town',
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
    input: 'wang',
    'inputForbidden': 'wangbing',
    'textarea': '啊啊啊啊啊',
    inputMultiple: ['成员1', '成员2'],
    timePickerMultiple: ['05:00 - 08:00'],
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
    tableSelect: 1,
    multipleTableSelect: [1, 2],
    tree: ['2'],
    multipleTree: ['1', '2', '10'],
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
    switch: true,
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
    ],
    videoUpload: [
        {
            id: '134142141234121421341234',
            name: '08a237bc1a51794c8e3ff2d410045066.mp4',
            url: 'http://sc2.hao123img.com/materials/xz.upload/08/08a237bc1a51794c8e3ff2d410045066.mp4'
        },
        {
            id: '134142141234124213421234',
            name: 'b6aafe3af127fd2ef47a1afb54fcd4bd.mp4',
            url: 'http://sc4.hao123img.com/materials/xz.upload/b6/b6aafe3af127fd2ef47a1afb54fcd4bd.mp4'
        }
    ],
    mediaUpload: [
        {
            id: '134142141234121421341234',
            name: '08a237bc1a51794c8e3ff2d410045066.mp4',
            url: 'http://sc2.hao123img.com/materials/xz.upload/08/08a237bc1a51794c8e3ff2d410045066.mp4'
        },
    ],
    province: '',
    city: '',
    town: ''
};

// export const model = {
//     input: 'df',
//     inputForbidden: '',
//     textarea: '',
//     inputMultiple: ['成员1', '成员2'],
//     timePickerMultiple: ['05:00 - 08:00'],
//     singleSelect: '',
//     radioButton: '',
//     singleSelectApi: '',
//     multiSelect: [],
//     multiSelectApi: [],
//     checkbox: [],
//     radio: '1',
//     date: '',
//     daterange: [],
//     datetime: '',
//     datetimerange: [],
//     cascader: [],
//     cascaderApi: [],
//     tableSelect: 1,
//     multipleTableSelect: [1, 2],
//     tree: ['2'],
//     multipleTree: ['1', '2', '10'],
//     inputNumber: 0,
//     logicInput: {},
//     logicSelect: {},
//     logicSelectApi: {},
//     switch: false,
//     upload: [],
//     imgUpload: [],
//     videoUpload: [],
//     mediaUpload: [],
//     province: '',
//     city: '',
//     town: ''
// };

export const options = {
    labelWidth: 130,

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
