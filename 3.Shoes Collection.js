var total_material = 5;
var material_leftside = new Array();
material_leftside[0] = '<img src="images2/bespoke-upholstered-baroque-armchair-ms9191p-custom-made-to-order-upholstery-options-fabric-material-sourced-by-millmax-poa-wood-finish-wood-stain-finish-2118-p.jpg">';
material_leftside[1] = '<img src="images2/19521382_master.jpg">';
material_leftside[2] = '<img src="images2/IMG_3992.jpg">';



function Random_LeftSide() {
  var random_number = Math.floor(Math.random() * material_leftside.length);
  document.getElementById('material_left').innerHTML = material_leftside[random_number];

}
onload = function () { Random_LeftSide(); }

// RIGHT SIDE

var total_material = 5;
var material_rightside = new Array();
material_rightside[0] = '<img src="images2/Hay-Result-Chair-schwarz-Eiche-matt-lackiert.jpg">';
material_rightside[1] = '<img src="images2/701_side_white-scaled.jpg">';
material_rightside[2] = '<img src="images2/scandi-designs-soft-pad-crossed-dining-chair-black-p38406-2782161_image.jpg">';



function Random_RightSide() {
  var random_number = Math.floor(Math.random() * material_rightside.length);
  document.getElementById('material_right').innerHTML = material_rightside[random_number];

}
onload = function () { Random_RightSide(); }


