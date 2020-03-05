export default {
  title: "基础表单",
  desc: "表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。",
  form: {
    fields: [
      {
        label: "姓名",
        type: "Input",
        model: "name",
        placehold: "请输入姓名",
        rules: [
          {
            type: "string",
            required: true,
            pattern: "^[\\u4e00-\\u9fa5]+$",
            message: "请输入中文姓名"
          }
        ]
      },
      {
        label: "城市",
        type: "Select",
        model: "city",
        placehold: "请选择",
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
        required: true
      },
      {
        label: "生日",
        type: "DatePicker",
        model: "birthday",
        required: true
      },
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
        label: "水果",
        type: "Checkbox",
        model: "fruit",
        options: [
          {
            label: "西瓜",
            value: "1"
          },
          {
            label: "苹果",
            value: "2"
          },
          {
            label: "梨子",
            value: "3"
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
    ]
  }
};
