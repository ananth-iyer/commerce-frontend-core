"use strict";(self.webpackChunkcommerce_frontend_core=self.webpackChunkcommerce_frontend_core||[]).push([[1833],{64632:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return s},default:function(){return h}});var n,o=a(87462),i=a(63366),m=(a(15007),a(64983)),r=a(91515),d=["components"],s={},p=(n="InlineAlert",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,m.mdx)("div",e)}),l={_frontmatter:s},c=r.Z;function h(e){var t=e.components,a=(0,i.Z)(e,d);return(0,m.mdx)(c,(0,o.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"locate-templates-layouts-and-styles"},"Locate templates, layouts, and styles"),(0,m.mdx)("p",null,"When you create a theme, you might need to create override files for default ",(0,m.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/theme"},"theme")," and ",(0,m.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/module"},"module")," view files. To do so, you must determine which template, layout, and style files that the application uses. This topic describes how to do this."),(0,m.mdx)("h2",{id:"templates"},"Templates"),(0,m.mdx)("p",null,"To locate the template that is responsible for a specific part of the ",(0,m.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/storefront"},"storefront")," or Admin, you can use built-in template hints."),(0,m.mdx)("p",null,"To enable template hints:"),(0,m.mdx)("ol",null,(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"Click ",(0,m.mdx)("strong",{parentName:"p"},"Stores")," > Settings > ",(0,m.mdx)("strong",{parentName:"p"},"Configuration")," > ADVANCED > ",(0,m.mdx)("strong",{parentName:"p"},"Developer"),".")),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"In the ",(0,m.mdx)("strong",{parentName:"p"},"Scope:")," dropdown in the upper-left corner select the view for which you want the template hints.")),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"In the ",(0,m.mdx)("strong",{parentName:"p"},"Debug")," tab, set ",(0,m.mdx)("strong",{parentName:"p"},"Template Path Hints for storefront")," to ",(0,m.mdx)("strong",{parentName:"p"},"Yes"),". To enable path hints for ",(0,m.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/admin"},"Admin")," set ",(0,m.mdx)("strong",{parentName:"p"},"Template Path Hints for Admin")," to ",(0,m.mdx)("strong",{parentName:"p"},"Yes"),".")),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"To save the changes, click ",(0,m.mdx)("strong",{parentName:"p"},"Save Config")," in the upper-right corner."))),(0,m.mdx)("p",null,(0,m.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1175px"}},"\n      ",(0,m.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,m.mdx)("picture",{parentName:"span"},"\n          ",(0,m.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/60187793b2993f59a221ab922d97cdeb/cb523/fdg_debug_theme_23.webp 320w","/commerce-frontend-core/static/60187793b2993f59a221ab922d97cdeb/797b9/fdg_debug_theme_23.webp 640w","/commerce-frontend-core/static/60187793b2993f59a221ab922d97cdeb/fc85d/fdg_debug_theme_23.webp 1175w"],sizes:"(max-width: 1175px) 100vw, 1175px",type:"image/webp"}),"\n          ",(0,m.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/60187793b2993f59a221ab922d97cdeb/72799/fdg_debug_theme_23.png 320w","/commerce-frontend-core/static/60187793b2993f59a221ab922d97cdeb/6af66/fdg_debug_theme_23.png 640w","/commerce-frontend-core/static/60187793b2993f59a221ab922d97cdeb/0d40b/fdg_debug_theme_23.png 1175w"],sizes:"(max-width: 1175px) 100vw, 1175px",type:"image/png"}),"\n          ",(0,m.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-frontend-core/static/60187793b2993f59a221ab922d97cdeb/0d40b/fdg_debug_theme_23.png",alt:"Enabling template hints",title:"Enabling template hints",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,m.mdx)(p,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,m.mdx)("p",null,"You can also use the CLI to enable/disable template hints."),(0,m.mdx)("p",null,"Use the ",(0,m.mdx)("inlineCode",{parentName:"p"},"bin/magento dev:template-hints:enable")," command to enable template hints and the ",(0,m.mdx)("inlineCode",{parentName:"p"},"bin/magento dev:template-hints:disable")," command to disable them. Do not forget to clear the cache after running the commands. For example:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-bash"},"bin/magento dev:template-hints:enable\nTemplate hints enabled.\n")),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-bash"},"bin/magento cache:clean config full_page\n")),(0,m.mdx)("p",null,"Now that you have enabled template hints, reload the page that you want to modify. If you enabled hints for storefront with URL Param, reload the page with the param ",(0,m.mdx)("inlineCode",{parentName:"p"},"?templatehints=magento")," in the URL and review the path for the template file or files that the template hints show.\nHere is an example of a storefront ",(0,m.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/category"},"category")," page with template hints enabled:"),(0,m.mdx)("p",null,(0,m.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,m.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"64.0625%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,m.mdx)("picture",{parentName:"span"},"\n          ",(0,m.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/d5bca611320e036b163dfd0cf169d8b1/cb523/theme_debug2.webp 320w","/commerce-frontend-core/static/d5bca611320e036b163dfd0cf169d8b1/797b9/theme_debug2.webp 640w","/commerce-frontend-core/static/d5bca611320e036b163dfd0cf169d8b1/4b075/theme_debug2.webp 1280w","/commerce-frontend-core/static/d5bca611320e036b163dfd0cf169d8b1/65dd5/theme_debug2.webp 1437w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,m.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/d5bca611320e036b163dfd0cf169d8b1/72799/theme_debug2.png 320w","/commerce-frontend-core/static/d5bca611320e036b163dfd0cf169d8b1/6af66/theme_debug2.png 640w","/commerce-frontend-core/static/d5bca611320e036b163dfd0cf169d8b1/21b4d/theme_debug2.png 1280w","/commerce-frontend-core/static/d5bca611320e036b163dfd0cf169d8b1/bed7a/theme_debug2.png 1437w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,m.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-frontend-core/static/d5bca611320e036b163dfd0cf169d8b1/21b4d/theme_debug2.png",alt:"A storefront page with enabled template hints",title:"A storefront page with enabled template hints",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,m.mdx)("p",null,"In this example, the mini ",(0,m.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/shopping-cart"},"shopping cart")," page element is defined by the ",(0,m.mdx)("inlineCode",{parentName:"p"},"<Magento_Checkout_module_dir>/view/frontend/templates/cart/minicart.phtml")," template:"),(0,m.mdx)("p",null,(0,m.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,m.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"64.0625%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,m.mdx)("picture",{parentName:"span"},"\n          ",(0,m.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/65099b59a9066451be768530eb42ba7a/cb523/theme_debug3.webp 320w","/commerce-frontend-core/static/65099b59a9066451be768530eb42ba7a/797b9/theme_debug3.webp 640w","/commerce-frontend-core/static/65099b59a9066451be768530eb42ba7a/4b075/theme_debug3.webp 1280w","/commerce-frontend-core/static/65099b59a9066451be768530eb42ba7a/72851/theme_debug3.webp 1560w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,m.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/65099b59a9066451be768530eb42ba7a/72799/theme_debug3.png 320w","/commerce-frontend-core/static/65099b59a9066451be768530eb42ba7a/6af66/theme_debug3.png 640w","/commerce-frontend-core/static/65099b59a9066451be768530eb42ba7a/21b4d/theme_debug3.png 1280w","/commerce-frontend-core/static/65099b59a9066451be768530eb42ba7a/9f9a4/theme_debug3.png 1560w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,m.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-frontend-core/static/65099b59a9066451be768530eb42ba7a/21b4d/theme_debug3.png",alt:"A hint with template name for minishopping cart",title:"A hint with template name for minishopping cart",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "),"\n(the template name is above the element)"),(0,m.mdx)("p",null,"Here is how the Customers page looks with template hints enabled in the Admin:"),(0,m.mdx)("p",null,(0,m.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,m.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"54.0625%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,m.mdx)("picture",{parentName:"span"},"\n          ",(0,m.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/df545b96751824d634574b90baf13de1/cb523/theme_debug5.webp 320w","/commerce-frontend-core/static/df545b96751824d634574b90baf13de1/797b9/theme_debug5.webp 640w","/commerce-frontend-core/static/df545b96751824d634574b90baf13de1/4b075/theme_debug5.webp 1280w","/commerce-frontend-core/static/df545b96751824d634574b90baf13de1/99cdd/theme_debug5.webp 1818w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,m.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/df545b96751824d634574b90baf13de1/72799/theme_debug5.png 320w","/commerce-frontend-core/static/df545b96751824d634574b90baf13de1/6af66/theme_debug5.png 640w","/commerce-frontend-core/static/df545b96751824d634574b90baf13de1/21b4d/theme_debug5.png 1280w","/commerce-frontend-core/static/df545b96751824d634574b90baf13de1/019a6/theme_debug5.png 1818w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,m.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-frontend-core/static/df545b96751824d634574b90baf13de1/21b4d/theme_debug5.png",alt:"Admin page with enabled template hints",title:"Admin page with enabled template hints",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,m.mdx)("p",null,"Alternatively, you can perform a text search in the file system by using system generated titles, ",(0,m.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/css"},"CSS")," class names, block titles, labels, or links text as search terms.\nFor example, using a browser debug tool, you can define that the minicart block css class is ",(0,m.mdx)("inlineCode",{parentName:"p"},"minicart-wrapper"),"."),(0,m.mdx)("p",null,(0,m.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,m.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"5.3125%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,m.mdx)("picture",{parentName:"span"},"\n          ",(0,m.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/aa3aeb5fc1c2539f79c8efb95e44a3ea/cb523/theme_debug4.webp 320w","/commerce-frontend-core/static/aa3aeb5fc1c2539f79c8efb95e44a3ea/797b9/theme_debug4.webp 640w","/commerce-frontend-core/static/aa3aeb5fc1c2539f79c8efb95e44a3ea/4b075/theme_debug4.webp 1280w","/commerce-frontend-core/static/aa3aeb5fc1c2539f79c8efb95e44a3ea/fed9e/theme_debug4.webp 1288w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,m.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/aa3aeb5fc1c2539f79c8efb95e44a3ea/72799/theme_debug4.png 320w","/commerce-frontend-core/static/aa3aeb5fc1c2539f79c8efb95e44a3ea/6af66/theme_debug4.png 640w","/commerce-frontend-core/static/aa3aeb5fc1c2539f79c8efb95e44a3ea/21b4d/theme_debug4.png 1280w","/commerce-frontend-core/static/aa3aeb5fc1c2539f79c8efb95e44a3ea/01a87/theme_debug4.png 1288w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,m.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-frontend-core/static/aa3aeb5fc1c2539f79c8efb95e44a3ea/21b4d/theme_debug4.png",alt:"Firebug displaying html",title:"Firebug displaying html",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,m.mdx)("p",null,'A search through the app directory for occurrences of "minicart-wrapper" in ',(0,m.mdx)("inlineCode",{parentName:"p"},".phtml")," files returns the ",(0,m.mdx)("inlineCode",{parentName:"p"},"app/code/Magento/Checkout/view/frontend/templates/cart/minicart.phtml")," template."),(0,m.mdx)("p",null,"Since it is not recommended to edit the default files, you need to add overriding files if you want to customize the template. For details about overriding templates please refer to ",(0,m.mdx)("a",{parentName:"p",href:"../templates/walkthrough.md"},"Customizing Theme Template"),"."),(0,m.mdx)("h2",{id:"layouts"},"Layouts"),(0,m.mdx)("p",null,"Just like templates, layouts are saved on a per-module basis. You can easily locate the ",(0,m.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/layout"},"layout")," file by determining in which module the templates for the element you are interested in reside in."),(0,m.mdx)("p",null,"After you have determined the module, you can search for the layout in the following locations:"),(0,m.mdx)("ol",null,(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("inlineCode",{parentName:"li"},"<current_theme_dir>/<Namespace>_<Module>/layout/")),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("inlineCode",{parentName:"li"},"<parent_theme(s)_dir>/<Namespace>_<Module>/layout/")),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("inlineCode",{parentName:"li"},"<module_dir>/view/frontend/layout/")),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("inlineCode",{parentName:"li"},"<module_dir>/view/base/layout/"))),(0,m.mdx)("p",null,"There is no straightforward algorithm how to define at once the exact layout file, but in most cases layout file names are self descriptive. Also you can search them for mentions of the corresponding templates."),(0,m.mdx)("p",null,"Example:"),(0,m.mdx)("p",null,"Let's say you need to locate the layout that is responsible for displaying mini shopping cart on the storefront, when the Blank theme is applied for the ",(0,m.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/store-view"},"store view"),"."),(0,m.mdx)("p",null,"Using the Template Hints we determine that the template is ",(0,m.mdx)("inlineCode",{parentName:"p"},"app/code/Magento/Checkout/view/frontend/templates/cart/minicart.phtml"),", and in the path, we see that it belongs to the ",(0,m.mdx)("inlineCode",{parentName:"p"},"Magento_Checkout")," module."),(0,m.mdx)("p",null,"Let's search for the layout following the fallback scheme:"),(0,m.mdx)("ol",null,(0,m.mdx)("li",{parentName:"ol"},"Check the ",(0,m.mdx)("inlineCode",{parentName:"li"},"app/design/frontend/Magento/blank/Magento_Checkout/"),' layout. To locate the required layout, search this directory for occurrences of the template name, " minicart.phtml ". No matching file is found, so we proceed to the next fallback level, which is the parent theme layouts.'),(0,m.mdx)("li",{parentName:"ol"},"We can find the info about parent theme in a theme configuration file ",(0,m.mdx)("inlineCode",{parentName:"li"},"theme.xml"),", the parent theme name is specified there in the ",(0,m.mdx)("inlineCode",{parentName:"li"},"<parent></parent>")," node. In the ",(0,m.mdx)("inlineCode",{parentName:"li"},"app/design/frontend/Magento/blank/theme.xml")," there's no ",(0,m.mdx)("inlineCode",{parentName:"li"},"<parent>")," node, which means the Blank theme has no parents. So we should search on the next fallback level which is the module layouts."),(0,m.mdx)("li",{parentName:"ol"},"The Magento_Checkout layouts are located in ",(0,m.mdx)("inlineCode",{parentName:"li"},"app/code/Magento/Checkout/view/frontend/layout/"),'. After searching this directory for occurrences of "',(0,m.mdx)("inlineCode",{parentName:"li"},"minicart.phtml"),'", we define that the layout we are looking for is ',(0,m.mdx)("inlineCode",{parentName:"li"},"app/code/Magento/Checkout/view/frontend/layout/default.xml"),".")),(0,m.mdx)("p",null,"After you located the necessary layout file, you can create your custom layout file with the corresponding name in your theme folder to add ",(0,m.mdx)("a",{parentName:"p",href:"../layouts/extend.md"},"extending")," or ",(0,m.mdx)("a",{parentName:"p",href:"../layouts/override.md"},"overriding")," content. Please see ",(0,m.mdx)("a",{parentName:"p",href:"../layouts/index.md"},"Customizing Theme Layouts")," for more details."),(0,m.mdx)("h2",{id:"styles"},"Styles"),(0,m.mdx)("p",null,"To locate a CSS rule that is applied to a certain element, find the template for the page that contains the element. Or you can use browser debugging tools, to locate the class name.\nAfter you find the class name, use text search in the theme and module styles directories to locate the ",(0,m.mdx)("inlineCode",{parentName:"p"},".less")," or ",(0,m.mdx)("inlineCode",{parentName:"p"},".css")," file that defines the class. Perform the search according to the following fallback scheme:"),(0,m.mdx)("ol",null,(0,m.mdx)("li",{parentName:"ol"},"Theme styles ",(0,m.mdx)("inlineCode",{parentName:"li"},"<current_theme_dir>/web/css/")),(0,m.mdx)("li",{parentName:"ol"},"Module theme styles ",(0,m.mdx)("inlineCode",{parentName:"li"},"<current_theme_dir>/<Namespace>_<Module>/web/css/")),(0,m.mdx)("li",{parentName:"ol"},"Parent theme styles ",(0,m.mdx)("inlineCode",{parentName:"li"},"<parent_theme_dir>/web/css/")),(0,m.mdx)("li",{parentName:"ol"},"Parent theme Module styles ",(0,m.mdx)("inlineCode",{parentName:"li"},"<parent_theme_dir>/<Namespace>_<Module>/web/css/")),(0,m.mdx)("li",{parentName:"ol"},"Module styles for the ",(0,m.mdx)("inlineCode",{parentName:"li"},"frontend")," area ",(0,m.mdx)("inlineCode",{parentName:"li"},"<module_dir>/view/frontend/web/css/")),(0,m.mdx)("li",{parentName:"ol"},"Module styles for the ",(0,m.mdx)("inlineCode",{parentName:"li"},"base")," area ",(0,m.mdx)("inlineCode",{parentName:"li"},"<module_dir>/view/base/web/css/"))),(0,m.mdx)("p",null,"Example:"),(0,m.mdx)("p",null,"Let's find the file defining on the CSS classes used for displaying the mini shopping cart on the storefront, when the Blank theme is applied for the store view."),(0,m.mdx)("p",null,"In the mini shopping cart template ",(0,m.mdx)("inlineCode",{parentName:"p"},"app/code/Magento/Checkout/view/frontend/templates/cart/minicart.phtml")," the top level element has ",(0,m.mdx)("inlineCode",{parentName:"p"},"minicart-wrapper")," class."),(0,m.mdx)("p",null,"So, let's search for occurrences of \"",(0,m.mdx)("inlineCode",{parentName:"p"},"minicart-wrapper"),'" in according to the fallback scheme:'),(0,m.mdx)("ol",null,(0,m.mdx)("li",{parentName:"ol"},"Search in ",(0,m.mdx)("inlineCode",{parentName:"li"},"app/design/frontend/Magento/blank/web/css"),", the search returns no results."),(0,m.mdx)("li",{parentName:"ol"},"Search in ",(0,m.mdx)("inlineCode",{parentName:"li"},"app/design/frontend/Magento/blank/Magento_Checkout/web/css"),'.The "',(0,m.mdx)("inlineCode",{parentName:"li"},"minicart-wrapper"),'" style is defined in ',(0,m.mdx)("inlineCode",{parentName:"li"},"app/design/frontend/Magento/blank/Magento_Checkout/web/css/source/module/_minicart.less"))),(0,m.mdx)("p",null,"After you determine which ",(0,m.mdx)("inlineCode",{parentName:"p"},".css")," or ",(0,m.mdx)("inlineCode",{parentName:"p"},".less")," file defines the class, you can override the default class definition in your custom ",(0,m.mdx)("inlineCode",{parentName:"p"},".css")," or ",(0,m.mdx)("inlineCode",{parentName:"p"},".less")," files.  For details, see ",(0,m.mdx)("a",{parentName:"p",href:"../css/themes.md"},"CSS in themes"),"."))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guide-themes-debug-md-83dc4722a9ede7daa2cc.js.map