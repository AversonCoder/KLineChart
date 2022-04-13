(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{"/XkL":function(e,t,a){"use strict";a.r(t);var n=a("ODXe"),i=a("q1tI"),c=a.n(i),r=a("iLUg"),l=a("6y1p"),s=a("uUdh"),o=a("ZyRx"),m=(a("wwP5"),e=>c.a.createElement("div",{className:"code"},c.a.createElement(s["a"],{language:e.language,style:o["a"]},e.children))),p=(a("pXqi"),"import React, { useEffect } from 'react';\nimport { init, dispose } from 'klinecharts';\nimport generatedDataList from '../utils/generatedDataList';\n\nexport default function Chart () {\n  useEffect(() => {\n    // Init chart\n    const chart = init('simple_chart');\n    // Create main technical indicator MA\n    chart.createTechnicalIndicator('MA', false, { id: 'candle_pane' });\n    // Create sub technical indicator VOL\n    chart.createTechnicalIndicator('VOL');\n    // Fill data\n    chart.applyNewData(generatedDataList());\n    return () => {\n      dispose('simple_chart');\n    }\n  }, []);\n\n  return <div id=\"simple_chart\" style={{ height: 600 }}/>;\n}"),d=()=>c.a.createElement(m,{language:"jsx"},p),h="<template>\n  <div id=\"simple_chart\" style=\"height: 600px\"/>\n</template>\n\n<script>\nimport { dispose, init } from 'klinecharts';\nimport generatedDataList from '../utils/generatedDataList';\n\nexport default {\n  name: 'SimpleChart',\n  mounted: function () {\n    // Init chart\n    const chart = init('simple_chart');\n    // Create main technical indicator MA\n    chart.createTechnicalIndicator('MA', false, { id: 'candle_pane' });\n    // Create sub technical indicator VOL\n    chart.createTechnicalIndicator('VOL');\n    // Fill data\n    chart.applyNewData(generatedDataList());\n  },\n  destroyed: function () {\n    dispose('simple_chart');\n  }\n}\n<\/script>",u=()=>c.a.createElement(m,{language:"javascript"},h),g="// html file\n<div id=\"simple_chart\"></div>\n\n// typescript file\nimport { Component, AfterViewInit, OnDestroy } from '@angular/core';\nimport { init, dispose, Chart } from 'klinecharts';\n \nimport generatedDataList from '../utils/generatedList';\n \n@Component({\n  selector: 'simple-chart',\n  templateUrl: './simple-chart.html'\n})\nexport class SimpleChartComponent implements AfterViewInit, OnDestroy {\n  ngAfterViewInit(): void {\n    // Init chart\n    const chart: Chart = init('simple_chart');\n    // Create main technical indicator MA\n    chart.createTechnicalIndicator('MA', false, { id: 'candle_pane' });\n    // Create sub technical indicator VOL\n    chart.createTechnicalIndicator('VOL');\n    // Fill data\n    chart.applyNewData(generatedDataList());\n  }\n \n  ngOnDestroy(): void {\n    dispose('simple_chart');\n  }\n}",f=()=>c.a.createElement(m,{language:"typescript"},g),y='<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="utf-8" />\n  <meta name="viewport" content="width=device-width, initial-scale=1" />\n  <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/klinecharts@latest/dist/klinecharts.min.js"><\/script>\n  <script type="text/javascript" src="./generatedDataList.js"><\/script>\n</head>\n<body style="margin: 0">\n<div id="simple_chart" style="height: 600px"></div>\n<script>\n  window.onload = function () {\n    // Init chart\n    var chart = init(\'simple_chart\');\n    // Create main technical indicator MA\n    chart.createTechnicalIndicator(\'MA\', false, { id: \'candle_pane\' });\n    // Create sub technical indicator VOL\n    chart.createTechnicalIndicator(\'VOL\');\n    // Fill data\n    chart.applyNewData(generatedDataList());\n  }\n<\/script>\n</body>\n</html>',v=()=>c.a.createElement(m,{language:"html"},y);t["default"]=e=>{var t=e.title,a=Object(i["useState"])("react"),s=Object(n["a"])(a,2),o=s[0],m=s[1],p=e=>()=>{m(e)},h=()=>{switch(o){case"react":return c.a.createElement(d,null);case"vue":return c.a.createElement(u,null);case"angular":return c.a.createElement(f,null);case"native":return c.a.createElement(v,null)}};return c.a.createElement(r["a"],{className:"markdown"},c.a.createElement(l["a"],{key:"code-title",animation:{opacity:0,type:"from",ease:"easeOutQuad"}},c.a.createElement("h2",{style:{textAlign:"center"}},t)),c.a.createElement(l["a"],{key:"code-content",className:"quick-init",type:"bottom",delay:300,animation:{y:30,opacity:0,type:"from",ease:"easeOutQuad"}},c.a.createElement("div",{className:"tab-container"},c.a.createElement("span",{className:"react"===o?"active":"",onClick:p("react")},"React"),c.a.createElement("span",{className:"vue"===o?"active":"",onClick:p("vue")},"Vue"),c.a.createElement("span",{className:"angular"===o?"active":"",onClick:p("angular")},"Angular"),c.a.createElement("span",{className:"native"===o?"active":"",onClick:p("native")},"Native")),h()))}},pXqi:function(e,t,a){},wwP5:function(e,t,a){}}]);