window.onload = function(){

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

    for (let x = 0; x < 50; x++) {
        if(x == 0){
        text += "ids=" + showArray[x];
        }else{
            text += "&ids=" + showArray[x];
        }
    };

    console.log(text);

    
})
.catch(err => {
	console.error(err);
});

/*fetch("https://imdb8.p.rapidapi.com/title/get-meta-data?ids=tt4154756&ids=tt5491994&ids=tt0903747&region=US", {
	"method": "GET",

})
.then(response => response.json())
.then(data =>{
	console.log(data);
})
.catch(err => {
	console.error(err);
});*/

}