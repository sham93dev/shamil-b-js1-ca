const baseUrl = "https://rickandmortyapi.com/api/character/"
const Urlcharacters = `${baseUrl}character/`;
  
function characters (response) {
    return response.json();
  }
  
  function handleCharacters(json) {
    const loadCharacters = json.results;
    console.dir(json);
  
    const containerResults = document.querySelector(".results");
  
    let html = "";
  
    loadCharacters.forEach(function(result) {
      let typeOf = result.type;
      if (result.type.length > 0) {
      } else {
        typeOf = "Unknown";
      }
  
      html += `<div class="col-sm-6 col-md-4 col-lg-3">                
        <div class="card">
            <img class="image" src="${result.image}" alt=${result.name}>
            <div class="details">
                <h4 class="name">${result.name}</h4>
                <p>Type: ${typeOf}</p>
                <p>Episode count: ${result.episode.length}</p>                                       
                <a class="btn btn-primary" href="details.html?id=${result.id}">Details</a>
            </div>
        </div>
    </div>`;
    });
  
    containerResults.innerHTML = html;
  }
  
  function Error(error) {
    console.log(error);
  }
  
  fetch(Urlcharacters)
    .then(characters)
    .then(handleCharacters)
    .catch(Error);

    
    