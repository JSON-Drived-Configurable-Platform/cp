export default {
  title: "基础表单",
  desc: "表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。",
  forms: [
    {
      questionFields: [
        {
          label: "城市",
          type: "Radio",
          model: "city",
          placeholder: "请选择",
          options: [
            {
              label: "北京",
              value: "Beijing"
            },
            {
              label: "上海",
              value: "Shanghai"
            },
            {
              label: "广州",
              value: "Guangzhou"
            },
            {
              label: "深圳",
              value: "Shenzhen"
            }
          ],
          required: true,
          width: 300,
        },
        {
          type: "Submit",
          subtype: "primary",
          text: "提交",
          width: 150,
          inline: true
        },
        {
          type: "Reset",
          text: "取消",
          width: 100,
          labelWidth: 0,
          inline: true
        }
      ],
      answerField: "city"
    },
    {
      questionFields: [
        {
          label: "性别",
          type: "Radio",
          model: "gender",
          options: [
            {
              label: "男",
              value: "M"
            },
            {
              label: "女",
              value: "F"
            }
          ],
          required: true
        },
        {
          type: "Submit",
          subtype: "primary",
          text: "提交",
          width: 150,
          inline: true
        },
        {
          type: "Reset",
          text: "重置",
          width: 100,
          labelWidth: 0,
          inline: true
        }
      ],
      answerField: "gender"
    },
    {
      questionFields: [
        {
          label: "请输入您的姓名",
          type: "Input",
          model: "name",
          placeholder: "如：张三",
          rules: [
            {
              type: "string",
              required: true,
              pattern: "^[\\u4e00-\\u9fa5]+$",
              message: "请输入中文姓名"
            }
          ],
          width: 300,
          labelWidth: 120,
        },
        {
          type: "Submit",
          subtype: "primary",
          text: "提交",
          inline: true,
          labelWidth: 120,
        },
        {
          type: "Reset",
          text: "取消",
          inline: true,
          labelWidth: 0,
        }
      ],
      answerField: "name"
    },
  ],
  formOptions: {
    labelPosition: "left"
  }
};
