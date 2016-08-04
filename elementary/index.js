var picture = require('cat-picture')
var image = require('lightning-image-poly')
var src = picture.src;
picture.remove();
var viz = new image('#visualization', null, [src], {hullAlgorithm: 'convex'})
