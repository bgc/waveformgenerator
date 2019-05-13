(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["scw-harmonic-generator-saw"],{"2e29":function(t,e,n){},3466:function(t,e,n){"use strict";n.d(e,"a",function(){return u}),n.d(e,"b",function(){return c});var i=n("e814"),a=n.n(i);const o=[435,440],s=440,r=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],u=function(t,e){if(t>=128)return 0;let n,i,a;return-1===o.indexOf(e)&&(e=s),i=Math.pow(2,1/12),a=e/2*Math.pow(i,3),n=a*Math.pow(.5,5),n*Math.pow(i,t)},c=function(t){let e=a()(t,10)%12;return r[e]}},"747b":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{"align-center":"","justify-center":"",column:""}},[n("v-flex",{attrs:{xs12:"","align-center":""}},[n("v-layout",{attrs:{"align-center":"","justify-center":"",row:""}},[n("v-text-field",{staticClass:"mx-3",attrs:{xs1:"",label:"Selected Note",disabled:""},model:{value:t.noteName,callback:function(e){t.noteName=e},expression:"noteName"}}),n("v-spacer"),n("v-text-field",{staticClass:"mx-3",attrs:{xs3:"",label:"Octave",type:"number",min:"0",max:"9"},model:{value:t.octave,callback:function(e){t.octave=e},expression:"octave"}}),n("v-spacer"),n("v-text-field",{staticClass:"mx-3",attrs:{xs1:"",label:"Freq (Hz)",disabled:""},model:{value:t.freqHertz,callback:function(e){t.freqHertz=e},expression:"freqHertz"}})],1)],1),n("v-flex",{attrs:{xs12:"","align-center":""}},[n("div",{attrs:{id:"myPiano"}})])],1)},a=[],o=n("ea48"),s=n("ddd0"),r=n("3466"),u=n("87af");const c=["a","w","s","e","d","f","t","g","y","h","u","j"];var l={name:"PianoOctave",props:{initWidth:{type:Number,default:function(){return 960}},initHeight:{type:Number,default:function(){return 130}},initLowNote:{type:Number,default:function(){return 0}},initHighNote:{type:Number,default:function(){return 11}},initOctave:{type:Number,default:function(){return 3}}},data:function(){return{width:this.initWidth,height:this.initHeight,lowNote:this.initLowNote,highNote:this.initHighNote,ui:null,pnote:null,octave:this.initOctave}},computed:{noteName:function(){return null===this.pnote?"---":Object(r["b"])(this.pnote)},freqHertz:function(){return null===this.pnote?"---":Object(r["a"])(this.pnote+12*this.octave).toFixed(3)},finalNote:function(){return null===this.pnote?null:this.pnote+12*this.octave}},watch:{finalNote:function(){o["a"].$emit("update:Piano:Note",this.finalNote)}},mounted(){this.ui=new s["Piano"]("#myPiano",{mode:"button",lowNote:this.lowNote,highNote:this.highNote}),this.ui.colorize("accent",u["a"].accent),this.ui.colorize("fill",u["a"].fill),this.ui.on("change",t=>{const e=t.note,n=t.state;!1!==n&&(this.pnote=e)}),window.addEventListener("keypress",this.handleKeyPress.bind(this))},beforeDestroy(){this.ui&&this.ui.destroy(),window.removeEventListener("keypress",this.handleKeyPress)},methods:{handleKeyPress:function(t){const e=t.key.toLowerCase(),n=c.indexOf(e);n<0||n>=12||(this.ui.toggleKey(this.lowNote+n,!0),this.ui.toggleKey(this.lowNote+n,!1))}}},h=l,d=n("2877"),f=n("6544"),m=n.n(f),p=n("0e8f"),v=n("a722"),g=n("9910"),b=n("8654"),w=(n("7e63"),n("d9bd")),x=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},y={name:"v-textarea",extends:b["a"],props:{autoGrow:Boolean,noResize:Boolean,outline:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return x({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},b["a"].options.computed.classes.call(this,null))},dynamicHeight:function(){return this.autoGrow?this.inputHeight:"auto"},isEnclosed:function(){return this.textarea||b["a"].options.computed.isEnclosed.call(this)},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){!this.internalChange&&this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout(function(){t.autoGrow&&t.calculateInputHeight()},0),this.autoGrow&&this.noResize&&Object(w["b"])('"no-resize" is now implied when using "auto-grow", and can be removed',this)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height=0;var e=t.scrollHeight,n=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(n,e)+"px"}},genInput:function(){var t=b["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){b["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.internalChange=!0,this.$emit("keydown",t)}}},N=n("7cf7"),H=n("ab6d"),O={functional:!0,$_wrapperFor:b["a"],props:{textarea:Boolean,multiLine:Boolean},render:function(t,e){var n=e.props,i=e.data,a=e.slots,o=e.parent;Object(H["a"])(i);var s=Object(N["a"])(a(),t);return n.textarea&&Object(w["d"])("<v-text-field textarea>","<v-textarea outline>",O,o),n.multiLine&&Object(w["d"])("<v-text-field multi-line>","<v-textarea>",O,o),n.textarea||n.multiLine?(i.attrs.outline=n.textarea,t(y,i,s)):t(b["a"],i,s)}},C=Object(d["a"])(h,i,a,!1,null,null,null);e["a"]=C.exports;m()(C,{VFlex:p["a"],VLayout:v["a"],VSpacer:g["a"],VTextField:O})},"7e63":function(t,e,n){},"87af":function(t,e,n){"use strict";n.d(e,"a",function(){return i});const i={accent:"#b3b3b3",fill:"#181E34"}},"9c4b":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{"align-center":"","justify-center":"",row:"",wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("label",{staticClass:"theme--light v-label v-label--active caption"},[t._v(t._s(t.slLabel))])]),n("v-layout",{attrs:{"align-left":"",row:""}},[n("v-flex",{attrs:{xs10:""}},[n("div",{attrs:{id:t.propName}})]),n("v-flex",{staticClass:"pl-3",attrs:{xs1:""}},[n("div",{attrs:{id:t.numericName}})])],1)],1)},a=[],o=n("ea48"),s=n("ddd0"),r=n("87af"),u={name:"ControlSlider",props:{initStep:{type:Number,default:function(){return 1}},initMin:{type:Number,default:function(){return 1}},initMax:{type:Number,default:function(){return 40}},eventName:{type:String,default:function(){return"Harmonics"}},slLabel:{type:String,default:function(){return"Harmonics"}}},data:function(){return{min:this.initMin,max:this.initMax,step:this.initStep,ui:null,ui_number:null,controlParam:this.initMin,propName:this.eventName,numericName:`${this.eventName}_number`}},mounted(){const t=document.getElementById(this.propName),e=t.parentElement.offsetWidth;this.ui=new s["Slider"](`#${this.propName}`,{size:[e,20],mode:"absolute",step:this.step,min:this.min,max:this.max,value:this.controlParam}),this.ui.colorize("accent",r["a"].accent),this.ui.colorize("fill",r["a"].fill),this.ui_number=new s["Number"](`#${this.numericName}`,{mode:"absolute",step:this.step,min:this.min,max:this.max}),this.ui_number.link(this.ui),this.ui.on("change",t=>{const e=t;this.controlParam=e,o["a"].$emit(`update:ControlSlider:${this.propName}`,e)})},beforeDestroy(){this.ui&&this.ui.destroy(),this.ui_number&&this.ui_number.destroy()},methods:{}},c=u,l=n("2877"),h=n("6544"),d=n.n(h),f=n("0e8f"),m=n("a722"),p=Object(l["a"])(c,i,a,!1,null,null,null);e["a"]=p.exports;d()(p,{VFlex:f["a"],VLayout:m["a"]})},b73d:function(t,e,n){"use strict";n("94a7"),n("2e29");var i=n("5368"),a=n("80d2"),o=function(t){var e=t.touchstartX,n=t.touchendX,i=t.touchstartY,a=t.touchendY,o=.5,s=16;t.offsetX=n-e,t.offsetY=a-i,Math.abs(t.offsetY)<o*Math.abs(t.offsetX)&&(t.left&&n<e-s&&t.left(t),t.right&&n>e+s&&t.right(t)),Math.abs(t.offsetX)<o*Math.abs(t.offsetY)&&(t.up&&a<i-s&&t.up(t),t.down&&a>i+s&&t.down(t))};function s(t,e){var n=t.changedTouches[0];e.touchstartX=n.clientX,e.touchstartY=n.clientY,e.start&&e.start(Object.assign(t,e))}function r(t,e){var n=t.changedTouches[0];e.touchendX=n.clientX,e.touchendY=n.clientY,e.end&&e.end(Object.assign(t,e)),o(e)}function u(t,e){var n=t.changedTouches[0];e.touchmoveX=n.clientX,e.touchmoveY=n.clientY,e.move&&e.move(Object.assign(t,e))}function c(t){var e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:function(t){return s(t,e)},touchend:function(t){return r(t,e)},touchmove:function(t){return u(t,e)}}}function l(t,e,n){var i=e.value,o=i.parent?t.parentElement:t,s=i.options||{passive:!0};if(o){var r=c(e.value);o._touchHandlers=Object(o._touchHandlers),o._touchHandlers[n.context._uid]=r,Object(a["q"])(r).forEach(function(t){o.addEventListener(t,r[t],s)})}}function h(t,e,n){var i=e.value.parent?t.parentElement:t;if(i&&i._touchHandlers){var o=i._touchHandlers[n.context._uid];Object(a["q"])(o).forEach(function(t){i.removeEventListener(t,o[t])}),delete i._touchHandlers[n.context._uid]}}var d={inserted:l,unbind:h},f=n("0789"),m=n("490a"),p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t};e["a"]={name:"v-switch",directives:{Touch:d},mixins:[i["a"]],props:{loading:{type:[Boolean,String],default:!1}},computed:{classes:function(){return{"v-input--selection-controls v-input--switch":!0}},switchData:function(){return this.setTextColor(this.loading?void 0:this.computedColor,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",this.$attrs),this.genRipple(this.setTextColor(this.computedColor,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",p({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",p({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(f["b"],{},[!1===this.loading?null:this.$slots.progress||this.$createElement(m["a"],{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(t){(t.keyCode===a["p"].left&&this.isActive||t.keyCode===a["p"].right&&!this.isActive)&&this.onChange()}}}},b943:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-sheet",{attrs:{elevation:"5"}},[n("toolbar",{attrs:{"m-data":t.generatedWaveForm,title:"Harmonic Saw"}}),n("v-sheet",{staticClass:"pa-3",attrs:{elevation:"10","min-height":"255"}},[t.dataset?n("waveform",{attrs:{"m-dataset":t.dataset}}):t._e()],1),n("v-sheet",{staticClass:"pa-3",attrs:{elevation:"10"}},[n("pianooctave",{staticClass:"mt-2"}),n("harmonicsslider",{staticClass:"mt-2",attrs:{"event-name":"Harmonics"}}),n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{"xs-2":"","align-end":""}},[n("v-switch",{attrs:{label:"Up"},model:{value:t.up,callback:function(e){t.up=e},expression:"up"}})],1)],1)],1)],1)},a=[],o=n("ea48"),s=n("747b"),r=n("e330"),u=n("9c4b"),c=n("ffe8"),l=n("7bac"),h=n("3466"),d=n("242d"),f=n("e1c1"),m=n("bf7e"),p={name:"ScwGeneratorHarmonicSaw",components:{pianooctave:s["a"],waveform:r["a"],harmonicsslider:u["a"],toolbar:c["a"]},data:()=>({note:null,generatedWaveForm:null,dataset:null,numHarmonics:1,up:!0,srate:m["a"].getSampleRate()}),computed:{},watch:{note:function(t,e){const n=Object(h["a"])(t);this.generateData(n)},numHarmonics:function(t,e){const n=Object(h["a"])(this.note);this.generateData(n)},up:function(t,e){const n=Object(h["a"])(this.note);this.generateData(n)},srate:function(t,e){const n=Object(h["a"])(this.note);this.generateData(n)}},created(){o["a"].$on("update:Piano:Note",t=>{this.note=t}),o["a"].$on("update:ControlSlider:Harmonics",t=>{this.numHarmonics=t}),o["a"].$on("update:Samplerate",t=>{this.srate=t})},mounted(){},beforeDestroy(){this.note=null,this.generatedWaveForm=null,this.dataset=null},methods:{waveformGenerator:f["a"].harmonicsBased.saw,generateData:function(t){if(null===this.numHarmonics||null===this.note)return;const e=Object(d["b"])(t,this.srate),n=this.numHarmonics>=e?e-1:this.numHarmonics;this.generatedWaveForm=this.waveformGenerator(t,n,this.up,this.srate);const i=Object(l["a"])(this.generatedWaveForm,this.srate);this.dataset=i}}},v=p,g=n("2877"),b=n("6544"),w=n.n(b),x=n("0e8f"),y=n("a722"),N=n("8dd9"),H=n("b73d"),O=Object(g["a"])(v,i,a,!1,null,null,null);e["default"]=O.exports;w()(O,{VFlex:x["a"],VLayout:y["a"],VSheet:N["a"],VSwitch:H["a"]})}}]);