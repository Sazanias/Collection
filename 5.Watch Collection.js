var total_material = 5;
var material_leftside = new Array();
material_leftside[0] = '<img src="images2/festina-chrono-sport-f20519-1-11728435.jpg">';
material_leftside[1] = '<img src="images2/07-Piaget-Set-In-Stone-1024x683.jpg">';
material_leftside[2] = '<img src="images2/CD18115X1002_0000_U.jpg">';



function Random_LeftSide() {
  var random_number = Math.floor(Math.random() * material_leftside.length);
  document.getElementById('material_left').innerHTML = material_leftside[random_number];

}
onload = function () { Random_LeftSide(); }

// RIGHT SIDE

var total_material = 5;
var material_rightside = new Array();
material_rightside[0] = '<img src="images2/linjer-minimalist-watch-38-gunmetal-tan-1-front_1000x.webp">';
material_rightside[1] = '<img src="images2/product-image-204248081__optimized.jpg">';
material_rightside[2] = '<img src="images2/TID_watches_01.webp">';



function Random_RightSide() {
  var random_number = Math.floor(Math.random() * material_rightside.length);
  document.getElementById('material_right').innerHTML = material_rightside[random_number];

}
onload = function () { Random_RightSide(); }
