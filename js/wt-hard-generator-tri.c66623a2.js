(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["wt-hard-generator-tri"],{4417:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",{attrs:{"align-center":"","justify-center":"",row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("label",{staticClass:"theme--light v-label v-label--active caption"},[e._v(e._s(e.slLabel))])]),a("v-layout",{attrs:{"align-left":"",row:""}},[a("v-flex",{attrs:{xs2:""}},[a("div",{attrs:{id:e.propName}})]),a("v-flex",{staticClass:"pl-3",attrs:{xs10:""}},[a("v-select",{attrs:{value:e.currentSize,items:e.tableSizes,solo:"",prefix:"Table Size: ",suffix:"Samples",placeholder:"Table Size",label:"Table Size"},on:{change:e.changeTable}})],1)],1)],1)},l=[],n=a("ea48"),s={name:"WavetableSize",props:{eventName:{type:String,default:function(){return"TableSize"}},slLabel:{type:String,default:function(){return"Table Size"}}},data:function(){return{propName:this.eventName,tableSizes:[128,256,512,1024,2048,4096],currentSize:256}},watch:{currentSize:function(e,t){n["a"].$emit(`update:${this.propName}`,e)}},mounted(){},beforeDestroy(){},methods:{changeTable:function(e){this.currentSize=e}}},i=s,o=a("2877"),c=a("6544"),u=a.n(c),d=a("0e8f"),v=a("a722"),b=a("b56d"),f=Object(o["a"])(i,r,l,!1,null,null,null);t["a"]=f.exports;u()(f,{VFlex:d["a"],VLayout:v["a"],VSelect:b["a"]})},c58c:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-sheet",{attrs:{elevation:"5"}},[a("toolbar",{attrs:{"m-data":e.generatedWaveForm,title:"Triangle"}}),a("v-sheet",{staticClass:"pa-3",attrs:{elevation:"10","min-height":"255"}},[e.dataset?a("waveform",{attrs:{"m-dataset":e.dataset}}):e._e()],1),a("v-sheet",{staticClass:"pa-3",attrs:{elevation:"10"}},[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{"xs-2":"","align-end":""}},[a("tableselect",{attrs:{"event-name":"TableSize"}})],1)],1)],1)],1)},l=[],n=a("ea48"),s=a("4417"),i=a("e330"),o=a("ffe8"),c=a("7bac"),u=a("e1c1"),d={name:"WtGeneratorHardTriangle",components:{waveform:i["a"],toolbar:o["a"],tableselect:s["a"]},data:()=>({generatedWaveForm:null,dataset:null,tablesize:256,srate:44100}),computed:{},watch:{tablesize:function(e,t){const a=e;this.generateData(a)}},created(){n["a"].$on("update:TableSize",e=>{this.tablesize=e})},mounted(){this.generateData(this.tablesize)},beforeDestroy(){this.generatedWaveForm=null,this.dataset=null},methods:{waveformGenerator:u["b"].hardBased.triangle,generateData:function(e){this.generatedWaveForm=this.waveformGenerator(e);const t=Object(c["a"])(this.generatedWaveForm,44100);this.dataset=t}}},v=d,b=a("2877"),f=a("6544"),h=a.n(f),m=a("0e8f"),p=a("a722"),g=a("8dd9"),S=Object(b["a"])(v,r,l,!1,null,null,null);t["default"]=S.exports;h()(S,{VFlex:m["a"],VLayout:p["a"],VSheet:g["a"]})}}]);