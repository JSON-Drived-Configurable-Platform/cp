# cp

A configurable platform frontend ui development solution. Quickly build platform ui with provided templates.


## Main Concept

![Atomic Design](./website/page/concept/assets/atomic-design.jpg)

`Atomic Design` is well known in frontend developent, especially in platform UI delelopment. Projects like [Element](https://element.eleme.io)、[iView](https://iviewui.com) based on [Vue.js](https://cn.vuejs.org) and [Ant Design](https://ant.design) based on [React.js](https://reactjs.org) are the best practices of atomic design concept.

But theses projects are more focus on components, which at my opinions, more about atoms or molecules. How about the organisms? How about the templates and pages? `CP`(configurable-plaform) is going to provide a solution of how to pratice the concept of these two parts.

You can follow <a href="https://json-drived-configurable-platform.github.io/cp/#/doc/start">Quick Start</a> tutorial to understand the concepts with the pratice of you own.

### Template Reuse

Consider a situation like this: you are asked to develop a project which contains lot of forms: steps forms, form within CURD, form fields in editale tables and many other situations. Even if you delelop theses page one by one using this components mentioned above, there will be lots of repeating works and will be hard to maintain in the future.

You can follow <a href="https://json-drived-configurable-platform.github.io/cp/#/doc/start">Quick Start</a>  tutorial to learn how to build a data report platform using provided templates in nearly 10 minutes.

> CP is only support for vue.js projects, beacause the `templates` supported are built on top of vue.js.

<i><a href="https://json-drived-configurable-platform.github.io/cp-example">cp-example</a></i>shows how a real project build with CP

### Powerful Modules
Modules are fundement tools provide within the templates. You can also use this tools to build a new template.

CP-modules is a collection of modules solving problems in particular areas in platform UI developemnt, like form, data visualization, tables and etc. Here is a list of these modules:

 - 1. <a href="https://json-drived-configurable-platform.github.io/form-generator-iview">FormGenerator</a> can help you build、matain and extend form appliactions with JSON config, especially with the form fields in tables situation;
 - 2. <a href="https://json-drived-configurable-platform.github.io/data-vis-iview">DataVis</a>can help you build data report like application just by modifing the JSON config;

### Plugin System

If you have known about [ICE](https://ice.work/). We are doing somethings like that, but we find a easier way to do that by using [vue-cli](https://cli.vuejs.org/).
