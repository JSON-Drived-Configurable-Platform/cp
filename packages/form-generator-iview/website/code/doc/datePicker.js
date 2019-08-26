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

export default {
    simple,
    splitPanels,
    multiple,
    format,
    disabledDates,
    yearAndMonth
};
