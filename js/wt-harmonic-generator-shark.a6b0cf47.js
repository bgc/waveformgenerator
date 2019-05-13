(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["wt-harmonic-generator-shark"],{4417:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{"align-center":"","justify-center":"",row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("label",{staticClass:"theme--light v-label v-label--active caption"},[t._v(t._s(t.slLabel))])]),a("v-layout",{attrs:{"align-left":"",row:""}},[a("v-flex",{attrs:{xs2:""}},[a("div",{attrs:{id:t.propName}})]),a("v-flex",{staticClass:"pl-3",attrs:{xs10:""}},[a("v-select",{attrs:{value:t.currentSize,items:t.tableSizes,solo:"",prefix:"Table Size: ",suffix:"Samples",placeholder:"Table Size",label:"Table Size"},on:{change:t.changeTable}})],1)],1)],1)},i=[],s=a("ea48"),r={name:"WavetableSize",props:{eventName:{type:String,default:function(){return"TableSize"}},slLabel:{type:String,default:function(){return"Table Size"}}},data:function(){return{propName:this.eventName,tableSizes:[128,256,512,1024,2048,4096],currentSize:256}},watch:{currentSize:function(t,e){s["a"].$emit(`update:${this.propName}`,t)}},mounted(){},beforeDestroy(){},methods:{changeTable:function(t){this.currentSize=t}}},l=r,o=a("2877"),u=a("6544"),c=a.n(u),m=a("0e8f"),h=a("a722"),f=a("b56d"),d=Object(o["a"])(l,n,i,!1,null,null,null);e["a"]=d.exports;c()(d,{VFlex:m["a"],VLayout:h["a"],VSelect:f["a"]})},"87af":function(t,e,a){"use strict";a.d(e,"a",function(){return n});const n={accent:"#b3b3b3",fill:"#181E34"}},"9c4b":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{"align-center":"","justify-center":"",row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("label",{staticClass:"theme--light v-label v-label--active caption"},[t._v(t._s(t.slLabel))])]),a("v-layout",{attrs:{"align-left":"",row:""}},[a("v-flex",{attrs:{xs10:""}},[a("div",{attrs:{id:t.propName}})]),a("v-flex",{staticClass:"pl-3",attrs:{xs1:""}},[a("div",{attrs:{id:t.numericName}})])],1)],1)},i=[],s=a("ea48"),r=a("ddd0"),l=a("87af"),o={name:"ControlSlider",props:{initStep:{type:Number,default:function(){return 1}},initMin:{type:Number,default:function(){return 1}},initMax:{type:Number,default:function(){return 40}},eventName:{type:String,default:function(){return"Harmonics"}},slLabel:{type:String,default:function(){return"Harmonics"}}},data:function(){return{min:this.initMin,max:this.initMax,step:this.initStep,ui:null,ui_number:null,controlParam:this.initMin,propName:this.eventName,numericName:`${this.eventName}_number`}},mounted(){const t=document.getElementById(this.propName),e=t.parentElement.offsetWidth;this.ui=new r["Slider"](`#${this.propName}`,{size:[e,20],mode:"absolute",step:this.step,min:this.min,max:this.max,value:this.controlParam}),this.ui.colorize("accent",l["a"].accent),this.ui.colorize("fill",l["a"].fill),this.ui_number=new r["Number"](`#${this.numericName}`,{mode:"absolute",step:this.step,min:this.min,max:this.max}),this.ui_number.link(this.ui),this.ui.on("change",t=>{const e=t;this.controlParam=e,s["a"].$emit(`update:ControlSlider:${this.propName}`,e)})},beforeDestroy(){this.ui&&this.ui.destroy(),this.ui_number&&this.ui_number.destroy()},methods:{}},u=o,c=a("2877"),m=a("6544"),h=a.n(m),f=a("0e8f"),d=a("a722"),b=Object(c["a"])(u,n,i,!1,null,null,null);e["a"]=b.exports;h()(b,{VFlex:f["a"],VLayout:d["a"]})},cf8f:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-sheet",{attrs:{elevation:"5"}},[a("toolbar",{attrs:{"m-data":t.generatedWaveForm,title:"Harmonic Shark"}}),a("v-sheet",{staticClass:"pa-3",attrs:{elevation:"10","min-height":"255"}},[t.dataset?a("waveform",{attrs:{"m-dataset":t.dataset}}):t._e()],1),a("v-sheet",{staticClass:"pa-3",attrs:{elevation:"10"}},[a("harmonicsslider",{staticClass:"mt-2",attrs:{"event-name":"Harmonics"}}),a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{"xs-2":"","align-end":""}},[a("tableselect",{attrs:{"event-name":"TableSize"}})],1)],1)],1)],1)},i=[],s=a("ea48"),r=a("4417"),l=a("e330"),o=a("9c4b"),u=a("ffe8"),c=a("7bac"),m=a("242d"),h=a("e1c1"),f={name:"ScwGeneratorHarmonicShark",components:{waveform:l["a"],harmonicsslider:o["a"],toolbar:u["a"],tableselect:r["a"]},data:()=>({generatedWaveForm:null,dataset:null,numHarmonics:1,tablesize:256,srate:44100}),computed:{},watch:{numHarmonics:function(t,e){this.generateData(this.tablesize)},tablesize:function(t,e){const a=t;this.generateData(a)}},created(){s["a"].$on("update:ControlSlider:Harmonics",t=>{this.numHarmonics=t}),s["a"].$on("update:TableSize",t=>{this.tablesize=t})},mounted(){this.generateData(this.tablesize)},beforeDestroy(){this.note=null,this.generatedWaveForm=null,this.dataset=null},methods:{waveformGenerator:h["b"].harmonicsBased.shark,generateData:function(t){if(this.cantGenerate())return;const e=this.getAllowedHarmonics(t);this.generatedWaveForm=this.waveformGenerator(t,e);const a=Object(c["a"])(this.generatedWaveForm,44100);this.dataset=a},getAllowedHarmonics:function(t){const e=Object(m["c"])(t);return this.numHarmonics>=e?e-1:this.numHarmonics},cantGenerate:function(){return null==this.numHarmonics}}},d=f,b=a("2877"),p=a("6544"),v=a.n(p),S=a("0e8f"),g=a("a722"),x=a("8dd9"),w=Object(b["a"])(d,n,i,!1,null,null,null);e["default"]=w.exports;v()(w,{VFlex:S["a"],VLayout:g["a"],VSheet:x["a"]})}}]);