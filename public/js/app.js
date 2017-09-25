// jshint esversion:6

console.log("sanity check");

// function reqMaker(name, url){
//   name = new XMLHttpRequest();
//   name.open("GET", url);
//   name.send();
// }

// reqMaker(mainPageReq, "https://www.reddit.com/r/programming/.json

let mainPageReq = new XMLHttpRequest();
mainPageReq.addEventListener("load", function(){
  let mainPageObj = JSON.parse(this.responseText);
  console.log(mainPageObj);
  document.getElementById("firstImg").src = mainPageObj.data.children[1].data.url;
});

mainPageReq.open("GET", "https://www.reddit.com/r/art/.json");
mainPageReq.send();
