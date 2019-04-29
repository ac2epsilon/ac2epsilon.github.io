var draw = SVG('drawing').size(300,300);

var symb = draw.symbol();
symb.rect(100,100)
  .fill('#a06');
draw.use(symb).animate(3000).move(100,100);

var rect = draw.rect(100, 100)

var link = draw.link('http://svgdotjs.github.io/')
link.circle(100).fill('#fff');

var line=draw.line(0, 0, 100, 150).stroke({ width: 4 })
line.animate(3000).plot([[100, 150], [200, 200], ])

var polyline = draw.polyline('0,0 100,50 50,100')
  .fill('none').stroke({ width: 2 })