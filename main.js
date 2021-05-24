//Del 3 Fetch URL
const URL = "https://randomfox.ca/floof/";

 // infogar img-element i dokumentet.
 function insertImageOfFox(imageSrcUrl){
     const foxImage = document.createElement("img");
     foxImage.src = imageSrcUrl;
     document.body.appendChild(foxImage);
    }
    //kalled när json-data laddas.
    function whenJsonIsDone(data){
        console.log(data.image);
        insertImageOfFox(data.image);
    }

    // kalled när fetch is klart
    function whenFetchIsDone(response){
        response.json().then(whenJsonIsDone);
    }
 fetch(URL).then(whenFetchIsDone);