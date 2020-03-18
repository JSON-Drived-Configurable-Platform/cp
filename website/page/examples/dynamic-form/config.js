const basicFormsConfig = [
    {
        type: 'Divider',
        label: '基本信息',
        orientation: 'left',
        dashed: true,
        size: 'small'
    },
    {
        type: 'Input',
        label: '加密token',
        model: 'token',
        placeholder: '请联系RD获取加密token，测试环境为:xxxx',
        required: true
    },
    {
        type: 'Input',
        label: '二维码回流url',
        model: 'url',
        placeholder: '请输入二维码回流url',
        required: true,
        defaultHide: false
    },
    {
        type: 'Input',
        label: '背景图片的key',
        model: 'key',
        placeholder: '请输入背景图片的key',
        required: true
    },
    {
        type: 'Divider',
        label: '二维码水印配置',
        orientation: 'left',
        dashed: true,
        size: 'small'
    },
    {
        type: 'Select',
        label: '添加位置',
        model: 'imgWmOpts.g',
        options: [
            {
                label: '1',
                value: '1'
            },
            {
                label: '2',
                value: '2',
            },
            {
                label: '3',
                value: '3'
            },
            {
                label: '4',
                value: '4',
            },
            {
                label: '5',
                value: '5'
            },
            {
                label: '6',
                value: '6',
            },
            {
                label: '7',
                value: '7',
            },
            {
                label: '8',
                value: '8',
            },
            {
                label: '9',
                value: '9',
            }
        ]
    },
    {
        type: 'InputNumber',
        label: '距左边距距离',
        model: 'imgWmOpts.x',
        placeholder: '指定格内,距左边距距离（默认10）',
        required: true,
    },
    {
        type: 'InputNumber',
        label: '距左边距距离',
        model: 'imgWmOpts.y',
        placeholder: '指定格内,距下边距距离（默认10）',
        required: true,
    },
    {
        type: 'Divider',
        label: '二维码生成配置',
        orientation: 'left',
        dashed: true,
        size: 'small'
    },
    {
        type: 'InputNumber',
        label: '二维码宽度',
        model: 'qrOpts.width',
        placeholder: '二维码宽度（单位px）默认240',
        required: true,
    },
    {
        type: 'InputNumber',
        label: '二维码白边宽度',
        model: 'qrOpts.margin',
        placeholder: '指定格内,距左边距距离（默认10）',
        required: true,
    },
    {
        type: 'InputNumber',
        label: '距左边距距离',
        model: 'qrOpts.y',
        placeholder: '指定格内,距下边距距离（默认10）',
        required: true,
    },
    {
        type: 'Input',
        label: '二维码深色',
        model: 'qrOpts.color.dark',
        placeholder: '二维码深色RGBA 默认”#000000ff”',
        required: true
    },
    {
        type: 'Input',
        label: '二维码浅色',
        model: 'qrOpts.color.light',
        placeholder: '二维码浅色RGBA 默认”#ffffffff”',
        required: true
    },
];

// 动态配置
const dynamicFormConfig = [
    {
        type: 'Select',
        label: '添加位置',
        model: 'wm',
        options: [
            {
                label: '图片',
                value: '1'
            },
            {
                label: '文字',
                value: '2',
            }
        ]
    },
    {
        type: 'Input',
        label: '文字内容',
        model: 't',
        placeholder: '二维码深色RGBA 默认”#000000ff”',
        required: true
    },
    {
        type: 'Select',
        label: 'g',
        model: 'imgWmOpts.g',
        options: [
            {
                label: '1',
                value: '1'
            },
            {
                label: '2',
                value: '2',
            },
            {
                label: '3',
                value: '3'
            },
            {
                label: '4',
                value: '4',
            },
            {
                label: '5',
                value: '5'
            },
            {
                label: '6',
                value: '6',
            },
            {
                label: '7',
                value: '7',
            },
            {
                label: '8',
                value: '8',
            },
            {
                label: '9',
                value: '9',
            }
        ]
    },
    {
        type: 'Button',
        text: '删除该组',
        subtype: 'primary',
        size: 'small',
        action: {
            type: 'event',
            name: 'delete'
        },
        inline: true
    },
    {
        type: 'Button',
        text: '添加一组',
        subtype: 'primary',
        size: 'small',
        action: {
            type: 'event',
            name: 'add'
        },
        inline: true
    },
];

export default {
    basicFormsConfig,
    dynamicFormConfig
};
