//download.js v4.21, by dandavis; 2008-2018. [MIT] see http://danml.com/download.html for tests/usage
;(function(root,factory){typeof define=="function"&&define.amd?define([],factory):typeof exports=="object"?module.exports=factory():root.download=factory()})(this,function(){return function download(data,strFileName,strMimeType){var self=window,defaultMime="application/octet-stream",mimeType=strMimeType||defaultMime,payload=data,url=!strFileName&&!strMimeType&&payload,anchor=document.createElement("a"),toString=function(a){return String(a)},myBlob=self.Blob||self.MozBlob||self.WebKitBlob||toString,fileName=strFileName||"download",blob,reader;myBlob=myBlob.call?myBlob.bind(self):Blob,String(this)==="true"&&(payload=[payload,mimeType],mimeType=payload[0],payload=payload[1]);if(url&&url.length<2048){fileName=url.split("/").pop().split("?")[0],anchor.href=url;if(anchor.href.indexOf(url)!==-1){var ajax=new XMLHttpRequest;return ajax.open("GET",url,!0),ajax.responseType="blob",ajax.onload=function(e){download(e.target.response,fileName,defaultMime)},setTimeout(function(){ajax.send()},0),ajax}}if(/^data:([\w+-]+\/[\w+.-]+)?[,;]/.test(payload)){if(!(payload.length>2096103.424&&myBlob!==toString))return navigator.msSaveBlob?navigator.msSaveBlob(dataUrlToBlob(payload),fileName):saver(payload);payload=dataUrlToBlob(payload),mimeType=payload.type||defaultMime}else if(/([\x80-\xff])/.test(payload)){var i=0,tempUiArr=new Uint8Array(payload.length),mx=tempUiArr.length;for(i;i<mx;++i)tempUiArr[i]=payload.charCodeAt(i);payload=new myBlob([tempUiArr],{type:mimeType})}blob=payload instanceof myBlob?payload:new myBlob([payload],{type:mimeType});function dataUrlToBlob(strUrl){var parts=strUrl.split(/[:;,]/),type=parts[1],indexDecoder=strUrl.indexOf("charset")>0?3:2,decoder=parts[indexDecoder]=="base64"?atob:decodeURIComponent,binData=decoder(parts.pop()),mx=binData.length,i=0,uiArr=new Uint8Array(mx);for(i;i<mx;++i)uiArr[i]=binData.charCodeAt(i);return new myBlob([uiArr],{type:type})}function saver(url,winMode){if("download"in anchor)return anchor.href=url,anchor.setAttribute("download",fileName),anchor.className="download-js-link",anchor.innerHTML="downloading...",anchor.style.display="none",anchor.addEventListener("click",function(e){e.stopPropagation(),this.removeEventListener("click",arguments.callee)}),document.body.appendChild(anchor),setTimeout(function(){anchor.click(),document.body.removeChild(anchor),winMode===!0&&setTimeout(function(){self.URL.revokeObjectURL(anchor.href)},250)},66),!0;if(/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent))return/^data:/.test(url)&&(url="data:"+url.replace(/^data:([\w\/\-\+]+)/,defaultMime)),window.open(url)||confirm("Displaying New Document\n\nUse Save As... to download, then click back to return to this page.")&&(location.href=url),!0;var f=document.createElement("iframe");document.body.appendChild(f),!winMode&&/^data:/.test(url)&&(url="data:"+url.replace(/^data:([\w\/\-\+]+)/,defaultMime)),f.src=url,setTimeout(function(){document.body.removeChild(f)},333)}if(navigator.msSaveBlob)return navigator.msSaveBlob(blob,fileName);if(self.URL)saver(self.URL.createObjectURL(blob),!0);else{if(typeof blob=="string"||blob.constructor===toString)try{return saver("data:"+mimeType+";base64,"+self.btoa(blob))}catch(y){return saver("data:"+mimeType+","+encodeURIComponent(blob))}reader=new FileReader,reader.onload=function(e){saver(this.result)},reader.readAsDataURL(blob)}return!0}});

//domtoimage
!function(e){"use strict";var s=function(){return{escape:function(e){return e.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1")},parseExtension:n,mimeType:function(e){var t=n(e).toLowerCase();return function(){var e="application/font-woff",t="image/jpeg";return{woff:e,woff2:e,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:t,jpeg:t,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"}}()[t]||""},dataAsUrl:function(e,t){return"data:"+t+";base64,"+e},isDataUrl:function(e){return-1!==e.search(/^(data:)/)},canvasToBlob:function(t){return t.toBlob?new Promise(function(e){t.toBlob(e)}):function(i){return new Promise(function(e){for(var t=window.atob(i.toDataURL().split(",")[1]),n=t.length,r=new Uint8Array(n),o=0;o<n;o++)r[o]=t.charCodeAt(o);e(new Blob([r],{type:"image/png"}))})}(t)},resolveUrl:function(e,t){var n=document.implementation.createHTMLDocument(),r=n.createElement("base");n.head.appendChild(r);var o=n.createElement("a");return n.body.appendChild(o),r.href=t,o.href=e,o.href},getAndEncode:function(i){u.impl.options.cacheBust&&(i+=(/\?/.test(i)?"&":"?")+(new Date).getTime());return new Promise(function(n){var e,r=new XMLHttpRequest;if(r.onreadystatechange=function(){if(4!==r.readyState)return;if(200!==r.status)return void(e?n(e):o("cannot fetch resource: "+i+", status: "+r.status));var t=new FileReader;t.onloadend=function(){var e=t.result.split(/,/)[1];n(e)},t.readAsDataURL(r.response)},r.ontimeout=function(){e?n(e):o("timeout of 30000ms occured while fetching resource: "+i)},r.responseType="blob",r.timeout=3e4,u.impl.options.useCredentials&&(r.withCredentials=!0),r.open("GET",i,!0),r.send(),u.impl.options.imagePlaceholder){var t=u.impl.options.imagePlaceholder.split(/,/);t&&t[1]&&(e=t[1])}function o(e){console.error(e),n("")}})},uid:function(){var e=0;return function(){return"u"+("0000"+(Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)+e++}}(),delay:function(n){return function(t){return new Promise(function(e){setTimeout(function(){e(t)},n)})}},asArray:function(e){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t},escapeXhtml:function(e){return e.replace(/#/g,"%23").replace(/\n/g,"%0A")},makeImage:function(r){return"data:,"===r?Promise.resolve():new Promise(function(e,t){var n=new Image;u.impl.options.useCredentials&&(n.crossOrigin="use-credentials"),n.onload=function(){e(n)},n.onerror=t,n.src=r})},width:function(e){var t=r(e,"border-left-width"),n=r(e,"border-right-width");return e.scrollWidth+t+n},height:function(e){var t=r(e,"border-top-width"),n=r(e,"border-bottom-width");return e.scrollHeight+t+n}};function n(e){var t=/\.([^\.\/]*?)(\?|$)/g.exec(e);return t?t[1]:""}function r(e,t){var n=window.getComputedStyle(e).getPropertyValue(t);return parseFloat(n.replace("px",""))}}(),o=function(){var r=/url\(['"]?([^'"]+?)['"]?\)/g;return{inlineAll:function(t,r,o){return e(t)?Promise.resolve(t).then(n).then(function(e){var n=Promise.resolve(t);return e.forEach(function(t){n=n.then(function(e){return i(e,t,r,o)})}),n}):Promise.resolve(t)},shouldProcess:e,impl:{readUrls:n,inline:i}};function e(e){return-1!==e.search(r)}function n(e){for(var t,n=[];null!==(t=r.exec(e));)n.push(t[1]);return n.filter(function(e){return!s.isDataUrl(e)})}function i(t,n,r,e){return Promise.resolve(n).then(function(e){return r?s.resolveUrl(e,r):e}).then(e||s.getAndEncode).then(function(e){return s.dataAsUrl(e,s.mimeType(n))}).then(function(e){return t.replace(function(e){return new RegExp("(url\\(['\"]?)("+s.escape(e)+")(['\"]?\\))","g")}(n),"$1"+e+"$3")})}}(),t=function(){return{resolveAll:function(){return e(document).then(function(e){return Promise.all(e.map(function(e){return e.resolve()}))}).then(function(e){return e.join("\n")})},impl:{readAll:e}};function e(){return Promise.resolve(s.asArray(document.styleSheets)).then(function(e){var n=[];return e.forEach(function(t){if(t.hasOwnProperty("cssRules"))try{s.asArray(t.cssRules||[]).forEach(n.push.bind(n))}catch(e){console.log("Error while reading CSS rules from "+t.href,e.toString())}}),n}).then(function(e){return e.filter(function(e){return e.type===CSSRule.FONT_FACE_RULE}).filter(function(e){return o.shouldProcess(e.style.getPropertyValue("src"))})}).then(function(e){return e.map(t)});function t(t){return{resolve:function(){var e=(t.parentStyleSheet||{}).href;return o.inlineAll(t.cssText,e)},src:function(){return t.style.getPropertyValue("src")}}}}}(),n=function(){return{inlineAll:function t(e){if(!(e instanceof Element))return Promise.resolve(e);return n(e).then(function(){return e instanceof HTMLImageElement?r(e).inline():Promise.all(s.asArray(e.childNodes).map(function(e){return t(e)}))});function n(t){var e=t.style.getPropertyValue("background");return e?o.inlineAll(e).then(function(e){t.style.setProperty("background",e,t.style.getPropertyPriority("background"))}).then(function(){return t}):Promise.resolve(t)}},impl:{newImage:r}};function r(n){return{inline:function(e){return s.isDataUrl(n.src)?Promise.resolve():Promise.resolve(n.src).then(e||s.getAndEncode).then(function(e){return s.dataAsUrl(e,s.mimeType(n.src))}).then(function(t){return new Promise(function(e){n.onload=e,n.onerror=e,n.src=t})})}}}}(),r={imagePlaceholder:void 0,cacheBust:!1,useCredentials:!1},u={toSvg:a,toPng:function(e,t){return i(e,t||{}).then(function(e){return e.toDataURL()})},toJpeg:function(e,t){return i(e,t=t||{}).then(function(e){return e.toDataURL("image/jpeg",t.quality||1)})},toBlob:function(e,t){return i(e,t||{}).then(s.canvasToBlob)},toPixelData:function(t,e){return i(t,e||{}).then(function(e){return e.getContext("2d").getImageData(0,0,s.width(t),s.height(t)).data})},toCanvas:function(e,t){return i(e,t||{})},impl:{fontFaces:t,images:n,util:s,inliner:o,options:{}}};function a(t,n){return function(e){void 0===e.imagePlaceholder?u.impl.options.imagePlaceholder=r.imagePlaceholder:u.impl.options.imagePlaceholder=e.imagePlaceholder;void 0===e.cacheBust?u.impl.options.cacheBust=r.cacheBust:u.impl.options.cacheBust=e.cacheBust;void 0===e.useCredentials?u.impl.options.useCredentials=r.useCredentials:u.impl.options.useCredentials=e.useCredentials}(n=n||{}),Promise.resolve(t).then(function(e){return function i(t,n,e){if(!e&&n&&!n(t))return Promise.resolve();return Promise.resolve(t).then(r).then(function(e){return o(t,e,n)}).then(function(e){return u(t,e)});function r(e){return e instanceof HTMLCanvasElement?s.makeImage(e.toDataURL()):e.cloneNode(!1)}function o(e,t,n){var r=e.childNodes;return 0===r.length?Promise.resolve(t):o(t,s.asArray(r),n).then(function(){return t});function o(t,e,n){var r=Promise.resolve();return e.forEach(function(e){r=r.then(function(){return i(e,n)}).then(function(e){e&&t.appendChild(e)})}),r}}function u(a,c){return c instanceof Element?Promise.resolve().then(e).then(t).then(n).then(r).then(function(){return c}):c;function e(){function e(e,t){var n,r;e.cssText?(t.cssText=e.cssText,t.font=e.font):(n=e,r=t,s.asArray(n).forEach(function(e){r.setProperty(e,n.getPropertyValue(e),n.getPropertyPriority(e))}))}e(window.getComputedStyle(a),c.style)}function t(){function t(e){var t=window.getComputedStyle(a,e),n=t.getPropertyValue("content");if(""!==n&&"none"!==n){var r=s.uid(),o=c.getAttribute("class");o&&c.setAttribute("class",o+" "+r);var i=document.createElement("style");i.appendChild(u(r,e,t)),c.appendChild(i)}function u(e,t,n){var r,o,i="."+e+":"+t,u=n.cssText?(o=(r=n).getPropertyValue("content"),r.cssText+" content: "+o+";"):a(n);return document.createTextNode(i+"{"+u+"}");function a(t){return s.asArray(t).map(e).join("; ")+";";function e(e){return e+": "+t.getPropertyValue(e)+(t.getPropertyPriority(e)?" !important":"")}}}}[":before",":after"].forEach(function(e){t(e)})}function n(){a instanceof HTMLTextAreaElement&&(c.innerHTML=a.value),a instanceof HTMLInputElement&&c.setAttribute("value",a.value)}function r(){c instanceof SVGElement&&(c.setAttribute("xmlns","http://www.w3.org/2000/svg"),c instanceof SVGRectElement&&["width","height"].forEach(function(e){var t=c.getAttribute(e);t&&c.style.setProperty(e,t)}))}}}(e,n.filter,!0)}).then(c).then(l).then(function(t){n.bgcolor&&(t.style.backgroundColor=n.bgcolor);n.width&&(t.style.width=n.width+"px");n.height&&(t.style.height=n.height+"px");n.style&&Object.keys(n.style).forEach(function(e){t.style[e]=n.style[e]});var e=null;"function"==typeof n.onclone&&(e=n.onclone(t));return Promise.resolve(e).then(function(){return t})}).then(function(e){return function(e,t,n){return Promise.resolve(e).then(function(e){return e.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),(new XMLSerializer).serializeToString(e)}).then(s.escapeXhtml).then(function(e){return'<foreignObject x="0" y="0" width="100%" height="100%">'+e+"</foreignObject>"}).then(function(e){return'<svg xmlns="http://www.w3.org/2000/svg" width="'+t+'" height="'+n+'">'+e+"</svg>"}).then(function(e){return"data:image/svg+xml;charset=utf-8,"+e})}(e,n.width||s.width(t),n.height||s.height(t))})}function i(o,i){return a(o,i).then(s.makeImage).then(s.delay(100)).then(function(e){var t="number"!=typeof i.scale?1:i.scale,n=function(e,t){var n=document.createElement("canvas");if(n.width=(i.width||s.width(e))*t,n.height=(i.height||s.height(e))*t,i.bgcolor){var r=n.getContext("2d");r.fillStyle=i.bgcolor,r.fillRect(0,0,n.width,n.height)}return n}(o,t),r=n.getContext("2d");return e&&(r.scale(t,t),r.drawImage(e,0,0)),n})}function c(n){return t.resolveAll().then(function(e){var t=document.createElement("style");return n.appendChild(t),t.appendChild(document.createTextNode(e)),n})}function l(e){return n.inlineAll(e).then(function(){return e})}"object"==typeof exports&&"object"==typeof module?module.exports=u:e.domtoimage=u}(this);

async function takeScreenshots(matcher){
    document.querySelectorAll(matcher).forEach(async node => {
        const dataUrl = await domtoimage.toPng(node, { "cacheBust":true });

        node.classList.remove("screenshot");
        setTimeout(() => {
            node.classList.add("screenshot");
        });

        download(dataUrl, 'download.png');
    });
}

async function crawl(matcher){
    let fileName = "data.txt", data; 
    
    if(matcher.indexOf("=>") != -1){
        fileName = "data.json";
        try {
            const [parent, childrenMatchers] = matcher.split("=>");
            data = Array.from(document.querySelectorAll(parent)).reduce((agg, node) => {
                const row = {};
                const children = childrenMatchers.split("|");
                children.forEach(child => {
                    const [key, matcher, attribute = "innerText"] = child.split("::");
                    const childNode = node.querySelector(matcher);
                    row[key.trim()] = childNode[attribute] || getComputedStyle(childNode)[attribute];
                });
    
                return [...agg, row];
            }, []);
            data = encodeURI(`data:text/json;charset=utf-8,${JSON.stringify(data, null, "\t")}`);
        } catch (error) {
            console.log("Crawler error: ", error);
        }
    }
    else{
        const [matcherQuery, attribute = "innerText"] = matcher.split("::");
        const matchedItems = Array.from(document.querySelectorAll(matcherQuery.trim())).map(node => {
            return node[attribute] || getComputedStyle(node)[attribute];
        });
        data = encodeURI(`data:text/plain;charset=utf-8,${matchedItems.join('\n')}`);
    }

    const link = document.createElement('a');
    link.setAttribute('href', data);
    link.setAttribute('download', fileName);
    link.click();
}

function setupButtons(){
    const buttons = document.createElement("div");
    buttons.className = "crawler-buttons";

    const screenshotButton = document.createElement("button");
    screenshotButton.innerText = "Screenshot";

    const crawlButton = document.createElement("button");
    crawlButton.innerText = "Crawl";

    screenshotButton.addEventListener("click", () => {
        const matcher = prompt("Screenshots Matcher", "body");
        takeScreenshots(matcher);
    });
    crawlButton.addEventListener("click", () => {
        const matcher = prompt("Crawl Matcher", "li");
        crawl(matcher)
    });

    buttons.appendChild(screenshotButton);
    buttons.appendChild(crawlButton);
    document.body.appendChild(buttons);
}

window.addEventListener("load", function(){
    setupButtons();
});