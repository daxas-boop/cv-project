(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{23:function(t,e,a){t.exports=a.p+"static/media/test.9ae837bd.jpg"},26:function(t,e,a){t.exports=a(36)},36:function(t,e,a){"use strict";a.r(e);var n=a(1),r=a.n(n),o=a(20),i=a.n(o),l=a(3),c=a(2),s=a(0),u=a(23),d=a.n(u),m=a(6),b=a(7),g=a(5),f=a(10),p=a(9),h=a(11),y=a(8);function x(){var t=Object(l.a)([" \n        font-family: 'Roboto', sans-serif;\n        position: absolute;\n        top: 35vh;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        z-index:1;\n        @media (min-width: 600px) {\n            top: 25vh;\n        }\n        @media (max-width: 320px) {\n            top: 50vh;\n        }\n    "]);return x=function(){return t},t}function v(){var t=Object(l.a)([" \n        position:relative;\n        font-family: 'Roboto', sans-serif;\n        background: rgb(255,255,255);\n        background: linear-gradient(170deg, rgba(255,255,255,1) 0%, rgba(251,251,251,1) 57%, rgba(189,189,189,1) 58%, rgba(189,189,189,1) 100%);\n    "]);return v=function(){return t},t}var k=c.a.div([Object(s.b)(v()),{width:"100%","@media (min-width: 640px)":{maxWidth:"640px"},"@media (min-width: 768px)":{maxWidth:"768px"},"@media (min-width: 1024px)":{maxWidth:"1024px"},"@media (min-width: 1280px)":{maxWidth:"1280px"},"--bg-opacity":"1",backgroundColor:"rgba(160, 174, 192, var(--bg-opacity))",gridColumnStart:"1",gridColumnEnd:"4",textAlign:"center",borderTopLeftRadius:"0.125rem",borderTopRightRadius:"0.125rem",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"flex-start"}]),j=Object(c.a)(h.a)([{":hover":{cursor:"pointer","--transform-scale-x":"1.5","--transform-scale-y":"1.5"},transitionProperty:"background-color, border-color, color, fill, stroke, opacity, box-shadow, transform","--transform-translate-x":"0","--transform-translate-y":"0","--transform-rotate":"0","--transform-skew-x":"0","--transform-skew-y":"0","--transform-scale-x":"1","--transform-scale-y":"1",transform:"translateX(var(--transform-translate-x)) translateY(var(--transform-translate-y)) rotate(var(--transform-rotate)) skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y)) scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y))"}]),S=c.a.div({display:"flex"}),O=c.a.h1([{fontSize:"2.25rem",paddingLeft:"1.25rem",letterSpacing:"0.05em",wordBreak:"break-all"}]),E=c.a.h3([{paddingLeft:"1.25rem",fontWeight:"300",fontSize:"1.25rem",wordBreak:"break-all"}]),C=c.a.form([Object(s.b)(x()),{textAlign:"center",display:"flex",flexDirection:"column","--bg-opacity":"1",backgroundColor:"rgba(203, 213, 224, var(--bg-opacity))",padding:"0.5rem",borderRadius:"0.125rem",boxShadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"}]),w=c.a.button([{"--bg-opacity":"1",backgroundColor:"rgba(72, 187, 120, var(--bg-opacity))",":hover":{"--bg-opacity":"1",backgroundColor:"rgba(47, 133, 90, var(--bg-opacity))"},"--text-opacity":"1",color:"rgba(255, 255, 255, var(--text-opacity))",marginTop:"0.5rem",fontWeight:"700",paddingTop:"0.5rem",paddingBottom:"0.5rem",paddingLeft:"0.5rem",paddingRight:"0.5rem",borderWidth:"1px","--border-opacity":"1",borderColor:"rgba(47, 133, 90, var(--border-opacity))",borderRadius:"0.25rem",alignSelf:"center"}]),R=function(t){Object(f.a)(a,t);var e=Object(p.a)(a);function a(t){var n;return Object(m.a)(this,a),(n=e.call(this,t)).state={name:n.getStorage("header_name")||"",profession:n.getStorage("header_profession")||"",editName:!1},n.toggleEditName=n.toggleEditName.bind(Object(g.a)(n)),n.handleNameChange=n.handleNameChange.bind(Object(g.a)(n)),n.handleProfessionChange=n.handleProfessionChange.bind(Object(g.a)(n)),n}return Object(b.a)(a,[{key:"componentDidUpdate",value:function(t,e){this.state.name!==t.name&&this.setStorage("header_name",this.state.name),this.state.profession!==t.profession&&this.setStorage("header_profession",this.state.profession)}},{key:"setStorage",value:function(t,e){localStorage.setItem(t,JSON.stringify(e))}},{key:"getStorage",value:function(t){return JSON.parse(localStorage.getItem(t))}},{key:"handleSubmit",value:function(t){t.preventDefault(),this.toggleEditName()}},{key:"toggleEditName",value:function(){this.setState((function(t){return{editName:!t.editName}}))}},{key:"handleNameChange",value:function(t){this.setState({name:t.target.value.trim()})}},{key:"handleProfessionChange",value:function(t){this.setState({profession:t.target.value.trim()})}},{key:"render",value:function(){var t=this,e=this.state,a=e.name,n=e.profession,o=e.editName;return r.a.createElement(k,null,r.a.createElement(S,null,r.a.createElement(O,null,a||"Your name"),r.a.createElement(j,{icon:y.b,onClick:this.toggleEditName}),o&&r.a.createElement(C,{onSubmit:function(e){return t.handleSubmit(e)}},r.a.createElement("label",null,"Name"),r.a.createElement("input",{maxLength:"25",defaultValue:a,onChange:function(e){return t.handleNameChange(e)}}),r.a.createElement("label",null,"Profession"),r.a.createElement("input",{maxLength:"20",defaultValue:n,onChange:function(e){return t.handleProfessionChange(e)}}),r.a.createElement(w,null,"End edit"))),r.a.createElement(E,null,n||"Your profession"))}}]),a}(n.Component);function T(){var t=Object(l.a)(["WORD-BREAK: break-all;"]);return T=function(){return t},t}function D(){var t=Object(l.a)(["max-height:200px"]);return D=function(){return t},t}function P(){var t=Object(l.a)([" \n        font-family: 'Roboto', sans-serif;\n        position: absolute;\n        left:0;\n        z-index:1;\n    "]);return P=function(){return t},t}function W(){var t=Object(l.a)([" position:absolute;\n        top:0;\n        right:0;\n    "]);return W=function(){return t},t}function _(){var t=Object(l.a)(["WORD-BREAK: break-all;"]);return _=function(){return t},t}function L(){var t=Object(l.a)(["WORD-BREAK: break-all;"]);return L=function(){return t},t}function N(){var t=Object(l.a)(["\n        border-bottom:1px solid gray;\n        margin:5px;\n    "]);return N=function(){return t},t}function J(){var t=Object(l.a)(["\n        position:relative;\n        margin:5px;\n    "]);return J=function(){return t},t}var B=c.a.div([Object(s.b)(J()),{marginLeft:"1.5rem",marginRight:"1.5rem",marginTop:"1rem",paddingBottom:"1rem",position:"relative"}]),I=c.a.div([Object(s.b)(N()),{display:"flex",flexDirection:"column",paddingBottom:"1rem",position:"relative"}]),F=c.a.h3([Object(s.b)(L()),{marginBottom:"0.25rem",marginTop:"0.5rem"}]),z=c.a.h3([Object(s.b)(_()),{marginBottom:"0.25rem",marginTop:"0.5rem"}]),A=c.a.h3([{marginBottom:"0.75rem",marginTop:"0.5rem",display:"flex"}]),Y=Object(c.a)(h.a)([Object(s.b)(W()),{":hover":{cursor:"pointer","--transform-scale-x":"1.5","--transform-scale-y":"1.5"},transitionProperty:"background-color, border-color, color, fill, stroke, opacity, box-shadow, transform","--transform-translate-x":"0","--transform-translate-y":"0","--transform-rotate":"0","--transform-skew-x":"0","--transform-skew-y":"0","--transform-scale-x":"1","--transform-scale-y":"1",transform:"translateX(var(--transform-translate-x)) translateY(var(--transform-translate-y)) rotate(var(--transform-rotate)) skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y)) scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y))"}]),X=c.a.form([Object(s.b)(P()),{textAlign:"center",display:"flex",flexDirection:"column","--bg-opacity":"1",backgroundColor:"rgba(203, 213, 224, var(--bg-opacity))",padding:"0.25rem",borderRadius:"0.125rem",boxShadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)","@media (min-width: 768px)":{padding:"0.75rem"}}]),V=c.a.button([{"--bg-opacity":"1",backgroundColor:"rgba(72, 187, 120, var(--bg-opacity))",":hover":{"--bg-opacity":"1",backgroundColor:"rgba(47, 133, 90, var(--bg-opacity))"},"--text-opacity":"1",color:"rgba(255, 255, 255, var(--text-opacity))",marginTop:"0.5rem",fontWeight:"700",paddingTop:"0.5rem",paddingBottom:"0.5rem",paddingLeft:"0.5rem",paddingRight:"0.5rem",borderWidth:"1px","--border-opacity":"1",borderColor:"rgba(47, 133, 90, var(--border-opacity))",borderRadius:"0.25rem",alignSelf:"center"}]),U=c.a.textarea([Object(s.b)(D())]),K=c.a.h3([{marginBottom:"0.5rem",marginRight:"1.25rem",fontSize:"1.25rem",letterSpacing:"0.05em"}]),G=c.a.p([Object(s.b)(T()),{fontWeight:"300",fontSize:"0.875rem",fontStyle:"italic",textAlign:"justify",marginLeft:"0.5rem"}]),q=function(t){Object(f.a)(a,t);var e=Object(p.a)(a);function a(t){var n;return Object(m.a)(this,a),(n=e.call(this,t)).state={jobPosition:n.getStorage("work_position")||"",jobCompany:n.getStorage("work_company")||"",jobDateStart:n.getStorage("work_date_start")||"",jobDateEnd:n.getStorage("work_date_end")||"",jobText:n.getStorage("work_text")||"",jobEditToggle:!1},n.handleJobEditToggle=n.handleJobEditToggle.bind(Object(g.a)(n)),n.handleJobSubmitForm=n.handleJobSubmitForm.bind(Object(g.a)(n)),n}return Object(b.a)(a,[{key:"componentDidUpdate",value:function(t){this.state.jobPosition!==t.jobPosition&&this.setStorage("work_position",this.state.jobPosition),this.state.jobCompany!==t.jobCompany&&this.setStorage("work_company",this.state.jobCompany),this.state.jobDateStart!==t.jobDateStart&&this.setStorage("work_date_start",this.state.jobDateStart),this.state.jobDateEnd!==t.jobDateEnd&&this.setStorage("work_date_end",this.state.jobDateEnd),this.state.jobText!==t.jobText&&this.setStorage("work_text",this.state.jobText)}},{key:"setStorage",value:function(t,e){localStorage.setItem(t,JSON.stringify(e))}},{key:"getStorage",value:function(t){return JSON.parse(localStorage.getItem(t))}},{key:"handleJobPositionChange",value:function(t){var e=t.target.value;this.setState({jobPosition:e})}},{key:"handleJobCompanyChange",value:function(t){var e=t.target.value;this.setState({jobCompany:e})}},{key:"handleJobDateStartChange",value:function(t){var e=t.target.value;this.setState({jobDateStart:e})}},{key:"handleJobDateEndChange",value:function(t){var e=t.target.value;this.setState({jobDateEnd:e})}},{key:"handleJobTextChange",value:function(t){var e=t.target.value;this.setState({jobText:e})}},{key:"handleJobEditToggle",value:function(){this.setState((function(t){return{jobEditToggle:!t.jobEditToggle}}))}},{key:"handleJobSubmitForm",value:function(t){t.preventDefault(),this.handleJobEditToggle()}},{key:"render",value:function(){var t=this,e=this.state,a=e.jobPosition,n=e.jobCompany,o=e.jobDateStart,i=e.jobDateEnd,l=e.jobText,c=e.jobEditToggle;return r.a.createElement(B,null,r.a.createElement(K,null,"WORK EXPERIENCE"),r.a.createElement(Y,{icon:y.b,onClick:this.handleJobEditToggle}),r.a.createElement(I,null,r.a.createElement(F,null,"Position: ",a||"Enter your position in the job"),r.a.createElement(z,null,"Company: ",n||"Name of the company you worked for"),r.a.createElement(A,null," Date: ",o||"date"," /",i||"date"," "),r.a.createElement(G,null,l||"Please enter what you want to share about that job"),c&&r.a.createElement(X,{onSubmit:this.handleJobSubmitForm},r.a.createElement("label",null,"Position"),r.a.createElement("input",{maxLength:"20",placeholder:"Position",defaultValue:a,onChange:function(e){return t.handleJobPositionChange(e)}}),r.a.createElement("label",null,"Company"),r.a.createElement("input",{maxLength:"20",placeholder:"Company",defaultValue:n,onChange:function(e){return t.handleJobCompanyChange(e)}}),r.a.createElement("label",null,"Date Start"),r.a.createElement("input",{type:"month",defaultValue:o,onChange:function(e){return t.handleJobDateStartChange(e)}}),r.a.createElement("label",null,"Date End"),r.a.createElement("input",{type:"month",defaultValue:i,onChange:function(e){return t.handleJobDateEndChange(e)}}),r.a.createElement("label",null,"Info about the job"),r.a.createElement(U,{maxLength:"200",defaultValue:l,onChange:function(e){return t.handleJobTextChange(e)}}),r.a.createElement(V,null,"End edit"))))}}]),a}(n.Component);function H(){var t=Object(l.a)(["max-height:200px"]);return H=function(){return t},t}function M(){var t=Object(l.a)([" \n        font-family: 'Roboto', sans-serif;\n        position: absolute;\n        z-index:1;\n    "]);return M=function(){return t},t}function Q(){var t=Object(l.a)([" position:absolute;\n        top:0;\n        right:0;\n    "]);return Q=function(){return t},t}function Z(){var t=Object(l.a)(["WORD-BREAK: break-all;"]);return Z=function(){return t},t}function $(){var t=Object(l.a)(["\n        border-bottom:1px solid gray;\n        margin:5px;\n    "]);return $=function(){return t},t}var tt=c.a.div([Object(s.b)($()),{marginLeft:"1.5rem",marginRight:"1.5rem",marginTop:"1rem",paddingBottom:"1rem",position:"relative"}]),et=c.a.p([Object(s.b)(Z()),{fontWeight:"300",fontSize:"0.875rem",fontStyle:"italic",textAlign:"justify",marginLeft:"0.5rem"}]),at=c.a.h3([{marginBottom:"0.5rem",marginRight:"1.25rem",fontSize:"1.25rem",letterSpacing:"0.05em"}]),nt=Object(c.a)(h.a)([Object(s.b)(Q()),{":hover":{cursor:"pointer","--transform-scale-x":"1.5","--transform-scale-y":"1.5"},transitionProperty:"background-color, border-color, color, fill, stroke, opacity, box-shadow, transform","--transform-translate-x":"0","--transform-translate-y":"0","--transform-rotate":"0","--transform-skew-x":"0","--transform-skew-y":"0","--transform-scale-x":"1","--transform-scale-y":"1",transform:"translateX(var(--transform-translate-x)) translateY(var(--transform-translate-y)) rotate(var(--transform-rotate)) skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y)) scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y))"}]),rt=c.a.form([Object(s.b)(M()),{textAlign:"center",display:"flex",flexDirection:"column","--bg-opacity":"1",backgroundColor:"rgba(203, 213, 224, var(--bg-opacity))",padding:"0.5rem",borderRadius:"0.125rem",boxShadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"}]),ot=c.a.button([{"--bg-opacity":"1",backgroundColor:"rgba(72, 187, 120, var(--bg-opacity))",":hover":{"--bg-opacity":"1",backgroundColor:"rgba(47, 133, 90, var(--bg-opacity))"},"--text-opacity":"1",color:"rgba(255, 255, 255, var(--text-opacity))",marginTop:"0.5rem",fontWeight:"700",paddingTop:"0.5rem",paddingBottom:"0.5rem",paddingLeft:"0.5rem",paddingRight:"0.5rem",borderWidth:"1px","--border-opacity":"1",borderColor:"rgba(47, 133, 90, var(--border-opacity))",borderRadius:"0.25rem",alignSelf:"center"}]),it=c.a.textarea([Object(s.b)(H())]),lt=function(t){Object(f.a)(a,t);var e=Object(p.a)(a);function a(t){var n;return Object(m.a)(this,a),(n=e.call(this,t)).state={profileText:n.getStorage("profile_text")||"",profileEditToggle:!1},n.handleProfileEditToggle=n.handleProfileEditToggle.bind(Object(g.a)(n)),n.handleProfileSubmitForm=n.handleProfileSubmitForm.bind(Object(g.a)(n)),n.handleProfileChange=n.handleProfileChange.bind(Object(g.a)(n)),n}return Object(b.a)(a,[{key:"componentDidUpdate",value:function(t){this.state.profileText!==t.profileText&&this.setStorage("profile_text",this.state.profileText)}},{key:"setStorage",value:function(t,e){localStorage.setItem(t,JSON.stringify(e))}},{key:"getStorage",value:function(t){return JSON.parse(localStorage.getItem(t))}},{key:"handleProfileChange",value:function(t){this.setState({profileText:t.target.value})}},{key:"handleProfileSubmitForm",value:function(t){t.preventDefault(),this.handleProfileEditToggle()}},{key:"handleProfileEditToggle",value:function(){this.setState((function(t){return{profileEditToggle:!t.profileEditToggle}}))}},{key:"render",value:function(){var t=this,e=this.state,a=e.profileText,n=e.profileEditToggle;return r.a.createElement(tt,null,r.a.createElement(at,null,"PROFILE"),r.a.createElement(nt,{icon:y.b,onClick:function(e){t.handleProfileEditToggle(e)}}),r.a.createElement(et,null,a||"Please enter info you want to share about you."),n&&r.a.createElement(rt,{onSubmit:this.handleProfileSubmitForm},r.a.createElement("label",null,"Profile Info"),r.a.createElement(it,{maxLength:"200",defaultValue:a,onChange:function(e){return t.handleProfileChange(e)}}),r.a.createElement(ot,null,"End edit")))}}]),a}(n.Component);function ct(){var t=Object(l.a)([" \n        font-family: 'Roboto', sans-serif;\n    "]);return ct=function(){return t},t}var st=c.a.div([Object(s.b)(ct()),{width:"100%","@media (min-width: 640px)":{maxWidth:"640px",gridColumnStart:"2",gridColumnEnd:"4",gridRowStart:"2",gridRowEnd:"6"},"@media (min-width: 768px)":{maxWidth:"768px"},"@media (min-width: 1024px)":{maxWidth:"1024px"},"@media (min-width: 1280px)":{maxWidth:"1280px"},"--bg-opacity":"1",backgroundColor:"rgba(247, 250, 252, var(--bg-opacity))",borderTopRightRadius:"0",borderBottomRightRadius:"0.125rem",borderTopLeftRadius:"0",gridColumnStart:"1",gridColumnEnd:"4",gridRowStart:"2",gridRowEnd:"4"}]),ut=function(t){Object(f.a)(a,t);var e=Object(p.a)(a);function a(){return Object(m.a)(this,a),e.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){return r.a.createElement(st,null,r.a.createElement(lt,null),r.a.createElement(q,null))}}]),a}(n.Component),dt=a(24);function mt(){var t=Object(l.a)(["\n        flex: 1;\n        display:flex;\n        justify-content: space-between;\n        flex-direction:column;\n        margin-bottom:10px;\n    "]);return mt=function(){return t},t}function bt(){var t=Object(l.a)([" \n        font-family: 'Roboto', sans-serif;\n        position: absolute;\n        left:0;\n        z-index:1;\n        color:black;\n    "]);return bt=function(){return t},t}function gt(){var t=Object(l.a)(["\n        display:flex;\n        flex-direction:column;\n        border-bottom:1px solid gray;\n        width:95%;\n        margin: 0 auto;\n    "]);return gt=function(){return t},t}var ft=c.a.div([Object(s.b)(gt()),{marginBottom:"0.75rem",textAlign:"center",flex:"1 1 0%",position:"relative"}]),pt=c.a.form([Object(s.b)(bt()),{textAlign:"center",display:"flex",flexDirection:"column","--bg-opacity":"1",backgroundColor:"rgba(203, 213, 224, var(--bg-opacity))",padding:"0.25rem",borderRadius:"0.125rem",boxShadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)","@media (min-width: 768px)":{padding:"0.75rem"}}]),ht=c.a.ul([Object(s.b)(mt()),{fontSize:"0.875rem"}]),yt=Object(c.a)(h.a)([{position:"absolute",right:"0",":hover":{cursor:"pointer","--transform-scale-x":"1.5","--transform-scale-y":"1.5"},transitionProperty:"background-color, border-color, color, fill, stroke, opacity, box-shadow, transform","--transform-translate-x":"0","--transform-translate-y":"0","--transform-rotate":"0","--transform-skew-x":"0","--transform-skew-y":"0","--transform-scale-x":"1","--transform-scale-y":"1",transform:"translateX(var(--transform-translate-x)) translateY(var(--transform-translate-y)) rotate(var(--transform-rotate)) skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y)) scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y))"}]),xt=c.a.button([{"--bg-opacity":"1",backgroundColor:"rgba(72, 187, 120, var(--bg-opacity))",":hover":{"--bg-opacity":"1",backgroundColor:"rgba(47, 133, 90, var(--bg-opacity))"},"--text-opacity":"1",color:"rgba(255, 255, 255, var(--text-opacity))",marginTop:"0.5rem",fontWeight:"700",paddingTop:"0.5rem",paddingBottom:"0.5rem",paddingLeft:"0.5rem",paddingRight:"0.5rem",borderWidth:"1px","--border-opacity":"1",borderColor:"rgba(47, 133, 90, var(--border-opacity))",borderRadius:"0.25rem",alignSelf:"center"}]),vt=c.a.h3([{marginBottom:"0.5rem",fontSize:"1.25rem",letterSpacing:"0.05em"}]),kt=function(t){Object(f.a)(a,t);var e=Object(p.a)(a);function a(t){var n;return Object(m.a)(this,a),(n=e.call(this,t)).state={email:n.getStorage("contact_email")||"",phone:n.getStorage("contact_phone")||"",github:n.getStorage("contact_github")||"",contactEdit:!1},n.sumbitContactForm=n.sumbitContactForm.bind(Object(g.a)(n)),n.toggleContactEdit=n.toggleContactEdit.bind(Object(g.a)(n)),n}return Object(b.a)(a,[{key:"componentDidUpdate",value:function(t){this.state.email!==t.email&&this.setStorage("contact_email",this.state.email),this.state.phone!==t.phone&&this.setStorage("contact_phone",this.state.phone),this.state.github!==t.github&&this.setStorage("contact_github",this.state.github)}},{key:"setStorage",value:function(t,e){localStorage.setItem(t,JSON.stringify(e))}},{key:"getStorage",value:function(t){return JSON.parse(localStorage.getItem(t))}},{key:"toggleContactEdit",value:function(){this.setState((function(t){return{contactEdit:!t.contactEdit}}))}},{key:"sumbitContactForm",value:function(t){t.preventDefault(),this.toggleContactEdit()}},{key:"changeEmail",value:function(t){var e=t.target.value;this.setState({email:e})}},{key:"changePhone",value:function(t){var e=t.target.value;this.setState({phone:e})}},{key:"changeGithub",value:function(t){var e=t.target.value;this.setState({github:e})}},{key:"render",value:function(){var t=this,e=this.state,a=e.contactEdit,n=e.email,r=e.phone,o=e.github;return Object(s.c)(ft,{css:{paddingTop:"0.5rem"}},Object(s.c)(vt,null,"CONTACT"),a&&Object(s.c)(pt,{onSubmit:function(e){return t.sumbitContactForm(e)}},Object(s.c)("label",null,"Email"),Object(s.c)("input",{maxLength:"20",defaultValue:n,onChange:function(e){return t.changeEmail(e)},type:"email"}),Object(s.c)("label",null,"Phone"),Object(s.c)("input",{maxLength:"15",defaultValue:r,onChange:function(e){return t.changePhone(e)}}),Object(s.c)("label",null,"Github Page"),Object(s.c)("input",{maxLength:"25",defaultValue:o,onChange:function(e){return t.changeGithub(e)}}),Object(s.c)(xt,null,"End edit")),Object(s.c)(yt,{onClick:this.toggleContactEdit,icon:y.b}),Object(s.c)(ht,null,Object(s.c)("div",null,Object(s.c)(h.a,{css:{marginRight:"0.5rem"},icon:y.a}),Object(s.c)("span",null,n||"Enter your email")),Object(s.c)("div",null,Object(s.c)(h.a,{css:{marginRight:"0.5rem"},icon:y.c}),Object(s.c)("span",null,r||"Enter your phone"," ")),Object(s.c)("div",null,Object(s.c)(h.a,{css:{marginRight:"0.5rem"},icon:dt.a}),Object(s.c)("span",null,o||"github.com/yourpage"))))}}]),a}(n.Component);function jt(){var t=Object(l.a)(["\n        flex: 1;\n        display:flex;\n        justify-content: space-between;\n        flex-direction:column;\n        margin-bottom:10px;\n    "]);return jt=function(){return t},t}function St(){var t=Object(l.a)([" \n        font-family: 'Roboto', sans-serif;\n        position: absolute;\n        left:0;\n        z-index:1;\n        color:black;\n    "]);return St=function(){return t},t}function Ot(){var t=Object(l.a)(["\n        display:flex;\n        flex-direction:column;\n        border-bottom:1px solid gray;\n        width:95%;\n        margin: 0 auto;\n    "]);return Ot=function(){return t},t}var Et=c.a.div([Object(s.b)(Ot()),{marginBottom:"0.75rem",textAlign:"center",flex:"1 1 0%",position:"relative"}]),Ct=c.a.form([Object(s.b)(St()),{textAlign:"center",display:"flex",flexDirection:"column","--bg-opacity":"1",backgroundColor:"rgba(203, 213, 224, var(--bg-opacity))",padding:"0.25rem",borderRadius:"0.125rem",boxShadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)","@media (min-width: 768px)":{padding:"0.75rem"}}]),wt=c.a.ul([Object(s.b)(jt()),{fontSize:"0.875rem"}]),Rt=Object(c.a)(h.a)([{position:"absolute",right:"0",":hover":{cursor:"pointer","--transform-scale-x":"1.5","--transform-scale-y":"1.5"},transitionProperty:"background-color, border-color, color, fill, stroke, opacity, box-shadow, transform","--transform-translate-x":"0","--transform-translate-y":"0","--transform-rotate":"0","--transform-skew-x":"0","--transform-skew-y":"0","--transform-scale-x":"1","--transform-scale-y":"1",transform:"translateX(var(--transform-translate-x)) translateY(var(--transform-translate-y)) rotate(var(--transform-rotate)) skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y)) scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y))"}]),Tt=c.a.button([{"--bg-opacity":"1",backgroundColor:"rgba(72, 187, 120, var(--bg-opacity))",":hover":{"--bg-opacity":"1",backgroundColor:"rgba(47, 133, 90, var(--bg-opacity))"},"--text-opacity":"1",color:"rgba(255, 255, 255, var(--text-opacity))",marginTop:"0.5rem",fontWeight:"700",paddingTop:"0.5rem",paddingBottom:"0.5rem",paddingLeft:"0.5rem",paddingRight:"0.5rem",borderWidth:"1px","--border-opacity":"1",borderColor:"rgba(47, 133, 90, var(--border-opacity))",borderRadius:"0.25rem",alignSelf:"center"}]),Dt=c.a.h3([{marginBottom:"0.5rem",fontSize:"1.25rem",letterSpacing:"0.05em"}]),Pt=function(t){Object(f.a)(a,t);var e=Object(p.a)(a);function a(t){var n;return Object(m.a)(this,a),(n=e.call(this,t)).state={location:n.getStorage("education_location")||"",dateStart:n.getStorage("education_date_start")||"",dateEnd:n.getStorage("education_date_end")||"",title:n.getStorage("education_title")||"",educationEdit:!1},n.sumbitEducationForm=n.sumbitEducationForm.bind(Object(g.a)(n)),n.toggleEducationEdit=n.toggleEducationEdit.bind(Object(g.a)(n)),n}return Object(b.a)(a,[{key:"componentDidUpdate",value:function(t){this.state.location!==t.location&&this.setStorage("education_location",this.state.location),this.state.dateStart!==t.dateStart&&this.setStorage("education_date_start",this.state.dateStart),this.state.dateEnd!==t.dateEnd&&this.setStorage("education_date_end",this.state.dateEnd),this.state.title!==t.title&&this.setStorage("education_title",this.state.title)}},{key:"setStorage",value:function(t,e){localStorage.setItem(t,JSON.stringify(e))}},{key:"getStorage",value:function(t){return JSON.parse(localStorage.getItem(t))}},{key:"toggleEducationEdit",value:function(){this.setState((function(t){return{educationEdit:!t.educationEdit}}))}},{key:"sumbitEducationForm",value:function(t){t.preventDefault(),this.toggleEducationEdit()}},{key:"changeLocation",value:function(t){var e=t.target.value;this.setState({location:e})}},{key:"changeDateStart",value:function(t){var e=t.target.value;this.setState({dateStart:e})}},{key:"changeDateEnd",value:function(t){var e=t.target.value;this.setState({dateEnd:e})}},{key:"changeTitle",value:function(t){var e=t.target.value;this.setState({title:e})}},{key:"render",value:function(){var t=this,e=this.state,a=e.educationEdit,n=e.location,r=e.dateStart,o=e.dateEnd,i=e.title;return Object(s.c)(Et,null,Object(s.c)(Dt,null,"EDUCATION"),a&&Object(s.c)(Ct,{onSubmit:function(e){return t.sumbitEducationForm(e)}},Object(s.c)("label",null,"Where did you studied"),Object(s.c)("input",{defaultValue:n,maxLength:"20",onChange:function(e){return t.changeLocation(e)}}),Object(s.c)("label",null,"Date Start"),Object(s.c)("input",{defaultValue:r,onChange:function(e){return t.changeDateStart(e)},type:"month"}),Object(s.c)("label",null,"Date End"),Object(s.c)("input",{defaultValue:o,onChange:function(e){return t.changeDateEnd(e)},type:"month"}),Object(s.c)("label",null,"Title"),Object(s.c)("input",{defaultValue:i,maxLength:"20",onChange:function(e){return t.changeTitle(e)}}),Object(s.c)(Tt,null,"End edit")),Object(s.c)(Rt,{onClick:this.toggleEducationEdit,icon:y.b}),Object(s.c)(wt,null,Object(s.c)("li",null,"Studied in: ",n||"Where you studied"),Object(s.c)("li",null,"Date: ",r||"date"," / ",o||"date"),Object(s.c)("li",null,"Title: ",i||"")))}}]),a}(n.Component),Wt=a(17),_t=a(25),Lt=a.n(_t);function Nt(){var t=Object(l.a)(["overflow: auto; max-height:200px"]);return Nt=function(){return t},t}function Jt(){var t=Object(l.a)([" \n        font-family: 'Roboto', sans-serif;\n        position: absolute;\n        left:0;\n        z-index:1;\n        color:black;\n    "]);return Jt=function(){return t},t}function Bt(){var t=Object(l.a)(["\n        flex: 1;\n        display:flex;\n        justify-content: space-between;\n        flex-direction:column;\n        margin-bottom:10px;\n    "]);return Bt=function(){return t},t}function It(){var t=Object(l.a)(["\n        display:flex;\n        flex-direction:column;\n        border-bottom:1px solid gray;\n        width:95%;\n        margin: 0 auto;\n    "]);return It=function(){return t},t}var Ft=c.a.h3([{marginBottom:"0.5rem",fontSize:"1.25rem",letterSpacing:"0.05em"}]),zt=c.a.div([Object(s.b)(It()),{marginBottom:"0.75rem",textAlign:"center",flex:"1 1 0%",position:"relative"}]),At=c.a.ul([Object(s.b)(Bt()),{fontSize:"0.875rem"}]),Yt=Object(c.a)(h.a)([{position:"absolute",right:"0",":hover":{cursor:"pointer","--transform-scale-x":"1.5","--transform-scale-y":"1.5"},transitionProperty:"background-color, border-color, color, fill, stroke, opacity, box-shadow, transform","--transform-translate-x":"0","--transform-translate-y":"0","--transform-rotate":"0","--transform-skew-x":"0","--transform-skew-y":"0","--transform-scale-x":"1","--transform-scale-y":"1",transform:"translateX(var(--transform-translate-x)) translateY(var(--transform-translate-y)) rotate(var(--transform-rotate)) skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y)) scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y))"}]),Xt=c.a.form([Object(s.b)(Jt()),{textAlign:"center",display:"flex",flexDirection:"column","--bg-opacity":"1",backgroundColor:"rgba(203, 213, 224, var(--bg-opacity))",padding:"0.25rem",borderRadius:"0.125rem",boxShadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)","@media (min-width: 768px)":{padding:"0.75rem"}}]),Vt=c.a.button([{"--bg-opacity":"1",backgroundColor:"rgba(72, 187, 120, var(--bg-opacity))",":hover":{"--bg-opacity":"1",backgroundColor:"rgba(47, 133, 90, var(--bg-opacity))"},"--text-opacity":"1",color:"rgba(255, 255, 255, var(--text-opacity))",marginTop:"0.5rem",fontWeight:"700",paddingTop:"0.5rem",paddingBottom:"0.5rem",paddingLeft:"0.5rem",paddingRight:"0.5rem",borderWidth:"1px","--border-opacity":"1",borderColor:"rgba(47, 133, 90, var(--border-opacity))",borderRadius:"0.25rem",alignSelf:"center"}]),Ut=function(t){Object(f.a)(a,t);var e=Object(p.a)(a);function a(t){var n;return Object(m.a)(this,a),(n=e.call(this,t)).state={arraySkills:n.getStorage("skills_arraySkills")||[],skillEdit:!1,newSkillInput:""},n.sumbitSkillsForm=n.sumbitSkillsForm.bind(Object(g.a)(n)),n.toggleSkillEdit=n.toggleSkillEdit.bind(Object(g.a)(n)),n.deleteSkill=n.deleteSkill.bind(Object(g.a)(n)),n.handleChangeNewSkill=n.handleChangeNewSkill.bind(Object(g.a)(n)),n.addSkill=n.addSkill.bind(Object(g.a)(n)),n}return Object(b.a)(a,[{key:"componentDidUpdate",value:function(t){this.state.arraySkills!==t.arraySkills&&this.setStorage("skills_arraySkills",this.state.arraySkills)}},{key:"setStorage",value:function(t,e){localStorage.setItem(t,JSON.stringify(e))}},{key:"getStorage",value:function(t){return JSON.parse(localStorage.getItem(t))}},{key:"toggleSkillEdit",value:function(){this.setState((function(t){return{skillEdit:!t.skillEdit}}))}},{key:"sumbitSkillsForm",value:function(t){t.preventDefault(),this.toggleSkillEdit()}},{key:"deleteSkill",value:function(t){this.setState({arraySkills:Object(Wt.a)(this.state.arraySkills.filter((function(e){return e.key!==t})))})}},{key:"handleChangeNewSkill",value:function(t){this.setState({newSkillInput:t.target.value})}},{key:"addSkill",value:function(){var t={skill:this.state.newSkillInput,key:Lt()()};this.setState((function(e){return{arraySkills:[].concat(Object(Wt.a)(e.arraySkills),[t]),newSkillInput:""}}))}},{key:"render",value:function(){var t=this,e=this.state,a=e.skillEdit,n=e.arraySkills,r=e.newSkillInput;return Object(s.c)(zt,{css:{borderStyle:"none",marginBottom:"0"}},Object(s.c)(Ft,null,"SKILLS"),a&&Object(s.c)(Xt,{onSubmit:function(e){return t.sumbitSkillsForm(e)}},Object(s.c)("label",null,"Add a skill"),Object(s.c)("input",{maxLength:"15",value:r,onChange:function(e){return t.handleChangeNewSkill(e)}}),Object(s.c)("button",{type:"button",onClick:this.addSkill,css:{"--bg-opacity":"1",backgroundColor:"rgba(252, 129, 129, var(--bg-opacity))",alignSelf:"center",borderRadius:"0.25rem",marginBottom:"1.25rem",marginTop:"0.5rem",paddingLeft:"0.5rem",paddingRight:"0.5rem",paddingTop:"0.25rem",paddingBottom:"0.25rem",":hover":{"--bg-opacity":"1",backgroundColor:"rgba(229, 62, 62, var(--bg-opacity))"},borderWidth:"1px","--border-opacity":"1",borderColor:"rgba(229, 62, 62, var(--border-opacity))"}},"Send"),n.length>0&&Object(s.c)("div",null,Object(s.c)("label",null,"Remove a Skill"),Object(s.c)("div",{css:Object(s.b)(Object(s.b)(Nt()))},n.map((function(e){return Object(s.c)("div",{css:{"--bg-opacity":"1",backgroundColor:"rgba(237, 242, 247, var(--bg-opacity))","--border-opacity":"1",borderColor:"rgba(190, 227, 248, var(--border-opacity))",borderStyle:"solid",borderWidth:"4px",display:"flex",justifyContent:"space-around"},key:e.key+"container"},Object(s.c)("span",{key:e.key}," ",e.skill),Object(s.c)("button",{css:{"--bg-opacity":"1",backgroundColor:"rgba(252, 129, 129, var(--bg-opacity))",borderRadius:"0.25rem",paddingLeft:"0.5rem",paddingRight:"0.5rem",fontSize:"1.125rem"},onClick:function(){return t.deleteSkill(e.key)},key:e.key+"button"},"\xd7"))})))),Object(s.c)(Vt,{type:"submit"},"End edit")),Object(s.c)(Yt,{onClick:this.toggleSkillEdit,icon:y.b}),Object(s.c)(At,null,n.length>0?n.map((function(t){return Object(s.c)("li",{key:t.key},t.skill)})):Object(s.c)("p",null,"Add skills please")))}}]),a}(n.Component);function Kt(){var t=Object(l.a)([" \n        font-family: 'Roboto', sans-serif;\n        background-color: #414143;\n    "]);return Kt=function(){return t},t}var Gt=c.a.div([Object(s.b)(Kt()),{width:"100%","@media (min-width: 640px)":{maxWidth:"640px",gridRowStart:"2",gridRowEnd:"6",gridColumnStart:"1",gridColumnEnd:"2"},"@media (min-width: 768px)":{maxWidth:"768px"},"@media (min-width: 1024px)":{maxWidth:"1024px"},"@media (min-width: 1280px)":{maxWidth:"1280px"},borderTopLeftRadius:"0",borderBottomLeftRadius:"0.125rem",borderTopRightRadius:"0","--text-opacity":"1",color:"rgba(255, 255, 255, var(--text-opacity))",display:"flex",flexDirection:"column",gridColumnStart:"1",gridColumnEnd:"4"}]),qt=function(t){Object(f.a)(a,t);var e=Object(p.a)(a);function a(){return Object(m.a)(this,a),e.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){return Object(s.c)(Gt,null,Object(s.c)(kt,null),Object(s.c)(Pt,null),Object(s.c)(Ut,null))}}]),a}(n.Component);function Ht(){var t=Object(l.a)(["\n    min-height: 98vh;\n    max-width: 100vw;\n    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);\n    @media (max-width: 640px) {\n      min-height: 100vh;\n    }\n  "]);return Ht=function(){return t},t}function Mt(){var t=Object(l.a)(["\n    background-color:#eee;\n    background-image: url(",");\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n    background-size: cover;\n    background-position: center left;\n    min-height: 100vh;\n    @media (max-width: 640px) {\n      background-image:none;\n    }\n  "]);return Mt=function(){return t},t}var Qt=c.a.div([Object(s.b)(Mt(),d.a),{display:"flex",alignItems:"center"}]),Zt=c.a.div([Object(s.b)(Ht()),{width:"100%",marginLeft:"auto",marginRight:"auto","@media (min-width: 640px)":{maxWidth:"640px",gridTemplateRows:"repeat(5, minmax(0, 1fr))",gridTemplateColumns:"repeat(3, minmax(0, 1fr))"},"@media (min-width: 768px)":{maxWidth:"768px",width:"75%"},"@media (min-width: 1024px)":{maxWidth:"1024px",width:"75%"},"@media (min-width: 1280px)":{maxWidth:"1280px",width:"50%"},borderRadius:"0.25rem",display:"grid",position:"relative",gridTemplateRows:"repeat(3, minmax(0, 1fr))",gridTemplateColumns:"repeat(3, minmax(0, 1fr))"}]);var $t=function(){return r.a.createElement(Qt,null,r.a.createElement(Zt,null,r.a.createElement(R,null),r.a.createElement(ut,null),r.a.createElement(qt,null)))};a(35);i.a.render(r.a.createElement($t,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.cd107696.chunk.js.map