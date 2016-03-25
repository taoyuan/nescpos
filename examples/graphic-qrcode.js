"use strict";

var path = require('path');
var Graphic = require('..').Graphic;

Graphic.qrcode('西游记告诉我们：凡是有后台的妖怪都被接走了，凡是没后台的都被一棒子打死了。').then(function(g) {
  console.log(g.render('qrcode'));
  g.image.toJimp().write(path.join(__dirname, 'output', 'qrcode.png'));
});
