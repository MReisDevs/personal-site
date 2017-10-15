window.addEventListener("load", function(){
  var menuButton = document.getElementById("menuButton");
  menuButton.addEventListener("click", function(){
    var headerInfo = document.getElementsByClassName("headerInfo")[0]
    if (headerInfo.style.display === "none"){
      headerInfo.style.display = "flex"}
    else{
      headerInfo.style.display = "none"}
    });
  });

