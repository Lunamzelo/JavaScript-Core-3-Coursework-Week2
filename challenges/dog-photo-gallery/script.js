let list = document.querySelector('.list');
let getImageBtn = document.getElementById('getDogImage');
getImageBtn.addEventListener('click', fetchImages)
function fetchImages(){
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then(data => {
        console.log(data);
        let li = document.createElement('li');
        list.appendChild(li);
        let image = document.createElement('img');
        image.src = data.message;
        li.appendChild(image);
    })
    .catch(err => console.log(err))
}
