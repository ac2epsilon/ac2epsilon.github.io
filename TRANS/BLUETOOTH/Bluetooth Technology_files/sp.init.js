function ULSVCK(){var o=new Object;o.ULSTeamName="Microsoft SharePoint Foundation";o.ULSFileName="SP.Init.js";return o;}
Type.registerNamespace("SP");SP.ListLevelPermissionMask=function(){};SP.ListLevelPermissionMask.prototype={viewListItems:1,insertListItems:2,editListItems:4,deleteListItems:8,approveItems:16,openItems:32,viewVersions:64,deleteVersions:128,breakCheckout:256,managePersonalViews:512,manageLists:2048};SP.ListLevelPermissionMask.registerEnum("SP.ListLevelPermissionMask",false);SP.HtmlBuilder=function(){ULSVCK:;this.$8_0=[];this.$H_0=[];this.$0_0=[];this.$N_0=[]};SP.HtmlBuilder.prototype={$0_0:null,$H_0:null,$8_0:null,$N_0:null,addAttribute:function(b,a){ULSVCK:;this.$8_0[this.$8_0.length]=new SP.HtmlBuilder.Attribute(b,a)},addCssClass:function(a){ULSVCK:;Array.add(this.$H_0,a)},addCommunitiesCssClass:function(a){ULSVCK:;this.addCssClass("ms-comm-"+a)},renderBeginTag:function(b){ULSVCK:;this.$N_0.push(b);this.$0_0[this.$0_0.length]="<";this.$0_0[this.$0_0.length]=b;if(this.$H_0.length>0){this.addAttribute("class",this.$H_0.join(" "));this.$H_0=[]}for(var a=0;a<this.$8_0.length;a++){var c=this.$8_0[a];this.$0_0[this.$0_0.length]=" ";this.$0_0[this.$0_0.length]=c.name;this.$0_0[this.$0_0.length]='="';this.$0_0[this.$0_0.length]=c.value;this.$0_0[this.$0_0.length]='"'}Array.clear(this.$8_0);this.$0_0[this.$0_0.length]=">"},renderEndTag:function(){ULSVCK:;if(this.$N_0.length>0){var a=this.$N_0.pop();this.$0_0[this.$0_0.length]="</";this.$0_0[this.$0_0.length]=a;this.$0_0[this.$0_0.length]=">"}},write:function(a){ULSVCK:;this.$0_0[this.$0_0.length]=a},writeEncoded:function(a){ULSVCK:;this.$0_0[this.$0_0.length]=STSHtmlEncode(a)},toString:function(){ULSVCK:;return this.$0_0.join("")}};SP.HtmlBuilder.Attribute=function(a,b){ULSVCK:;this.name=a;this.value=b};SP.HtmlBuilder.Attribute.prototype={name:null,value:null};SP.ScriptHelpers=function(){};SP.ScriptHelpers.disableWebpartSelection=function(b){ULSVCK:;var c="MSOZoneCell_WebPart"+b.wpq,a=$get(c);!SP.ScriptHelpers.isNullOrUndefined(a)&&a.setAttribute("onmouseup","")};SP.ScriptHelpers.getDocumentQueryPairs=function(){ULSVCK:;var a=window.self.ajaxNavigate,b=a.get_href();return SP.ScriptHelpers.getUrlQueryPairs(b)};SP.ScriptHelpers.getFieldFromSchema=function(g,e){ULSVCK:;for(var c=null,b=g.Field,f=b.length,a=0;a<f;++a){var d=b[a];if(d.Name===e){c=d;break}}return c};SP.ScriptHelpers.getLayoutsPageUrl=function(b,a){ULSVCK:;return SP.Utilities.UrlBuilder.urlCombine(a,"_layouts/15/"+b)};SP.ScriptHelpers.getListLevelPermissionMask=function(c){ULSVCK:;var b=0,a=c.PermMask;if(!SP.ScriptHelpers.isNullOrUndefinedOrEmpty(a)){var d=a.substr(a.length-4);b=parseInt(d,16)|0}return b};SP.ScriptHelpers.getTextAreaElementValue=function(c){ULSVCK:;var a="",b=c.value;if(!SP.ScriptHelpers.isNullOrUndefinedOrEmpty(b))a=b;return a};SP.ScriptHelpers.getUrlQueryPairs=function(c){ULSVCK:;var d={},e=c.indexOf("?");if(e!==-1&&e+1<c.length)for(var i=c.substr(e+1),j=i.split("&"),g=j,h=g.length,b=0;b<h;++b){var a=g[b];if(!SP.ScriptHelpers.isNullOrUndefinedOrEmpty(a)){var f=a.indexOf("=");if(f===-1)d[a]=null;else{var k=a.substr(0,f),l=a.substr(f+1);d[k]=l}}}return d};SP.ScriptHelpers.getUserFieldProperty=function(e,b,a){ULSVCK:;var c=e[b],d=c[0];return d[a]};SP.ScriptHelpers.hasPermission=function(b,a){ULSVCK:;return(b&a)===a};SP.ScriptHelpers.newGuid=function(){ULSVCK:;return SP.Guid.newGuid().toString()};SP.ScriptHelpers.isNullOrEmptyString=function(a){ULSVCK:;var b=null;return a===b||typeof a==="undefined"||a===""};SP.ScriptHelpers.isNullOrUndefined=function(a){ULSVCK:;var b=null;return a===b||typeof a==="undefined"};SP.ScriptHelpers.isNullOrUndefinedOrEmpty=function(b){ULSVCK:;var c=null,a=b;return a===c||typeof a==="undefined"||b===""};SP.ScriptHelpers.isUndefined=function(a){ULSVCK:;return typeof a==="undefined"};SP.ScriptHelpers.replaceOrAddQueryString=function(c,b,a){ULSVCK:;b=escapeProperlyCore(b,false);a=escapeProperlyCore(a,false);return StURLSetVar2(c,b,a)};SP.ScriptHelpers.removeHtml=function(b){ULSVCK:;var a=document.createElement("div");a.innerHTML=b;SP.ScriptHelpers.removeStyleChildren(a);return GetInnerText(a)};SP.ScriptHelpers.removeStyleChildren=function(d){ULSVCK:;var b=d.getElementsByTagName("style");if(!SP.ScriptHelpers.isNullOrUndefined(b))for(var c=b.length-1;c>=0;c--){var a=b[c];!SP.ScriptHelpers.isNullOrUndefined(a)&&!SP.ScriptHelpers.isNullOrUndefined(a.parentNode)&&a.parentNode.removeChild(a)}};SP.ScriptHelpers.removeHtmlAndTrimStringWithEllipsis=function(d,b){ULSVCK:;var a="";a=SP.ScriptHelpers.removeHtml(d);if(b>=3&&!SP.ScriptHelpers.isNullOrUndefinedOrEmpty(a))if(a.length>b){var c=Strings.STS.L_SPEllipsis;a=a.substr(0,Math.max(b-c.length,0));a+=c}return a};SP.ScriptHelpers.setTextAreaElementValue=function(a,b){ULSVCK:;a.value=b};SP.ScriptHelpers.truncateToInt=function(a){ULSVCK:;return a>0?Math.floor(a):Math.ceil(a)};SP.ScriptHelpers.urlCombine=function(a,b){ULSVCK:;if(a.endsWith("/"))a=a.substr(0,a.length-1);if(b.startsWith("/"))b=b.length>1?b.substr(1):"";return a+"/"+b};SP.ScriptHelpers.resizeImageToSquareLength=function(a,b){ULSVCK:;if(SP.ScriptHelpers.isNullOrUndefined(b)||isNaN(b)||SP.ScriptHelpers.isNullOrUndefined(a)||a.tagName!=="IMG"||a.style.visibility==="hidden")return;var c=SP.ScriptHelpers.isNullOrUndefined(a.naturalWidth)?a.clientWidth:a.naturalWidth,d=SP.ScriptHelpers.isNullOrUndefined(a.naturalHeight)?a.clientHeight:a.naturalHeight;if(isNaN(c)||isNaN(d))return;if(c<d){a.width=b;SP.ScriptHelpers.$q(a,d,c,b,false)}else if(c>d){a.height=b;SP.ScriptHelpers.$q(a,c,d,b,true)}else a.width=b};SP.ScriptHelpers.$q=function(a,h,d,c,i){ULSVCK:;if(d!==c){var e=1*c/d,f=Math.round((e*h-c)/2),b=f+"px";if(i){var g=!SP.ScriptHelpers.isNullOrUndefined(document.body.parentNode)&&document.body.parentNode.dir==="rtl";if(g)a.style.left=b;else a.style.right=b}else a.style.bottom=b;a.className+=" ms-positionRelative"}};function ListContext(){ULSVCK:;this.Templates={}}ListContext.prototype={BaseViewID:0,clvp:null,ctxId:0,editFormUrl:null,displayFormUrl:null,newFormUrl:null,ListTemplateType:0,CurrentItem:null,CurrentItemIdx:0,CurrentFieldSchema:null,CurrentUserId:0,ListData:null,listName:null,ListTitle:null,ListSchema:null,listUrlDir:null,view:null,RecycleBinEnabled:0,RenderView:null,RenderHeader:null,RenderBody:null,RenderFooter:null,RenderGroups:null,RenderItems:null,RenderFields:null,SiteTitle:null,OnPreRender:null,OnPostRender:null,HttpRoot:null,wpq:null,overrideSelectCommand:null,authorRenderCallbackDetail:null,forumViewState:null,imagesPath:null};SP.CScope=function(a){ULSVCK:;if(!a)throw Error.create("Must specify a valid name for the scope");try{var b=Type.parse("CScope");this.$G_0=new b([a])}catch(c){}};SP.CScope.prototype={start:function(){ULSVCK:;if(!this.$G_0)return;try{this.$G_0.Start()}catch(a){}},stop:function(){ULSVCK:;if(!this.$G_0)return;try{this.$G_0.Stop()}catch(a){}},$G_0:null};SP.PageContextInfo=function(){};SP.PageContextInfo.get_$1=function(){ULSVCK:;if(!SP.PageContextInfo.$U)SP.PageContextInfo.$U=window._spPageContextInfo;return SP.PageContextInfo.$U};SP.PageContextInfo.get_siteServerRelativeUrl=function(){ULSVCK:;return SP.PageContextInfo.get_$1().siteServerRelativeUrl};SP.PageContextInfo.get_webServerRelativeUrl=function(){ULSVCK:;return SP.PageContextInfo.get_$1().webServerRelativeUrl};SP.PageContextInfo.get_webAbsoluteUrl=function(){ULSVCK:;return SP.PageContextInfo.get_$1().webAbsoluteUrl};SP.PageContextInfo.get_serverRequestPath=function(){ULSVCK:;return SP.PageContextInfo.get_$1().serverRequestPath};SP.PageContextInfo.get_siteAbsoluteUrl=function(){ULSVCK:;return SP.PageContextInfo.get_$1().siteAbsoluteUrl};SP.PageContextInfo.get_webTitle=function(){ULSVCK:;return SP.PageContextInfo.get_$1().webTitle};SP.PageContextInfo.get_tenantAppVersion=function(){ULSVCK:;return SP.PageContextInfo.get_$1().tenantAppVersion};SP.PageContextInfo.get_webLogoUrl=function(){ULSVCK:;return SP.PageContextInfo.get_$1().webLogoUrl};SP.PageContextInfo.get_webLanguage=function(){ULSVCK:;return SP.PageContextInfo.get_$1().webLanguage};SP.PageContextInfo.get_currentLanguage=function(){ULSVCK:;return SP.PageContextInfo.get_$1().currentLanguage};SP.PageContextInfo.get_pageItemId=function(){ULSVCK:;return SP.PageContextInfo.get_$1().pageItemId};SP.PageContextInfo.get_pageListId=function(){ULSVCK:;return SP.PageContextInfo.get_$1().pageListId};SP.PageContextInfo.get_webPermMasks=function(){ULSVCK:;if(!SP.PageContextInfo.$J){var a=SP.PageContextInfo.get_$1().webPermMasks;if(!SP.ScriptUtility.isNullOrUndefined(a)&&!SP.ContextPermissions.isInstanceOfType(a)){SP.PageContextInfo.$J=new SP.ContextPermissions;SP.PageContextInfo.$J.fromJson(a)}}return SP.PageContextInfo.$J};SP.PageContextInfo.get_currentCultureName=function(){ULSVCK:;return SP.PageContextInfo.get_$1().currentCultureName};SP.PageContextInfo.get_currentUICultureName=function(){ULSVCK:;return SP.PageContextInfo.get_$1().currentUICultureName};SP.PageContextInfo.get_clientServerTimeDelta=function(){ULSVCK:;return SP.PageContextInfo.get_$1().clientServerTimeDelta};SP.PageContextInfo.prototype={get_pagePersonalizationScope:function(){ULSVCK:;return SP.PageContextInfo.get_$1().pagePersonalizationScope}};SP.ContextPermissions=function(){};SP.ContextPermissions.prototype={$Q_0:0,$R_0:0,fromJson:function(a){ULSVCK:;this.$Q_0=a.High;this.$R_0=a.Low},has:function(c){ULSVCK:;if(!c)return true;if(c===65)return(this.$Q_0&32767)===32767&&this.$R_0===65535;var a=c;a=a-1;var b=1;if(a>=0&&a<32){b=b<<a;return 0!==(this.$R_0&b)}else if(a>=32&&a<64){b=b<<a-32;return 0!==(this.$Q_0&b)}return false},hasPermissions:function(a,b){ULSVCK:;return(this.$Q_0&a)===a&&(this.$R_0&b)===b}};Type.registerNamespace("SP.UI");SP.UI.Command=function(b,a){ULSVCK:;this.$$d_$y_0=Function.createDelegate(this,this.$y_0);this.$T_0=b;this.$X_0=a;this.$O_0=true;this.$e_0=a};SP.UI.Command.prototype={$T_0:null,$X_0:null,$e_0:null,$O_0:false,$C_0:false,$I_0:null,$c_0:null,$3_0:null,get_displayName:function(){ULSVCK:;return this.$X_0},set_displayName:function(a){ULSVCK:;this.$X_0=a;return a},get_tooltip:function(){ULSVCK:;return this.$e_0},set_tooltip:function(a){ULSVCK:;this.$e_0=a;return a},get_isEnabled:function(){ULSVCK:;return this.$O_0},set_isEnabled:function(a){ULSVCK:;if(this.$O_0!==a){this.$O_0=a;!this.$C_0&&this.$1A_0()}return a},get_href:function(){ULSVCK:;return"#"},get_name:function(){ULSVCK:;return this.$T_0},get_elementIDPrefix:function(){ULSVCK:;return this.$3_0},set_elementIDPrefix:function(a){ULSVCK:;this.$3_0=a;return a},get_linkElement:function(){ULSVCK:;if(!this.$I_0)this.$I_0=$get(this.$P_0("Link"));return this.$I_0},get_$19_0:function(){ULSVCK:;if(!this.$c_0)this.$c_0=$get(this.$P_0("Root"));return this.$c_0},get_isDropDownCommand:function(){ULSVCK:;return this.$C_0},set_isDropDownCommand:function(a){ULSVCK:;this.$C_0=a;return a},attachEvents:function(){ULSVCK:;this.get_isEnabled()&&!SP.ScriptHelpers.isNullOrUndefined(this.get_linkElement())&&$addHandler(this.get_linkElement(),"click",this.$$d_$y_0)},onClick:function(){},render:function(a){ULSVCK:;this.$I_0=null;a.addCommunitiesCssClass("cmdSpaceListItem");a.addAttribute("id",this.$P_0("Root"));a.renderBeginTag("li");a.write(this.$p_0());a.renderEndTag()},$y_0:function(a){ULSVCK:;a.preventDefault();a.stopPropagation();this.onClick()},$18_0:function(a){ULSVCK:;!SP.ScriptHelpers.isNullOrUndefinedOrEmpty(this.get_tooltip())&&a.addAttribute("title",this.get_tooltip());a.addAttribute("href",this.get_href());a.addAttribute("id",this.$P_0("Link"));a.addCssClass("ms-secondaryCommandLink");a.renderBeginTag("a");a.write(this.get_displayName());a.renderEndTag()},$p_0:function(){ULSVCK:;var a=new SP.HtmlBuilder;this.$I_0=null;this.$18_0(a);return a.toString()},$1A_0:function(){ULSVCK:;this.get_$19_0().innerHTML=this.$p_0();this.attachEvents()},$P_0:function(a){ULSVCK:;return this.$3_0+"-"+this.$T_0+"-"+a}};SP.UI.CommandBar=function(){ULSVCK:;this.$2_0=[];this.$6_0="commandBar"+SP.UI.CommandBar.$a;SP.UI.CommandBar.$Z[this.$6_0]=this;SP.UI.CommandBar.$a++};SP.UI.CommandBar.onMenuItemClick=function(b,c){ULSVCK:;var a=SP.UI.CommandBar.$Z[b];if(!SP.ScriptHelpers.isNullOrUndefined(a)){var d=a.$2_0[c];d.onClick()}};SP.UI.CommandBar.prototype={$2_0:null,$M_0:null,$A_0:2,$6_0:null,$K_0:null,get_commands:function(){ULSVCK:;return this.$2_0},get_dropDownThreshold:function(){ULSVCK:;return this.$A_0},get_elementID:function(){ULSVCK:;return this.$6_0},get_overrideClass:function(){ULSVCK:;return this.$K_0},set_overrideClass:function(a){ULSVCK:;this.$K_0=a;return a},addCommand:function(a){ULSVCK:;a.$3_0=this.$6_0;Array.add(this.$2_0,a)},insertCommand:function(a,b){ULSVCK:;a.$3_0=this.$6_0;Array.insert(this.$2_0,b,a)},render:function(a){ULSVCK:;!SP.ScriptHelpers.isNullOrUndefined(this.$K_0)&&a.addCssClass(this.$K_0);a.addAttribute("id",this.$6_0);a.renderBeginTag("span");a.addCssClass("ms-noWrap");a.renderBeginTag("span");a.addCommunitiesCssClass("forumCmdList");a.renderBeginTag("ul");var c=this.$2_0.length;if(c>this.$A_0){var e=new SP.UI.CommandBar.MenuCommand(this,"menu",STSHtmlEncode(Strings.STS.L_OpenMenu_Text));this.insertCommand(e,this.$A_0)}for(var b=0;b<c&&b<=this.$A_0;b++){var d=this.$2_0[b];d.$C_0=false;d.render(a)}a.renderEndTag();a.renderEndTag();a.renderEndTag()},attachEvents:function(){ULSVCK:;for(var a=0,b=this.$2_0.length;a<b&&a<=this.$A_0;a++){var c=this.$2_0[a];c.attachEvents()}},findCommandByName:function(e){ULSVCK:;for(var b=null,a=0,d=this.$2_0.length;a<d;a++){var c=this.$2_0[a];if(c.$T_0===e){b=c;break}}return b},$t_0:function(){ULSVCK:;if(!this.$M_0){this.$M_0=SP.UI.Menu.create(this.$6_0+"-menu");for(var a=this.$A_0+1,c=this.$2_0.length;a<c;a++){var b=this.$2_0[a];b.$C_0=true;this.$M_0.addMenuItem(b.get_displayName(),"SP.UI.CommandBar.onMenuItemClick('"+this.$6_0+"',"+a+");",null,null,a,null,null)}}}};SP.UI.CommandBar.MenuCommand=function(a,b,c){ULSVCK:;SP.UI.CommandBar.MenuCommand.initializeBase(this,[b,c]);this.$W_1=a;this.$C_0=true};SP.UI.CommandBar.MenuCommand.prototype={$W_1:null,$L_1:null,onClick:function(){ULSVCK:;RegisterSod("SP.js",SP.Utilities.VersionUtility.getLayoutsPageUrl("SP.js"));var a=this;EnsureScriptFunc("SP.js","SP",function(){ULSVCK:;a.$W_1.$t_0();a.$W_1.$M_0.show(a.$L_1,false,false,-1)})},render:function(a){ULSVCK:;this.$17_1(a)},get_linkElement:function(){ULSVCK:;if(SP.ScriptHelpers.isNullOrUndefined(this.$L_1))this.$L_1=$get(this.$3_0+"-menuContainer");return this.$L_1},$17_1:function(a){ULSVCK:;var d=this.$3_0+"-menuContainer",e=this.$3_0+"-topSpan",c=this.$3_0+"-menu",b=this.$3_0+"-link";a.addCommunitiesCssClass("cmdSpaceListItem");a.addAttribute("id",this.$3_0+"-dropDownMenu");a.renderBeginTag("li");a.addAttribute("data-sp-cancelWPSelect","true");a.addAttribute("id",STSHtmlEncode(d));a.renderBeginTag("span");a.addAttribute("id",e);a.addAttribute("hoveractive","ms-menu-althov-active ms-core-form-heading");a.addAttribute("hoverinactive","ms-menu-althov");a.addAttribute("foa","MMU_GetMenuFromClient('"+STSHtmlEncode(b)+"')");a.addAttribute("onmouseover","MMU_PopMenuIfShowing(this); MMU_EcbTableMouseOverOut(this, true)");a.addAttribute("oncontextmenu","ClkElmt(this); return false;");a.addCssClass("ms-menu-althov");a.renderBeginTag("span");a.addAttribute("id",b);a.addAttribute("accesskey",STSHtmlEncode(Strings.STS.L_SelectBackColorKey_TEXT));a.addAttribute("href","javascript:;");a.addAttribute("oncontextmenu","ClkElmt(this); return false;");a.addAttribute("onfocus","MMU_EcbLinkOnFocusBlur(byid('"+c+"'), this, true);");a.addAttribute("onkeydown","MMU_EcbLinkOnKeyDown(byid('"+c+"'), MMU_GetMenuFromClientId('"+b+"'), event);");a.addAttribute("menutokenvalues","MENUCLIENTID="+b+",TEMPLATECLIENTID="+c);a.addAttribute("serverclientid",b);a.addCssClass("ms-menu-a");a.addCssClass("ms-pivotControl-overflowDot");a.renderBeginTag("a");a.addAttribute("src",GetThemedImageUrl("spcommon.png"));a.addAttribute("alt",this.get_tooltip());a.addAttribute("title",this.get_tooltip());a.addCssClass("ms-ellipsis-icon");a.addCommunitiesCssClass("cmdMoreIcon");a.renderBeginTag("img");a.renderEndTag();a.renderEndTag();a.renderEndTag();a.renderEndTag();a.renderEndTag()}};SP.UI.PagingControl=function(b){ULSVCK:;this.$$d_$14_0=Function.createDelegate(this,this.$14_0);this.$$d_$w_0=Function.createDelegate(this,this.$w_0);this.$$d_$15_0=Function.createDelegate(this,this.$15_0);this.id=b;var a=document.body.parentNode.dir==="rtl";this.$D_0=new SP.UI.PagingControl.PagingButton(1,0,"promotedlinks_prev_"+this.id,Strings.STS.L_Prev,a?"right":"left");this.$F_0=new SP.UI.PagingControl.PagingButton(1,0,"promotedlinks_next_"+this.id,Strings.STS.L_Next,a?"left":"right");this.$16_0()};SP.UI.PagingControl.prototype={id:null,$i_0:0,$Y_0:0,$D_0:null,$F_0:null,render:function(b){ULSVCK:;var a=new SP.HtmlBuilder;this.$D_0.render(a);a.addAttribute("class","ms-promlink-button-inner");a.addAttribute("id","promotedlinks_content_"+this.id);a.renderBeginTag("span");!SP.ScriptHelpers.isNullOrUndefinedOrEmpty(b)&&a.write(b);a.renderEndTag();this.$F_0.render(a);return a.toString()},postRender:function(){ULSVCK:;this.$D_0.registerHandlers(this.$$d_$15_0);this.$F_0.registerHandlers(this.$$d_$w_0);this.onWindowResized()},get_innerContent:function(){ULSVCK:;return $get("promotedlinks_content_"+this.id)},$15_0:function(a){ULSVCK:;a.preventDefault();this.$D_0.get_buttonState()===2&&this.onPrev()},$w_0:function(a){ULSVCK:;a.preventDefault();this.$F_0.get_buttonState()===2&&this.onNext()},setButtonState:function(a,b){ULSVCK:;if(a===1)this.$D_0.set_buttonState(b);else a===2&&this.$F_0.set_buttonState(b)},getButtonState:function(b){ULSVCK:;var a=0;if(b===1)a=this.$D_0.get_buttonState();else if(b===2)a=this.$F_0.get_buttonState();return a},$16_0:function(){ULSVCK:;$addHandler(window,"resize",this.$$d_$14_0)},$14_0:function(){ULSVCK:;this.$Y_0++;var b=this.$Y_0,a=this;window.setTimeout(function(){ULSVCK:;if(b!==a.$Y_0)return;var c=document.body.clientWidth;if(c!==a.$i_0){a.$i_0=c;a.onWindowResized()}},200)},onWindowResized:function(){}};SP.UI.PagingControl.ButtonIDs=function(){};SP.UI.PagingControl.ButtonIDs.prototype={prev:1,next:2};SP.UI.PagingControl.ButtonIDs.registerEnum("SP.UI.PagingControl.ButtonIDs",false);SP.UI.PagingControl.ButtonState=function(){};SP.UI.PagingControl.ButtonState.prototype={hidden:0,disabled:1,enabled:2};SP.UI.PagingControl.ButtonState.registerEnum("SP.UI.PagingControl.ButtonState",false);SP.UI.PagingControl.PagingButton=function(a,b,c,d,e){ULSVCK:;this.$$d_$x_0=Function.createDelegate(this,this.$x_0);this.$$d_$z_0=Function.createDelegate(this,this.$z_0);this.$$d_$13_0=Function.createDelegate(this,this.$13_0);this.$$d_$10_0=Function.createDelegate(this,this.$10_0);this.$$d_$11_0=Function.createDelegate(this,this.$11_0);this.$$d_$12_0=Function.createDelegate(this,this.$12_0);this.$5_0=a;this.$7_0=b;this.$9_0=c;this.$d_0=d;this.$f_0=e};SP.UI.PagingControl.PagingButton.prototype={$5_0:0,$7_0:0,$9_0:null,$d_0:null,$f_0:null,render:function(a){ULSVCK:;a.addAttribute("class",this.$g_0());a.addAttribute("id",this.$9_0);a.addAttribute("title",STSHtmlEncode(this.$d_0));a.addAttribute("href","#");a.renderBeginTag("a");a.addAttribute("class","ms-promlink-button-image");a.renderBeginTag("span");a.addAttribute("class",this.$h_0());a.addAttribute("id",this.$9_0+"img");a.addAttribute("alt",STSHtmlEncode(this.$d_0));a.addAttribute("src",GetThemedImageUrl("spcommon.png"));a.renderBeginTag("img");a.renderEndTag();a.renderEndTag();a.renderEndTag()},registerHandlers:function(b){ULSVCK:;var a=$get(this.$9_0);if(!SP.ScriptHelpers.isNullOrUndefined(a)){$addHandler(a,"click",b);$addHandler(a,"mouseover",this.$$d_$12_0);$addHandler(a,"mouseout",this.$$d_$11_0);$addHandler(a,"mousedown",this.$$d_$10_0);$addHandler(a,"mouseup",this.$$d_$13_0);$addHandler(a,"focus",this.$$d_$z_0);$addHandler(a,"blur",this.$$d_$x_0)}},$S_0:false,$z_0:function(a){ULSVCK:;this.$7_0!==2&&this.$B_0(a,1)},$x_0:function(a){ULSVCK:;this.$B_0(a,0)},$12_0:function(a){ULSVCK:;if(!this.$S_0){this.$S_0=true;this.$B_0(a,1)}},$11_0:function(a){ULSVCK:;this.$S_0=false;this.$B_0(a,0)},$10_0:function(a){ULSVCK:;this.$5_0===2&&this.$B_0(a,2)},$13_0:function(a){ULSVCK:;this.$B_0(a,this.$S_0?1:0)},$B_0:function(a,b){ULSVCK:;a.preventDefault();this.$7_0=b;this.$r_0()},get_buttonState:function(){ULSVCK:;return this.$5_0},set_buttonState:function(a){ULSVCK:;if(a!==this.$5_0){this.$5_0=a;this.$r_0()}return a},$r_0:function(){ULSVCK:;var a=$get(this.$9_0);if(null!==a){a.className=this.$g_0();a.setAttribute("aria-hidden",!this.$5_0?"true":"false")}a=$get(this.$9_0+"img");if(null!==a)a.className=this.$h_0()},$g_0:function(){ULSVCK:;var a="ms-commandLink ms-promlink-button ms-promlink-button";switch(this.$5_0){case 2:a+="-enabled";switch(this.$7_0){case 1:a+="-hover";break;case 2:a+="-pressed"}break;case 1:a+="-disabled";if(this.$7_0===1)a+="-hover";break;case 0:a+="-hidden"}return a},$h_0:function(){ULSVCK:;var a="ms-promlink-button-"+this.$f_0;if(this.$5_0===1)a+="-disabled";else if(this.$7_0===1||this.$7_0===2)a+="-hover";return a}};SP.UI.UIUtility=function(){};SP.UI.UIUtility.generateRandomElementId=function(){ULSVCK:;var b=null,c=null;do{var a=Math.random();a=a*1e5;a=Math.round(a);b="rnd"+a.toString();c=$get(b)}while(c);return b};SP.UI.UIUtility.cancelEvent=function(a){ULSVCK:;if(a){a.preventDefault();a.stopPropagation()}};SP.UI.UIUtility.clearChildNodes=function(a){ULSVCK:;if(a){for(var b=[],c=0;c<a.childNodes.length;c++)Array.add(b,a.childNodes[c]);for(var d=0;d<b.length;d++){var e=b[d];a.removeChild(e)}}};SP.UI.UIUtility.hideElement=function(a){ULSVCK:;if(a)a.style.display="none"};SP.UI.UIUtility.showElement=function(a){ULSVCK:;if(a)a.style.display=""};SP.UI.UIUtility.insertBefore=function(b,a){ULSVCK:;var c=a.parentNode;c.insertBefore(b,a)};SP.UI.UIUtility.insertAfter=function(c,a){ULSVCK:;var b=a.parentNode;if(b.lastChild===a)b.appendChild(c);else b.insertBefore(c,a.nextSibling)};SP.UI.UIUtility.removeNode=function(a){ULSVCK:;a.parentNode&&a.parentNode.removeChild(a)};SP.UI.UIUtility.calculateOffsetLeft=function(a){ULSVCK:;var b=0;while(a){b+=a.offsetLeft;a=a.offsetParent}return b};SP.UI.UIUtility.calculateOffsetTop=function(a){ULSVCK:;var b=0;while(a){b+=a.offsetTop;a=a.offsetParent}return b};SP.UI.UIUtility.createHtmlInputText=function(b){ULSVCK:;var a=document.createElement("input");a.setAttribute("type","text");b&&a.setAttribute("value",b);return a};SP.UI.UIUtility.createHtmlInputCheckbox=function(b){ULSVCK:;var a=document.createElement("input");a.setAttribute("type","checkbox");b&&a.setAttribute("defaultChecked",b);return a};SP.UI.UIUtility.setInnerText=function(a,b){ULSVCK:;setInnerText(a,b)};SP.UI.UIUtility.getInnerText=function(a){ULSVCK:;return GetInnerText(a)};SP.UI.UIUtility.isTextNode=function(a){ULSVCK:;return a.nodeType===3||a.nodeType===4};SP.UI.UIUtility.isSvgNode=function(a){ULSVCK:;return SP.UI.UIUtility.isTextNode(a)&&a.parentNode?SP.UI.UIUtility.isSvgNode(a.parentNode):a.nodeType===1&&!!a.namespaceURI&&a.namespaceURI==="http://www.w3.org/2000/svg"};SP.UI.UIUtility.isNodeOfType=function(c,b){ULSVCK:;for(var a=0;a<b.length;a++)if(c.tagName===b[a])return true;return false};SP.UI.UIUtility.$u=function(c){ULSVCK:;var b=c;while(b){var a=b.className;if(a)if(a.indexOf("ms-cui")!==-1||a.indexOf("ms-rtefocus-invalid")!==-1||a.indexOf("ms-dlgOverlay")!==-1||a.indexOf("ms-dlgFrame")!==-1||a.indexOf("ms-dlgTitle")!==-1||a.indexOf("ms-dlgTitleText")!==-1||a.indexOf("ms-siteactions")!==-1||a.indexOf("ms-core-deltaSuiteBarRight")!==-1)return true;b=b.parentNode}return c.tagName==="HTML"?true:false};SP.UI.UIUtility.focusValidOnThisNode=function(a){ULSVCK:;while(a&&SP.UI.UIUtility.isSvgNode(a))a=a.parentNode;if(!a||SP.UI.UIUtility.$b===a)return true;if(!SP.UI.UIUtility.$u(a)){SP.UI.UIUtility.$b=a;return true}else return false};Type.registerNamespace("SP.Utilities");SP.Utilities.LocUtility=function(){};SP.Utilities.LocUtility.getLocalizedCountValue=function(n,m,e){ULSVCK:;var j="",b=-1,f=[];Array.addRange(f,m.split("||"));for(var c=0,p=f.length;c<p;c++){var k=f[c];if(SP.ScriptHelpers.isNullOrEmptyString(k))continue;var g=[];Array.addRange(g,k.split(","));for(var h=0,q=g.length;h<q;h++){var d=g[h];if(SP.ScriptHelpers.isNullOrEmptyString(d))continue;if(isNaN(Number.parseInvariant(d))){var a=d.split("-");if(SP.ScriptHelpers.isNullOrUndefined(a)||a.length!==2)continue;var i,l;if(a[0]==="")i=0;else if(isNaN(Number.parseInvariant(a[0])))continue;else i=parseInt(a[0]);if(e>=i){if(a[1]===""){b=c;break}else if(isNaN(Number.parseInvariant(a[1])))continue;else l=parseInt(a[1]);if(e<=l){b=c;break}}}else{var r=parseInt(d);if(e===r){b=c;break}}}if(b!==-1)break}var o=n.split("||");if(b!==-1)j=o[b];return j};SP.Utilities.HttpUtility=function(){};SP.Utilities.HttpUtility.htmlEncode=function(a){ULSVCK:;return STSHtmlEncode(a)};SP.Utilities.HttpUtility.urlPathEncode=function(a){ULSVCK:;return escapeProperlyCore(a,true)};SP.Utilities.HttpUtility.urlKeyValueEncode=function(a){ULSVCK:;return escapeProperlyCore(a,false)};SP.Utilities.HttpUtility.ecmaScriptStringLiteralEncode=function(a){ULSVCK:;return STSScriptEncode(a)};SP.Utilities.HttpUtility.navigateTo=function(a){ULSVCK:;STSNavigate(a)};SP.Utilities.HttpUtility.appendSourceAndNavigateTo=function(a){ULSVCK:;GoToPage(a)};SP.Utilities.HttpUtility.escapeXmlText=function(a){ULSVCK:;a=a.replace(SP.Utilities.HttpUtility.$k,"&amp;");a=a.replace(SP.Utilities.HttpUtility.$o,"&#39;");a=a.replace(SP.Utilities.HttpUtility.$l,"&quot;");a=a.replace(SP.Utilities.HttpUtility.$n,"&lt;");a=a.replace(SP.Utilities.HttpUtility.$m,"&gt;");return a};SP.Utilities.HttpUtility.navigateHttpFolder=function(b,a){ULSVCK:;EnsureScriptFunc("core.js","NavigateHttpFolder",function(){ULSVCK:;NavigateHttpFolder(b,a)})};SP.Utilities.UrlBuilder=function(a){ULSVCK:;this.$E_0=a};SP.Utilities.UrlBuilder.urlCombine=function(a,b){ULSVCK:;return a.endsWith("/")?a+b:a+"/"+b};SP.Utilities.UrlBuilder.replaceOrAddQueryString=function(c,b,a){ULSVCK:;b=SP.Utilities.HttpUtility.urlKeyValueEncode(b);a=SP.Utilities.HttpUtility.urlKeyValueEncode(a);return StURLSetVar2(c,b,a)};SP.Utilities.UrlBuilder.removeQueryString=function(b,a){ULSVCK:;a=SP.Utilities.HttpUtility.urlKeyValueEncode(a);return RemoveQueryParameterFromUrl(b,a)};SP.Utilities.UrlBuilder.prototype={$E_0:null,$4_0:null,combinePath:function(a){ULSVCK:;this.$E_0=SP.Utilities.UrlBuilder.urlCombine(this.$E_0,a)},addKeyValueQueryString:function(b,a){ULSVCK:;if(!this.$4_0)this.$4_0=new Sys.StringBuilder;!this.$4_0.isEmpty()&&this.$4_0.append("&");this.$4_0.append(SP.Utilities.HttpUtility.urlKeyValueEncode(b));this.$4_0.append("=");this.$4_0.append(SP.Utilities.HttpUtility.urlKeyValueEncode(a))},get_url:function(){ULSVCK:;return SP.ScriptUtility.isNullOrEmptyString(this.$E_0)?"":!this.$4_0||this.$4_0.isEmpty()?this.$E_0:this.$E_0+"?"+this.$4_0.toString()},toString:function(){ULSVCK:;return this.get_url()}};SP.Utilities.VersionUtility=function(){};SP.Utilities.VersionUtility.get_layoutsLatestVersionRelativeUrl=function(){ULSVCK:;return"_layouts/15/"};SP.Utilities.VersionUtility.get_layoutsLatestVersionUrl=function(){ULSVCK:;return"/_layouts/15/"};SP.Utilities.VersionUtility.getLayoutsPageUrl=function(a){ULSVCK:;return SP.Utilities.UrlBuilder.urlCombine(SP.PageContextInfo.get_webServerRelativeUrl(),"_layouts/15/"+a)};SP.Utilities.VersionUtility.getImageUrl=function(a){ULSVCK:;return"/_layouts/15/images/"+a};SP.HtmlBuilder.registerClass("SP.HtmlBuilder");SP.HtmlBuilder.Attribute.registerClass("SP.HtmlBuilder.Attribute");SP.ScriptHelpers.registerClass("SP.ScriptHelpers");ListContext.registerClass("ListContext");SP.CScope.registerClass("SP.CScope");SP.PageContextInfo.registerClass("SP.PageContextInfo");SP.ContextPermissions.registerClass("SP.ContextPermissions");SP.UI.Command.registerClass("SP.UI.Command");SP.UI.CommandBar.registerClass("SP.UI.CommandBar");SP.UI.CommandBar.MenuCommand.registerClass("SP.UI.CommandBar.MenuCommand",SP.UI.Command);SP.UI.PagingControl.registerClass("SP.UI.PagingControl");SP.UI.PagingControl.PagingButton.registerClass("SP.UI.PagingControl.PagingButton");SP.UI.UIUtility.registerClass("SP.UI.UIUtility");SP.Utilities.LocUtility.registerClass("SP.Utilities.LocUtility");SP.Utilities.HttpUtility.registerClass("SP.Utilities.HttpUtility");SP.Utilities.UrlBuilder.registerClass("SP.Utilities.UrlBuilder");SP.Utilities.VersionUtility.registerClass("SP.Utilities.VersionUtility");function sp_init_initialize(){ULSVCK:;SP.PageContextInfo.$U=null;SP.PageContextInfo.$J=null;SP.UI.CommandBar.$Z={};SP.UI.CommandBar.$a=0;SP.UI.UIUtility.$b=null;SP.Utilities.HttpUtility.$k=new RegExp("&","g");SP.Utilities.HttpUtility.$o=new RegExp("'","g");SP.Utilities.HttpUtility.$l=new RegExp('"',"g");SP.Utilities.HttpUtility.$n=new RegExp("<","g");SP.Utilities.HttpUtility.$m=new RegExp(">","g");SP.Utilities.VersionUtility.layoutS_LATESTVERSION_RELATIVE_URL="_layouts/15/";SP.Utilities.VersionUtility.layoutS_LATESTVERSION_URL="/_layouts/15/"}sp_init_initialize();if(typeof SP.Guid=="undefined"){SP.Guid=function(a){ULSVCK:;a=SP.Guid._normalizeGuidString$p(a);if(SP.Guid.isValid(a))this._m_guidString$p$0=a;else{this._m_guidString$p$0=SP.Guid._emptyGuidString$p;throw Error.argument("guidText");}};SP.Guid.get_empty=function(){ULSVCK:;if(!SP.Guid._s_empty$p)SP.Guid._s_empty$p=new SP.Guid(SP.Guid._emptyGuidString$p);return SP.Guid._s_empty$p};SP.Guid.newGuid=function(){ULSVCK:;for(var a="",c=0;c<32;c++){var b=Math.floor(Math.random()*16);switch(c){case 8:a+="-";break;case 12:b=4;a+="-";break;case 16:b=b&3|8;a+="-";break;case 20:a+="-"}a+=SP.Guid._s_hexcode$p[b]}var d=new SP.Guid(a);return d};SP.Guid.isValid=function(b){ULSVCK:;var a=new RegExp("^[{|\\(]?[0-9a-fA-F]{8}[-]?([0-9a-fA-F]{4}[-]?){3}[0-9a-fA-F]{12}[\\)|}]?$");return!!a.exec(b)};SP.Guid._normalizeGuidString$p=function(b){ULSVCK:;var a;a=b.replace(" ","");a=a.replace("{","");a=a.replace("}","");a=a.toLowerCase();return a};SP.Guid.prototype={_m_guidString$p$0:null,toString:function(){ULSVCK:;if(!arguments.length)return this._m_guidString$p$0;var a=arguments[0];if(a==="B")return"{"+this._m_guidString$p$0+"}";else if(a==="D")return this._m_guidString$p$0;else throw Error.argument("format");},equals:function(a){ULSVCK:;return!a?false:this._m_guidString$p$0===a.toString()},ToSerialized:function(){ULSVCK:;return this.toString()}};SP.Guid.registerClass("SP.Guid");SP.Guid._s_hexcode$p=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];SP.Guid._emptyGuidString$p="00000000-0000-0000-0000-000000000000";SP.Guid._s_empty$p=null}if(typeof SP.ScriptUtility=="undefined"){SP.ScriptUtility=function(){};SP.ScriptUtility.isNullOrEmptyString=function(a){ULSVCK:;var b=null;return a===b||typeof a==="undefined"||!a.length};SP.ScriptUtility.isNullOrUndefined=function(a){ULSVCK:;var b=null;return a===b||typeof a==="undefined"};SP.ScriptUtility.isUndefined=function(a){ULSVCK:;return typeof a==="undefined"};SP.ScriptUtility.truncateToInt=function(a){ULSVCK:;return a>0?Math.floor(a):Math.ceil(a)};SP.ScriptUtility.registerClass("SP.ScriptUtility");SP.ScriptUtility.emptyString=""}if(typeof SP.PermissionKind=="undefined"){SP.PermissionKind=function(){};SP.PermissionKind.prototype={emptyMask:0,viewListItems:1,addListItems:2,editListItems:3,deleteListItems:4,approveItems:5,openItems:6,viewVersions:7,deleteVersions:8,cancelCheckout:9,managePersonalViews:10,manageLists:12,viewFormPages:13,anonymousSearchAccessList:14,open:17,viewPages:18,addAndCustomizePages:19,applyThemeAndBorder:20,applyStyleSheets:21,viewUsageData:22,createSSCSite:23,manageSubwebs:24,createGroups:25,managePermissions:26,browseDirectories:27,browseUserInfo:28,addDelPrivateWebParts:29,updatePersonalWebParts:30,manageWeb:31,anonymousSearchAccessWebLists:32,useClientIntegration:37,useRemoteAPIs:38,manageAlerts:39,createAlerts:40,editMyUserInfo:41,enumeratePermissions:63,fullMask:65};SP.PermissionKind.registerEnum("SP.PermissionKind",false)}typeof RegisterModuleInit=="function"&&RegisterModuleInit("sp.init.js",sp_init_initialize);typeof Sys!="undefined"&&Sys&&Sys.Application&&Sys.Application.notifyScriptLoaded();NotifyScriptLoadedAndExecuteWaitingJobs("sp.init.js");