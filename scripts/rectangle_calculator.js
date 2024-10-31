let a, b, c, s, v;
a = parseInt(prompt("введите а"));
b = parseInt(prompt("введите b"));
c = parseInt(prompt("введите c"));
s = 2*(a*b+b*c+c*a);
v = a*b*c;
alert('площадь поверхности = ' + s + 'кв. м.\nОбъем = ' + v + 'куб. м.')