var draw = SVG('drawing').size(300,300);

var symb = draw.symbol();
symb.rect(100,100)
  .fill('#a06');
draw.use(symb).animate(3000).move(100,100)
  // .loop(true, true);

var rect = draw.rect(100, 100)

var link = draw.link('http://svgdotjs.github.io/')
link.circle(100).fill('#fff');

var line=draw.line(0, 0, 50, 100).stroke({ width: 2 });
line.animate(3000).plot([[0, 0], [200, 200], ])
// .loop(true, true);

var polyline = draw.polyline('0,0 100,50 50,100')
  .fill('none').stroke({ width: 2 })

var path = draw
  .path('M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80')
  .fill('#f53');
path.animate(3000)
  .plot('M0 180 C 40 180, 65 150, 95 80 S 150 10, 180 80')
  // .loop(true, true);

  var text = draw.text("Lorem ipsum dolor sit amet consectetur.\nCras sodales imperdiet auctor.")
  text.leading(.8)
  text.animate('1s').fill('#f06').loop(true, true);
  console.log(text.font())