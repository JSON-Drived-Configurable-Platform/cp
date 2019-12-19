// 简单示例
let simple = {};

const field = {
    type: 'List',
    model: 'imgs',
    cardWidth: '220px',
    cardHeight: '150px'
};

const model = {
    imgs: [
        {
            'id': '11',
            'url': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574076041&di=dba60f4ce2b9330e330f13546ce963a0&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.ijointoo.com%2Fdata%2Fnews%2Fimages%2F1521193045383.jpg'
        },
        {
            'id': '12',
            'url': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574076041&di=dba60f4ce2b9330e330f13546ce963a0&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.ijointoo.com%2Fdata%2Fnews%2Fimages%2F1521193045383.jpg'
        }
    ]
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
        handleClick(value) {
            console.log(value);
        }
    }
};
<script>
<template>
    <Form :model='model'>
        <FieldGenerator
            :field='field'
            @on-checkboxCard-click='handleClick'
        />
    </Form>
</template>
`;

export default {
    simple
};
