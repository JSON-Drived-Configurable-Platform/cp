let fieldComponents = {};
let optionalFields = require.context('../fields', false, /^\.\/field([\w-_]+)\.vue$/);

optionalFields.keys().forEach(key => {
    let compName = key.replace(/^\.\//, '').replace(/\.vue/, '');
    fieldComponents[compName] = optionalFields(key).default;
});

export default fieldComponents;
