let image = document.createElement('img');
let body = document.body;
body.appendChild(image);
 function fetchImages(){
    fetch(`https://xkcd.now.sh/?comic=latest`)
    .then((response) => response.json())
    .then(data => {
        console.log(data);
        image.src = data.img;
    })
    .catch(err => console.log(err));
 }
 fetchImages();