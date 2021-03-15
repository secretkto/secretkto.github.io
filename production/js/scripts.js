$(document).ready(function(){inlineSVG.init({svgSelector:".svg--inline"},function(){console.log("All svg inlined")});let e=$(".video--placeholder");let t=$(".video--horizontal");let i=$(".menu");let r=$(".img--hamburger");let o=$(".menu .img--close");let n=$(".button--modal");let s=$(".modal .img--close");let l=$(".modal");let a=$(".faq .box--item");let c=$(".faq .button");let d=$(".section--header");let u=$("body");e.click(function(){$(this).removeClass("isActive");t.addClass("isActive")});r.click(function(){u.toggleClass("isHeaderActive")});o.click(function(){u.toggleClass("isHeaderActive")});s.click(function(){l.removeClass("isActive")});n.click(function(){l.addClass("isActive")});c.click(function(){a.each(function(){$(this).addClass("isActive")})});a.click(function(){$(this).toggleClass("isActive")});$(".slider--main").slick({slidesToShow:1,slidesToScroll:1,draggable:true,arrows:true,fade:true,asNavFor:".slider--nav",prevArrow:'<div class="icon icon--left"><img src="./img/icon--arrow-left.svg" class="img img--arrow" alt="icon arrow"></div>',nextArrow:'<div class="icon icon--right"><img src="./img/icon--arrow-right.svg" class="img img--arrow" alt="icon arrow"></div>'});$(".slider--nav").slick({slidesToShow:4,asNavFor:".slider--main",focusOnSelect:true,arrows:false,onAfterChange:function(e,t){console.log("slider-nav change");console.log(this.$slides.get(t));$(".isActive").removeClass("isActive");$(this.$slides.get(t)).addClass("isActive")},onInit:function(e){$(e.$slides.get(0)).addClass("isActive")}});$(window).scroll(function(){let e=$(window).scrollTop();console.log(e);if(e>=500){d.addClass("isFixed")}else{d.removeClass("isFixed")}})});(function(e,t){if(typeof define==="function"&&define.amd){define([],t(e))}else if(typeof exports==="object"){module.exports=t(e)}else{e.inlineSVG=t(e)}})(typeof global!=="undefined"?global:this.window||this.global,function(e){var t={},i=!!document.querySelector&&!!e.addEventListener,r;var o={initClass:"js-inlinesvg",svgSelector:"img.svg"};var n=function(e,t){return function(){if(--e<1){return t.apply(this,arguments)}}};var s=function(){var e={};var t=false;var i=0;var r=arguments.length;if(Object.prototype.toString.call(arguments[0])==="[object Boolean]"){t=arguments[0];i++}var o=function(i){for(var r in i){if(Object.prototype.hasOwnProperty.call(i,r)){if(t&&Object.prototype.toString.call(i[r])==="[object Object]"){e[r]=s(true,e[r],i[r])}else{e[r]=i[r]}}}};for(;i<r;i++){var n=arguments[i];o(n)}return e};var l=function(){var e=document.querySelectorAll(r.svgSelector);return e};var a=function(e){var t=l();var i=n(t.length,e);Array.prototype.forEach.call(t,function(e,t){var o=e.src||e.getAttribute("data-src"),n=e.attributes;var s=new XMLHttpRequest;s.open("GET",o,true);s.onload=function(){if(s.status>=200&&s.status<400){var t=new DOMParser,o=t.parseFromString(s.responseText,"text/xml"),l=o.getElementsByTagName("svg")[0];l.removeAttribute("xmlns:a");l.removeAttribute("width");l.removeAttribute("height");l.removeAttribute("x");l.removeAttribute("y");l.removeAttribute("enable-background");l.removeAttribute("xmlns:xlink");l.removeAttribute("xml:space");l.removeAttribute("version");Array.prototype.slice.call(n).forEach(function(e){if(e.name!=="src"&&e.name!=="alt"){l.setAttribute(e.name,e.value)}});if(l.classList){l.classList.add("inlined-svg")}else{l.className+=" "+"inlined-svg"}l.setAttribute("role","img");if(n.longdesc){var a=document.createElementNS("http://www.w3.org/2000/svg","desc"),c=document.createTextNode(n.longdesc.value);a.appendChild(c);l.insertBefore(a,l.firstChild)}if(n.alt){l.setAttribute("aria-labelledby","title");var d=document.createElementNS("http://www.w3.org/2000/svg","title"),u=document.createTextNode(n.alt.value);d.appendChild(u);l.insertBefore(d,l.firstChild)}if(e.parentNode){e.parentNode.replaceChild(l,e)}if(i){i(r.svgSelector)}}else{console.error("There was an error retrieving the source of the SVG.")}};s.onerror=function(){console.error("There was an error connecting to the origin server.")};s.send()})};t.init=function(e,t){if(!i)return;r=s(o,e||{});a(t||function(){});document.documentElement.className+=" "+r.initClass};return t});