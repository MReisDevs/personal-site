window.addEventListener("load", function(){
  var menuButton = document.getElementById("menuButton");
  menuButton.addEventListener("click", function(){
    var headerInfo = document.getElementsByClassName("headerInfo")[0]
    if (headerInfo.style.display === "flex"){
      headerInfo.style.display = "none"}
    else{
      headerInfo.style.display = "flex"}
    });
  });

