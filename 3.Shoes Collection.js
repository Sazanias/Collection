var total_material = 5;
var material_leftside = new Array();
material_leftside[0] = '<img src="images2/Shoe.ornament.png">';
material_leftside[1] = '<img src="images2/19-mens-dress-shoes.png">';
material_leftside[2] = '<img src="images2/TD1722r.jpg">';



function Random_LeftSide() {
  var random_number = Math.floor(Math.random() * material_leftside.length);
  document.getElementById('material_left').innerHTML = material_leftside[random_number];

}
onload = function () { Random_LeftSide(); }

// RIGHT SIDE

var total_material = 5;
var material_rightside = new Array();
material_rightside[0] = '<img src="images2/Minimal Shoe.png">';
material_rightside[1] = '<img src="images2/basic-shoe-staples-278182-1551890458307-product.700x0c.jpg">';
material_rightside[2] = '<img src="images2/Minimal shoe22.png">';



function Random_RightSide() {
  var random_number = Math.floor(Math.random() * material_rightside.length);
  document.getElementById('material_right').innerHTML = material_rightside[random_number];

}
onload = function () { Random_RightSide(); }


