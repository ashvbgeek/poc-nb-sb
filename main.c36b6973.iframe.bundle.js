(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"./.storybook/preview.js":function(module,exports,__webpack_require__){__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.parameters=void 0;exports.parameters={actions:{argTypesRegex:"^on.*"}}},"./.storybook/preview.js-generated-config-entry.js":function(module,exports,__webpack_require__){__webpack_require__("./node_modules/core-js/modules/es.weak-map.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js");var _clientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/index.js"),config=function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__("./.storybook/preview.js"));function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(config).forEach((function(key){var value=config[key];switch(key){case"args":return(0,_clientApi.addArgs)(value);case"argTypes":return(0,_clientApi.addArgTypes)(value);case"decorators":return value.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return(0,_clientApi.addLoader)(loader,!1)}));case"parameters":return(0,_clientApi.addParameters)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return(0,_clientApi.addArgsEnhancer)(enhancer)}));case"render":return(0,_clientApi.setGlobalRender)(value);case"globals":case"globalTypes":var v={};return v[key]=value,(0,_clientApi.addParameters)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx|js|jsx))$")],module,!1)}).call(this,__webpack_require__("./node_modules/webpack/buildin/module.js")(module))},"./src/card.tsx":function(module,exports,__webpack_require__){__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _nativeBase=__webpack_require__("./node_modules/native-base/lib/module/index.js"),_jsxRuntime=(_interopRequireDefault(__webpack_require__("./node_modules/react/index.js")),__webpack_require__("./node_modules/react/jsx-runtime.js")),_default=function Card(_ref){var imgUrl=_ref.imgUrl,category=_ref.category,date=_ref.date,heading=_ref.heading,desc=_ref.desc;return(0,_jsxRuntime.jsx)(_jsxRuntime.Fragment,{children:(0,_jsxRuntime.jsxs)(_nativeBase.Box,{shadow:"2",rounded:"lg",w:{base:"64",md:"80",lg:"md"},_light:{bg:"coolGray.50"},_dark:{bg:"gray.700"},overflow:"hidden",children:[imgUrl&&(0,_jsxRuntime.jsx)(_nativeBase.AspectRatio,{w:"100%",ratio:1.7,children:(0,_jsxRuntime.jsx)(_nativeBase.Image,{source:{uri:imgUrl},alt:"image base"})}),category&&(0,_jsxRuntime.jsx)(_nativeBase.Text,{bold:!0,position:"absolute",color:"coolGray.50",top:"0",m:"4",textTransform:"uppercase",children:category}),(0,_jsxRuntime.jsxs)(_nativeBase.Stack,{space:"2",p:"4",children:[date&&(0,_jsxRuntime.jsx)(_nativeBase.Text,{color:"gray.400",children:date}),heading&&(0,_jsxRuntime.jsx)(_nativeBase.Text,{fontSize:"xl",children:heading}),desc&&(0,_jsxRuntime.jsxs)(_nativeBase.Text,{children:[" ",desc," "]})]})]})})};exports.default=_default;try{card.displayName="card",card.__docgenInfo={description:"",displayName:"card",props:{imgUrl:{defaultValue:null,description:"",name:"imgUrl",required:!1,type:{name:"string"}},category:{defaultValue:null,description:"",name:"category",required:!1,type:{name:"string"}},date:{defaultValue:null,description:"",name:"date",required:!1,type:{name:"string"}},heading:{defaultValue:null,description:"",name:"heading",required:!1,type:{name:"string"}},desc:{defaultValue:null,description:"",name:"desc",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/card.tsx#card"]={docgenInfo:card.__docgenInfo,name:"card",path:"src/card.tsx#card"})}catch(__react_docgen_typescript_loader_error){}},"./src/index.tsx":function(module,exports,__webpack_require__){__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.weak-map.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"Card",{enumerable:!0,get:function get(){return _card.default}}),Object.defineProperty(exports,"CardProps",{enumerable:!0,get:function get(){return _card.CardProps}});var _card=function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__("./src/card.tsx"));function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}try{Card.displayName="Card",Card.__docgenInfo={description:"",displayName:"Card",props:{imgUrl:{defaultValue:null,description:"",name:"imgUrl",required:!1,type:{name:"string"}},category:{defaultValue:null,description:"",name:"category",required:!1,type:{name:"string"}},date:{defaultValue:null,description:"",name:"date",required:!1,type:{name:"string"}},heading:{defaultValue:null,description:"",name:"heading",required:!1,type:{name:"string"}},desc:{defaultValue:null,description:"",name:"desc",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#Card"]={docgenInfo:Card.__docgenInfo,name:"Card",path:"src/index.tsx#Card"})}catch(__react_docgen_typescript_loader_error){}},"./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx|js|jsx))$":function(module,exports,__webpack_require__){var map={"./Card.stories.tsx":"./stories/Card.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx|js|jsx))$"},"./stories/Card.stories.tsx":function(module,exports,__webpack_require__){__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js");var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.Primary=void 0;var _extends2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/extends.js")),_src=(_interopRequireDefault(__webpack_require__("./node_modules/react/index.js")),__webpack_require__("./src/index.tsx")),_nativeBase=__webpack_require__("./node_modules/native-base/lib/module/index.js"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_default={title:"Card",component:_src.Card,argTypes:{children:{control:{type:"text"}}},parameters:{controls:{expanded:!0}}};exports.default=_default;var Primary=function Template(args){return(0,_jsxRuntime.jsx)(_nativeBase.NativeBaseProvider,{children:(0,_jsxRuntime.jsx)(_src.Card,(0,_extends2.default)({},args))})}.bind({});exports.Primary=Primary,Primary.args={imgUrl:"https://examples.nativebase.io/images/dawki-river.png",category:"NEWS",date:"May 30, 2022",heading:"The Garden City",desc:"Bengaluru (also called Bangalore) is the center of India's high-tech industry. It is located in southern India on the Deccan Plateau."};try{Meta.displayName="Meta",Meta.__docgenInfo={description:"Metadata to configure the stories for a component.",displayName:"Meta",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Card.stories.tsx#Meta"]={docgenInfo:Meta.__docgenInfo,name:"Meta",path:"stories/Card.stories.tsx#Meta"})}catch(__react_docgen_typescript_loader_error){}},"./storybook-init-framework-entry.js":function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),__webpack_require__("./.storybook/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,2,3]]]);