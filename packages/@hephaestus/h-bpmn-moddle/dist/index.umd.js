!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("vue"),require("tslib"),require("vue-property-decorator"),require("bpmn-js/lib/Modeler"),require("bpmn-js-token-simulation"),require("./plugins/descriptor/camunda.json"),require("./plugins/descriptor/activiti.json"),require("./plugins/descriptor/flowable.json"),require("core-js/modules/es.date.to-string.js"),require("core-js/modules/es.number.constructor.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/es.regexp.to-string.js"),require("@babel/runtime-corejs3/core-js/instance/concat"),require("@babel/runtime-corejs3/core-js/instance/filter"),require("@babel/runtime-corejs3/core-js/object/keys"),require("@babel/runtime-corejs3/core-js/instance/splice"),require("@babel/runtime-corejs3/core-js/date/now"),require("@babel/runtime-corejs3/core-js/set-timeout"),require("@babel/runtime-corejs3/core-js/instance/bind"),require("@babel/runtime-corejs3/core-js/object/assign"),require("@babel/runtime-corejs3/core-js/instance/index-of"),require("vue-runtime-helpers/dist/normalize-component.mjs"),require("bpmn-js-properties-panel"),require("bpmn-js-properties-panel/lib/provider/camunda")):"function"==typeof define&&define.amd?define(["exports","vue","tslib","vue-property-decorator","bpmn-js/lib/Modeler","bpmn-js-token-simulation","./plugins/descriptor/camunda.json","./plugins/descriptor/activiti.json","./plugins/descriptor/flowable.json","core-js/modules/es.date.to-string.js","core-js/modules/es.number.constructor.js","core-js/modules/es.object.to-string.js","core-js/modules/es.regexp.to-string.js","@babel/runtime-corejs3/core-js/instance/concat","@babel/runtime-corejs3/core-js/instance/filter","@babel/runtime-corejs3/core-js/object/keys","@babel/runtime-corejs3/core-js/instance/splice","@babel/runtime-corejs3/core-js/date/now","@babel/runtime-corejs3/core-js/set-timeout","@babel/runtime-corejs3/core-js/instance/bind","@babel/runtime-corejs3/core-js/object/assign","@babel/runtime-corejs3/core-js/instance/index-of","vue-runtime-helpers/dist/normalize-component.mjs","bpmn-js-properties-panel","bpmn-js-properties-panel/lib/provider/camunda"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).main={},e.Vue,e.tslib,e.vuePropertyDecorator,e.BpmnModeler,e.TokenSimulation,e.CamundaModdleDescriptor,e.ActivitiModdleDescriptor,e.FlowableModdleDescriptor,null,null,null,null,null,null,e._Object$keys,null,null,null,null,e._Object$assign,null,e.__vue_normalize__,e.PropertiesPanelModule,e.PropertiesProviderModule)}(this,(function(e,t,n,o,r,a,i,s,l,d,c,p,u,m,v,b,g,f,_,y,h,j,E,x,w){"use strict";function C(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var M=C(r),S=C(a),P=C(i),B=C(s),T=C(l),q=C(E),k=C(x),D=C(w),O={"Activate the create/remove space tool":"启动创建/删除空间工具","Activate the global connect tool":"启动全局连接工具","Activate the hand tool":"启动手动工具","Activate the lasso tool":"启动 Lasso 工具","Ad-hoc":"Ad-hoc子流程","Add Lane above":"添加到通道之上","Add Lane below":"添加到通道之下","Append compensation activity":"追加补偿活动","Append {type}":"追加 {type}","Business Rule Task":"规则任务","Call Activity":"引用流程","Cancel Boundary Event":"取消边界事件","Cancel End Event":"结束取消事件","Change type":"更改类型","Collapsed Pool":"折叠池","Compensation Boundary Event":"补偿边界事件","Compensation End Event":"结束补偿事件","Compensation Intermediate Throw Event":"中间补偿抛出事件","Compensation Start Event":"补偿启动事件","Complex Gateway":"复杂网关","Conditional Boundary Event (non-interrupting)":"条件边界事件 (非中断)","Conditional Boundary Event":"条件边界事件","Conditional Intermediate Catch Event":"中间条件捕获事件","Conditional Start Event (non-interrupting)":"条件启动事件 (非中断)","Conditional Start Event":"条件启动事件","Connect using Association":"文本关联","Connect using DataInputAssociation":"数据关联","Connect using Sequence/MessageFlow or Association":"消息关联","Create IntermediateThrowEvent/BoundaryEvent":"创建中间抛出/边界事件","Create Pool/Participant":"创建池/参与者","Create expanded SubProcess":"创建可折叠子流程","Create {type}":"创建 {type}","Divide into three Lanes":"分成三条通道","Divide into two Lanes":"分成两条通道","End Event":"结束事件","Error Boundary Event":"错误边界事件","Error End Event":"结束错误事件","Error Start Event":"错误启动事件","Escalation Boundary Event (non-interrupting)":"升级边界事件 (非中断)","Escalation Boundary Event":"升级边界事件","Escalation End Event":"结束升级事件","Escalation Intermediate Throw Event":"中间升级抛出事件","Escalation Start Event (non-interrupting)":"升级启动事件 (非中断)","Escalation Start Event":"升级启动事件","Event Sub Process":"事件子流程","Event based Gateway":"事件网关","Exclusive Gateway":"独占网关","Expanded Pool":"展开池","Inclusive Gateway":"包容网关","Intermediate Throw Event":"中间抛出事件","Link Intermediate Catch Event":"中间链接捕获事件","Link Intermediate Throw Event":"中间链接抛出事件",Loop:"循环","Manual Task":"手动任务","Message Boundary Event (non-interrupting)":"消息边界事件 (非中断)","Message Boundary Event":"消息边界事件","Message End Event":"结束消息事件","Message Intermediate Catch Event":"中间消息捕获事件","Message Intermediate Throw Event":"中间消息抛出事件","Message Start Event (non-interrupting)":"消息启动事件 (非中断)","Message Start Event":"消息启动事件","Parallel Gateway":"并行网关","Parallel Multi Instance":"并行多实例","Receive Task":"接受任务",Remove:"移除","Script Task":"脚本任务","Send Task":"发送任务","Sequential Multi Instance":"串行多实例","Service Task":"服务任务","Signal Boundary Event (non-interrupting)":"信号边界事件 (非中断)","Signal Boundary Event":"信号边界事件","Signal End Event":"结束信号事件","Signal Intermediate Catch Event":"中间信号捕获事件","Signal Intermediate Throw Event":"中间信号抛出事件","Signal Start Event (non-interrupting)":"信号启动事件 (非中断)","Signal Start Event":"信号启动事件","Start Event":"开始事件","Sub Process (collapsed)":"可折叠子流程","Sub Process (expanded)":"可展开子流程","Sub Process":"子流程",Task:"任务","Terminate End Event":"终止边界事件","Timer Boundary Event (non-interrupting)":"定时边界事件 (非中断)","Timer Boundary Event":"定时边界事件","Timer Intermediate Catch Event":"中间定时捕获事件","Timer Start Event (non-interrupting)":"定时启动事件 (非中断)","Timer Start Event":"定时启动事件",Transaction:"事务","User Task":"用户任务","already rendered {element}":"{element} 已呈现","diagram not part of bpmn:Definitions":"图表不是 bpmn:Definitions 的一部分","element required":"需要元素","element {element} referenced by {referenced}#{property} not yet drawn":"元素 {element} 的引用 {referenced}#{property} 尚未绘制","failed to import {element}":"{element} 导入失败","flow elements must be children of pools/participants":"元素必须是池/参与者的子级","more than {count} child lanes":"超过 {count} 条通道","no diagram to display":"没有要显示的图表","no parent for {element} in {parent}":"在 {element} 中没有父元素 {parent}","no process or collaboration to display":"没有可显示的流程或协作","no shape type specified":"未指定形状类型","out of bounds release":"越界释放"};var I={translate:["value",function(e,t){var n=t||{};return(O[e]||e).replace(/{([^}]+)}/g,(function(e,t){return n[t]||"{"+t+"}"}))}]},N=function(e){function t(){e.apply(this,arguments)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t}(o.Vue);n.__decorate([o.Prop({type:String,required:!0}),n.__metadata("design:type",String)],N.prototype,"index",void 0),n.__decorate([o.Prop({type:String,required:!0}),n.__metadata("design:type",String)],N.prototype,"header",void 0);var L=N=n.__decorate([o.Component],N),A=q.default({render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-expansion-panel",{key:e.index},[n("v-expansion-panel-header",[e._v(e._s(e.header))]),e._v(" "),n("v-expansion-panel-content",[n("v-list",{staticClass:"ml-1 mr-1"},[e._t("default")],2)],1)],1)},staticRenderFns:[]},undefined,L,undefined,false,undefined,!1,void 0,void 0,void 0),V=function(e){function t(){e.apply(this,arguments)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t}(o.Vue);n.__decorate([o.Prop({type:String,required:!0,default:""}),n.__metadata("design:type",String)],V.prototype,"content",void 0);var F=V=n.__decorate([o.Component],V),H=q.default({render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.content?n("v-list-item-action",[n("v-tooltip",{attrs:{left:"","max-width":"200px"},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on,r=t.attrs;return[n("v-icon",e._g(e._b({attrs:{color:"grey lighten-1",dark:""}},"v-icon",r,!1),o),[e._v("mdi-information")])]}}],null,!1,36085519)},[e._v(" "),n("span",[e._v(e._s(e.content))])])],1):e._e()},staticRenderFns:[]},undefined,F,undefined,false,undefined,!1,void 0,void 0,void 0),$=function(e){function t(){e.apply(this,arguments)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t}(o.Vue);n.__decorate([o.VModel({type:String}),n.__metadata("design:type",String)],$.prototype,"inputValue",void 0),n.__decorate([o.Prop({type:String,default:""}),n.__metadata("design:type",String)],$.prototype,"label",void 0),n.__decorate([o.Prop({type:String,default:""}),n.__metadata("design:type",String)],$.prototype,"tooltip",void 0),n.__decorate([o.Prop({type:Boolean,default:!1}),n.__metadata("design:type",Boolean)],$.prototype,"disabled",void 0);var R=$=n.__decorate([o.Component({components:{HPanelTooltip:H}})],$),G=q.default({render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-list-item",{staticClass:"pa-0",attrs:{dense:""}},[n("v-list-item-content",[n("v-text-field",{staticClass:"ml-1 pr-2",attrs:{label:e.label,disabled:e.disabled,outlined:"",dense:"","hide-details":"",clearable:""},model:{value:e.inputValue,callback:function(t){e.inputValue=t},expression:"inputValue"}})],1),e._v(" "),n("h-panel-tooltip",{attrs:{content:e.tooltip}})],1)},staticRenderFns:[]},undefined,R,undefined,false,undefined,!1,void 0,void 0,void 0),z=function(e){function t(){e.apply(this,arguments)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t}(o.Vue);n.__decorate([o.Prop({type:Object,required:!0,default:function(){}}),n.__metadata("design:type",Object)],z.prototype,"schema",void 0);var U=z=n.__decorate([o.Component({components:{HExpansionPanel:A,HPanelTextField:G}})],z),X=q.default({render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[n("v-row",[n("v-col",[n("v-card",{attrs:{flat:"",outlined:"",tile:""}},[n("v-card-title",[e._v("\n                    "+e._s(e.schema.id)+"\n                ")]),e._v(" "),n("v-divider"),e._v(" "),n("v-card-text",{staticClass:"pa-2"},[n("v-expansion-panels",{staticClass:"mb-4",attrs:{focusable:"",mandatory:""}},[n("h-expansion-panel",{attrs:{index:"general",header:"常规"}},[n("h-panel-text-field",{attrs:{label:"Id",tooltip:"这映射到流程定义键"},model:{value:e.schema.id,callback:function(t){e.$set(e.schema,"id",t)},expression:"schema.id"}}),e._v(" "),n("h-panel-text-field",{attrs:{label:"名称"},model:{value:e.schema.name,callback:function(t){e.$set(e.schema,"name",t)},expression:"schema.name"}})],1),e._v(" "),n("h-expansion-panel",{attrs:{index:"general2",header:"常规"}},[n("h-panel-text-field",{attrs:{label:"Id"},model:{value:e.schema.id,callback:function(t){e.$set(e.schema,"id",t)},expression:"schema.id"}})],1)],1)],1)],1)],1)],1)],1)},staticRenderFns:[]},undefined,U,undefined,false,undefined,!1,void 0,void 0,void 0),W=(new DOMParser).parseFromString('<?xml version="1.0" encoding="UTF-8"?>\r\n<bpmn2:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn2="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xsi:schemaLocation="http://www.omg.org/spec/BPMN/20100524/MODEL BPMN20.xsd" id="sample-diagram" targetNamespace="http://bpmn.io/schema/bpmn">\r\n  <bpmn2:process id="Process_1" isExecutable="false">\r\n    <bpmn2:startEvent id="StartEvent_1"/>\r\n  </bpmn2:process>\r\n  <bpmndi:BPMNDiagram id="BPMNDiagram_1">\r\n    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1">\r\n      <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">\r\n        <dc:Bounds height="36.0" width="36.0" x="412.0" y="240.0"/>\r\n      </bpmndi:BPMNShape>\r\n    </bpmndi:BPMNPlane>\r\n  </bpmndi:BPMNDiagram>\r\n</bpmn2:definitions>\r\n',"text/xml"),J=function(e){function t(){e.apply(this,arguments),this.bpmnModeler={},this.element={},this.businessObject={},this.elementType="",this.bpmn=W,this.icon="justify",this.toggle_exclusive=2,this.toggle_multiple=[1,2,3],this.dropdown_font=[{text:"Arial"},{text:"Calibri"},{text:"Courier"},{text:"Verdana"}],this.dropdown_edit=[{text:"100%"},{text:"75%"},{text:"50%"},{text:"25%"},{text:"0%"}]}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={additionalModules:{configurable:!0},moddleExtensions:{configurable:!0}};return n.additionalModules.get=function(){var e=[];return e.push(I),this.simulation&&e.push(S.default),e.push(D.default),e.push(k.default),e},n.moddleExtensions.get=function(){var e={};return"activiti"===this.type&&(e.activiti=B.default),"flowable"===this.type&&(e.flowable=T.default),"camunda"===this.type&&(e.camunda=P.default),e},t.prototype.createBpmnModeler=function(){return new M.default({container:"#canvas",keyboard:{bindTo:document},propertiesPanel:{parent:"#properties-panel"},additionalModules:this.additionalModules,moddleExtensions:this.moddleExtensions})},t.prototype.getCanvas=function(){return this.bpmnModeler.get("canvas")},t.prototype.getEventBus=function(){return this.bpmnModeler.get("eventBus")},t.prototype.onBusinessObjectChange=function(e){this.businessObject=e},t.prototype.addEventBusListener=function(){var e=this,t=this.getEventBus();["element.click","element.changed","import.done"].forEach((function(n){t.on(n,(function(t){console.log("[HBM] |- Event Type : ",n),console.log("[HBM] |- E : ",t),n.replace(/\./g,"-");var o=t?t.element:null;e.element=o,e.onBusinessObjectChange(o.businessObject)}))}))},t.prototype.addListeners=function(){this.addEventBusListener()},t.prototype.createNewDiagram=async function(e){try{var t=(await this.bpmnModeler.importXML(e)).warnings;this.addListeners(),console.log("[HBM] |- Create New Diagram Success !",t);var n=this.getCanvas();n.zoom("fit-viewport","auto"),this.element=n.getRootElement()}catch(e){var o=e.warnings,r=e.message;console.error("[HBM] |- Could not create BPMN 2.0 diagram!",o,r)}},t.prototype.init=function(){this.bpmnModeler=this.createBpmnModeler(),this.createNewDiagram(this.bpmn)},t.prototype.mounted=function(){this.init()},t.prototype.onElementChanged=function(e){e&&(console.log(e),console.log(e.type),this.elementType=e.type.split(":")[1]||"",this.businessObject=e.businessObject)},t.prototype.onElementClick=function(e){console.log("=============== click ==",e),this.element=e.businessObject},Object.defineProperties(t.prototype,n),t}(o.Vue);n.__decorate([o.Prop({type:Boolean,default:!0}),n.__metadata("design:type",Boolean)],J.prototype,"simulation",void 0),n.__decorate([o.Prop({type:Boolean,default:!0}),n.__metadata("design:type",Boolean)],J.prototype,"keyboard",void 0),n.__decorate([o.Prop({type:String,default:"camunda"}),n.__metadata("design:type",String)],J.prototype,"type",void 0),n.__decorate([o.Watch("element"),n.__metadata("design:type",Function),n.__metadata("design:paramtypes",[Object]),n.__metadata("design:returntype",void 0)],J.prototype,"onElementChanged",null);var K=J=n.__decorate([o.Component({components:{HPropertyPanel:X}})],J),Q=q.default({render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"grey lighten-5 pa-0"},[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"12",sm:"9",md:"9"}},[n("v-toolbar",{attrs:{dense:""}},[n("v-btn-toggle",{attrs:{color:"primary",dense:"",group:"",multiple:""},model:{value:e.toggle_multiple,callback:function(t){e.toggle_multiple=t},expression:"toggle_multiple"}},[n("v-btn",{attrs:{value:1,text:""}},[n("v-icon",[e._v("mdi-format-bold")])],1),e._v(" "),n("v-btn",{attrs:{value:2,text:""}},[n("v-icon",[e._v("mdi-format-italic")])],1),e._v(" "),n("v-btn",{attrs:{value:3,text:""}},[n("v-icon",[e._v("mdi-format-underline")])],1),e._v(" "),n("v-btn",{attrs:{value:4,text:""}},[n("v-icon",[e._v("mdi-format-color-fill")])],1)],1),e._v(" "),n("div",{staticClass:"mx-4"}),e._v(" "),n("v-btn-toggle",{attrs:{color:"primary",dense:"",group:""},model:{value:e.toggle_exclusive,callback:function(t){e.toggle_exclusive=t},expression:"toggle_exclusive"}},[n("v-btn",{attrs:{value:1,text:""}},[n("v-icon",[e._v("mdi-format-align-left")])],1),e._v(" "),n("v-btn",{attrs:{value:2,text:""}},[n("v-icon",[e._v("mdi-format-align-center")])],1),e._v(" "),n("v-btn",{attrs:{value:3,text:""}},[n("v-icon",[e._v("mdi-format-align-right")])],1),e._v(" "),n("v-btn",{attrs:{value:4,text:""}},[n("v-icon",[e._v("mdi-format-align-justify")])],1)],1)],1),e._v(" "),n("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[n("v-row",[n("v-col",{staticClass:"pa-0",attrs:{cols:"10"}},[n("div",{staticClass:"containers"},[n("div",{staticClass:"canvas",attrs:{id:"canvas"}})])]),e._v(" "),n("v-col",{staticClass:"pa-0",attrs:{cols:"2"}},[n("div",{staticClass:"properties-panel",attrs:{id:"properties-panel"}})])],1)],1)],1),e._v(" "),n("v-col",{attrs:{cols:"3",md:"3"}},[n("h-property-panel",{attrs:{schema:e.businessObject}})],1)],1)],1)},staticRenderFns:[]},undefined,K,undefined,false,undefined,!1,void 0,void 0,void 0),Y={install:function(e){e.component("HBpmnModdle",Q)}};e.HBpmnModdle=Y,e.default=Q,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=index.umd.js.map
