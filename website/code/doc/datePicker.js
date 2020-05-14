// 简单示例
let simple = {};

const field = {
    type: 'DatePicker',
    model: 'date'
};

const daterangeField = {
    type: 'DatePicker',
    subtype: 'daterange',
    model: 'daterange'
};

const model = {
    date: '2019-03-07',
    daterange: ['2019-03-07', '2019-12-14']
};

simple.data = {
    field,
    daterangeField,
    model
};

simple.code = `
<script>
export default {
    data() {
        return {
            field: ${JSON.stringify(field)},
            daterangefield: ${JSON.stringify(daterangeField)},
            model: ${JSON.stringify(model)}
        };
    }
    methods: {
        handleFieldChange(model, value) {
            console.log(model, value);
        }
    }
};
<script>
<template>
    <Form :model="model">
        <FieldGenerator
            :field="field"
            @on-field-change="handleFieldChange"
        />
        <FieldGenerator
            :field="daterangeField"
            @on-field-change="handleFieldChange"
        />
    </Form>
</template>
`;

// 面板不联动
let splitPanels = {};

const splitPanelsField = {
    type: 'DatePicker',
    subtype: 'daterange',
    splitPanels: true,
    model: 'daterange'
};

const splitPanelsModel = {
    daterange: ['2019-03-07', '2019-12-14']
};

splitPanels.data = {
    field: splitPanelsField,
    model: splitPanelsModel
};

splitPanels.code = `
<script>
export default {
    data() {
        return {
            field: ${JSON.stringify(splitPanelsField)},
            model: ${JSON.stringify(splitPanelsModel)}
        };
    }
    methods: {
        handleFieldChange(model, value) {
            console.log(model, value);
        }
    }
};
<script>
<template>
    <Form :model="model">
        <FieldGenerator
            :field="field"
            :form-model="model"
            @on-field-change="handleFieldChange"
        />
    </Form>
</template>
`;

// 多选
let multiple = {};

const multipleField = {
    type: 'DatePicker',
    subtype: 'date',
    multiple: true,
    model: 'date'
};

const multipleModel = {
    date: '2019-02-23'
};

multiple.data = {
    field: multipleField,
    model: multipleModel
};

multiple.code = `
<script>
export default {
    data() {
        return {
            field: ${JSON.stringify(multipleField)},
            model: ${JSON.stringify(multipleModel)}
        };
    }
    methods: {
        handleFieldChange(model, value) {
            console.log(model, value);
        }
    }
};
<script>
<template>
    <FieldGenerator
        :field="field"
        :form-model="model"
        @on-field-change="handleFieldChange"
    />
</template>
`;

// 日期格式
let format = {};

const formatField = {
    type: 'DatePicker',
    subtype: 'date',
    format: 'yyyy年MM月dd日',
    model: 'date'
};

const formatModel = {
    date: '2019-02-23'
};

format.data = {
    field: formatField,
    model: formatModel
};

format.code = `
<script>
export default {
    data() {
        return {
            field: ${JSON.stringify(formatField)},
            model: ${JSON.stringify(formatModel)}
        };
    }
    methods: {
        handleFieldChange(model, value) {
            console.log(model, value);
        }
    }
};
<script>
<template>
    <FieldGenerator
        :field="field"
        :form-model="model"
        @on-field-change="handleFieldChange"
    />
</template>
`;

// 不可选日期
let disabledDates = {};

const disabledDatesField = {
    type: 'DatePicker',
    subtype: 'date',
    // 只能选择2019年的2月和4月的某一天
    disabledDates: [
        ['', '2019-1-31'],
        ['2019-3-1', '2019-3-30'],
        ['2019-5-1', '']
    ],
    model: 'date'
};

const disabledDatesModel = {
    date: '2019-02-23'
};

disabledDates.data = {
    field: disabledDatesField,
    model: disabledDatesModel
};

disabledDates.code = `
<script>
export default {
    data() {
        return {
            field: ${JSON.stringify(disabledDatesField)},
            model: ${JSON.stringify(disabledDatesModel)}
        };
    }
    methods: {
        handleFieldChange(model, value) {
            console.log(model, value);
        }
    }
};
<script>
<template>
    <FieldGenerator
        :field="field"
        :form-model="model"
        @on-field-change="handleFieldChange"
    />
</template>
`;

// 年和月
let yearAndMonth = {};

const yearField = {
    type: 'DatePicker',
    subtype: 'year',
    model: 'year'
};

const monthField = {
    type: 'DatePicker',
    subtype: 'month',
    model: 'month'
};

const yearAndMonthModel = {
    year: '2019',
    month: '2019-12'
};

yearAndMonth.data = {
    yearField,
    monthField,
    model: yearAndMonthModel
};

yearAndMonth.code = `
<script>
export default {
    data() {
        return {
            yearField: ${JSON.stringify(yearField)},
            monthField: ${JSON.stringify(monthField)},
            model: ${JSON.stringify(yearAndMonthModel)}
        };
    }
    methods: {
        handleFieldChange(model, value) {
            console.log(model, value);
        }
    }
};
<script>
<template>
    <FieldGenerator
        :field="yearField"
        :form-model="model"
        @on-field-change="handleFieldChange"
    />
    <FieldGenerator
        :field="monthField"
        :form-model="model"
        @on-field-change="handleFieldChange"
    />
</template>
`;

// 简单示例
let quick = {};

const quickField = {
    type: 'DatePicker',
    model: 'date',
    options:[
        {
            label: '昨天',
            value: -1
        },
        {
            label: '明天',
            value: 1
        }
    ]
};

const quickDaterangeField = {
    type: 'DatePicker',
    subtype: 'daterange',
    model: 'daterange',
    options:[
        {
            label: '前后三天',
            value: [-3, 3]
        },
        {
            label: '后面七天',
            value: [1, 7]
        }
    ]
};

const quickModel = {
    date: '2019-03-07',
    daterange: ['2019-03-07', '2019-12-14']
};

quick.data = {
    field: quickField,
    daterangeField: quickDaterangeField,
    model: quickModel
};

quick.code = `
<script>
export default {
    data() {
        return {
            field: ${JSON.stringify(quick.data.field)},
            daterangefield: ${JSON.stringify(quick.data.daterangeField)},
            model: ${JSON.stringify(quick.data.model)}
        };
    }
    methods: {
        handleFieldChange(model, value) {
            console.log(model, value);
        }
    }
};
<script>
<template>
    <Form :model="model">
        <FieldGenerator
            :field="field"
            @on-field-change="handleFieldChange"
        />
        <FieldGenerator
            :field="daterangeField"
            @on-field-change="handleFieldChange"
        />
    </Form>
</template>
`;

// 简单示例
let maxLength = {};

const maxLengthDateField = {
    type: 'DatePicker',
    subtype: 'date',
    multiple: true,
    maxLength: 7,
    model: 'maxDate'
};

const maxLenghtModel = {
    maxDate: '2019-03-07'
};

maxLength.data = {
    field: maxLengthDateField,
    model: maxLenghtModel
};

maxLength.code = `
<script>
export default {
    data() {
        return {
            field: ${JSON.stringify(maxLength.data.field)},
            model: ${JSON.stringify(maxLength.data.model)}
        };
    }
    methods: {
        handleFieldChange(model, value) {
            console.log(model, value);
        }
    }
};
<script>
<template>
    <Form :model="model">
        <FieldGenerator
            :field="field"
            @on-field-change="handleFieldChange"
        />
    </Form>
</template>
`;

// 简单示例
let timedateRange = {};

const timedateRangeField = {
    type: 'DatePicker',
    subtype: 'datetimerange',
    model: 'datetimerange',
    format: 'yyyy-MM-dd HH:mm:ss'
};

const timedateRangeModel = {
    datetimerange: ['2022-02-10 11:11:11', '2022-02-22 22:22:22']
};

timedateRange.data = {
    field: timedateRangeField,
    model: timedateRangeModel
};

timedateRange.code = `
<script>
export default {
    data() {
        return {
            field: ${JSON.stringify(timedateRange.data.field)},
            model: ${JSON.stringify(timedateRange.data.model)}
        };
    }
    methods: {
        handleFieldChange(model, value) {
            console.log(model, value);
        }
    }
};
<script>
<template>
    <Form :model="model">
        <FieldGenerator
            :field="field"
            @on-field-change="handleFieldChange"
        />
    </Form>
</template>
`;

export default {
    simple,
    splitPanels,
    multiple,
    format,
    disabledDates,
    yearAndMonth,
    quick,
    maxLength,
    timedateRange
};
