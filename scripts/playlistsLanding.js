// let here = document.querySelector("#here");
const xhr = new XMLHttpRequest();
// console.log("xhr", xhr);
xhr.onload = function() {
    let doc = JSON.parse(this.responseText)
    const template = document.querySelector("#playlist-template");
    console.log(doc.length)
    for (let i = 0 ; i < doc.length; i++){
      let url = doc[i].images[0].url;
      let name = doc[i].name;
      let newEle = template.content.cloneNode(true);
      newEle.querySelector("#name").innerHtml = "ten thouseand" + i;
      newEle.querySelector("#image").src = url;

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
