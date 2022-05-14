var total_material = 5;
var material_leftside = new Array();
material_leftside[0] = '<img src="images2/royal-girl-women-cat-eye-sunglasses-vintage-brand-designer-crystal-diamond-oversize-frame-glasses-ss118.jpg">';
material_leftside[1] = '<img src="images2/fashion-sunglasses-frames-2021-children-s.jpg">';
material_leftside[2] = '<img src="images2/sunglasses-party-gold-plastic-round-round-melady-mlfsg0002.jpg">';



function Random_LeftSide() {
  var random_number = Math.floor(Math.random() * material_leftside.length);
  document.getElementById('material_left').innerHTML = material_leftside[random_number];

}
onload = function () { Random_LeftSide(); }

// RIGHT SIDE

var total_material = 5;
var material_rightside = new Array();
material_rightside[0] = '<img src="images2/Le-Specs-LSO2026628_1-MAJORELLE.jpg">';
material_rightside[1] = '<img src="images2/260_86_1.jpg">';
material_rightside[2] = '<img src="images2/24811682-ortho-940x529.webp">';



function Random_RightSide() {
  var random_number = Math.floor(Math.random() * material_rightside.length);
  document.getElementById('material_right').innerHTML = material_rightside[random_number];

}
onload = function () { Random_RightSide(); }

