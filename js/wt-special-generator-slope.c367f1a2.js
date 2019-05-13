(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["wt-special-generator-slope"],{"386e":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-sheet",{attrs:{elevation:"5"}},[a("toolbar",{attrs:{"m-data":e.generatedWaveForm,title:"Universal Slope Generator"}}),a("v-sheet",{staticClass:"pa-3",attrs:{elevation:"10","min-height":"255"}},[e.dataset?a("waveform",{attrs:{"m-dataset":e.dataset}}):e._e()],1),a("v-sheet",{staticClass:"pa-3",attrs:{elevation:"10"}},[a("harmonicsslider",{attrs:{"init-min":0,"init-max":1,"init-step":.01,"sl-label":"Rise/Fall","event-name":"Slope"}}),a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{"xs-2":"","align-end":""}},[a("tableselect",{attrs:{"event-name":"TableSize"}})],1)],1)],1)],1)},n=[],s=a("ea48"),l=a("4417"),r=a("e330"),o=a("9c4b"),u=a("ffe8"),c=a("7bac"),m=a("e1c1"),h={name:"WtGeneratorSpecialUSG",components:{tableselect:l["a"],waveform:r["a"],harmonicsslider:o["a"],toolbar:u["a"]},data:()=>({generatedWaveForm:null,dataset:null,slope:0,tablesize:256,srate:44100}),watch:{tablesize:function(e,t){const a=e;this.generateData(a)},slope:function(e,t){this.generateData(this.tablesize)}},created(){s["a"].$on("update:TableSize",e=>{this.tablesize=e}),s["a"].$on("update:ControlSlider:Slope",e=>{this.slope=e})},mounted(){this.generateData(this.tablesize)},beforeDestroy(){this.generatedWaveForm=null,this.dataset=null},methods:{waveformGenerator:m["b"].specialCases.usg,generateData:function(e){if(null===this.slope)return;const t=this.slope>=1?1:this.slope;this.generatedWaveForm=this.waveformGenerator(e,t);const a=Object(c["a"])(this.generatedWaveForm,44100);this.dataset=a}}},p=h,f=a("2877"),d=a("6544"),b=a.n(d),v=a("0e8f"),S=a("a722"),x=a("8dd9"),g=Object(f["a"])(p,i,n,!1,null,null,null);t["default"]=g.exports;b()(g,{VFlex:v["a"],VLayout:S["a"],VSheet:x["a"]})},4417:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",{attrs:{"align-center":"","justify-center":"",row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("label",{staticClass:"theme--light v-label v-label--active caption"},[e._v(e._s(e.slLabel))])]),a("v-layout",{attrs:{"align-left":"",row:""}},[a("v-flex",{attrs:{xs2:""}},[a("div",{attrs:{id:e.propName}})]),a("v-flex",{staticClass:"pl-3",attrs:{xs10:""}},[a("v-select",{attrs:{value:e.currentSize,items:e.tableSizes,solo:"",prefix:"Table Size: ",suffix:"Samples",placeholder:"Table Size",label:"Table Size"},on:{change:e.changeTable}})],1)],1)],1)},n=[],s=a("ea48"),l={name:"WavetableSize",props:{eventName:{type:String,default:function(){return"TableSize"}},slLabel:{type:String,default:function(){return"Table Size"}}},data:function(){return{propName:this.eventName,tableSizes:[128,256,512,1024,2048,4096],currentSize:256}},watch:{currentSize:function(e,t){s["a"].$emit(`update:${this.propName}`,e)}},mounted(){},beforeDestroy(){},methods:{changeTable:function(e){this.currentSize=e}}},r=l,o=a("2877"),u=a("6544"),c=a.n(u),m=a("0e8f"),h=a("a722"),p=a("b56d"),f=Object(o["a"])(r,i,n,!1,null,null,null);t["a"]=f.exports;c()(f,{VFlex:m["a"],VLayout:h["a"],VSelect:p["a"]})},"87af":function(e,t,a){"use strict";a.d(t,"a",function(){return i});const i={accent:"#b3b3b3",fill:"#181E34"}},"9c4b":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",{attrs:{"align-center":"","justify-center":"",row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("label",{staticClass:"theme--light v-label v-label--active caption"},[e._v(e._s(e.slLabel))])]),a("v-layout",{attrs:{"align-left":"",row:""}},[a("v-flex",{attrs:{xs10:""}},[a("div",{attrs:{id:e.propName}})]),a("v-flex",{staticClass:"pl-3",attrs:{xs1:""}},[a("div",{attrs:{id:e.numericName}})])],1)],1)},n=[],s=a("ea48"),l=a("ddd0"),r=a("87af"),o={name:"ControlSlider",props:{initStep:{type:Number,default:function(){return 1}},initMin:{type:Number,default:function(){return 1}},initMax:{type:Number,default:function(){return 40}},eventName:{type:String,default:function(){return"Harmonics"}},slLabel:{type:String,default:function(){return"Harmonics"}}},data:function(){return{min:this.initMin,max:this.initMax,step:this.initStep,ui:null,ui_number:null,controlParam:this.initMin,propName:this.eventName,numericName:`${this.eventName}_number`}},mounted(){const e=document.getElementById(this.propName),t=e.parentElement.offsetWidth;this.ui=new l["Slider"](`#${this.propName}`,{size:[t,20],mode:"absolute",step:this.step,min:this.min,max:this.max,value:this.controlParam}),this.ui.colorize("accent",r["a"].accent),this.ui.colorize("fill",r["a"].fill),this.ui_number=new l["Number"](`#${this.numericName}`,{mode:"absolute",step:this.step,min:this.min,max:this.max}),this.ui_number.link(this.ui),this.ui.on("change",e=>{const t=e;this.controlParam=t,s["a"].$emit(`update:ControlSlider:${this.propName}`,t)})},beforeDestroy(){this.ui&&this.ui.destroy(),this.ui_number&&this.ui_number.destroy()},methods:{}},u=o,c=a("2877"),m=a("6544"),h=a.n(m),p=a("0e8f"),f=a("a722"),d=Object(c["a"])(u,i,n,!1,null,null,null);t["a"]=d.exports;h()(d,{VFlex:p["a"],VLayout:f["a"]})}}]);