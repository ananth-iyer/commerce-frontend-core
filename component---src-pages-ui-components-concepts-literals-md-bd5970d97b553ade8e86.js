"use strict";(self.webpackChunkcommerce_frontend_core=self.webpackChunkcommerce_frontend_core||[]).push([[654],{871:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return r},default:function(){return d}});var n=a(87462),i=a(63366),s=(a(15007),a(64983)),o=a(91515),l=["components"],r={},p={_frontmatter:r},m=o.Z;function d(e){var t=e.components,a=(0,i.Z)(e,l);return(0,s.mdx)(m,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"template-literals"},"Template literals"),(0,s.mdx)("p",null,'The application provides for the use of template literals in UI components. Template literals are strings that can contain embedded expressions. They were introduced into JavaScript with ES2015 and were called "template strings" in early editions of the ES2015 / ES6 specification. Since it is a relatively new part of JavaScript, some browsers, such as Internet Explorer 11, do not support the specification. Per the specification standard, back-ticks (',(0,s.mdx)("inlineCode",{parentName:"p"},"`"),") are used instead of a single quote (",(0,s.mdx)("inlineCode",{parentName:"p"},"'"),") or double quote (",(0,s.mdx)("inlineCode",{parentName:"p"},'"'),") to delineate a template string. Due to the lack of browser support, the application has a JavaScript class that will parse certain strings with a single quote (",(0,s.mdx)("inlineCode",{parentName:"p"},"'"),") in the same way a browser that supports the specification would parse one with back-ticks."),(0,s.mdx)("p",null,"Template literals can contain expressions which will be evaluated in the current KnockoutJS context. These expressions can contain nearly any valid ",(0,s.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/javascript"},"JavaScript"),". They must start with a dollar sign and be surrounded with curly braces. ",(0,s.mdx)("strong",{parentName:"p"},"Anything inside the following will be evaluated as an expression"),": ",(0,s.mdx)("inlineCode",{parentName:"p"},"${  }"),". For example, they can be used—and often are—to access properties of the KnockoutJS context like this: ",(0,s.mdx)("inlineCode",{parentName:"p"},"'${ $.submitUrl }'"),". They can be used to call functions (",(0,s.mdx)("inlineCode",{parentName:"p"},"'${ $.loadForm($.formUrl) }'"),"), or whatever: ",(0,s.mdx)("inlineCode",{parentName:"p"},"'${ 20 + 13 }'"),". These expressions are parsed in ",(0,s.mdx)("inlineCode",{parentName:"p"},"/lib/web/mage/utils/template.js"),"."),(0,s.mdx)("p",null,"Template literals allow UI Components to easily assign dynamic values to class properties. More specifically, they provide an integration layer between a particular KnockoutJS context and a JavaScript class."),(0,s.mdx)("h2",{id:"defaults-class-property"},(0,s.mdx)("inlineCode",{parentName:"h2"},"defaults")," class property"),(0,s.mdx)("p",null,"UI Components are ",(0,s.mdx)("a",{parentName:"p",href:"class.md"},"associated with JavaScript classes")," to handle behavior on the client side. These should extend one of the core classes to provide a base level of functionality. Inside the child class, a ",(0,s.mdx)("inlineCode",{parentName:"p"},"defaults")," property can be provided."),(0,s.mdx)("p",null,"The ",(0,s.mdx)("inlineCode",{parentName:"p"},"defaults")," property should be an object and is handled in a special way. Each property of ",(0,s.mdx)("inlineCode",{parentName:"p"},"defaults")," becomes a class property upon initialization. This happens in the ",(0,s.mdx)("inlineCode",{parentName:"p"},"initConfig()")," method of ",(0,s.mdx)("inlineCode",{parentName:"p"},"magento/module-ui/view/base/web/js/lib/core/class.js"),". Every item in ",(0,s.mdx)("inlineCode",{parentName:"p"},"defaults")," is passed through a ",(0,s.mdx)("inlineCode",{parentName:"p"},"template()")," function which evaluates template literals."),(0,s.mdx)("p",null,"As a result, every ",(0,s.mdx)("inlineCode",{parentName:"p"},"defaults")," child property is handled with what could be viewed as a two step process:"),(0,s.mdx)("ol",null,(0,s.mdx)("li",{parentName:"ol"},"Evaluate the value of the property for expressions. For example: ",(0,s.mdx)("inlineCode",{parentName:"li"},"'${ $.submitUrl }'")," could become ",(0,s.mdx)("inlineCode",{parentName:"li"},"'https://example.com/contact/form/submit/'")," (more on that later)."),(0,s.mdx)("li",{parentName:"ol"},"Assign that property/value to the class itself. As a result ",(0,s.mdx)("inlineCode",{parentName:"li"},"class.defaults.submitUrl")," would become ",(0,s.mdx)("inlineCode",{parentName:"li"},"class.submitUrl"),".")),(0,s.mdx)("p",null,"This part is important because it means that JavaScript classes that extend ",(0,s.mdx)("inlineCode",{parentName:"p"},"Class")," (",(0,s.mdx)("inlineCode",{parentName:"p"},"magento/module-ui/view/base/web/js/lib/core/class.js"),") can use the ",(0,s.mdx)("inlineCode",{parentName:"p"},"defaults")," property to assign properties to the class itself and leverage template literals during that process without any work on your part."),(0,s.mdx)("h3",{id:"the--separator"},"The ",(0,s.mdx)("inlineCode",{parentName:"h3"},":")," separator"),(0,s.mdx)("p",null,"Certain properties of the ",(0,s.mdx)("inlineCode",{parentName:"p"},"defaults")," object are processed by an additional core JavaScript class: ",(0,s.mdx)("inlineCode",{parentName:"p"},"links.js")," (located: ",(0,s.mdx)("inlineCode",{parentName:"p"},"magento/module-ui/view/base/web/js/lib/core/element/links.js"),"). The object keys in ",(0,s.mdx)("inlineCode",{parentName:"p"},"defaults")," are:"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("inlineCode",{parentName:"li"},"links")),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("inlineCode",{parentName:"li"},"imports")),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("inlineCode",{parentName:"li"},"exports"))),(0,s.mdx)("p",null,"They can be used to interact with other UI Component JavaScript classes. While the full use of them is a separate topic, those values can use a colon (",(0,s.mdx)("inlineCode",{parentName:"p"},":"),") to separate an expression, which should evaluate to a UI Component's name, from the properties to be accessed in that class. Take this example: ",(0,s.mdx)("inlineCode",{parentName:"p"},"'${ $.provider }:user.theme'"),". If the ",(0,s.mdx)("inlineCode",{parentName:"p"},"${ $.provider }")," expression evaluates to the name of a UI Component that is currently in the registry, that component will be loaded and the value of its ",(0,s.mdx)("inlineCode",{parentName:"p"},"user.theme")," property returned."),(0,s.mdx)("p",null,"As a result, a template literal used in the value of one the objects listed above can be used to succinctly access data from an ",(0,s.mdx)("em",{parentName:"p"},"entirely different")," ",(0,s.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/ui-component"},"UI Component")," JavaScript class."),(0,s.mdx)("h3",{id:"template-literal--context"},"Template literal ",(0,s.mdx)("inlineCode",{parentName:"h3"},"$")," context"),(0,s.mdx)("p",null,"Perhaps the most important part of template literals in the application is the ",(0,s.mdx)("inlineCode",{parentName:"p"},"$")," object that can be used inside expressions. (Remember an expression is anything within ",(0,s.mdx)("inlineCode",{parentName:"p"},"${ }"),".) The ",(0,s.mdx)("inlineCode",{parentName:"p"},"$")," provides access to the ",(0,s.mdx)("inlineCode",{parentName:"p"},"this")," context in the JavaScript class where the template literals are. To take it a step further, ",(0,s.mdx)("inlineCode",{parentName:"p"},"this")," (and the related ",(0,s.mdx)("inlineCode",{parentName:"p"},"$"),") is the KnockoutJS context for the template that can be bound to the UI Component. This object should not be confused with the ",(0,s.mdx)("inlineCode",{parentName:"p"},"$")," that marks the beginning of an expression. The ",(0,s.mdx)("inlineCode",{parentName:"p"},"$")," object can only appear inside of an expression. Here is an example: ",(0,s.mdx)("inlineCode",{parentName:"p"},"${ $.submitUrl }"),": the ",(0,s.mdx)("inlineCode",{parentName:"p"},"$")," references the current KnockoutJS context, and ",(0,s.mdx)("inlineCode",{parentName:"p"},".submitUrl")," will return the ",(0,s.mdx)("inlineCode",{parentName:"p"},"provider")," property from that object."),(0,s.mdx)("h3",{id:"ignoretmpls-property"},(0,s.mdx)("inlineCode",{parentName:"h3"},"ignoreTmpls")," property"),(0,s.mdx)("p",null,"The ",(0,s.mdx)("inlineCode",{parentName:"p"},"ignoreTmpls")," property is an object that prevents template processing for selected properties."),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-javascript"},"return Element.extend({\n    defaults: {\n        value: 'some component value',\n        propertyIgnoreTempls: '${ $.value }', // template literals will be ignored for this property\n        ignoreTmpls: {\n            propertyIgnoreTempls: true\n        } // ignoreTmpls object contains a list of properties with template literals ignored\n    }\n});\n")),(0,s.mdx)("h2",{id:"example"},"Example"),(0,s.mdx)("p",null,"Perhaps the most useful aspect of template literals is the ability to access other UI Component JavaScript classes in the registry so we will use this as an example. First, there are a few things to explain."),(0,s.mdx)("p",null,"UI Components can have a ",(0,s.mdx)("inlineCode",{parentName:"p"},'<item name="config" xsi:type="array">...</item>')," node in the primary XML declaration file (",(0,s.mdx)("a",{parentName:"p",href:"xml-declaration.md#example-of-a-basic-components-configuration-file"},"see an example"),"). In that file, a ",(0,s.mdx)("inlineCode",{parentName:"p"},"component")," element can be added with a path reference to the RequireJS file. That file is loaded into the registry when it runs on the frontend and other JavaScript files can then access it by the ",(0,s.mdx)("em",{parentName:"p"},"name")," of the UI Component instead of the path to the file itself. The name often will look something like this: ",(0,s.mdx)("inlineCode",{parentName:"p"},"example_component.example_component"),"."),(0,s.mdx)("p",null,"Names of other registered modules can be added to the ",(0,s.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/server-side"},"server side")," configuration (",(0,s.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/xml"},"XML")," or ",(0,s.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/php"},"PHP"),") that is output through JSON. Those names can then be easily accessed in the JavaScript on the frontend. In the following example, the other UI Component's name will be obtained with a template literal in the ",(0,s.mdx)("inlineCode",{parentName:"p"},"imports")," object. When this JavaScript file is loaded, it will process the template literal and look up the name in the registry. If found, it will load that class. Because there is a colon (",(0,s.mdx)("inlineCode",{parentName:"p"},":"),"), it will go on to find the property that is accessed in the other JavaScript class."),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-javascript"},"return Element.extend({\n    defaults: {\n        template: 'Example_Component/message-list',\n        imports: {\n            messages: '${ $.messageHandler }:data.userMessages'\n        }\n    },\n\n    // ...\n\n    initialize: function() {\n        this._super();\n        this.addHtmlClassesToMessages();\n    },\n\n    addHtmlClassesToMessages: function() {\n        this.messages.forEach(function(currentValue) {\n            currentValue['htmlClass'] = 'message message--' + currentValue['type'];\n        });\n    }\n\n    // ...\n})\n")),(0,s.mdx)("p",null,"Notice how the ",(0,s.mdx)("inlineCode",{parentName:"p"},"addHtmlClassesToMessages()")," method accesses the ",(0,s.mdx)("inlineCode",{parentName:"p"},"messages")," property of ",(0,s.mdx)("inlineCode",{parentName:"p"},"this"),". When the class was initialized, the ",(0,s.mdx)("inlineCode",{parentName:"p"},"data.userMessages")," array was obtained from the ",(0,s.mdx)("inlineCode",{parentName:"p"},"$.messageHandler")," UI Component and was then assigned to the primary object."),(0,s.mdx)("p",null,"In the template, the messages can be displayed like this:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-html"},'\x3c!-- File: app/code/Example/Component/view/frontend/web/template/message-list.html --\x3e\n<div>\n  <ul data-bind="foreach: messages" class="message-list">\n      <li data-bind="text: content, css: htmlClass"></li>\n  </ul>\n</div>\n')),(0,s.mdx)("h3",{id:"conclusion"},"Conclusion"),(0,s.mdx)("p",null,"Template literals provide a simple and concise way to evaluate expressions. In Magento, they facilitate a great way to load data into a Javascript class. They also play a part in interacting with other classes to create a fully interactive frontend framework."))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-ui-components-concepts-literals-md-bd5970d97b553ade8e86.js.map