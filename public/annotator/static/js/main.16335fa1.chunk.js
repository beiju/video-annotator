(this["webpackJsonplabelbox-annotator"]=this["webpackJsonplabelbox-annotator"]||[]).push([[0],{104:function(e,t,a){},105:function(e,t,a){},108:function(e,t,a){},110:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(18),i=a.n(r),s=(a(94),a(7)),l=a(118),o=a(119),u=a(122),d=a(48),m=a(81),v=a(47),j=Object(n.createContext)({}),b=(a(95),a(2));function g(e){var t=e.state,a=Object(n.useContext)(j);return a?Object(b.jsxs)("div",{children:[Object(b.jsx)("h4",{className:"text-center mt-3",children:"Agents Present"}),Object(b.jsx)("p",{className:"small text-secondary text-center",children:"Applies to the entire video"}),Object(b.jsx)("ol",{className:"list-unstyled m-3",children:v.map((function(e){var n,c,r,i;return Object(b.jsx)(f,{agent:e,active:e.name===t.activeAgent,onActivate:function(){return a({type:"set_active_agent",activeAgent:e.name})},checked:null!==(n=null===(c=t.agentPresent)||void 0===c?void 0:c[e.name])&&void 0!==n&&n,onChange:function(t){return a({type:"set_agent_present",agent:e.name,isPresent:t.currentTarget.checked})},flipped:null!==(r=null===(i=t.agentFlipped)||void 0===i?void 0:i[e.name])&&void 0!==r&&r,onFlip:function(t){return a({type:"set_agent_flipped",agent:e.name,isFlipped:t.currentTarget.checked})}},e.name)}))})]}):null}function f(e){var t=e.agent,a=e.checked,n=e.onChange,c=e.flipped,r=e.onFlip;return Object(b.jsxs)("li",{children:[Object(b.jsx)(u.a.Check,{type:"checkbox",id:t.name+"-active",label:t.display_name,checked:a,onChange:n}),!t.symmetrical&&Object(b.jsx)(u.a.Check,{className:"indented-checkbox",type:"checkbox",id:t.name+"-flip",label:"Flip",checked:c,onChange:r})]})}function h(e){var t,a,c=e.state,r=e.agent,i=e.label,s=Object(n.useContext)(j);return s?Object(b.jsxs)("li",{className:"list-group-item py-2 px-3 "+(c.activeAgent===r.name?"active":""),onClick:function(){return s({type:"set_active_agent",activeAgent:r.name})},children:[r.display_name,Object(b.jsxs)(u.a,{children:[Object(b.jsx)(d.a,{id:"agent-".concat(r.name,"-blurred"),label:"Blurred",checked:null!==(t=null===i||void 0===i?void 0:i.isBlurred)&&void 0!==t&&t,onChange:function(e){return s({type:"set_agent_is_blurred",agentName:r.name,isBlurred:e.currentTarget.checked})}}),Object(b.jsx)(d.a,{id:"agent-".concat(r.name,"-obscured"),label:"Obscured",checked:null!==(a=null===i||void 0===i?void 0:i.isObscured)&&void 0!==a&&a,onChange:function(e){return s({type:"set_agent_is_obscured",agentName:r.name,isObscured:e.currentTarget.checked})}})]})]}):null}function p(e){var t=e.state;return Object(b.jsxs)("div",{className:"flex-grow-1",children:[Object(b.jsx)("h4",{className:"text-center mt-3",children:"Agent Annotations"}),Object(b.jsx)("p",{className:"small text-secondary text-center",children:"Applies to the current frame"}),Object(b.jsx)("ul",{className:"list-group list-group-flush",children:v.map((function(e){var a,n,c;return(null===(a=t.agentPresent)||void 0===a?void 0:a[e.name])&&Object(b.jsx)(h,{state:t,agent:e,label:null===(n=t.frames)||void 0===n||null===(c=n[t.activeFrame])||void 0===c?void 0:c[e.name]},e.name)}))}),Object.values(t.agentPresent).every((function(e){return!e}))&&Object(b.jsx)("p",{className:"text-center mx-2",children:"Use the checkboxes below to select the agents that are present in this video"})]})}function O(e){var t=e.state;return Object(b.jsxs)(m.a,{md:4,lg:3,xl:2,className:"bg-light h-100 border-end border-dark d-flex flex-column gx-0",children:[Object(b.jsx)(p,{state:t}),Object(b.jsx)(g,{state:t})]})}var x=a(30),_=a(82),y=a.n(_),k=(a(104),a(3)),w=a(4),F=(a(105),a(88)),N=a(123),A=a(83),M=a(124);function C(e,t){return e?"".concat("","/api/frame.jpg?experiment=").concat(e,"&frame=").concat(t):""}var E=["popper","children","show"];function P(e,t){var a;return t===e.activeFrame?"active":(null===(a=e.frames)||void 0===a?void 0:a[t])?"labeled":"unlabeled"}var S=Object(n.forwardRef)((function(e,t){var a=e.popper,c=e.children,r=(e.show,Object(w.a)(e,E));return Object(n.useEffect)((function(){a.scheduleUpdate()}),[c,a]),Object(b.jsx)(F.a,Object(k.a)(Object(k.a)({ref:t,body:!0},r),{},{children:c}))}));function T(e){var t=e.sample,a=e.state,c=Object(n.useContext)(j),r=Object(n.useMemo)((function(){for(var e=[],n=null,c=0,r=1;r<=t.numFrames;r++){var i=P(a,r);i!==n&&null!==n&&(e.push({componentType:n,componentLength:c}),c=0),c+=1,n=i}return 0!==c&&e.push({componentType:n,componentLength:c}),e}),[t.numFrames,a]),i=Object(n.useState)(null),l=Object(s.a)(i,2),o=l[0],u=l[1],d=Object(n.useState)(null),m=Object(s.a)(d,2),v=m[0],g=m[1];var f=null===o?null:Math.min(Math.floor(o*t.numFrames),t.numFrames-1);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(N.a,{show:null!==v,onHide:function(){return g(null)},children:[Object(b.jsx)(N.a.Header,{closeButton:!0,children:Object(b.jsxs)(N.a.Title,{children:["Jump to frame ",v,"?"]})}),Object(b.jsx)(N.a.Body,{children:Object(b.jsx)("p",{children:"You will automatically start annotating at this position. Removing annotations is not yet supported, so be sure this is the frame you want."})}),Object(b.jsxs)(N.a.Footer,{children:[Object(b.jsx)(A.a,{onClick:function(){return g(null)},variant:"secondary",children:"Cancel"}),Object(b.jsx)(A.a,{onClick:function(){c({type:"jump_to_frame",frame:v}),g(null)},variant:"primary",children:"Jump to frame"})]})]}),Object(b.jsxs)("div",{className:"timeline",onMouseMove:function(e){var t=e.currentTarget.getBoundingClientRect(),a=(e.clientX-t.x)/t.width;u(Math.max(0,Math.min(a,1))),e.preventDefault()},onMouseLeave:function(){u(null)},onClick:function(){g(f)},children:[null!==f&&Object(b.jsx)(M.a,{show:!0,placement:"top",overlay:Object(b.jsx)(S,{className:"p-0",children:Object(b.jsx)("img",{src:C(t.id,f),alt:"Frame ".concat(f),height:180})}),children:Object(b.jsx)("div",{className:"timeline-cursor",style:{width:"min(2px, ".concat(100/t.numFrames,"%)"),left:"".concat(100*f/t.numFrames,"%")}})}),r.map((function(e,t){var a=e.componentType,n=e.componentLength;return Object(b.jsx)("div",{className:"timeline-component timeline-component-".concat(a),style:{flexGrow:n}},t)}))]})]})}var I=a(121),B=a(125),H=a(116),L=a(117),R=a(120),D=a(126),W=a(77),J=a(86),U=a(87),Y=a(78);function G(e){var t,a,c,r=e.sample,i=e.state,l=e.returnToIndex,o=Object(n.useContext)(j),u=Object(n.useState)(!1),d=Object(s.a)(u,2),m=d[0],v=d[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(I.a,{className:"d-flex justify-content-between",children:[Object(b.jsx)(B.a,{children:Object(b.jsxs)(I.a.Text,{children:[Object(b.jsx)(H.a,{animation:"border",size:"sm",className:"me-2 ".concat(i.loading?"visible":"invisible")}),"Frame ",i.activeFrame," of ",r.numFrames]})}),Object(b.jsx)(B.a,{children:Object(b.jsxs)(L.a,{children:[Object(b.jsx)(A.a,{onClick:function(){return o({type:"previous_frame"})},disabled:i.activeFrame<=1,children:Object(b.jsx)(W.a,{})}),Object(b.jsx)(A.a,{onClick:function(){return o({type:"next_frame"})},disabled:i.activeFrame>=r.numFrames,children:Object(b.jsx)(W.b,{})})]})}),Object(b.jsxs)(B.a,{children:[Object(b.jsxs)(R.a,{children:[Object(b.jsxs)(R.a.Toggle,{children:[(null===(t=i.dishMask)||void 0===t?void 0:t.locked)?Object(b.jsx)(Y.a,{style:{verticalAlign:"text-top"}}):Object(b.jsx)(Y.b,{style:{verticalAlign:"text-top"}})," Dish mask"]}),Object(b.jsxs)(R.a.Menu,{children:[(null===(a=i.dishMask)||void 0===a?void 0:a.locked)&&Object(b.jsx)(R.a.Item,{onClick:function(){return o({type:"set_dish_mask_locked",value:!1})},children:"Unlock"}),!(null===(c=i.dishMask)||void 0===c?void 0:c.locked)&&Object(b.jsx)(R.a.Item,{onClick:function(){return o({type:"set_dish_mask_locked",value:!0})},children:"Lock"}),Object(b.jsx)(R.a.Item,{onClick:function(){return o({type:"reset_dish_mask"})},children:"Reset to center"})]})]}),Object(b.jsx)(A.a,{className:"mx-2",variant:m?"info":"outline-info",onClick:function(){return v(!m)},children:Object(b.jsx)(J.a,{})}),Object(b.jsx)(A.a,{onClick:l,children:"Stop labeling"})]})]}),m&&Object(b.jsxs)(D.a,{border:"info",className:"mb-2",children:[Object(b.jsxs)(D.a.Header,{children:[Object(b.jsx)("button",{className:"float-end border-0",onClick:function(){return v(!m)},children:Object(b.jsx)(U.a,{})}),"Help"]}),Object(b.jsxs)(D.a.Body,{className:"row",children:[Object(b.jsxs)("dl",{className:"col mb-0",children:[Object(b.jsx)("dt",{children:"Space"}),Object(b.jsx)("dd",{children:"Advance through agents and frames"}),Object(b.jsx)("dt",{children:"b"}),Object(b.jsx)("dd",{children:"Reverse through agents and frames"})]}),Object(b.jsxs)("dl",{className:"col mb-0",children:[Object(b.jsx)("dt",{children:"q/e/scroll"}),Object(b.jsx)("dd",{children:"Rotate selected agent"}),Object(b.jsx)("dt",{children:"w/a/s/d/drag"}),Object(b.jsx)("dd",{children:"Move selected agent"})]}),Object(b.jsxs)("dl",{className:"col mb-0",children:[Object(b.jsx)("dt",{children:"Shift"}),Object(b.jsx)("dd",{children:"Rotate/move by 10x"})]})]})]})]})}function K(e,t,a,n){var c=new DOMMatrix([Math.cos(a),-Math.sin(a),Math.sin(a),Math.cos(a),e,t]);return n&&c.multiplySelf(new DOMMatrix([1,0,0,-1,0,0])),c}var X=Symbol("DISH_MASK");function q(e){var t=e.sample,a=e.state,c=e.returnToIndex,r=Object(n.useContext)(j),i=Object(n.useState)(null),l=Object(s.a)(i,2),o=l[0],u=l[1],d=Object(n.useState)(null),g=Object(s.a)(d,2),f=g[0],h=g[1];Object(n.useEffect)((function(){var e=document.createElement("img");function n(){h(e),r({type:"set_loading_finished"})}return e.addEventListener("load",n),e.src=C(t.id,a.activeFrame),function(){return e.removeEventListener("load",n)}}),[r,t.id,a.activeFrame]);var p=Object(n.useMemo)((function(){var e,t,n,c,r,i;return f?{x:null!==(e=null===(t=a.dishMask)||void 0===t?void 0:t.x)&&void 0!==e?e:f.naturalWidth/2,y:null!==(n=null===(c=a.dishMask)||void 0===c?void 0:c.y)&&void 0!==n?n:f.naturalHeight/2,radius:null!==(r=null===(i=a.dishMask)||void 0===i?void 0:i.radius)&&void 0!==r?r:500}:null}),[f,a]),O=Object(n.useState)(null),_=Object(s.a)(O,2),k=_[0],w=_[1];Object(n.useEffect)((function(){o&&f&&(o.width=f.naturalWidth,o.height=f.naturalHeight,o.getContext("2d").save(),w(o))}),[o,f]),Object(n.useEffect)((function(){if(k&&p){var e=k.getContext("2d");e.restore(),e.save(),e.fillStyle="black",e.fillRect(0,0,k.width,k.height),e.beginPath();var t=p.x,a=p.y,n=p.radius;e.arc(t,a,n,0,2*Math.PI),e.clip()}}),[k,p]);var F=Object(n.useCallback)((function(e,t){var a,n,c,r,i;if(!k)throw new Error("Canvas ref was cleared");if(t===X)return p;console.assert("string"===typeof t);var s=null!==(a=null===(n=e.frames[e.activeFrame])||void 0===n?void 0:n[t])&&void 0!==a?a:{};return{x:null!==(c=s.x)&&void 0!==c?c:k.width/2,y:null!==(r=s.y)&&void 0!==r?r:k.height/2,angle:null!==(i=s.angle)&&void 0!==i?i:0}}),[k,p]);function N(e){if(!k)throw new Error("Canvas ref was cleared");return{x:e.nativeEvent.offsetX*(k.height/k.clientHeight),y:e.nativeEvent.offsetY*(k.width/k.clientWidth)}}Object(n.useEffect)((function(){if(k&&f){var e=k.getContext("2d");e.setTransform(1,0,0,1,0,0),e.drawImage(f,0,0),e.lineWidth=2;var t,n=Object(x.a)(v);try{for(n.s();!(t=n.n()).done;){var c,r=t.value;if(a.agentPresent[r.name]){r.name===a.activeAgent?(e.strokeStyle="red",e.fillStyle="rgba(255, 0, 0, 0.2)"):(e.strokeStyle="darkgrey",e.fillStyle="rgba(0,0,0,0.2)");var i=F(a,r.name),l=i.x,o=i.y,u=i.angle,d=null===(c=a.agentFlipped)||void 0===c?void 0:c[r.name];e.setTransform(K(l,o,u,d)),e.beginPath();var m,j=Object(x.a)(r.shape);try{for(j.s();!(m=j.n()).done;){var b=Object(s.a)(m.value,2),g=b[0],h=b[1];e.lineTo(g,h)}}catch(p){j.e(p)}finally{j.f()}e.stroke(),e.fill()}}}catch(p){n.e(p)}finally{n.f()}}}),[k,F,f,a]),Object(n.useEffect)((function(){var e,t,n,c,i=null!==(e=null===(t=a.frames[a.activeFrame])||void 0===t?void 0:t[a.activeAgent])&&void 0!==e?e:{};r&&f&&("undefined"===typeof i.x||"undefined"===typeof i.y)&&r({type:"set_agent_position",agentName:a.activeAgent,x:null!==(n=i.x)&&void 0!==n?n:f.naturalWidth/2,y:null!==(c=i.y)&&void 0!==c?c:f.naturalHeight/2})}),[r,a,f]),Object(n.useEffect)((function(){(new Image).src=C(t.id,a.activeFrame+1),(new Image).src=C(t.id,a.activeFrame+2),(new Image).src=C(t.id,a.activeFrame+3)}),[t.id,a.activeFrame]);var A=Object(n.useState)(null),M=Object(s.a)(A,2),E=M[0],P=M[1];function S(e,t,n){n&&P({agentName:n,mouse:{x:e,y:t},agent:F(a,n)})}function I(e,t){var n,c=Object(x.a)(v);try{for(c.s();!(n=c.n()).done;){var r=n.value;if(a.agentPresent[r.name]){var i=F(a,r.name),s=e-i.x,l=t-i.y,o=s*Math.cos(-i.angle)+l*Math.sin(-i.angle),u=-s*Math.sin(-i.angle)+l*Math.cos(-i.angle);if(y()(r.shape,[o,u])<=0)return r.name}}}catch(d){c.e(d)}finally{c.f()}return null}function B(e,t){var n;if(null===(n=a.dishMask)||void 0===n?void 0:n.locked)return!1;var c=p.x,r=p.y,i=p.radius;return Math.pow(e-c,2)+Math.pow(t-r,2)>Math.pow(i,2)}function H(){return E&&(E.agentName===a.activeAgent||E.agentName===X)}return Object(b.jsxs)(m.a,{className:"h-100 d-flex flex-column",children:[Object(b.jsx)(G,{sample:t,state:a,returnToIndex:c}),Object(b.jsxs)("div",{className:"labeler-canvas-container",children:[Object(b.jsx)("canvas",{className:"labeler-canvas",ref:u,onMouseDown:function(e){var t=N(e),n=t.x,c=t.y;if(B(n,c))S(n,c,X);else{var i=I(n,c);i&&r({type:"set_active_agent",activeAgent:i}),S(n,c,null!==i&&void 0!==i?i:a.activeAgent)}},onMouseUp:function(){P(null)},onMouseMove:function(e){if(H()){var t=e.nativeEvent.offsetX*(k.height/k.clientHeight)-E.mouse.x,a=e.nativeEvent.offsetY*(k.width/k.clientWidth)-E.mouse.y;E.agentName===X?r({type:"set_dish_mask_position",x:t+E.agent.x,y:a+E.agent.y}):r({type:"set_agent_position",agentName:E.agentName,x:t+E.agent.x,y:a+E.agent.y})}},onWheel:function(e){var t=N(e),n=function(e,t){var n;return H()?E.agentName:B(e,t)?X:null!==(n=I(e,t))&&void 0!==n?n:a.activeAgent}(t.x,t.y);if(n===X){var c=p.radius;r({type:"set_dish_mask_radius",radius:Math.max(10,c+e.deltaY/(e.shiftKey?10:100))})}else n&&(n!==a.activeAgent&&r({type:"set_active_agent",activeAgent:n}),r({type:"rotate_agent",agentName:n,by:e.deltaY/(e.shiftKey?1e3:1e4)}))}}),Object(b.jsx)(T,{sample:t,state:a})]})]})}var z=a(8);function Q(e,t,a){var n,c,r,i;if(!t)return e;"function"===typeof a&&(a=a(null!==(r=null===(i=e.frames[e.activeFrame])||void 0===i?void 0:i[t])&&void 0!==r?r:{}));return Object(k.a)(Object(k.a)({},e),{},{frames:Object(k.a)(Object(k.a)({},e.frames),{},Object(z.a)({},e.activeFrame,Object(k.a)(Object(k.a)({},e.frames[e.activeFrame]),{},Object(z.a)({},t,Object(k.a)(Object(k.a)({},null!==(n=null===(c=e.frames[e.activeFrame])||void 0===c?void 0:c[t])&&void 0!==n?n:{}),a)))))})}function V(e,t){var a;switch(t.type){case"set_state":return t.state;case"set_loading_finished":return Object(k.a)(Object(k.a)({},e),{},{loading:!1});case"set_active_agent":return Object(k.a)(Object(k.a)({},e),{},{activeAgent:t.activeAgent});case"set_agent_present":return Object(k.a)(Object(k.a)({},e),{},{agentPresent:Object(k.a)(Object(k.a)({},e.agentPresent),{},Object(z.a)({},t.agent,t.isPresent))});case"set_agent_flipped":return Object(k.a)(Object(k.a)({},e),{},{agentFlipped:Object(k.a)(Object(k.a)({},e.agentFlipped),{},Object(z.a)({},t.agent,t.isFlipped))});case"active_agent_toggle_present":return Object(k.a)(Object(k.a)({},e),{},{agentPresent:Object(k.a)(Object(k.a)({},e.agentPresent),{},Object(z.a)({},e.activeAgent,!e.agentPresent[e.activeAgent]))});case"set_agent_position":return Q(e,t.agentName,{x:t.x,y:t.y});case"rotate_agent":return Q(e,t.agentName,(function(e){return{angle:(a=(e.angle||0)+t.by,a%(2*Math.PI))};var a}));case"rotate_active_agent":return V(e,{type:"rotate_agent",agentName:e.activeAgent,by:t.by});case"move_agent":return Q(e,t.agentName,(function(e){return{x:(e.x||0)+(t.x||0),y:(e.y||0)+(t.y||0)}}));case"move_active_agent":return V(e,{type:"move_agent",agentName:e.activeAgent,x:t.x,y:t.y});case"next_frame":return e.loading?e:Object(k.a)(Object(k.a)({},e),{},{loading:!0,activeFrame:e.activeFrame+1,frames:Object(k.a)(Object(k.a)({},e.frames),{},Object(z.a)({},e.activeFrame+1,null!==(a=e.frames[e.activeFrame+1])&&void 0!==a?a:e.frames[e.activeFrame]))});case"previous_frame":return Object(k.a)(Object(k.a)({},e),{},{loading:!0,activeFrame:e.activeFrame>1?e.activeFrame-1:e.activeFrame});case"jump_to_frame":return Object(k.a)(Object(k.a)({},e),{},{loading:!0,activeFrame:t.frame});case"set_agent_is_blurred":return Q(e,t.agentName,{isBlurred:t.isBlurred});case"toggle_active_agent_is_blurred":return Q(e,e.activeAgent,(function(e){return{isBlurred:!e.isBlurred}}));case"set_agent_is_obscured":return Q(e,t.agentName,{isObscured:t.isObscured});case"toggle_active_agent_is_obscured":return Q(e,e.activeAgent,(function(e){return{isObscured:!e.isObscured}}));case"step_advance":return V(e,function(e){var t=Object.keys(e.agentPresent).filter((function(t){return e.agentPresent[t]}));if(!e.activeAgent)return t.length>0?{type:"set_active_agent",activeAgent:t[0]}:{type:"next_frame"};var a=t.indexOf(e.activeAgent);if(a<0)throw new Error("Current agent is not present");return a+1<t.length?{type:"set_active_agent",activeAgent:t[a+1]}:{type:"advance_frame_and_set_agent",activeAgent:t[0]}}(e));case"step_retreat":return V(e,function(e){var t=Object.keys(e.agentPresent).filter((function(t){return e.agentPresent[t]})).reverse();if(!e.activeAgent){if(t.length>0)return{type:"set_active_agent",activeAgent:t[0]};throw new Error("Tried to retreat when no agents were active")}var a=t.indexOf(e.activeAgent);if(a<0)throw new Error("Current agent is not present");return a+1<t.length?{type:"set_active_agent",activeAgent:t[a+1]}:{type:"retreat_frame_and_set_agent",activeAgent:t[0]}}(e));case"advance_frame_and_set_agent":return e.loading?e:V(V(e,{type:"next_frame"}),{type:"set_active_agent",activeAgent:t.activeAgent});case"retreat_frame_and_set_agent":return e.loading?e:V(V(e,{type:"previous_frame"}),{type:"set_active_agent",activeAgent:t.activeAgent});case"set_dish_mask_position":return Object(k.a)(Object(k.a)({},e),{},{dishMask:Object(k.a)(Object(k.a)({},e.dishMask),{},{x:t.x,y:t.y})});case"set_dish_mask_radius":return Object(k.a)(Object(k.a)({},e),{},{dishMask:Object(k.a)(Object(k.a)({},e.dishMask),{},{radius:t.radius})});case"reset_dish_mask":return Object(k.a)(Object(k.a)({},e),{},{dishMask:null});case"set_dish_mask_locked":return Object(k.a)(Object(k.a)({},e),{},{dishMask:Object(k.a)(Object(k.a)({},e.dishMask),{},{locked:t.value})});default:throw new Error("Unknown reducer action")}}var Z={loading:!0,activeFrame:1,activeAgent:null,agentPresent:{},frames:{}},$=Symbol("NO_MATCH");function ee(){var e=Object(n.useReducer)(V,Z,(function(e){return e})),t=Object(s.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(null),i=Object(s.a)(r,2),u=i[0],d=i[1],m=Object(n.useMemo)((function(){return new URL(window.location).searchParams.get("experiment_id")}),[]);Object(n.useEffect)((function(){var e=new AbortController,t=e.signal;return fetch("".concat("","/api/experiment?id=").concat(m),{signal:t}).then((function(e){return e.json()})).then((function(e){t.aborted?console.log("State restoration aborted after fetch finished"):(d(e),e.label?(console.log("Restoring ",e.label),c({type:"set_state",state:e.label})):(console.log("New sample"),c({type:"set_state",state:Z})))})).catch((function(e){"AbortError"!==e.name&&alert("Failed to fetch experiment: ".concat(e))})),function(){return e.abort()}}),[m]),Object(n.useEffect)((function(){function e(e){var t=function(){switch(e.key){case" ":return c({type:"step_advance"});case"b":return c({type:"step_retreat"});case"r":return c({type:"toggle_active_agent_is_blurred"});case"f":return c({type:"toggle_active_agent_is_obscured"});case"q":return c({type:"rotate_active_agent",by:.01});case"Q":return c({type:"rotate_active_agent",by:.1});case"e":return c({type:"rotate_active_agent",by:-.01});case"E":return c({type:"rotate_active_agent",by:-.1});case"w":return c({type:"move_active_agent",y:-1});case"W":return c({type:"move_active_agent",y:-10});case"a":return c({type:"move_active_agent",x:-1});case"A":return c({type:"move_active_agent",x:-10});case"s":return c({type:"move_active_agent",y:1});case"S":return c({type:"move_active_agent",y:10});case"d":return c({type:"move_active_agent",x:1});case"D":return c({type:"move_active_agent",x:10})}return $}();return t!==$&&e.preventDefault(),t}return document.addEventListener("keypress",e),function(){return document.removeEventListener("keypress",e)}}),[]);var v=!!u;return Object(n.useEffect)((function(){v&&fetch("".concat("","/api/set_label?id=").concat(m),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).catch((function(e){alert("Failed to save changes: ".concat(e))}))}),[v,a.activeFrame,m]),u?Object(b.jsx)(l.a,{fluid:!0,className:"h-100",children:Object(b.jsx)(o.a,{className:"h-100",children:Object(b.jsxs)(j.Provider,{value:c,children:[Object(b.jsx)(O,{state:a}),Object(b.jsx)(q,{sample:u,state:a,returnToIndex:function(){window.location="".concat("","/")}})]})})}):Object(b.jsx)("p",{children:"Loading\u2026"})}a(108),a(109);var te=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(ee,{})})},ae=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,127)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),r(e),i(e)}))};i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(te,{})}),document.getElementById("root")),ae()},47:function(e){e.exports=JSON.parse('[{"name":"gripper","display_name":"Gripper 1","shape":[[-143.92413189141612,51.84335246093342],[-48.072342656447375,79.81538314258269],[45.72914296233611,47.88919803209455],[143.44817449766214,86.51549575525146],[147.47556283000537,22.736344434302506],[96.40098497990128,-5.199072108746524],[137.55354949126553,-24.237623370279092],[147.47556658087464,-86.51565783567874],[62.49771702868982,-29.949191749434274],[-83.73301142993273,-62.60763712671145],[-147.47555142543342,-29.47323514143342],[-46.4247729973664,4.0639111158393595],[-143.92413189141612,51.84335246093342]]},{"name":"hammer","display_name":"Hammer 1","symmetrical":true,"shape":[[-113.63075292686482,-9.350874622148904],[-116.24090468580708,3.186553654626621],[-99.65774142852855,9.350861919342712],[81.90005536895531,6.949524366319025],[116.24095042089394,-9.35087216357365],[-113.63075292686482,-9.350874622148904]]},{"name":"needle","display_name":"Needle","symmetrical":true,"shape":[[122.86275165514863,4.463351744530263],[124.32539849455918,-3.465120001220135],[-114.05223857267488,-4.463450383742782],[-124.3255881557796,-0.05229539402387677],[-115.5729269962321,4.463335528244747],[122.86275165514863,4.463351744530263]]},{"name":"pillcam","display_name":"Pillcam","symmetrical":true,"shape":[[4.585514267115303,-185.38631589799516],[30.79716156694573,-179.30770208979084],[58.632807234519504,-149.96188756251487],[66.15328787764503,-123.49601574811257],[60.67797622200067,118.25596658558737],[50.907420517050994,153.14917855033025],[17.137347004772277,181.6374592105472],[-14.405418787275961,185.38631586131314],[-44.38110096560142,172.17804277419],[-66.15331105269996,141.03368746021306],[-66.15330385277282,-122.5132723021791],[-50.81258336876257,-156.41994266409267],[-19.9945455511072,-180.40428224369262],[4.585514267115303,-185.38631589799516]]},{"name":"gripper 2","display_name":"Gripper 2","shape":[[17.235294117647054,95.35294117647058],[12.235294117647054,95.35294117647058],[-3.7647058823529447,40.35294117647058],[-13.764705882352946,38.35294117647058],[-44.76470588235294,89.35294117647058],[-57.76470588235294,86.35294117647058],[-36.76470588235294,-22.647058823529424],[-37.76470588235294,-52.64705882352942],[-54.76470588235294,-109.64705882352942],[-1.7647058823529445,-97.64705882352942],[8.235294117647054,-77.64705882352942],[15.235294117647054,-76.64705882352942],[30.235294117647054,-91.64705882352942],[83.23529411764706,-74.64705882352942],[48.23529411764706,-32.64705882352942],[19.235294117647054,95.35294117647058],[17.235294117647054,95.35294117647058]]},{"name":"hammer2","display_name":"Hammer 2","symmetrical":true,"shape":[[140.33333333333334,102.66666666666667],[-144.66666666666666,-88.33333333333333],[-149.66666666666666,-104.33333333333333],[-132.66666666666666,-103.33333333333333],[146.33333333333334,90.66666666666667],[140.33333333333334,102.66666666666667]]}]')},94:function(e,t,a){},95:function(e,t,a){}},[[110,1,2]]]);
//# sourceMappingURL=main.16335fa1.chunk.js.map