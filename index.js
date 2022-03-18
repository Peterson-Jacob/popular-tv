window.onload = function(){
    
    const cont = document.getElementById('container');
fetch("https://imdb8.p.rapidapi.com/title/get-top-rated-tv-shows", {
	"method": "GET",
  

})
.then(response => response.json())
.then(data =>{
    let text = "";
    let i = 0;
    let y = 0;
    const dataArray = [];
    const showArray = [];
    
  
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

    
     fetch("https://imdb8.p.rapidapi.com/title/get-meta-data?" + text + "&region=US", {
	"method": "GET",
   

})
.then(newResponse => newResponse.json())
.then(newData =>{
    
    let z = 0;
    const newArray = [];
    while (newData[showArray[z]]) {
        newArray.push(newData[showArray[z]]);
        z++;
    }

    for(let s = 0; s < newArray.length; s++){
        const div = document.createElement('div');
        const img = document.createElement('img');
        const title = document.createElement('h1');
        const rate = document.createElement('h2');
        const series = document.createElement('p');
        const release = document.createElement('p');

            div.classList.add("card");
            div.appendChild(img);
            img.src = newArray[s].title.image.url;
            img.alt = newArray[s].title.title;
            div.appendChild(title);
            title.textContent = newArray[s].title.title;
            div.appendChild(rate);
            rate.textContent = "Rating: " + newArray[s].ratings.rating;
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
    console.log(newArray[1]);
    console.log(newArray[13]);
    console.log(dataArray.length);
})
.catch(err => {
	console.error(err);
}); 
    
})
.catch(err => {
	console.error(err);
});


}