// jshint esversion: 6

let main = document.getElementById("main");

 function requestListener(){
   let artList = JSON.parse(this.responseText);
   let art = artList.data.children;
   console.log(art);

   for(let i = 0; i < 4; i++){

    //CONTAINER
    var firstContainer = document.createElement("div");
    firstContainer.id = "firstContainer";
    main.appendChild(firstContainer);

    //IMAGE
    var artImage = document.createElement("img");
    artImage.className = "artImage";
    var artURL = art[i].data.url;
    artImage.src = artURL;
    firstContainer.appendChild(artImage);
    //console.log(artURL);

    //TITLE
    var title = document.createElement("div");
    title.className = "title";
    var titleURL = "Title: " + art[i].data.title;
    title.innerHTML = titleURL;
    firstContainer.appendChild(title);

    //AUTHOR
    var author = document.createElement("div");
    author.className = "author";
    var authorURL = "Author: " + art[i].data.author;
    author.innerHTML = authorURL;
    firstContainer.appendChild(author);

    //DATE
    var date = document.createElement("div");
    date.className = "date";
    var dateURL = "Date: " + new Date(art[i].data.created*1000);
    date.innerHTML = dateURL;
    firstContainer.appendChild(date);

    //COMMENTS
    var score = document.createElement("div");
    score.className = "score";
    var scoreURL = "Score: " + art[i].data.score;
    score.innerHTML = scoreURL;
    firstContainer.appendChild(score);








  }
}

var artReq = new XMLHttpRequest();
artReq.addEventListener("load", requestListener);
artReq.open("GET", "https://www.reddit.com/r/art/.json");
artReq.send();
















// CREATE MAIN CONTAINER
// var firstContainer = document.createElement("div");
// firstContainer.id = "firstContainer";
// main.appendChild(firstContainer);


// let artReq = new XMLHttpRequest();
// artReq.addEventListener("load", function(){
//   let artList = JSON.parse(this.responseText);
//   console.log(artList);
// });
//   //ART WRAPPER
//   var artContainer = document.createElement("div");
//   //artContainer.id = "artContainer";
//   //console.log(artList.data.children[0].data.url);
//   // ART IMG URL
//   var artImg = artList.data.children[0].data.url;
//   // CONTAINER WHERE IMAGE GOES
//   var imgContainer = document.createElement("img");
//   imgContainer.id = "imgContainer";
//   imgContainer.src = artImg;
//   // ATTACH IMAGE CONTAINER TO FIRST WRAPPER
//   firstContainer.appendChild(imgContainer);


//   // FIRST IMG TITLE
//   var title1 = document.createElement("div");
//   title1.id = "title1";
//   var titleName1 = artList.data.children[0].data.title;
//   title1.innerHTML = "Title: " + titleName1;
//   // APPEND FIRST TITLE TO FIRST CONTAINER
//   firstContainer.appendChild(title1);

//   // FIRST IMG AUTHOR
//   var author1 = document.createElement("div");
//   author1.id = "author1";
//   var authorName1 = artList.data.children[0].data.author;
//   author1.innerHTML = "Author: " + authorName1;
//   firstContainer.appendChild(author1);











//   // SECOND ART WRAPPER
//   var secondContainer = document.createElement("div");
//   secondContainer.id = "secondContainer";
//   // ART IMG2 URL
//   var artImg2 = artList.data.children[6].data.url;
//   // CONTAINER WHERE IMG GOES
//   var imgContainer2 = document.createElement("img");
//   imgContainer2.id = "imgContainer2";
//   imgContainer2.src = artImg2;
//   // ATTACH SECOND WRAPPER TO MAIN
//   main.appendChild(secondContainer);
//   // ATTACH SECOND CONTAINER TO SECOND WRAPPER
//   secondContainer.appendChild(imgContainer2);

//   // SECOND IMG TITLE
//   var title2 = document.createElement("div");
//   title2.id = "title2";
//   var titleName2 = artList.data.children[6].data.title;
//   title2.innerHTML = "Title: " + titleName2;
//   secondContainer.appendChild(title2);

//    // SECOND IMG AUTHOR
//   var author2 = document.createElement("div");
//   author2.id = "author2";
//   var authorName2 = artList.data.children[6].data.author;
//   //console.log(artList.data);
//   author2.innerHTML = "Author: " + authorName2;
//   secondContainer.appendChild(author2);




// });






































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

