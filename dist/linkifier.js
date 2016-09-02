/**
 * linkifier - It converts HTML headers (h1, h2, h3, h4, h5 & h6) into links.
 * @version v1.0.2
 * @link    https://github.com/Kikobeats/linkifier
 * @license MIT
 */!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;n="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,n.linkifier=e()}}(function(){return function e(n,t,r){function o(f,u){if(!t[f]){if(!n[f]){var s="function"==typeof require&&require;if(!u&&s)return s(f,!0);if(i)return i(f,!0);var c=new Error("Cannot find module '"+f+"'");throw c.code="MODULE_NOT_FOUND",c}var a=t[f]={exports:{}};n[f][0].call(a.exports,function(e){var t=n[f][1][e];return o(t?t:e)},a,a.exports,e,n,t,r)}return t[f].exports}for(var i="function"==typeof require&&require,f=0;f<r.length;f++)o(r[f]);return o}({1:[function(e,n,t){function r(e,n){e.classList?e.classList.add(n):e.className+=" "+n}n.exports=r},{}],2:[function(e,n,t){function r(e,n){var t,r,o=e.length;if("number"==typeof o)for(t=0;t<o;t++)n(e[t],t);else{r=0;for(t in e)e.hasOwnProperty(t)&&n(e[t],t,r++)}return e}n.exports=r},{}],3:[function(e,n,t){function r(e,n){return 1===arguments.length?"textContent"in e?e.textContent:e.innerText:void("textContent"in e?e.textContent=n:e.innerText=n)}n.exports=r},{}],4:[function(e,n,t){function r(e){return e.replace(/[ \t]/g,"-").replace(/[^-a-zA-Z0-9]/g,"").toLowerCase()}n.exports=r},{}],5:[function(e,n,t){n.exports={class:"deep-link"}},{}],6:[function(e,n,t){function r(e,n){n=Object.assign(i,n),s(e,function(e){var t=f(e),r=u(t);e.innerHTML="",e.setAttribute("id",r),e.setAttribute("id",r),o(e,n.class);var i=document.createElement("a");i.innerHTML=t,i.setAttribute("href","#"+r),e.appendChild(i)})}var o=e(1),i=e(5),f=e(3),u=e(4),s=e(2);n.exports=r},{1:1,2:2,3:3,4:4,5:5}]},{},[6])(6)});