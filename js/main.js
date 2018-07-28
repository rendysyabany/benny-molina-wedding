// Firefly Effect
$.firefly({
    color: '#fff',
    minPixel: 1,
    maxPixel: 4,
    total : 100,
    on: '#firefly',
    borderRadius: 100
  });

// FullPage
var myFullpage = new fullpage('#fullpage', {
    anchors: ['firstPage', 'secondPage', '3rdPage'],
    sectionsColor: ['#fff', '#fff', '#fff'],
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['First page', 'Second page', 'Third and last page']
});