// 简单示例
let simple = {};

const field = {
    type: 'Input',
    model: 'name'
};

const model = {
    name: 'iview'
};

simple.data = {
    field,
    model
};

simple.code = `
<script>
export default {
    data() {
        return {
            field: ${JSON.stringify(field)},
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
    <FieldGenerator
        :field="field"
        :form-model="model"
        @on-field-change="handleFieldChange"
    />
</template>
`;

// 控制大小
let size = {};

const sizeLargeField = {
    type: 'Input',
    model: 'name',
    size: 'large'
};

const sizeDefaultField = {
    type: 'Input',
    model: 'name',
    size: 'default'
};

const sizeSmallField = {
    type: 'Input',
    model: 'name',
    size: 'small'
};

const sizeModel = {
    name: 'iview'
};

size.code = `
<script>
export default {
    data() {
        return {
            sizeLargeField: ${JSON.stringify(sizeLargeField)},
            sizeNormalField: ${JSON.stringify(sizeDefaultField)},
            sizeSmallField: ${JSON.stringify(sizeSmallField)},
            model: ${JSON.stringify(model)}
        };
    }
};
<script>
<template>
    <FieldGenerator
        :field="sizeLargeField"
        :form-model="model"
    />
    <FieldGenerator
        :field="sizeNormalField"
        :form-model="model"
    />
    <FieldGenerator
        :field="sizeSmallField"
        :form-model="model"
    />
</template>
`;

size.data = {
    sizeLargeField,
    sizeDefaultField,
    sizeSmallField,
    sizeModel
};

// 可清空
let clearable = {};

const clearableField = {
    type: 'Input',
    model: 'name',
    clearable: true
};

const clearableModel = {
    name: 'hover时，展示可清空按钮'
};

clearable.code = `
<script>
export default {
    data() {
        return {
            field: ${JSON.stringify(clearableField)},
            model: ${JSON.stringify(clearableModel)}
        };
    }
};
<script>
<template>
    <FieldGenerator
        :field="field"
        :form-model="model"
    />
</template>
`;

clearable.data = {
    field: clearableField,
    model: clearableModel
};

// 带icon
let withIcon = {};

const withIconField = {
    type: 'Input',
    model: 'name',
    icon: 'ios-clock-outline'
};

const withIconModel = {
    name: ''
};

withIcon.code = `
<script>
export default {
    data() {
        return {
            field: ${JSON.stringify(withIconField)},
            model: ${JSON.stringify(withIconModel)}
        };
    }
};
<script>
<template>
    <FieldGenerator
        :field="field"
        :form-model="model"
    />
</template>
`;

withIcon.data = {
    field: withIconField,
    model: withIconModel
};

// 前缀和后缀图标

let prefixAndSuffix = {};

const prefixField = {
    type: 'Input',
    model: 'name',
    prefix: 'ios-contact'
};

const suffixField = {
    type: 'Input',
    model: 'name',
    suffix: 'ios-search'
};

const prefixAndSuffixModel = {
    name: '',
    keyword: ''
};

prefixAndSuffix.code = `
<script>
export default {
    data() {
        return {
            prefixField: ${JSON.stringify(prefixField)},
            suffixField: ${JSON.stringify(suffixField)},
            model: ${JSON.stringify(prefixAndSuffixModel)}
        };
    }
};
<script>
<template>
    <FieldGenerator
        :field="prefixField"
        :form-model="model"
    />
    <FieldGenerator
        :field="suffixField"
        :form-model="model"
    />
</template>
`;

prefixAndSuffix.data = {
    prefixField,
    suffixField,
    model: prefixAndSuffixModel
};

// 搜索框
let search = {};

const searchField = {
    type: 'Input',
    model: 'name',
    search: true
};

const enterButtonField = {
    type: 'Input',
    model: 'name',
    search: true,
    enterButton: true
};

const searchWithEnterButtonField = {
    type: 'Input',
    model: 'name',
    search: true,
    enterButton: '搜索'
};

const searchModel = {
    name: ''
};

search.code = `
<script>
export default {
    data() {
        return {
            searchField: ${JSON.stringify(searchField)},
            enterButtonField: ${JSON.stringify(enterButtonField)},
            searchWithEnterButtonField: ${JSON.stringify(searchWithEnterButtonField)},
            model: ${JSON.stringify(searchModel)}
        };
    }
};
<script>
<template>
    <FieldGenerator
        :field="searchField"
        :form-model="model"
    />
    <FieldGenerator
        :field="enterButtonField"
        :form-model="model"
    />
    <FieldGenerator
        :field="searchWithEnterButtonField"
        :form-model="model"
    />
</template>
`;

search.data = {
    searchField,
    enterButtonField,
    searchWithEnterButtonField,
    model: searchModel
};

// 文本域
let textarea = {};

const textareaField = {
    type: 'Input',
    model: 'name',
    subtype: 'textarea',
    rows: 4
};

const textareaModel = {
    name: ''
};

textarea.code = `
<script>
export default {
    data() {
        return {
            field: ${JSON.stringify(textareaField)},
            model: ${JSON.stringify(textareaModel)}
        };
    }
};
<script>
<template>
    <FieldGenerator
        :field="field"
        :form-model="model"
    />
</template>
`;

textarea.data = {
    field: textareaField,
    model: textareaModel
};

// 适应文本高度的文本域
let aotusizeTextarea = {};

const aotusizeTextareaField = {
    type: 'Input',
    model: 'name',
    subtype: 'textarea',
    autosize: true
};

const aotusizeTextareaModel = {
    name: ''
};

aotusizeTextarea.code = `
<script>
export default {
    data() {
        return {
            field: ${JSON.stringify(aotusizeTextareaField)},
            model: ${JSON.stringify(aotusizeTextareaModel)}
        };
    }
};
<script>
<template>
    <FieldGenerator
        :field="field"
        :form-model="model"
    />
</template>
`;

aotusizeTextarea.data = {
    field: aotusizeTextareaField,
    model: aotusizeTextareaModel
};

// 禁用
let disabled = {};

const disabledInputField = {
    type: 'Input',
    model: 'name',
    disabled: true
};

const disabledTextareaField = {
    type: 'Input',
    model: 'intro',
    subtype: 'textarea',
    disabled: true
};

const disabledModel = {
    name: '',
    intro: ''
};

disabled.code = `
<script>
export default {
    data() {
        return {
            inputField: ${JSON.stringify(disabledInputField)},
            textareaField: ${JSON.stringify(disabledTextareaField)},
            model: ${JSON.stringify(disabledModel)}
        };
    }
};
<script>
<template>
    <FieldGenerator
        :field="field"
        :form-model="model"
    />
</template>
`;

disabled.data = {
    inputField: disabledInputField,
    textareaField: disabledTextareaField,
    disabledModel
};

export default {
    simple,
    size,
    clearable,
    withIcon,
    prefixAndSuffix,
    search,
    textarea,
    aotusizeTextarea,
    disabled
};
