const gamesContainer = document.querySelector(".games");

const apiKey = "f416f8227a6b4d9f9327bf7ae026e4c0";
const url = `https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=${apiKey}`;


async function getData(){
    try {    
        const response = await fetch(url);
        const data = await response.json();
        const result = data.results;
    
        gamesContainer.innerHTML = "";
    
        for(let i = 0; i < result.length; i++){
            console.log(result[i].name);
            console.log(result[i].rating);
            console.log(result[i].tags.length);
            if(i === 8){
    
                break;
            }
    
            gamesContainer.innerHTML += `<div>
                                            <h1>${result[i].name}</h1>
                                            <p>Rating: ${result[i].rating}</p>
                                            <p>Tags: ${result[i].tags.length}</p>
                                        </div>`;
        }
    }
    catch (error) {
        gamesContainer.innerHTML = "Sorry, an error occured! Try again later.";
        console.log("error occured", error);
    }

}

getData();