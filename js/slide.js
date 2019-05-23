function slide(){
  document.getElementById("img1").style.display = "none";
  document.getElementById("img2").style.display = "block";
  document.getElementById("img3").style.display = "none";
  setTimeout ("slide1()", 10000);
  setTimeout ("slide2()", 20000);
  setTimeout ("slide()", 30000);
}
setTimeout ("slide()", 10000);

function slide1(){
  document.getElementById("img1").style.display = "none";
  document.getElementById("img2").style.display = "none";
  document.getElementById("img3").style.display = "block";
}

function slide2(){
  document.getElementById("img1").style.display = "block";
  document.getElementById("img2").style.display = "none";
  document.getElementById("img3").style.display = "none";
}
