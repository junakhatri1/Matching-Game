

    var numberOfSmileys = 5;
    var theLeftSide = document.getElementById("leftSide");
    var theRightSide = document.getElementById("rightSide");
    var theBody = document.getElementsByTagName("body")[0];


    function addSmileys(){

        for(var i =0; i <numberOfSmileys; ++i){ 

     var image = document.createElement("IMG");
        image.setAttribute("src", "http://home.cse.ust.hk/~rossiter/mooc/matching_game/smile.png");
        image.setAttribute("width", "100");
        image.setAttribute("height", "100");
        image.style.top = Math.floor(Math.random() *401) + "px";
        image.style.left = Math.floor(Math.random() *401) + "px";
         theLeftSide.appendChild(image);


        }
     leftSideImages = theLeftSide.cloneNode(true);
     leftSideImages.removeChild(leftSideImages.lastChild);
     theRightSide.appendChild(leftSideImages);


    theLeftSide.lastChild.onclick = function nextLevel(event){
        event.stopPropagation();
        numberOfSmileys +=5;
        addSmileys();
        }

    }
    theBody.onclick = function gameOver(){
        alert("Game over!");
        theBody.onclick = null;
        theLeftSide.lastChild.onclick = null;
        }

