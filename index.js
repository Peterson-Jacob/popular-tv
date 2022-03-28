window.onload = function(){

    const cont = document.getElementById('container');
    const headers = {
        'x-rapidapi-host': 'imdb8.p.rapidapi.com',
        'x-rapidapi-key': ''
      };

fetch("https://imdb8.p.rapidapi.com/title/get-top-rated-tv-shows", {
	"method": "GET",
    headers
})
.then(response => response.json())
.then(data =>{
    let text = "";
    let textTwo = "";
    let textThree = "";
    let textFour = "";
    let textFive = "";
    let i = 0;
    let y = 0;
    const dataArray = [];
    const showArray = [];
    const newArray = [];
    
  
    while(data[i]){
        dataArray.push(data[i].id);
        i++;
    }

    while(dataArray[y]){
        showArray.push(dataArray[y].slice(7, -1));
        y++;  
    };

    for (let x = 0; x <= 50; x++) {
        if(x == 0){
        text += "ids=" + showArray[x];
        }else{
            text += "&ids=" + showArray[x];
        }
    };

    for (let x = 51; x <= 100; x++) {
        if(x == 51){
        textTwo += "ids=" + showArray[x];
        }else{
            textTwo += "&ids=" + showArray[x];
        }
    };

    for (let x = 101; x <= 150; x++) {
        if(x == 101){
        textThree += "ids=" + showArray[x];
        }else{
            textThree += "&ids=" + showArray[x];
        }
    };

    for (let x = 151; x <= 200; x++) {
        if(x == 151){
        textFour += "ids=" + showArray[x];
        }else{
            textFour += "&ids=" + showArray[x];
        }
    };

    for (let x = 201; x <= 250; x++) {
        if(x == 201){
        textFive += "ids=" + showArray[x];
        }else{
            textFive += "&ids=" + showArray[x];
        }
    };

    function myFunction(v){
        for(let s = v; s < newArray.length; s++){
            const div = document.createElement('div');
            const img = document.createElement('img');
            const title = document.createElement('h1');
            const rate = document.createElement('h2');
            const series = document.createElement('p');
            const release = document.createElement('p');
    
                div.classList.add("card");
                div.appendChild(img);
                img.src = newArray[s].title.image.url;
                img.alt = newArray[s].title.title + " Poster";
                div.appendChild(title);
                title.textContent = newArray[s].title.title;
                div.appendChild(rate);
                rate.textContent = "IMDb Rating: " + newArray[s].ratings.rating;
                div.appendChild(series);
                    if(newArray[s].title.seriesEndYear == undefined ){
                        series.textContent = "Start " + newArray[s].title.seriesStartYear + " - present";
                    }else{
                        series.textContent = "Start " + newArray[s].title.seriesStartYear + " - End " + newArray[s].title.seriesEndYear;
                    };
                div.appendChild(release);
                release.textContent = "Release Date: " + newArray[s].releaseDate;
                cont.appendChild(div);
        }
    }

    
     fetch("https://imdb8.p.rapidapi.com/title/get-meta-data?" + text + "&region=US",{
	"method": "GET",
    headers
})

.then(newResponse => newResponse.json())
.then(newData =>{
    
    let z = 0;
    
    while (newData[showArray[z]]) {
        newArray.push(newData[showArray[z]]);
        z++;
    }

    myFunction(0);

    fetch("https://imdb8.p.rapidapi.com/title/get-meta-data?" + textTwo + "&region=US", {
	"method": "GET",
    headers  
})

.then(newResponse => newResponse.json())
.then(newData =>{
    
    let z = 51;
    while (newData[showArray[z]]) {
        newArray.push(newData[showArray[z]]);
        z++;
    }
    
    myFunction(50);
   
    fetch("https://imdb8.p.rapidapi.com/title/get-meta-data?" + textThree + "&region=US", {
        "method": "GET",
        headers  
    })
    
    .then(newResponse => newResponse.json())
    .then(newData =>{
        
        let z = 101;
        while (newData[showArray[z]]) {
            newArray.push(newData[showArray[z]]);
            z++;
        }
       
        myFunction(100);

        fetch("https://imdb8.p.rapidapi.com/title/get-meta-data?" + textFour + "&region=US", {
        "method": "GET",
        headers  
    })
    
    .then(newResponse => newResponse.json())
    .then(newData =>{
        
        let z = 151;
        while (newData[showArray[z]]) {
            newArray.push(newData[showArray[z]]);
            z++;
        }
        myFunction(150);

        fetch("https://imdb8.p.rapidapi.com/title/get-meta-data?" + textFive + "&region=US", {
            "method": "GET",
            headers  
        })
        
        .then(newResponse => newResponse.json())
        .then(newData =>{
            
            let z = 201;
            while (newData[showArray[z]]) {
                newArray.push(newData[showArray[z]]);
                z++;
            }
            myFunction(200);
            
           
     })
    .catch(err => {
        console.error(err);
     }); 
       
 })
.catch(err => {
    console.error(err);
 });    
       
 })
.catch(err => {
    console.error(err);
 });  
   
})
.catch(err => {
	console.error(err);
});
    
})
.catch(err => {
	console.error(err);
});


})
.catch(err => {
	console.error(err);
});


}