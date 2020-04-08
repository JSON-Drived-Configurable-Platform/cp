// 简单示例
let simple = {};

const field = {
    type: 'RadioCard',
    model: 'card',
    'showRadio': false,
    'cardWidth': '220px',
    'cardHeight': '155px',
    'options': [
        {
            'id': '11',
            'url': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574076041&di=dba60f4ce2b9330e330f13546ce963a0&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.ijointoo.com%2Fdata%2Fnews%2Fimages%2F1521193045383.jpg'
        }
    ]
};

const model = {
    card: []
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
};
<script>
<template>
    <Form :model='model'>
        <FieldGenerator
            :field='field'
        />
    </Form>
</template>
`;

// 分页
let page = {};
const pageField = {
    type: 'RadioCard',
    model: 'card',
    pageLation: true, // 是否分页
    pageSize: 2, // 分页数目
    'cardWidth': '220px',
    'cardHeight': '185px',
    'options': [
        {
            'id': '44',
            'url': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574076041&di=dba60f4ce2b9330e330f13546ce963a0&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.ijointoo.com%2Fdata%2Fnews%2Fimages%2F1521193045383.jpg',
            'footer': '文案：44这是北京鸟巢',
            'header': '美丽北京'
        },
        {
            'id': '55',
            'url': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573481458804&di=5814ac5f18a6f1e9e67aa92db3557f84&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fitbbs%2F1503%2F18%2Fc27%2F4042859_1426655007661_mthumb.jpg',
            'footer': '文案：55这是上海',
            'header': '美丽上海'
        },
        {
            'id': '66',
            'url': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574076041&di=dba60f4ce2b9330e330f13546ce963a0&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.ijointoo.com%2Fdata%2Fnews%2Fimages%2F1521193045383.jpg',
            'footer': '文案：66这是北京鸟巢',
            'header': '美丽北京'
        },
        {
            'id': '77',
            'url': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573481458804&di=5814ac5f18a6f1e9e67aa92db3557f84&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fitbbs%2F1503%2F18%2Fc27%2F4042859_1426655007661_mthumb.jpg',
            'footer': '文案：77这是上海',
            'header': '美丽上海'
        },
        {
            'id': '88',
            'url': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574076041&di=dba60f4ce2b9330e330f13546ce963a0&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.ijointoo.com%2Fdata%2Fnews%2Fimages%2F1521193045383.jpg',
            'footer': '文案：88这是北京鸟巢',
            'header': '美丽北京'
        },
        {
            'id': '99',
            'url': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573481458804&di=5814ac5f18a6f1e9e67aa92db3557f84&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fitbbs%2F1503%2F18%2Fc27%2F4042859_1426655007661_mthumb.jpg',
            'footer': '文案：99这是上海',
            'header': '美丽上海'
        }
    ]
};

const pageModel = {
    card: []
};

page.data = {
    field: pageField,
    model: pageModel
};

page.code = `
<script>
export default {
    data() {
        return {
            field: ${JSON.stringify(pageField)},
            model: ${JSON.stringify(pageModel)}
        };
    }
};
<script>
<template>
    <Form :model='model'>
        <FieldGenerator
            :field='field'
        />
    </Form>
</template>
`;

// api
let api = {};
const apiField = {
    type: 'RadioCard',
    model: 'card',
    pageLation: true, // 是否分页
    pageSize: 3, // 分页数目
    'cardWidth': '220px',
    'cardHeight': '245px',
    'options': '/radioCardApi'
};

const apiModel = {
    card: []
};

api.data = {
    field: apiField,
    model: apiModel
};

api.code = `
<script>
export default {
    data() {
        return {
            field: ${JSON.stringify(apiField)},
            model: ${JSON.stringify(apiModel)}
        };
    }
};
<script>
<template>
    <Form :model='model'>
        <FieldGenerator
            :field='field'
        />
    </Form>
</template>
`;

// 走马灯
let carousel = {};

const carouselField = {
    type: 'RadioCard',
    model: 'card',
    'cardWidth': '220px',
    'cardHeight': '185px',
    'openCarousel': true,
    'carouselOptions': {
        loop: false,
        radiusDot: false
    },
    'options': [
        {
            'id': 'carousel1',
            'footer': '大北京夜上海',
            'header': '美丽中国',
            'urls': [
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574076041&di=dba60f4ce2b9330e330f13546ce963a0&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.ijointoo.com%2Fdata%2Fnews%2Fimages%2F1521193045383.jpg',
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573481458804&di=5814ac5f18a6f1e9e67aa92db3557f84&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fitbbs%2F1503%2F18%2Fc27%2F4042859_1426655007661_mthumb.jpg'
            ]
        },
        {
            'id': 'carousel2',
            'footer': '夜上海大北京',
            'header': '中华大地',
            'urls': [
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573481458804&di=5814ac5f18a6f1e9e67aa92db3557f84&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fitbbs%2F1503%2F18%2Fc27%2F4042859_1426655007661_mthumb.jpg',
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574076041&di=dba60f4ce2b9330e330f13546ce963a0&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.ijointoo.com%2Fdata%2Fnews%2Fimages%2F1521193045383.jpg'
            ]
        }
    ]
};

const carouselModel = {
    card: []
};

carousel.data = {
    field: carouselField,
    model: carouselModel
};

carousel.code = `
<script>
export default {
    data() {
        return {
            field: ${JSON.stringify(carouselField)},
            model: ${JSON.stringify(carouselModel)}
        };
    }
};
<script>
<template>
    <Form :model='model'>
        <FieldGenerator
            :field='field'
        />
    </Form>
</template>
`;

export default {
    simple,
    page,
    api,
    carousel
};
