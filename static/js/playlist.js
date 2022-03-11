!function(){"use strict";var e,t={6081:function(e,t,n){var a=n(2541),i=(n(2322),n(9268),n(9006),n(5090),n(3233),n(9808),n(4458),n(2004),n(8407),n(6394),n(8288),n(5677),n(2129),n(4655),n(288),n(3675),n(5101),n(3080),n(5466)),l=n(541),r=n(3613),o=n(2546),s=n(8578),u=n(4234),c=n(7642),d=n(2819),p=n(473),f=n(3074),y=n.n(f),m=n(7777);function g(e){return i.createElement(m.s,{items:e.media,playlistId:e.playlistId,hidePlaylistOptions:e.hidePlaylistOptions,singleLinkContent:!0,hideDate:!0,hideViews:!0,hidePlaylistOrderNumber:!1,horizontalItemsOrientation:!0,itemsCountCallback:e.itemsCountCallback,itemsLoadCallback:e.itemsLoadCallback,pageItems:99999,inPlaylistPage:!0})}function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function P(e,t){return!t||"object"!==v(t)&&"function"!=typeof t?S(e):t}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}g.propTypes={media:y().array.isRequired,playlistId:y().string.isRequired,itemsCountCallback:y().func,itemsLoadCallback:y().func,hidePlaylistOptions:y().bool},g.defaultProps={hidePlaylistOptions:!0};var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(u,e);var t,n,a,o,s=(a=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=E(a);if(o){var n=E(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return P(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=s.call(this,e)).state={media:e.media},t.containerRef=i.createRef(),t.onItemsLoad=t.onItemsLoad.bind(S(t)),t}return t=u,(n=[{key:"onItemsLoad",value:function(){if(this.props.loggedinUserPlaylist){var e=this.containerRef.current.querySelector(".items-list");if(e){var t=this.props.id,n=function(e){return this.state.media[e]}.bind(this),a=function(e){for(var t=this,n=[],a=0;a<e.length;)n.push(this.state.media[e[a]]),a+=1;this.setState({media:n},(function(){l.PlaylistPageActions.reorderedMediaInPlaylist(t.state.media)}))}.bind(this);d.ZP.create(e,{onStart:function(t){e.classList.add("on-dragging")},onEnd:function(l){for(var s,u,c,d=[],f=e.querySelectorAll(".item-order-number div div"),y=0;y<f.length;)(u=y+1)!==(s=parseInt(f[y].getAttribute("data-order"),10))&&(c=n(s-1).friendly_token,(0,p.putRequest)(r.ApiUrlContext._currentValue.playlists+"/"+t,{type:"ordering",ordering:u,media_friendly_token:c},{headers:{"X-CSRFToken":(0,p.csrfToken)()}},!1,i,o)),d.push(s-1),f[y].setAttribute("data-order",u),f[y].innerHTML=u,y+=1;e.classList.remove("on-dragging"),a(d)}})}}function i(e){}function o(e){}}},{key:"render",value:function(){return i.createElement("div",{ref:this.containerRef,className:"playlist-videos-list"+(this.props.loggedinUserPlaylist?" draggable":"")},this.state.media.length?i.createElement(g,{itemsLoadCallback:this.onItemsLoad,playlistId:this.props.id,media:this.state.media,hidePlaylistOptions:!this.props.loggedinUserPlaylist}):null)}}])&&h(t.prototype,n),u}(i.PureComponent),_=n(8204);function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function M(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function I(e,t){return!t||"object"!==w(t)&&"function"!=typeof t?O(e):t}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function A(e){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function N(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,i,l=[],r=!0,o=!1;try{for(n=n.call(e);!(r=(a=n.next()).done)&&(l.push(a.value),!t||l.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==n.return||n.return()}finally{if(o)throw i}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return R(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?R(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function R(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}if(window.MediaCMS.site.devEnv){var L=function(){var e=null,t=null,n=window.location.search.split("?")[1];return n&&n.split("&").forEach((function(n){0===n.indexOf("m=")?e=n.split("m=")[1]:0===n.indexOf("pl=")&&(t=n.split("pl=")[1])})),{mediaId:e,playlistId:t}}().playlistId;L&&(window.MediaCMS.playlistId=L)}function T(e){var t=e.media[0].url;return window.MediaCMS.site.devEnv&&-1<t.indexOf("view?")&&(t="/media.html?"+t.split("view?")[1]),t+="&pl="+e.id,e.media&&e.media.length?i.createElement("a",{href:t,title:""},e.children):i.createElement("span",null,e.children)}function j(e){var t=N((0,i.useState)(null),2),n=t[0],a=t[1];return(0,i.useEffect)((function(){if(e.thumb&&"string"==typeof e.thumb){var t=e.thumb.trim();a(""!==t?t:null)}else a(null)}),[e.thumb]),i.createElement("div",{className:"playlist-thumb"+(n?"":" no-thumb"),style:{backgroundImage:'url("'+n+'")'}},i.createElement(T,{id:e.id,media:e.media},i.createElement("span",null,n?i.createElement("img",{src:n,alt:""}):null,i.createElement("span",{className:"play-all"},i.createElement("span",null,i.createElement("span",null,i.createElement("i",{className:"material-icons"},"play_arrow"),i.createElement("span",{className:"play-all-label"},"PLAY ALL")))))))}function U(e){return i.createElement("div",{className:"playlist-title"},i.createElement("h1",null,e.title))}function x(e){return i.createElement("div",{className:"playlist-meta"},i.createElement("div",{className:"playlist-videos-number"},e.totalItems," media"),e.dateLabel?i.createElement("div",{className:"playlist-last-update"},e.dateLabel):null)}function V(e){var t,n,a=N((0,o.usePopup)(),3),r=a[0],s=a[1],c=a[2],d=N((0,i.useState)("main"),2),p=d[0],f=d[1];return i.createElement("div",{className:"playlist-options-wrap"+("main"===p?" playlist-options-main":"")},i.createElement(c,{contentRef:r},i.createElement(u.CircleIconButton,null,i.createElement(u.MaterialIcon,{type:"more_horiz"}))),i.createElement(s,{contentRef:r},i.createElement(u.NavigationContentApp,{pageChangeCallback:f,initPage:"main",focusFirstItemOnPageChange:!1,pages:(t=function(){l.PlaylistPageActions.removePlaylist(),r.current.toggle()},n=function(){r.current.toggle()},{main:i.createElement(u.PopupMain,null,i.createElement(u.NavigationMenuList,{items:[{itemType:"open-subpage",text:"Delete",icon:"delete",buttonAttr:{className:"change-page","data-page-id":"proceedPlaylistRemovalPopup"}}]})),proceedPlaylistRemovalPopup:i.createElement(u.PopupMain,null,i.createElement("div",{className:"popup-message"},i.createElement("span",{className:"popup-message-title"},"Playlist removal"),i.createElement("span",{className:"popup-message-main"},"You're willing to remove playlist permanently?")),i.createElement("hr",null),i.createElement("span",{className:"popup-message-bottom"},i.createElement("button",{className:"button-link cancel-playlist-removal",onClick:n},"CANCEL"),i.createElement("button",{className:"button-link proceed-playlist-removal",onClick:t},"PROCEED")))}),pageChangeSelector:".change-page",pageIdSelectorAttr:"data-page-id"})))}function q(e){var t=N((0,o.usePopup)(),3),n=t[0],a=t[1],d=t[2];function p(){n.current.toggle()}function f(e){setTimeout((function(){l.PageActions.addNotification("Playlist updated","playlistUpdateCompleted"),p()}),100)}function y(){setTimeout((function(){l.PageActions.addNotification("Playlist update failed","playlistUpdateFailed"),p()}),100)}function m(e){setTimeout((function(){l.PageActions.addNotification("Playlist removed. Redirecting...","playlistDelete"),setTimeout((function(){window.location.href=r.MemberContext._currentValue.pages.playlists}),2e3)}),100)}function g(e){setTimeout((function(){l.PageActions.addNotification("Playlist removal failed","playlistDeleteFail")}),100)}return(0,i.useEffect)((function(){return s.PlaylistPageStore.on("playlist_update_completed",f),s.PlaylistPageStore.on("playlist_update_failed",y),s.PlaylistPageStore.on("playlist_removal_completed",m),s.PlaylistPageStore.on("playlist_removal_failed",g),function(){s.PlaylistPageStore.removeListener("playlist_update_completed",f),s.PlaylistPageStore.removeListener("playlist_update_failed",y),s.PlaylistPageStore.removeListener("playlist_removal_completed",m),s.PlaylistPageStore.removeListener("playlist_removal_failed",g)}}),[]),i.createElement("div",{className:"edit-playlist"},i.createElement(d,{contentRef:n},i.createElement(u.CircleIconButton,null,i.createElement(u.MaterialIcon,{type:"edit"}),i.createElement("span",null,"EDIT"))),i.createElement(a,{contentRef:n},i.createElement("div",{className:"popup-fullscreen"},i.createElement(u.PopupMain,null,i.createElement("span",{className:"popup-fullscreen-overlay"}),i.createElement("div",{className:"edit-playlist-form-wrap"},i.createElement("div",{className:"edit-playlist-popup-title"},"Edit playlist",i.createElement(u.CircleIconButton,{type:"button",onClick:p},i.createElement(u.MaterialIcon,{type:"close"}))),i.createElement(c.A,{date:(new Date).getTime(),id:s.PlaylistPageStore.get("playlistId"),onCancel:p,onPlaylistSave:function(){}}))))))}function D(e){return e.loggedinUserPlaylist?i.createElement("div",{className:"playlist-actions"},e.loggedinUserPlaylist?i.createElement(V,null):null):null}function F(e){return i.createElement("div",{className:"playlist-author"},i.createElement("div",null,i.createElement("div",{className:"playlist-author-thumb"},i.createElement("a",{href:e.link,title:e.name},e.thumb?i.createElement("span",{style:{backgroundImage:"url("+e.thumb+")"}},i.createElement("img",{src:e.thumb,alt:""})):i.createElement("span",null,i.createElement(u.MaterialIcon,{type:"person"})))),i.createElement("div",{className:"playlist-author-name"},i.createElement("a",{href:e.link,title:e.name},e.name)),e.loggedinUserPlaylist?i.createElement(q,null):null))}var Q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(u,e);var t,n,a,r,o=(a=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=A(a);if(r){var n=A(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return I(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=o.call(this,e,"playlist-page")).state={thumb:s.PlaylistPageStore.get("thumb"),media:s.PlaylistPageStore.get("playlist-media"),savedPlaylist:s.PlaylistPageStore.get("saved-playlist"),loggedinUserPlaylist:s.PlaylistPageStore.get("logged-in-user-playlist"),title:s.PlaylistPageStore.get("title"),description:s.PlaylistPageStore.get("description")},t.onLoadPlaylistData=t.onLoadPlaylistData.bind(O(t)),s.PlaylistPageStore.on("loaded_playlist_data",t.onLoadPlaylistData),t.onMediaRemovedFromPlaylist=t.onMediaRemovedFromPlaylist.bind(O(t)),s.PlaylistPageStore.on("removed_media_from_playlist",t.onMediaRemovedFromPlaylist),t.onMediaReorderedInPlaylist=t.onMediaReorderedInPlaylist.bind(O(t)),s.PlaylistPageStore.on("reordered_media_in_playlist",t.onMediaReorderedInPlaylist),t.onCompletePlaylistUpdate=t.onCompletePlaylistUpdate.bind(O(t)),s.PlaylistPageStore.on("playlist_update_completed",t.onCompletePlaylistUpdate),t}return t=u,(n=[{key:"onCompletePlaylistUpdate",value:function(){this.setState({thumb:s.PlaylistPageStore.get("thumb"),title:s.PlaylistPageStore.get("title"),description:s.PlaylistPageStore.get("description")})}},{key:"onLoadPlaylistData",value:function(){this.setState({thumb:s.PlaylistPageStore.get("thumb"),title:s.PlaylistPageStore.get("title"),description:s.PlaylistPageStore.get("description"),media:s.PlaylistPageStore.get("playlist-media"),savedPlaylist:s.PlaylistPageStore.get("saved-playlist"),loggedinUserPlaylist:s.PlaylistPageStore.get("logged-in-user-playlist")})}},{key:"componentDidMount",value:function(){l.PlaylistPageActions.loadPlaylistData()}},{key:"onMediaRemovedFromPlaylist",value:function(){this.setState({media:s.PlaylistPageStore.get("playlist-media"),thumb:s.PlaylistPageStore.get("thumb")})}},{key:"onMediaReorderedInPlaylist",value:function(){this.setState({media:s.PlaylistPageStore.get("playlist-media"),thumb:s.PlaylistPageStore.get("thumb")})}},{key:"pageContent",value:function(){var e=s.PlaylistPageStore.get("playlistId");return e?[i.createElement("div",{key:"playlistDetails",className:"playlist-details"},i.createElement(j,{id:e,thumb:this.state.thumb,media:this.state.media}),i.createElement(U,{title:this.state.title}),i.createElement(x,{totalItems:s.PlaylistPageStore.get("total-items"),dateLabel:s.PlaylistPageStore.get("date-label"),viewsCount:s.PlaylistPageStore.get("views-count")}),i.createElement(D,{loggedinUserPlaylist:this.state.loggedinUserPlaylist,savedPlaylist:this.state.savedPlaylist}),this.state.description?i.createElement("div",{className:"playlist-description"},this.state.description):null,i.createElement(F,{name:s.PlaylistPageStore.get("author-name"),link:s.PlaylistPageStore.get("author-link"),thumb:s.PlaylistPageStore.get("author-thumb"),loggedinUserPlaylist:this.state.loggedinUserPlaylist})),i.createElement(k,{key:"playlistMediaList_"+this.state.media.length,id:e,media:this.state.media,loggedinUserPlaylist:this.state.loggedinUserPlaylist})]:null}}])&&M(t.prototype,n),u}(_.T);(0,a.X)("page-playlist",Q)},4234:function(e,t,n){n.d(t,{CircleIconButton:function(){return a.M},MaterialIcon:function(){return i.O},NavigationContentApp:function(){return l.o},NavigationMenuList:function(){return r.S},Notifications:function(){return o.T},PopupMain:function(){return s.W8},PopupTop:function(){return s.HF},SpinnerLoader:function(){return u.i},UserThumbnail:function(){return c.q}});var a=n(7714),i=(n(7446),n(2915),n(2299)),l=n(2917),r=n(5671),o=n(2436),s=(n(5517),n(940)),u=n(6309),c=n(6142)},8727:function(e,t,n){n.d(t,{Y7:function(){return c}}),n(2322),n(3296),n(6394),n(4669),n(717);var a=n(5466),i=n(3074),l=n.n(i),r=n(137),o=n.n(r),s=n(8009),u=n.n(s);function c(e){var t=(0,a.useRef)(null),n=null,i={playerVolume:e.playerVolume,playerSoundMuted:e.playerSoundMuted,videoQuality:e.videoQuality,videoPlaybackSpeed:e.videoPlaybackSpeed,inTheaterMode:e.inTheaterMode};function l(){void 0!==e.onClickNextCallback&&e.onClickNextCallback()}function r(){void 0!==e.onClickPreviousCallback&&e.onClickPreviousCallback()}function s(t){i.playerVolume!==t.volume&&(i.playerVolume=t.volume),i.playerSoundMuted!==t.soundMuted&&(i.playerSoundMuted=t.soundMuted),i.videoQuality!==t.quality&&(i.videoQuality=t.quality),i.videoPlaybackSpeed!==t.playbackSpeed&&(i.videoPlaybackSpeed=t.playbackSpeed),i.inTheaterMode!==t.theaterMode&&(i.inTheaterMode=t.theaterMode),void 0!==e.onStateUpdateCallback&&e.onStateUpdateCallback(t)}function c(){if(null===n&&null===e.errorMessage&&(e.inEmbed||(window.removeEventListener("focus",c),document.removeEventListener("visibilitychange",c)),t.current)){e.inEmbed||t.current.focus();var a,d,p,f={on:!1};if(void 0!==e.subtitlesInfo&&null!==e.subtitlesInfo&&e.subtitlesInfo.length){f.languages=[];for(var y=0;y<e.subtitlesInfo.length;)void 0!==e.subtitlesInfo[y].src&&void 0!==e.subtitlesInfo[y].srclang&&void 0!==e.subtitlesInfo[y].label&&f.languages.push({src:(a=e.subtitlesInfo[y].src,d=e.siteUrl,p=void 0,p=o()(a,{}),""!==p.origin&&"null"!==p.origin&&p.origin||(p=o()(d+"/"+a.replace(/^\//g,""),{})),p.toString()),srclang:e.subtitlesInfo[y].srclang,label:e.subtitlesInfo[y].label}),y+=1;f.languages.length&&(f.on=!0)}n=new(u())(t.current,{enabledTouchControls:!0,sources:e.sources,poster:e.poster,autoplay:e.enableAutoplay,bigPlayButton:!0,controlBar:{theaterMode:e.hasTheaterMode,pictureInPicture:!1,next:!!e.hasNextLink,previous:!!e.hasPreviousLink},subtitles:f,cornerLayers:e.cornerLayers,videoPreviewThumb:e.previewSprite},{volume:i.playerVolume,soundMuted:i.playerSoundMuted,theaterMode:i.inTheaterMode,theSelectedQuality:void 0,theSelectedPlaybackSpeed:i.videoPlaybackSpeed||1},e.info,[.25,.5,.75,1,1.25,1.5,1.75,2],s,l,r),window.MNS_videoPlayer=n,void 0!==e.onPlayerInitCallback&&e.onPlayerInitCallback(n,t.current)}}return i.playerVolume=null===i.playerVolume?1:Math.max(Math.min(Number(i.playerVolume),1),0),i.playerSoundMuted=null!==i.playerSoundMuted&&i.playerSoundMuted,i.videoQuality=null!==i.videoQuality?i.videoQuality:"Auto",i.videoPlaybackSpeed=null!==i.videoPlaybackSpeed&&i.videoPlaybackSpeed,i.inTheaterMode=null!==i.inTheaterMode&&i.inTheaterMode,(0,a.useEffect)((function(){return e.inEmbed||document.hasFocus()||"visible"===document.visibilityState?c():(window.addEventListener("focus",c),document.addEventListener("visibilitychange",c)),function(){null!==n&&(videojs(t.current).dispose(),n=null),void 0!==e.onUnmountCallback&&e.onUnmountCallback()}}),[]),null===e.errorMessage?a.createElement("video",{ref:t,className:"video-js vjs-mediacms native-dimensions"}):a.createElement("div",{className:"error-container"},a.createElement("div",{className:"error-container-inner"},a.createElement("span",{className:"icon-wrap"},a.createElement("i",{className:"material-icons"},"error_outline")),a.createElement("span",{className:"msg-wrap"},e.errorMessage)))}l().string.isRequired,c.propTypes={playerVolume:l().string,playerSoundMuted:l().bool,videoQuality:l().string,videoPlaybackSpeed:l().number,inTheaterMode:l().bool,siteId:l().string.isRequired,siteUrl:l().string.isRequired,errorMessage:l().string,cornerLayers:l().object,subtitlesInfo:l().array.isRequired,inEmbed:l().bool.isRequired,sources:l().array.isRequired,info:l().object.isRequired,enableAutoplay:l().bool.isRequired,hasTheaterMode:l().bool.isRequired,hasNextLink:l().bool.isRequired,hasPreviousLink:l().bool.isRequired,poster:l().string,previewSprite:l().object,onClickPreviousCallback:l().func,onClickNextCallback:l().func,onPlayerInitCallback:l().func,onStateUpdateCallback:l().func,onUnmountCallback:l().func},c.defaultProps={errorMessage:null,cornerLayers:{}}},160:function(e,t,n){n.d(t,{R:function(){return g}}),n(2322),n(9268),n(9751),n(2004),n(8407),n(6394),n(8288),n(5677),n(2129),n(4655),n(288),n(4458),n(3675);var a=n(5466),i=n(3074),l=n.n(i),r=n(137),o=n.n(r),s=n(3613),u=n(473),c=n(9722),d=n(9905),p=n(8727),f=n(1283);function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,i,l=[],r=!0,o=!1;try{for(n=n.call(e);!(r=(a=n.next()).done)&&(l.push(a.value),!t||l.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==n.return||n.return()}finally{if(o)throw i}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function g(e){var t=(0,a.useContext)(s.ApiUrlContext),n=(0,a.useContext)(s.SiteContext),i=y((0,a.useState)(null),2),l=(i[0],i[1]),r=y((0,a.useState)(null),2),m=r[0],g=r[1],v=y((0,a.useState)(null),2),h=v[0],b=v[1],P=y((0,a.useState)([]),2),S=P[0],E=P[1],k=y((0,a.useState)({}),2),_=k[0],w=k[1],M=y((0,a.useState)([]),2),C=M[0],I=M[1],O=y((0,a.useState)({}),2),A=O[0],N=O[1],R={videoQuality:new c.BrowserCache(n.id,86400).get("video-quality")};R.videoQuality=null!==R.videoQuality?R.videoQuality:"Auto";var L,T=null,j=null,U=null,x=((L=new(o())(e.pageLink).query)?((L=L.substring(1)).split("&"),L=L.length?L.split("="):[]):L=[],L);if(x.length)for(var V=0;V<x.length;)"m"===x[V]&&(U=x[V+1]),V+=2;function q(e){if(void 0!==e&&e&&void 0!==e.data&&e.data){var t,a;j=e.data;var i=[],r=null,o=(0,d.RA)(j.encodings_info,j.hls_info),s=null,c=null;if("string"==typeof j.poster_url?r=(0,u.formatInnerLink)(j.poster_url,n.url):"string"==typeof j.thumbnail_url&&(r=(0,u.formatInnerLink)(j.thumbnail_url,n.url)),Object.keys(o).length){var p=(0,d.KC)(),y=R.videoQuality;(null===y||"Auto"===y&&void 0===o.Auto)&&(y=720);var m=(0,d.$e)(y,o);for("Auto"===y&&void 0!==o.Auto&&i.push({src:o.Auto.url[0]}),a=0;a<o[m].format.length;){if("hls"===o[m].format[a]){i.push({src:o[m].url[a]});break}a+=1}for(a in j.encodings_info[m])j.encodings_info[m].hasOwnProperty(a)&&p.support[a]&&(t=j.encodings_info[m][a].url)&&(t=(0,u.formatInnerLink)(t,n.url),i.push({src:t,encodings_status:j.encodings_info[m][a].status}))}else o=null;if(1===i.length&&"running"===i[0].encodings_status&&(s="encodingRunning",c="Media encoding is currently running. Try again in few minutes."),null!==s)switch(s){case"encodingRunning":case"encodingPending":case"encodingFailed":break;default:f.warn("VIDEO DEBUG:","Video files don't exist")}l(s),g(c),b(r),E(i),w(o),I(j.subtitles_info),N(j.sprites_url?{url:(0,u.formatInnerLink)(j.sprites_url,n.url),frame:{width:160,height:90,seconds:10}}:null);var v=document.querySelector(".feat-first-item .item .item-description > div");v&&(v.innerHTML=j.summary)}}function D(e){if(void 0!==e&&void 0!==e.type)switch(e.type){case"network":case"private":case"unavailable":l(e.type),g(void 0!==e.message?e.message:"Αn error occurred while loading the media's data")}}return null!==U&&(T=t.media+"/"+U),(0,a.useEffect)((function(){null!==T&&(0,u.getRequest)(T,!1,q,D)}),[]),S.length?a.createElement("div",{className:"video-player"},a.createElement(p.Y7,{siteId:n.id,siteUrl:n.url,info:_,sources:S,poster:h,previewSprite:A,subtitlesInfo:C,enableAutoplay:!1,inEmbed:!1,hasTheaterMode:!1,hasNextLink:!1,hasPreviousLink:!1,errorMessage:m})):null}g.propTypes={pageLink:l().string.isRequired}},541:function(e,t,n){var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n),Object.defineProperty(e,a,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return i(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.VideoViewerActions=t.SearchFieldActions=t.ProfilePageActions=t.PlaylistViewActions=t.PlaylistPageActions=t.PageActions=t.MediaPageActions=void 0,t.MediaPageActions=l(n(979)),t.PageActions=l(n(6613)),t.PlaylistPageActions=l(n(5880)),t.PlaylistViewActions=l(n(9660)),t.ProfilePageActions=l(n(2472)),t.SearchFieldActions=l(n(2600)),t.VideoViewerActions=l(n(5464))},8578:function(e,t,n){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.VideoViewerStore=t.SearchFieldStore=t.ProfilePageStore=t.PlaylistViewStore=t.PlaylistPageStore=t.PageStore=t.MediaPageStore=void 0;var i=a(n(337));t.MediaPageStore=i.default;var l=a(n(7959));t.PageStore=l.default;var r=a(n(1566));t.PlaylistPageStore=r.default;var o=a(n(1439));t.PlaylistViewStore=o.default;var s=a(n(8024));t.ProfilePageStore=s.default;var u=a(n(7359));t.SearchFieldStore=u.default;var c=a(n(5641));t.VideoViewerStore=c.default}},n={};function a(e){var i=n[e];if(void 0!==i)return i.exports;var l=n[e]={exports:{}};return t[e].call(l.exports,l,l.exports,a),l.exports}a.m=t,e=[],a.O=function(t,n,i,l){if(!n){var r=1/0;for(u=0;u<e.length;u++){n=e[u][0],i=e[u][1],l=e[u][2];for(var o=!0,s=0;s<n.length;s++)(!1&l||r>=l)&&Object.keys(a.O).every((function(e){return a.O[e](n[s])}))?n.splice(s--,1):(o=!1,l<r&&(r=l));o&&(e.splice(u--,1),t=i())}return t}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[n,i,l]},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,{a:t}),t},a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.j=449,function(){var e={449:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,l,r=n[0],o=n[1],s=n[2],u=0;for(i in o)a.o(o,i)&&(a.m[i]=o[i]);if(s)var c=s(a);for(t&&t(n);u<r.length;u++)l=r[u],a.o(e,l)&&e[l]&&e[l][0](),e[r[u]]=0;return a.O(c)},n=self.webpackChunkmediacms_frontend=self.webpackChunkmediacms_frontend||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var i=a.O(void 0,[431],(function(){return a(6081)}));i=a.O(i)}();