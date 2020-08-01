module.exports = {
  "errno": 0,
  "data": {
    "form": {
      "fields": []
    },
    "charts": [
      {
        "rows": [
          [
            {
              "display": "inline",
              "conditions": [
                {
                  "key": "1",
                  "type": "DatePicker",
                  "label": "",
                  "model": "dt_1",
                  "placeholder": "",
                  "required": true,
                  "options": "",
                  "defaultHide": false,
                  "subType": "date",
                  "defaultValue": "2019-09-03"
                }
              ],
              "chartGroup": [
                {
                  "key": "42",
                  "tip": null,
                  "label": "新增用户",
                  "type": "card",
                  "api": "/api/data/real-time/card-1"
                },
                {
                  "key": "43",
                  "tip": null,
                  "label": "活跃用户",
                  "type": "card",
                  "api": "/api/data/real-time/card-2"
                },
                {
                  "key": "44",
                  "tip": null,
                  "label": "人均时长",
                  "type": "card",
                  "api": "/api/data/real-time/card-3"
                }
              ]
            }
          ]
        ]
      },
      {
        "rows": [
          [
            {
              "display": "tab",
              "conditions": [
                {
                  "key": "-1",
                  "type": "Radio",
                  "label": "",
                  "model": "od_type",
                  "placeholder": "请选择",
                  "required": false,
                  "options": [
                    {
                      "label": "按日",
                      "value": "day"
                    },
                    {
                      "label": "周均",
                      "value": "week"
                    },
                    {
                      "label": "月均",
                      "value": "month"
                    }
                  ],
                  "defaultHide": false,
                  "defaultValue": "day"
                },
                {
                  "key": "18",
                  "type": "DatePicker",
                  "label": "",
                  "model": "dt_2",
                  "placeholder": "",
                  "required": true,
                  "options": "",
                  "defaultHide": false,
                  "subType": "daterange",
                  "defaultValue": [
                    "2019-08-05",
                    "2019-09-03"
                  ]
                }
              ],
              "chartGroup": [
                {
                  "key": "45",
                  "tip": null,
                  "label": "新增用户",
                  "type": "line",
                  "api": "/api/data/real-time/line-1"
                },
                {
                  "key": "46",
                  "tip": null,
                  "label": "活跃用户",
                  "type": "line",
                  "api": "/api/data/real-time/line-2"
                },
                {
                  "key": "47",
                  "tip": null,
                  "label": "人均时长",
                  "type": "line",
                  "api": "/api/data/real-time/line-3"
                }
              ]
            }
          ]
        ]
      },
      {
        "rows": [
          [
            {
              "conditions": [
                {
                  "key": "23",
                  "type": "DatePicker",
                  "label": "",
                  "model": "reten_day",
                  "placeholder": "",
                  "required": true,
                  "options": "",
                  "defaultHide": false,
                  "subType": "daterange",
                  "defaultValue": [
                    "2019-08-27",
                    "2019-09-02"
                  ]
                }
              ],
              "chartGroup": [
                {
                  "key": "48",
                  "tip": null,
                  "label": "新增留存",
                  "type": "retain",
                  "api": "/api/data/real-time/retain-1"
                }
              ]
            },
            {
              "conditions": [
                {
                  "key": "23",
                  "type": "DatePicker",
                  "label": "",
                  "model": "reten_day",
                  "placeholder": "",
                  "required": true,
                  "options": "",
                  "defaultHide": false,
                  "subType": "daterange",
                  "defaultValue": [
                    "2019-08-27",
                    "2019-09-02"
                  ]
                }
              ],
              "chartGroup": [
                {
                  "key": "49",
                  "tip": null,
                  "label": "活跃留存",
                  "type": "retain",
                  "api": "/api/data/real-time/retain-2"
                }
              ]
            }
          ]
        ]
      }
    ]
  },
  "msg": "ok"
}
