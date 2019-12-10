const businessFormFields = [
    {
        type: 'Divider',
        label: '业务线',
        orientation: 'left',
        dashed: true,
        size: 'small'
    },
    {
        type: 'Select',
        label: '业务线场景和表',
        model: 'business',
        options: [
            {
                label: 'APP',
                value: '1'
            },
            {
                label: '小程序',
                value: '2',
            }
        ]
    }
];

const businessFormModel = {
    business: '',
};


const conditions_1 = [
    {
        type: 'Divider',
        label: '查询条件',
        orientation: 'left',
        dashed: true,
        size: 'small'
    },
    {
        'label': '时间',
        'type': 'DatePicker',
        'subtype': 'daterange',
        'model': 'date',
        'required': true,
        'defaultValue': ['2019-08-28', '2019-08-28']
    },
    {
        'label': 'APP',
        'type': 'Select',
        'model': 'APP',
        'required': true,
        'options': [
            {
                'label': 'APP主版',
                'value': '1'
            },
            {
                'label': 'APPlite版本',
                'value': '2'
            }
        ],
        'defaultValue': ''
    },
    {
        'label': '渠道号',
        'type': 'Select',
        'model': 'source',
        'multiple': true,
        'required': false,
        'defaultValue': [],
        'options': [
            {
                'label': 'x1450003a',
                'value': 'x1450003a'
            },
            {
                'label': 'x14500134t',
                'value': 'x14500134t'
            },
            {
                'label': 'x14500134u',
                'value': 'x14500134u'
            },
            {
                'label': 'x14500139e',
                'value': 'x14500139e'
            },
        ]
    },
    {
        'label': '新增用户数',
        'type': 'LogicInput',
        'model': 'new_user',
        'required': false,
        'enables': [
            '>=',
            '<='
        ],
        'defaultValue': {
            'logic': '>=',
            'value': ''
        }
    },
    {
        'label': '渠道标签',
        'type': 'Select',
        'model': 'sourceTag',
        'multiple': true,
        'required': false,
        'defaultValue': [],
        'options': [
            {
                'label': '刷机',
                'value': '刷机'
            },
            {
                'label': '方案商',
                'value': '方案商'
            },
            {
                'label': '厂商',
                'value': '厂商'
            },
            {
                'label': '运营商',
                'value': '运营商'
            },
            {
                'label': '网站',
                'value': '网站'
            },
            {
                'label': '网推',
                'value': '网推'
            },
            {
                'label': '厂商商店',
                'value': '厂商商店'
            },
            {
                'label': '第三方应用',
                'value': '第三方应用'
            },
            {
                'label': '安卓第三方商店',
                'value': '安卓第三方商店'
            },
            {
                'label': '苹果第三方商店',
                'value': '苹果第三方商店'
            },
            {
                'label': '资源合作',
                'value': '资源合作'
            },
            {
                'label': '合作',
                'value': '合作'
            },
            {
                'label': 'banner',
                'value': 'banner'
            },
            {
                'label': '垂类合作',
                'value': '垂类合作'
            },
            {
                'label': '系应用',
                'value': '系应用'
            },
            {
                'label': '客户端合作',
                'value': '客户端合作'
            },
            {
                'label': '活动',
                'value': '活动'
            },
            {
                'label': '支付中间页',
                'value': '支付中间页'
            },
            {
                'label': '分享页',
                'value': '分享页'
            },
            {
                'label': 'feed',
                'value': 'feed'
            },
            {
                'label': 'appstore',
                'value': 'appstore'
            },
            {
                'label': 'SEM',
                'value': 'SEM'
            },
            {
                'label': 'DSP',
                'value': 'DSP'
            },
            {
                'label': 'PC官网',
                'value': 'PC官网'
            },
            {
                'label': 'wap官网',
                'value': 'wap官网'
            },
            {
                'label': '外部DSP',
                'value': '外部DSP'
            },
            {
                'label': '外部SEM',
                'value': '外部SEM'
            },
            {
                'label': '浏览器',
                'value': '浏览器'
            },
            {
                'label': '聚屏',
                'value': '聚屏'
            },
            {
                'label': 'DSP运营',
                'value': 'DSP运营'
            },
            {
                'label': '浏览器内置',
                'value': '浏览器内置'
            }
        ]
    },
    {
        'label': 'TOP合作方',
        'model': 'patener',
        'type': 'Select',
        'multiple': true,
        'required': false,
        'defaultValue': [],
        'options': [
            {
                'label': '2345',
                'value': '2345'
            },
            {
                'label': '360',
                'value': '360'
            },
            {
                'label': 'appstore',
                'value': 'appstore'
            },
            {
                'label': 'FEED',
                'value': 'FEED'
            },
            {
                'label': 'GOOGLE',
                'value': 'GOOGLE'
            },
            {
                'label': 'Inmobi',
                'value': 'Inmobi'
            },
            {
                'label': 'OPPO',
                'value': 'OPPO'
            },
            {
                'label': 'OPPO商店',
                'value': 'OPPO商店'
            },
            {
                'label': 'PP助手',
                'value': 'PP助手'
            },
            {
                'label': '三星',
                'value': '三星'
            },
            {
                'label': '三星商店',
                'value': '三星商店'
            },
            {
                'label': '上海二三四五',
                'value': '上海二三四五'
            },
            {
                'label': '上海劲逗',
                'value': '上海劲逗'
            },
            {
                'label': '上海聿动',
                'value': '上海聿动'
            },
            {
                'label': '中兴',
                'value': '中兴'
            },
            {
                'label': '中兴商店',
                'value': '中兴商店'
            },
            {
                'label': '中国移动',
                'value': '中国移动'
            },
            {
                'label': '乐泾达',
                'value': '乐泾达'
            }
        ]
    },
    {
        type: 'Divider',
        label: '查询指标',
        orientation: 'left',
        dashed: true,
        size: 'small'
    },
    {
        label: '指标',
        type: 'Select',
        model: 'target',
        multiple: true,
        filterable: true,
        options: [
            {
                groupLabel: '留存',
                groupOptions: [
                    {
                        'label': '次日留存率',
                        'value': 'x145295'
                    },
                    {
                        'label': '次日留存数',
                        'value': 'x145296'
                    },
                    {
                        'label': '2日留存率',
                        'value': 'x145297'
                    },
                    {
                        'label': '2日留存数',
                        'value': 'x145298'
                    },
                    {
                        'label': '3日留存率',
                        'value': 'x145299'
                    },
                    {
                        'label': '3日留存数',
                        'value': 'x145300'
                    },
                    {
                        'label': '4日留存率',
                        'value': 'x145301',
                    },
                    {
                        'label': '4日留存数',
                        'value': 'x145302',
                    },
                    {
                        'label': '5日留存率',
                        'value': 'x145303',
                    },
                    {
                        'label': '5日留存数',
                        'value': 'x145304',
                    },
                    {
                        'label': '6日留存率',
                        'value': 'x145305',
                    },
                    {
                        'label': '6日留存数',
                        'value': 'x145306',
                    },
                    {
                        'label': '7日留存率',
                        'value': 'x145307',
                    },
                    {
                        'label': '7日留存数',
                        'value': 'x145308',
                    },
                    {
                        'label': '15日留存率',
                        'value': 'x145309',
                    },
                    {
                        'label': '15日留存数',
                        'value': 'x1453x145',
                    },
                    {
                        'label': '30日留存率',
                        'value': 'x145311',
                    },
                    {
                        'label': '30日留存数',
                        'value': 'x145312',
                    },
                ]
            },
            {
                groupLabel: '指标',
                groupOptions: [
                    {
                        'label': 'APP',
                        'value': 'x145292'
                    },
                    {
                        'label': '渠道号',
                        'value': 'x145293'
                    },
                    {
                        'label': '新增用户数',
                        'value': 'x145294'
                    },
                    {
                        'label': 'DAU周贡献',
                        'value': 'x145314',
                    },
                    {
                        'label': '渠道标签',
                        'value': 'x145316',
                    },
                    {
                        'label': 'TOP合作方',
                        'value': 'x145317',
                    },
                    {
                        'label': '渠道名',
                        'value': 'x145319',
                    },
                    {
                        'label': '预后装',
                        'value': 'x145320',
                    },
                    {
                        'label': '代理',
                        'value': 'x145321',
                    },
                    {
                        'label': '兑换类型',
                        'value': '11587',
                    },
                    {
                        'label': '合作模式',
                        'value': '11588',
                    }
                ]
            }
        ]
    },
    {
        label: '排序指标',
        type: 'Select',
        model: 'sortTarget',
        width: '50%',
        inline: true,
        defaultValue: '',
        options: [
            {
                groupLabel: '留存',
                groupOptions: [
                    {
                        'label': '次日留存率',
                        'value': 'x145295'
                    },
                    {
                        'label': '次日留存数',
                        'value': 'x145296'
                    },
                    {
                        'label': '2日留存率',
                        'value': 'x145297'
                    },
                    {
                        'label': '2日留存数',
                        'value': 'x145298'
                    },
                    {
                        'label': '3日留存率',
                        'value': 'x145299'
                    },
                    {
                        'label': '3日留存数',
                        'value': 'x145300'
                    },
                    {
                        'label': '4日留存率',
                        'value': 'x145301',
                    },
                    {
                        'label': '4日留存数',
                        'value': 'x145302',
                    },
                    {
                        'label': '5日留存率',
                        'value': 'x145303',
                    },
                    {
                        'label': '5日留存数',
                        'value': 'x145304',
                    },
                    {
                        'label': '6日留存率',
                        'value': 'x145305',
                    },
                    {
                        'label': '6日留存数',
                        'value': 'x145306',
                    },
                    {
                        'label': '7日留存率',
                        'value': 'x145307',
                    },
                    {
                        'label': '7日留存数',
                        'value': 'x145308',
                    },
                    {
                        'label': '15日留存率',
                        'value': 'x145309',
                    },
                    {
                        'label': '15日留存数',
                        'value': 'x1453x145',
                    },
                    {
                        'label': '30日留存率',
                        'value': 'x145311',
                    },
                    {
                        'label': '30日留存数',
                        'value': 'x145312',
                    },
                ]
            },
            {
                groupLabel: '指标',
                groupOptions: [
                    {
                        'label': 'APP',
                        'value': 'x145292'
                    },
                    {
                        'label': '渠道号',
                        'value': 'x145293'
                    },
                    {
                        'label': '新增用户数',
                        'value': 'x145294'
                    },
                    {
                        'label': 'DAU周贡献',
                        'value': 'x145314',
                    },
                    {
                        'label': '渠道标签',
                        'value': 'x145316',
                    },
                    {
                        'label': 'TOP合作方',
                        'value': 'x145317',
                    },
                    {
                        'label': '渠道名',
                        'value': 'x145319',
                    },
                    {
                        'label': '预后装',
                        'value': 'x145320',
                    },
                    {
                        'label': '代理',
                        'value': 'x145321',
                    },
                    {
                        'label': '兑换类型',
                        'value': '11587',
                    },
                    {
                        'label': '合作模式',
                        'value': '11588',
                    }
                ]
            }
        ]
    },
    {
        type: 'Radio',
        model: 'sortMethod',
        width: '50%',
        labelWidth: 10,
        inline: true,
        defaultValue: '',
        options: [
            {
                label: '升序',
                value: 'asc'
            },
            {
                label: '降序',
                value: 'desc'
            },
            {
                label: '默认',
                value: 'default'
            }
        ]
    },
    {
        type: 'Divider',
        label: '条数限制',
        orientation: 'left',
        dashed: true,
        size: 'small'
    },
    {
        type: 'Input',
        label: '限制条数',
        model: 'limit',
        defaultValue: 'x14500'
    }
];

const conditions_2 = [
    {
        type: 'Divider',
        label: '查询条件',
        orientation: 'left',
        dashed: true,
        size: 'small'
    },
    {
        'label': '时间',
        'type': 'DatePicker',
        'subtype': 'daterange',
        'model': 'date',
        'required': true,
        'defaultValue': ['2019-08-28', '2019-08-28']
    },
    {
        'label': '新增用户数',
        'type': 'LogicInput',
        'model': 'new_user',
        'required': false,
        'enables': [
            '>=',
            '<='
        ],
        'defaultValue': {
            'logic': '>=',
            'value': ''
        }
    },
    {
        'label': 'TOP合作方',
        'model': 'patener',
        'type': 'Select',
        'multiple': true,
        'required': false,
        'defaultValue': [],
        'options': [
            {
                'label': '2345',
                'value': '2345'
            },
            {
                'label': '360',
                'value': '360'
            },
            {
                'label': 'appstore',
                'value': 'appstore'
            },
            {
                'label': 'FEED',
                'value': 'FEED'
            },
            {
                'label': 'GOOGLE',
                'value': 'GOOGLE'
            },
            {
                'label': 'Inmobi',
                'value': 'Inmobi'
            },
            {
                'label': 'OPPO',
                'value': 'OPPO'
            },
            {
                'label': 'OPPO商店',
                'value': 'OPPO商店'
            },
            {
                'label': 'PP助手',
                'value': 'PP助手'
            },
            {
                'label': 'QQ浏览器-值尚互动',
                'value': 'QQ浏览器-值尚互动'
            },
            {
                'label': 'QQ浏览器-小子科技',
                'value': 'QQ浏览器-小子科技'
            },
            {
                'label': 'QQ浏览器-曲水掌阅',
                'value': 'QQ浏览器-曲水掌阅'
            },
            {
                'label': 'QQ浏览器-致维科技',
                'value': 'QQ浏览器-致维科技'
            },
            {
                'label': 'UC信息流-上海菲索',
                'value': 'UC信息流-上海菲索'
            },
            {
                'label': 'UC信息流-致维科技',
                'value': 'UC信息流-致维科技'
            },
            {
                'label': 'UC信息流-霍尔果斯乐创',
                'value': 'UC信息流-霍尔果斯乐创'
            },
            {
                'label': 'VIVO',
                'value': 'VIVO'
            },
            {
                'label': 'VIVO商店',
                'value': 'VIVO商店'
            },
            {
                'label': 'wifi万能钥匙-康远',
                'value': 'wifi万能钥匙-康远'
            },
            {
                'label': 'wifi万能钥匙-百传',
                'value': 'wifi万能钥匙-百传'
            },
            {
                'label': 'wifi万能钥匙-直投',
                'value': 'wifi万能钥匙-直投'
            },
            {
                'label': 'wifi万能钥匙-辉煌',
                'value': 'wifi万能钥匙-辉煌'
            },
            {
                'label': '三星',
                'value': '三星'
            },
            {
                'label': '三星商店',
                'value': '三星商店'
            },
        ]
    },
    {
        type: 'Divider',
        label: '查询指标',
        orientation: 'left',
        dashed: true,
        size: 'small'
    },
    {
        label: '指标',
        type: 'Select',
        model: 'target',
        multiple: true,
        filterable: true,
        options: [
            {
                groupLabel: '留存',
                groupOptions: [
                    {
                        'label': '次日留存率',
                        'value': 'x145295'
                    },
                    {
                        'label': '次日留存数',
                        'value': 'x145296'
                    },
                    {
                        'label': '2日留存率',
                        'value': 'x145297'
                    },
                    {
                        'label': '2日留存数',
                        'value': 'x145298'
                    },
                    {
                        'label': '3日留存率',
                        'value': 'x145299'
                    },
                    {
                        'label': '3日留存数',
                        'value': 'x145300'
                    },
                    {
                        'label': '4日留存率',
                        'value': 'x145301',
                    },
                    {
                        'label': '4日留存数',
                        'value': 'x145302',
                    },
                    {
                        'label': '5日留存率',
                        'value': 'x145303',
                    },
                    {
                        'label': '5日留存数',
                        'value': 'x145304',
                    },
                    {
                        'label': '6日留存率',
                        'value': 'x145305',
                    },
                    {
                        'label': '6日留存数',
                        'value': 'x145306',
                    },
                    {
                        'label': '7日留存率',
                        'value': 'x145307',
                    },
                    {
                        'label': '7日留存数',
                        'value': 'x145308',
                    },
                    {
                        'label': '15日留存率',
                        'value': 'x145309',
                    },
                    {
                        'label': '15日留存数',
                        'value': 'x1453x145',
                    },
                    {
                        'label': '30日留存率',
                        'value': 'x145311',
                    },
                    {
                        'label': '30日留存数',
                        'value': 'x145312',
                    },
                ]
            },
            {
                groupLabel: '指标',
                groupOptions: [
                    {
                        'label': 'APP',
                        'value': 'x145292'
                    },
                    {
                        'label': '渠道号',
                        'value': 'x145293'
                    },
                    {
                        'label': '新增用户数',
                        'value': 'x145294'
                    },
                    {
                        'label': 'DAU周贡献',
                        'value': 'x145314',
                    },
                    {
                        'label': '渠道标签',
                        'value': 'x145316',
                    },
                    {
                        'label': 'TOP合作方',
                        'value': 'x145317',
                    },
                    {
                        'label': '渠道名',
                        'value': 'x145319',
                    },
                    {
                        'label': '预后装',
                        'value': 'x145320',
                    },
                    {
                        'label': '代理',
                        'value': 'x145321',
                    },
                    {
                        'label': '兑换类型',
                        'value': '11587',
                    },
                    {
                        'label': '合作模式',
                        'value': '11588',
                    }
                ]
            }
        ]
    },
    {
        label: '排序指标',
        type: 'Select',
        model: 'sortTarget',
        width: '50%',
        inline: true,
        defaultValue: '',
        options: [
            {
                groupLabel: '留存',
                groupOptions: [
                    {
                        'label': '次日留存率',
                        'value': 'x145295'
                    },
                    {
                        'label': '次日留存数',
                        'value': 'x145296'
                    },
                    {
                        'label': '2日留存率',
                        'value': 'x145297'
                    },
                    {
                        'label': '2日留存数',
                        'value': 'x145298'
                    },
                    {
                        'label': '3日留存率',
                        'value': 'x145299'
                    },
                    {
                        'label': '3日留存数',
                        'value': 'x145300'
                    },
                    {
                        'label': '4日留存率',
                        'value': 'x145301',
                    },
                    {
                        'label': '4日留存数',
                        'value': 'x145302',
                    },
                    {
                        'label': '5日留存率',
                        'value': 'x145303',
                    },
                    {
                        'label': '5日留存数',
                        'value': 'x145304',
                    },
                    {
                        'label': '6日留存率',
                        'value': 'x145305',
                    },
                    {
                        'label': '6日留存数',
                        'value': 'x145306',
                    },
                    {
                        'label': '7日留存率',
                        'value': 'x145307',
                    },
                    {
                        'label': '7日留存数',
                        'value': 'x145308',
                    },
                    {
                        'label': '15日留存率',
                        'value': 'x145309',
                    },
                    {
                        'label': '15日留存数',
                        'value': 'x1453x145',
                    },
                    {
                        'label': '30日留存率',
                        'value': 'x145311',
                    },
                    {
                        'label': '30日留存数',
                        'value': 'x145312',
                    },
                ]
            },
            {
                groupLabel: '指标',
                groupOptions: [
                    {
                        'label': 'APP',
                        'value': 'x145292'
                    },
                    {
                        'label': '渠道号',
                        'value': 'x145293'
                    },
                    {
                        'label': '新增用户数',
                        'value': 'x145294'
                    },
                    {
                        'label': 'DAU周贡献',
                        'value': 'x145314',
                    },
                    {
                        'label': '渠道标签',
                        'value': 'x145316',
                    },
                    {
                        'label': 'TOP合作方',
                        'value': 'x145317',
                    },
                    {
                        'label': '渠道名',
                        'value': 'x145319',
                    },
                    {
                        'label': '预后装',
                        'value': 'x145320',
                    },
                    {
                        'label': '代理',
                        'value': 'x145321',
                    },
                    {
                        'label': '兑换类型',
                        'value': '11587',
                    },
                    {
                        'label': '合作模式',
                        'value': '11588',
                    }
                ]
            }
        ]
    },
    {
        type: 'Radio',
        model: 'sortMethod',
        width: '50%',
        labelWidth: 10,
        inline: true,
        defaultValue: '',
        options: [
            {
                label: '升序',
                value: 'asc'
            },
            {
                label: '降序',
                value: 'desc'
            },
            {
                label: '默认',
                value: 'default'
            }
        ]
    },
    {
        type: 'Divider',
        label: '条数限制',
        orientation: 'left',
        dashed: true,
        size: 'small'
    },
    {
        type: 'Input',
        label: '限制条数',
        model: 'limit',
        defaultValue: '1000'
    }
];

export default {
    businessFormFields,
    businessFormModel,
    conditions_1,
    conditions_2
};
