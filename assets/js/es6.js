!function n(t,e,o){function r(u,a){if(!e[u]){if(!t[u]){var f="function"==typeof require&&require;if(!a&&f)return f(u,!0);if(i)return i(u,!0);var s=new Error("Cannot find module '"+u+"'");throw s.code="MODULE_NOT_FOUND",s}var c=e[u]={exports:{}};t[u][0].call(c.exports,function(n){var e=t[u][1][n];return r(e||n)},c,c.exports,n,t,e,o)}return e[u].exports}for(var i="function"==typeof require&&require,u=0;u<o.length;u++)r(o[u]);return r}({1:[function(n,t,e){"use strict";var o={loading:function(){setTimeout(function(){$(".js-loading-mask").fadeOut(400),setTimeout(function(){$(".js-loading-mask").remove()},400)},800)},btnWaves:function(){Waves.attach(".btn-waves",["waves-button","waves-light"]),Waves.init()}};$(window).on({load:function(){o.loading()}}),$(function(){o.btnWaves()})},{}]},{},[1]);