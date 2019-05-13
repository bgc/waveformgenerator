(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["scw-hard-generator-tri"],{3466:function(t,e,a){"use strict";a.d(e,"a",function(){return l}),a.d(e,"b",function(){return u});var n=a("e814"),i=a.n(n);const o=[435,440],r=440,s=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],l=function(t,e){if(t>=128)return 0;let a,n,i;return-1===o.indexOf(e)&&(e=r),n=Math.pow(2,1/12),i=e/2*Math.pow(n,3),a=i*Math.pow(.5,5),a*Math.pow(n,t)},u=function(t){let e=i()(t,10)%12;return s[e]}},"747b":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{"align-center":"","justify-center":"",column:""}},[a("v-flex",{attrs:{xs12:"","align-center":""}},[a("v-layout",{attrs:{"align-center":"","justify-center":"",row:""}},[a("v-text-field",{staticClass:"mx-3",attrs:{xs1:"",label:"Selected Note",disabled:""},model:{value:t.noteName,callback:function(e){t.noteName=e},expression:"noteName"}}),a("v-spacer"),a("v-text-field",{staticClass:"mx-3",attrs:{xs3:"",label:"Octave",type:"number",min:"0",max:"9"},model:{value:t.octave,callback:function(e){t.octave=e},expression:"octave"}}),a("v-spacer"),a("v-text-field",{staticClass:"mx-3",attrs:{xs1:"",label:"Freq (Hz)",disabled:""},model:{value:t.freqHertz,callback:function(e){t.freqHertz=e},expression:"freqHertz"}})],1)],1),a("v-flex",{attrs:{xs12:"","align-center":""}},[a("div",{attrs:{id:"myPiano"}})])],1)},i=[],o=a("ea48"),r=a("ddd0"),s=a("3466"),l=a("87af");const u=["a","w","s","e","d","f","t","g","y","h","u","j"];var c={name:"PianoOctave",props:{initWidth:{type:Number,default:function(){return 960}},initHeight:{type:Number,default:function(){return 130}},initLowNote:{type:Number,default:function(){return 0}},initHighNote:{type:Number,default:function(){return 11}},initOctave:{type:Number,default:function(){return 3}}},data:function(){return{width:this.initWidth,height:this.initHeight,lowNote:this.initLowNote,highNote:this.initHighNote,ui:null,pnote:null,octave:this.initOctave}},computed:{noteName:function(){return null===this.pnote?"---":Object(s["b"])(this.pnote)},freqHertz:function(){return null===this.pnote?"---":Object(s["a"])(this.pnote+12*this.octave).toFixed(3)},finalNote:function(){return null===this.pnote?null:this.pnote+12*this.octave}},watch:{finalNote:function(){o["a"].$emit("update:Piano:Note",this.finalNote)}},mounted(){this.ui=new r["Piano"]("#myPiano",{mode:"button",lowNote:this.lowNote,highNote:this.highNote}),this.ui.colorize("accent",l["a"].accent),this.ui.colorize("fill",l["a"].fill),this.ui.on("change",t=>{const e=t.note,a=t.state;!1!==a&&(this.pnote=e)}),window.addEventListener("keypress",this.handleKeyPress.bind(this))},beforeDestroy(){this.ui&&this.ui.destroy(),window.removeEventListener("keypress",this.handleKeyPress)},methods:{handleKeyPress:function(t){const e=t.key.toLowerCase(),a=u.indexOf(e);a<0||a>=12||(this.ui.toggleKey(this.lowNote+a,!0),this.ui.toggleKey(this.lowNote+a,!1))}}},h=c,d=a("2877"),f=a("6544"),p=a.n(f),m=a("0e8f"),v=a("a722"),w=a("9910"),g=a("8654"),b=(a("7e63"),a("d9bd")),x=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},y={name:"v-textarea",extends:g["a"],props:{autoGrow:Boolean,noResize:Boolean,outline:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return x({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},g["a"].options.computed.classes.call(this,null))},dynamicHeight:function(){return this.autoGrow?this.inputHeight:"auto"},isEnclosed:function(){return this.textarea||g["a"].options.computed.isEnclosed.call(this)},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){!this.internalChange&&this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout(function(){t.autoGrow&&t.calculateInputHeight()},0),this.autoGrow&&this.noResize&&Object(b["b"])('"no-resize" is now implied when using "auto-grow", and can be removed',this)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height=0;var e=t.scrollHeight,a=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(a,e)+"px"}},genInput:function(){var t=g["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){g["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.internalChange=!0,this.$emit("keydown",t)}}},N=a("7cf7"),H=a("ab6d"),O={functional:!0,$_wrapperFor:g["a"],props:{textarea:Boolean,multiLine:Boolean},render:function(t,e){var a=e.props,n=e.data,i=e.slots,o=e.parent;Object(H["a"])(n);var r=Object(N["a"])(i(),t);return a.textarea&&Object(b["d"])("<v-text-field textarea>","<v-textarea outline>",O,o),a.multiLine&&Object(b["d"])("<v-text-field multi-line>","<v-textarea>",O,o),a.textarea||a.multiLine?(n.attrs.outline=a.textarea,t(y,n,r)):t(g["a"],n,r)}},j=Object(d["a"])(h,n,i,!1,null,null,null);e["a"]=j.exports;p()(j,{VFlex:m["a"],VLayout:v["a"],VSpacer:w["a"],VTextField:O})},"7e63":function(t,e,a){},"865a":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-sheet",{attrs:{elevation:"5"}},[a("toolbar",{attrs:{"m-data":t.generatedWaveForm,title:"Triangle"}}),a("v-sheet",{staticClass:"pa-3",attrs:{elevation:"10","min-height":"255"}},[t.dataset?a("waveform",{attrs:{"m-dataset":t.dataset}}):t._e()],1),a("v-sheet",{staticClass:"pa-3",attrs:{elevation:"10"}},[a("pianooctave",{staticClass:"mt-2"})],1)],1)},i=[],o=a("ea48"),r=a("747b"),s=a("e330"),l=a("ffe8"),u=a("7bac"),c=a("3466"),h=a("e1c1"),d=a("bf7e"),f={name:"ScwGeneratorHardTriangle",components:{pianooctave:r["a"],waveform:s["a"],toolbar:l["a"]},data:function(){return{note:null,generatedWaveForm:null,dataset:null,srate:d["a"].getSampleRate()}},computed:{},watch:{note:function(t,e){const a=Object(c["a"])(t);this.generateData(a)},srate:function(t,e){const a=Object(c["a"])(this.note);this.generateData(a)}},created(){o["a"].$on("update:Piano:Note",t=>{this.note=t}),o["a"].$on("update:Samplerate",t=>{this.srate=t})},mounted(){},beforeDestroy(){this.note=null,this.generatedWaveForm=null,this.dataset=null},methods:{waveformGenerator:h["a"].hardBased.triangle,generateData:function(t){this.generatedWaveForm=this.waveformGenerator(t,this.srate);const e=Object(u["a"])(this.generatedWaveForm,this.srate);this.dataset=e}}},p=f,m=a("2877"),v=a("6544"),w=a.n(v),g=a("8dd9"),b=Object(m["a"])(p,n,i,!1,null,null,null);e["default"]=b.exports;w()(b,{VSheet:g["a"]})},"87af":function(t,e,a){"use strict";a.d(e,"a",function(){return n});const n={accent:"#b3b3b3",fill:"#181E34"}}}]);