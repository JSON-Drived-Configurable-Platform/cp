export const fields = [
    {
        label: 'Name',
        type: 'Input',
        width: 250,
        model: 'name',
        required: true,
        inline: true
    },
    {
        label: 'birthday',
        type: 'DatePicker',
        width: 250,
        model: 'birthday',
        required: true,
        inline: true
    },
    {
        label: 'Age',
        width: 250,
        type: 'InputNumber',
        model: 'age',
        rule:[
            {
                type: 'Integer',
                require: true,
                message: '请输入一个整数'
            }
        ],
        inline: true
    },
    {
        label: 'address',
        width: 250,
        type: 'Input',
        model: 'address',
        required: true,
        inline: true
    },
    {
        type: 'Button',
        subtype: 'primary',
        text: '保存',
        action: {
            type: 'event',
            name: 'save'
        },
        inline: true
    },
    {
        type: 'Button',
        text: '取消',
        action: {
            type: 'event',
            name: 'cancel'
        },
        inline: true,
        labelWidth: 0
    }
];
export const options = {

};
export const columns = [
    {
        title: 'Name',
        key: 'name'
    },
    {
        title: 'Age',
        key: 'age'
    },
    {
        title: 'Birthday',
        key: 'birthday'
    },
    {
        title: 'Address',
        key: 'address'
    }
];
export const datas = [
    {
        name: 'John Brown',
        age: 18,
        address: 'New York No. 1 Lake Park',
        job: 'Data engineer',
        interest: 'badminton',
        birthday: '1991-05-14',
        book: 'Steve Jobs',
        movie: 'The Prestige',
        music: 'I Cry'
    },
    {
        name: 'Jim Green',
        age: 25,
        address: 'London No. 1 Lake Park',
        job: 'Data Scientist',
        interest: 'volleyball',
        birthday: '1989-03-18',
        book: 'My Struggle',
        movie: 'Roman Holiday',
        music: 'My Heart Will Go On'
    },
    {
        name: 'Joe Black',
        age: 30,
        address: 'Sydney No. 1 Lake Park',
        job: 'Data Product Manager',
        interest: 'tennis',
        birthday: '1992-01-31',
        book: 'Win',
        movie: 'Jobs',
        music: 'Don’t Cry'
    },
    {
        name: 'Jon Snow',
        age: 26,
        address: 'Ottawa No. 2 Lake Park',
        job: 'Data Analyst',
        interest: 'snooker',
        birthday: '1988-7-25',
        book: 'A Dream in Red Mansions',
        movie: 'A Chinese Ghost Story',
        music: 'actor'
    }
];
