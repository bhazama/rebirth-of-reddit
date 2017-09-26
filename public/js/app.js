// jshint esversion: 6

let main = document.getElementById("main");

// function requestListener(){
//   let itemList = JSON.parse(this.responseText);
//   let item = itemList.

var firstContainer = document.createElement("div");
firstContainer.id = "firstContainer";
main.appendChild(firstContainer);


let artReq = new XMLHttpRequest();
artReq.addEventListener("load", function(){
  let artList = JSON.parse(this.responseText);
  var artContainer = document.createElement("img");
  artContainer.id = "artContainer";
  console.log(artList.data.children[0].data.url);
  var artImg = artList.data.children[0].data.url;
  artContainer.src = artImg;
  firstContainer.appendChild(artContainer);





});
artReq.open("GET", "https://www.reddit.com/r/art/.json");
artReq.send();





































// console.log("sanity check");

// // function reqMaker(name, url){
// //   name = new XMLHttpRequest();
// //   name.open("GET", url);
// //   name.send();
// // }

// // reqMaker(mainPageReq, "https://www.reddit.com/r/programming/.json

// // var randomNav = document.createElement("span");
// // randomNav.className = "navElem";
// // randomNav.innerHTML = " RANDOM ";
// // var myBoardsNav = document.createElement("span");
// // myBoardsNav.className = "navElem";
// // myBoardsNav.innerHTML = " MY BOARDS ";
// // var getTheAppNav = document.createElement("span");
// // getTheAppNav.className = "navElem";
// // getTheAppNav.innerHTML = " GET THE APP ";
// var firstContainer = document.createElement("div");
// firstContainer.id = "firstContainer";


// var bodyElem = document.getElementById("body");
// bodyElem.appendChild(firstContainer);


// let mainPageReq = new XMLHttpRequest();
//   mainPageReq.addEventListener("load", function(){
//   let mainPageObj = JSON.parse(this.responseText);
//   //console.log(mainPageObj);
//   var firstImg = document.createElement("img");
//   firstImg.id = "firstImg";
//   firstImg.src = mainPageObj.data.children[1].data.url;


//   var bgBorder1 = document.createElement("div");
//   bgBorder1.id = "bgBorder1";

//   firstContainer.appendChild(bgBorder1);
//   bgBorder1.appendChild(firstImg);



//   // let firstDescReq = new XMLHttpRequest();
//   // firstDescReq.addEventListener("load", function(){
//   //   let firstDescObj = JSON.parse(this.responseText);
//   //   console.log(firstDescObj);
//   // });
//   // firstDescReq.open("GET", "https://www.reddit.com/r/art/.json");


// });

// mainPageReq.open("GET", "https://www.reddit.com/r/art/.json");
// mainPageReq.send();

// // var backgroundBorder1 = document.createElement("div");
// // backgroundBorder1.className = "bgborder";
// // body.appendChild(backgroundBorder1);

