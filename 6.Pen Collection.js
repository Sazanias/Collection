var total_material = 5;
var material_leftside = new Array();
material_leftside[0] = '<img src="images2/KIDPEN19DC-P-2.jpg">';
material_leftside[1] = '<img src="images2/0-3ml-Hyaluron-Pen-With-Ampoule-Comfort-in-Mesotherapy-For-Wrinkle-Removal-Lip-Plump-Cosmetology-Facial.jpg">';
material_leftside[2] = '<img src="images2/S210307.jpg">';



function Random_LeftSide() {
  var random_number = Math.floor(Math.random() * material_leftside.length);
  document.getElementById('material_left').innerHTML = material_leftside[random_number];

}
onload = function () { Random_LeftSide(); }

// RIGHT SIDE

var total_material = 5;
var material_rightside = new Array();
material_rightside[0] = '<img src="images2/Minimal pen.png">';
material_rightside[1] = '<img src="images2/unnamed.jpg">';
material_rightside[2] = '<img src="images2/HE1813604_1426660-GLS-STA-P01.jpg">';



function Random_RightSide() {
  var random_number = Math.floor(Math.random() * material_rightside.length);
  document.getElementById('material_right').innerHTML = material_rightside[random_number];

}
onload = function () { Random_RightSide(); }
