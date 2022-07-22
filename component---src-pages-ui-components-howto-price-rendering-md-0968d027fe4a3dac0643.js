"use strict";(self.webpackChunkcommerce_frontend_core=self.webpackChunkcommerce_frontend_core||[]).push([[7043],{4111:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return c},default:function(){return l}});var r=t(87462),a=t(63366),i=(t(15007),t(64983)),o=t(91515),p=["components"],c={},s={_frontmatter:c},m=o.Z;function l(e){var n=e.components,t=(0,a.Z)(e,p);return(0,i.mdx)(m,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"render-prices-on-the-frontend"},"Render prices on the frontend"),(0,i.mdx)("p",null,"This article shows how templates and UI components work together to render the price for any product listing (for example, category, widget)."),(0,i.mdx)("h2",{id:"about-price-handling"},"About price handling"),(0,i.mdx)("p",null,"The application is able to operate with a variety of prices, taxes, and product types."),(0,i.mdx)("p",null,"The following is a short list of prices:"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"Special Price."),(0,i.mdx)("li",{parentName:"ol"},"Tier Price."),(0,i.mdx)("li",{parentName:"ol"},"Grouped Price."),(0,i.mdx)("li",{parentName:"ol"},"Minimum price of composite products"),(0,i.mdx)("li",{parentName:"ol"},"Price range of composite products"),(0,i.mdx)("li",{parentName:"ol"},"Manufacturer price (MSRP)")),(0,i.mdx)("p",null,"The application represents these prices as price types (e.g. final price, minimum price, maximum price, regular price) and are separate from the actual price in the code.\nFor example, Special Price is represented by the final price type in the code."),(0,i.mdx)("h3",{id:"taxes-classification"},"Taxes classification"),(0,i.mdx)("p",null,"The application handles taxes as price adjustments and has 3 generic types of taxes:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Tax"),(0,i.mdx)("li",{parentName:"ul"},"Fixed Product Tax"),(0,i.mdx)("li",{parentName:"ul"},"Tax for Fixed Product Tax")),(0,i.mdx)("p",null,"Applying and rendering taxes is complicated.\nA product can have more than one price shown and taxes may or may not apply to all of them."),(0,i.mdx)("p",null,"Example of pricing strategy for bundled products:"),(0,i.mdx)("p",null,(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"359px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"57.8125%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/59c77d9687bfffa1414d4282764fd64a/cb523/bundle_prices.webp 320w","/commerce-frontend-core/static/59c77d9687bfffa1414d4282764fd64a/6c7fb/bundle_prices.webp 359w"],sizes:"(max-width: 359px) 100vw, 359px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/59c77d9687bfffa1414d4282764fd64a/72799/bundle_prices.png 320w","/commerce-frontend-core/static/59c77d9687bfffa1414d4282764fd64a/f5eb6/bundle_prices.png 359w"],sizes:"(max-width: 359px) 100vw, 359px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-frontend-core/static/59c77d9687bfffa1414d4282764fd64a/f5eb6/bundle_prices.png",alt:"bundle prices",title:"bundle prices",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,i.mdx)("h2",{id:"render-prices-with-ui-components"},"Render prices with UI components"),(0,i.mdx)("p",null,"For pages such as a product page, use a ",(0,i.mdx)("a",{parentName:"p",href:"../components/form.md"},"form component"),"."),(0,i.mdx)("p",null,"For pages such as a product listing page or widgets, use a ",(0,i.mdx)("a",{parentName:"p",href:"../components/listing-grid.md"},"listing component"),"."),(0,i.mdx)("p",null,"For the purposes of this article, we will use a listing component to render simple products with two types of prices, ",(0,i.mdx)("strong",{parentName:"p"},"regular price")," and ",(0,i.mdx)("strong",{parentName:"p"},"special price"),", and one type of adjustment, ",(0,i.mdx)("strong",{parentName:"p"},"tax"),"."),(0,i.mdx)("h3",{id:"xml-configuration"},"XML configuration"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("a",{parentName:"p",href:"new-component-declaration.md"},"XML configuration file")," for UI components shows the parent-child relationship between different UI components and tells the application which template files to use when rendering."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-xml"},'<listing xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Ui:etc/ui_configuration.xsd">\n    ...\n    <dataSource>\n        \x3c!--\n            DataProvider should retrieve information about product. In our case will be good to retrieve\n            formatted prices with currency code, etc... and raw prices.\n            So there will be 4 types of prices:\n            {\n                ...\n                final_price: 13,\n                regular_price: 28,\n                formatted: {\n                    final_price: "$ 13",\n                    regular_price: "$ 28",\n                },\n                adjustments: {\n                    tax: 12,\n                    formatted: {\n                        tax: "$ 12"\n                    }\n                }\n                ...\n            }\n\n        --\x3e\n        <dataProvider class="SomeVendor\\SomeModule\\Ui\\DataProvider\\Listing\\DataProvider" name="datasource">\n            <settings>\n                <requestFieldName/>\n                <primaryFieldName/>\n            </settings>\n        </dataProvider>\n    </dataSource>\n    <columns name="some_columns" component="SomeVendor_SomeComponent/js/product/list/listing">\n        \x3c!--\n            Price columns is composite component (it has children),\n            so it should have possibility to create those children by itself.\n\n            The structure of prices should be:\n                -- Price Box (collection of all prices)\n                    --- Price (is responsible for specific price information, also price can hold the collection of adjustments)\n                        ---- Adjustment\n         --\x3e\n        <column name="price" component="SomeVendor_SomeComponent/js/product/list/columns/price-box">\n            <argument name="data" xsi:type="array">\n                <item name="config" xsi:type="array">\n                    <item name="renders" xsi:type="array">\n                        <item name="prices" xsi:type="array">\n                            <item name="children" xsi:type="array">\n                                <item name="special_price" xsi:type="array">\n                                    <item name="label" xsi:type="string" translate="true">Special Price</item>\n                                    <item name="component" xsi:type="string">SomeVendor_SomeComponent/js/product/list/columns/final-price</item>\n                                    <item name="productType" xsi:type="string">simple</item>\n                                    <item name="bodyTmpl" xsi:type="string">SomeVendor_SomeComponent/product/price/special_price</item>\n                                    <item name="sortOrder" xsi:type="number">1</item>\n                                    \x3c!-- Below the collection of all adjustments is listed --\x3e\n                                    <item name="children" xsi:type="array">\n                                        <item name="tax" xsi:type="array">\n                                            <item name="component" xsi:type="string">SomeVendor_SomeComponent/js/price/adjustment</item>\n                                        </item>\n                                    </item>\n                                </item>\n                                <item name="regular_price" xsi:type="array">\n                                    <item name="label" xsi:type="string" translate="true">Regular Price</item>\n                                    <item name="component" xsi:type="string">SomeVendor_SomeComponent/js/product/list/columns/final-price</item>\n                                    <item name="bodyTmpl" xsi:type="string">SomeVendor_SomeComponent/product/price/regular_price</item>\n                                    <item name="sortOrder" xsi:type="number">2</item>\n                                    <item name="productType" xsi:type="string">simple</item>\n                                    <item name="children" xsi:type="array">\n                                        <item name="tax" xsi:type="array">\n                                            <item name="component" xsi:type="string">SomeVendor_SomeComponent/js/price/adjustment</item>\n                                        </item>\n                                    </item>\n                                </item>\n                            </item>\n                        </item>\n                    </item>\n                </item>\n            </argument>\n        </column>\n    </columns>\n</listing>\n')),(0,i.mdx)("p",null,"A good example from the codebase is the Catalog module's ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Catalog/view/frontend/ui_component/widget_recently_viewed.xml"},(0,i.mdx)("inlineCode",{parentName:"a"},"widget_recently_viewed.xml"))," file."),(0,i.mdx)("h3",{id:"price-box-component"},"Price box component"),(0,i.mdx)("p",null,"In the following code sample, the ",(0,i.mdx)("inlineCode",{parentName:"p"},"price-box")," component aggregates and creates the ",(0,i.mdx)("inlineCode",{parentName:"p"},"price")," components for a specific product."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"/**\n * Retrieve array of prices, that should be rendered for specific product\n *\n * @param {Array} row\n * @return {Array}\n */\ngetPrices: function (row) {\n    var elems = this.elems() ? this.elems() : ko.getObservable(this, 'elems'),\n        result;\n    this.initPrices(row);\n    result = _.filter(elems, function (elem) {\n        return elem.productType === row.productType;\n    });\n\n    return result;\n},\n\n/**\n * Init dynamic price components\n *\n * @param {Array} row\n * @returns {void}\n */\ninitPrices: function (row) {\n    var prices = this.renders.prices;\n    _.sortBy(prices, this._comparePrices);\n\n    _.each(prices, function (priceData) {\n        if (!priceData.component) {\n            return;\n        }\n\n        priceData.parent = this.name;\n        priceData.provider = this.provider;\n        priceData = utils.template(priceData, this);//convert to format compatible with uiLayout\n        prices.push(priceData);\n    }, this);\n\n    layout(prices); //layout is service (abstract factory), which create tree of Ui Components from JSON\n},\n\n/**\n * Sort callback to compare prices by sort order\n *\n * @param {Number} firstPrice\n * @param {Number} secondPrice\n * @returns {Number}\n * @private\n */\n_comparePrices: function (firstPrice, secondPrice) {\n    if (firstPrice.sortOrder < secondPrice.sortOrder) {\n        return -1;\n    }\n\n    if (firstPrice.sortOrder > secondPrice.sortOrder) {\n        return 1;\n    }\n\n    return 0;\n}\n")),(0,i.mdx)("p",null,"The preceding code sample is based on the Catalog module's ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Catalog/view/base/web/js/product/list/columns/price-box.js"},(0,i.mdx)("inlineCode",{parentName:"a"},"price-box")," component"),"."),(0,i.mdx)("h3",{id:"price-component"},"Price component"),(0,i.mdx)("p",null,"In our example, each price is configured to have its own template, but they all share a common price component called ",(0,i.mdx)("inlineCode",{parentName:"p"},"final-price"),".\nThis component is defined in the following code sample:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"/**\n * Retrieve specific template\n *\n * @returns {String}\n */\ngetBody: function () {\n    return this.bodyTmpl;\n},\n\n/**\n * Check if product has special price.\n *\n * @param {Object} row\n * @return {HTMLElement} special price html\n */\nhasSpecialPrice: function (row) {\n    return row['price_info']['regular_price'] > row['price_info']['final_price'];\n},\n\n/**\n * Get product regular price.\n *\n * @param {Object} row\n * @return {HTMLElement} regular price html\n */\ngetRegularPrice: function (row) {\n    return row['price_info']['formatted']['regular_price'];\n},\n\n/**\n * Get product final price.\n *\n * @param {Object} row\n * @return {HTMLElement} final price html\n */\ngetPrice: function (row) {\n    return row['price_info']['formatted']['final_price'];\n},\n\n/**\n * Get all price adjustments.\n *\n * @returns {Object}\n */\ngetAdjustments: function () {\n    var adjustments = this.elems();\n\n    _.each(adjustments, function (adjustment) {\n        adjustment.source = this.source;\n    }, this);\n\n    return adjustments;\n}\n")),(0,i.mdx)("p",null,"This code sample is based on the Catalog module's ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Catalog/view/base/web/js/product/list/columns/final-price.js"},(0,i.mdx)("inlineCode",{parentName:"a"},"final-price")," component"),"."),(0,i.mdx)("h3",{id:"price-template"},"Price template"),(0,i.mdx)("p",null,"The following code sample is for the special price template.\nIt calls the ",(0,i.mdx)("inlineCode",{parentName:"p"},"hasSpecialPrice")," function to check if a special price exists for a product."),(0,i.mdx)("p",null,"If a product has a special price, it calls ",(0,i.mdx)("inlineCode",{parentName:"p"},"getPrice")," to get the value and renders any adjustments configured for the price."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-html"},'<if args="isSalable($row()) && hasSpecialPrice($row())">\n    <span class="special-price">\n        <span class="price-container">\n            <span if="label"\n                  class="price-label"\n                  text="label"/>\n\n            <span class="price-wrapper"\n                  css="priceWrapperCssClasses"\n                  attr="priceWrapperAttr"\n                  data-price-amount=""\n                  data-price-type="finalPrice"\n                  html="getPrice($row())"/>\n\n            <each args="data: getAdjustments(), as: \'$adj\'">\n                <render args="$adj.getBody()"/>\n            </each>\n        </span>\n    </span>\n</if>\n')),(0,i.mdx)("p",null,"This example is based on the ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Catalog/view/base/web/template/product/price/special_price.html"},(0,i.mdx)("inlineCode",{parentName:"a"},"special_price.html")," template file")," for Catalog."),(0,i.mdx)("h3",{id:"tax-template"},"Tax template"),(0,i.mdx)("p",null,"The following is sample template code that is rendered for the tax adjustment component:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-html"},'<if args="displayBothPrices()">\n    <span class="price-wrapper price-excluding-tax"\n          attr="\'data-label\': $t(\'Excl. Tax\')"\n          data-price-amount=""\n          data-price-type="basePrice"\n          html="getTax($row())">\x3c!-- You can implement self::getTax function how you want --\x3e\n    </span>\n</if>\n')))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-ui-components-howto-price-rendering-md-0968d027fe4a3dac0643.js.map