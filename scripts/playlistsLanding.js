// let here = document.querySelector("#here");
fetch('./data/playlistsNames.json')
  .then(response => response.json())
  .then(data =>{
    for (let i = 0; i < 10; i++){
        console.log(data[0].imageLink)
    }
  })
  .catch(error => console.log(error));