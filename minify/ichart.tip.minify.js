iChart.Tip=iChart.extend(iChart.Html,{configure:function(){iChart.Tip.superclass.configure.apply(this,arguments);this.type="tip";this.set({name:"",index:0,value:"",text:"",showType:"follow",invokeOffset:null,fade_duration:300,move_duration:100,timing_function:"ease-out",invokeOffsetDynamic:!1,style:"textAlign:left;padding:4px 5px;cursor:pointer;backgroundColor:rgba(239,239,239,.85);fontSize:12px;color:black;",border:{enable:!0,radius:5},delay:200});this.registerEvent("parseText")},position:function(a,c,b){b.style.top=(0>a?0:a)+"px";b.style.left=(0>c?0:c)+"px"},follow:function(a,c,b){b.get("invokeOffsetDynamic")?c.hit&&((iChart.isString(c.text)||iChart.isNumber(c.text))&&b.text(c.name,c.value,c.text,c.i,b),a=b.get("invokeOffset")(b.width(),b.height(),c),b.position(a.top,a.left,b)):"follow"!=b.get("showType")&&iChart.isFunction(b.get("invokeOffset"))?(a=b.get("invokeOffset")(b.width(),b.height(),c),b.position(a.top,a.left,b)):b.position(a.y-1.1*b.height()-2,a.x+2,b)},text:function(a,c,b,d,e){e.dom.innerHTML=e.fireString(e,"parseText",[e,a,c,b,d],b)},hidden:function(){this.get("animation")?this.css("opacity",0):this.css("visibility","hidden")},doAction:function(a){a.T.on("mouseover",function(c,b,d){a.show(b,d)}).on("mouseout",function(c,b){a.hidden(b)});if("follow"==a.get("showType"))a.T.on("mousemove",function(c,b,d){a.T.variable.event.mouseover&&setTimeout(function(){a.T.variable.event.mouseover&&a.follow(b,d,a)},a.get("delay"))})},initialize:function(){iChart.Tip.superclass.initialize.call(this);var a=this._();a.text(a.get("name"),a.get("value"),a.get("text"),a.get("index"),a);a.hidden();if(a.get("animation")){var c=a.get("move_duration")/1E3+"s "+a.get("timing_function")+" 0s";a.transition("opacity "+a.get("fade_duration")/1E3+"s "+a.get("timing_function")+" 0s");a.transition("top "+c);a.transition("left "+c);a.onTransitionEnd(function(){0==a.css("opacity")&&a.css("visibility","hidden")},!1)}}});