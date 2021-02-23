# vuejs-filter todo list

Some examples for filters in vuejs for my [post on the topic of vue filters](https://dustinpfister.github.io/2019/05/10/vuejs-filter/). Filters are use for the most part just to format text values when working out a static template for a Vuejs instance. They are similar to methods but they are a little less flexible and are just used for text nodes and values for attributes using the v-bind directive.

There is creating local filters that will just be used in a single Vue instance, and then global filters that can be added by way of a global API method that will then work in all Vue instances in a page.