

  var ran = Math.floor(Math.random() * 6) + 1;
  var randomImageSource = "images/dice" + ran + ".png";

  var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

  var ran2 = Math.floor(Math.random() * 6) + 1;

  var randomImageSource2 = "images/dice" + ran2 + ".png";

  document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);



  if (ran === ran2) {
    document.querySelector("h1").innerHTML = "Draw!";
  } else if (ran > ran2) {
    document.querySelector("h1").innerHTML = "player 1 wins!";
  } else {
    document.querySelector("h1").innerHTML = "player 2 wins!";
  }
