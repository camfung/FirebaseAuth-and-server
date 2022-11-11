// let here = document.querySelector("#here");
const xhr = new XMLHttpRequest();
// console.log("xhr", xhr);
xhr.onload = function() {
    let doc = JSON.parse(this.responseText)
    const template = document.querySelector("#playlist-template");
    for (let i = 0 ; i < doc.length; i++){
      let url = doc[i].images[0].url
      let newEle = document.createElement("div");
      console.log(url)
      // newEle.innerHTML = url
      newEle.innerHTML = "<img src='" + url + "'>"
      // newEle.innerHTML = doc[i].images[0].url;

      document.querySelector("#playlists").appendChild(newEle);
      
    }
}
xhr.open("GET", "http://localhost:8000/get_playlists_json");
xhr.send();
// test = {
//     the : "case", 
//     there : " the"
// }

// console.log(Object.keys(test).length)
