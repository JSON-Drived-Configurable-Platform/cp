export default {
  'title': '模板查找',
  'search': {
    'formFields': [
      {
        'type': 'Radio',
        'subtype': 'button',
        'label': '分类',
        'sizie': 'large',
        'model': 'class',
        'options': [
          {
            'label': '全部',
            'value': 'all'
          },
          {
            'label': '表单输入',
            'value': 'form'
          },
          {
            'label': '增删改查',
            'value': 'curd'
          },
          {
            'label': '权限管理',
            'value': 'rbac'
          },
          {
            'label': '首页门户',
            'value': 'home'
          },
          {
            'label': '热门推荐',
            'value': 'recommand'
          }
        ]
      },
      {
        'type': 'Divider',
        'orientation': 'left',
        'dashed': true,
        'size': 'small'
      },
      {
        'type': 'Select',
        'label': '作者',
        'model': 'author',
        'placeholder': '不限',
        'options': [
          {
            'label': 'BingBlog',
            'value': 'BingBlog'
          },
          {
            'label': 'changyuqing',
            'value': 'changyuqing'
          },
          {
            'label': 'glsnb',
            'value': 'glsnb'
          },
          {
            'label': 'SAHX',
            'value': 'SAHX'
          },
          {
            'label': 'Tobin1990',
            'value': 'Tobin1990'
          },
          {
            'label': 'xiaomiCat',
            'value': 'xiaomiCat'
          },
          {
            'label': 'zhengxkq',
            'value': 'zhengxkq'
          }
        ],
        'width': 240,
        'inline': true
      },
      {
        'type': 'Select',
        'label': '好评度',
        'model': 'score',
        'placeholder': '不限',
        'options': [
          {
            'label': '5分',
            'value': '5'
          },
          {
            'label': '4分',
            'value': '4'
          },
          {
            'label': '3分',
            'value': '3'
          },
          {
            'label': '2分',
            'value': '2'
          },
          {
            'label': '1分',
            'value': '1'
          }
        ],
        'width': 240,
        'inline': true
      },
    ],
    'options': {
      'labelPosition': 'left',
      'labelWidth': 80
    }
  },
  templates: [
    // author: {
    //   name: 'BingBlog',
    //   avator: 'https://avatars1.githubusercontent.com/u/22095959?s=96&amp;v=4',
    //   url: 'https://github.com/orgs/JSON-Drived-Configurable-Platform/people/BingBlog'
    // }
    {
      path: '/form-modal',
      img: require('../../assets/images/modal.jpeg'),
      title: '弹框表单',
      desc: '将表单内置于一个弹框中'
    },
    {
      path: '/form-multi-modal',
      img: require('../../assets/images/multi-modal.jpeg'),
      title: '多弹框表单',
      desc: '页面中可以同时展示多个可编辑表单'
    },
    {
      path: '/form-slideout',
      img: require('../../assets/images/slideout.jpeg'),
      title: '侧滑表单',
      desc: '表单从屏幕侧边滑出'
    },
    {
      path: '/form-inline-table',
      img: require('../../assets/images/inline.jpeg'),
      title: '表格行扩展编辑',
      desc: '表格的行可展开编辑'
    },
    {
      path: '/form-editable-table',
      img: require('../../assets/images/editable-table.jpeg'),
      title: '可编辑表格',
      desc: '直接在表格中进行编辑'
    },
    {
      path: '/form-takeover',
      img: require('../../assets/images/takeover.jpeg'),
      title: '分步表单',
      desc: '一些列需要按照先后顺序完成的表单'
    },
    {
      path: '/form-wizard',
      img: require('../../assets/images/wizard.jpeg'),
      title: '导航表单',
      desc: '快速引导进入指定编辑区域'
    },
    {
      path: '/form-sectioned',
      img: require('../../assets/images/sectioned.jpeg'),
      title: '分组表单',
      desc: '将表单按照功能进行区域分割'
    },
    {
      path: '/form-conversational',
      img: require('../../assets/images/conversational.jpeg'),
      title: '对话表单',
      desc: '以对话的形式完成表单输入'
    },
    {
      path: '/form-popover',
      img: require('../../assets/images/popover.jpeg'),
      title: '提示框表单',
      desc: '表单以提示框的形式展示'
    },
    {
      path: '/curd/user',
      img: require('../../assets/images/curd.png'),
      title: '增删改查',
      desc: '包含添加、删除、编辑、搜索等完整功能的模板'
    },
    {
      path: '/data-report/real-time',
      img: require('../../assets/images/data-report.png'),
      title: '数据报表',
      desc: '支持可视化，可动态搜索的数据报表模板'
    },
    {
      path: '/data-report/real-time',
      img: require('../../assets/images/data-report.png'),
      title: '数据报表',
      desc: '支持可视化，可动态搜索的数据报表模板'
    },
    {
      path: '/rbac/users',
      img: require('../../assets/images/users.png'),
      title: 'RBAC-用户管理',
      desc: '基于RBAC的用户管理模板'
    },
    {
      path: '/rbac/roles',
      img: require('../../assets/images/roles.png'),
      title: 'RBAC-角色管理',
      desc: '基于RBAC的角色管理模板'
    },
    {
      path: '/rbac/permissions',
      img: require('../../assets/images/permissions.png'),
      title: 'RBAC-权限管理',
      desc: '基于RBAC的权限管理模板'
    },
  ]
}
