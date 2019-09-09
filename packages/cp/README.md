# cp

A configurable platform frontend ui development solution. Quickly build platform ui with provided templates.


## Main Concept

![Atomic Design](./website/assets/atomic-design.png)

`Atomic Design` is well known in frontend developent, especially in platform UI delelopment. Projects like [Element](https://element.eleme.io)、[iView](https://iviewui.com) based on [Vue.js](https://cn.vuejs.org) and [Ant Design](https://ant.design) based on [React.js](https://reactjs.org) are the best practices of atomic design concept.

But theses projects are more focus on components, which at my opinions, more about atoms or molecules. How about the organisms? How about the templates and pages? `CP`(configurable-plaform) is going to provide a solution of how to pratice the concept of these two parts.

You can follow `Quick Start` tutorial to understand the concepts with the pratice of you own.

### Template Reuse

If you have known about [ICE](https://ice.work/). We are doing somethings like that, but we find a easier way to do that by using [vue-cli](https://cli.vuejs.org/).

You can follow `Quick Start` tutorial to learn how to build a data report platform using provided templates in nearly 10 minutes.

> CP is only support for vue.js projects, beacause the `templates` supported are built on top of vue.js.

### Powerful Modules
Modules are fundement tools provide within the templates. You can also use this tools to build a new template.

Consider a situation like this: you are asked to develop a project which contains lot of forms: steps forms, form within CURD, form fields in editale tables and many other situations. Even if you delelop theses page one by one using this components mentioned above, there will be lots of repeating works and will be hard to maintain in the future.

CP-modules is a collection of modules solving problems in particular areas in platform UI developemnt, like form, data visualization, tables and etc. Here is a list of these modules:

 - 1. FormGenerator
 - 2. DataVis
 - 3. SchemaTable(coming soon)
