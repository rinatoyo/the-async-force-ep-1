//fill in person4Name
const get4Name = new XMLHttpRequest();

function name4Listener() {
  let name4Is = JSON.parse(this.responseText);
  document.getElementById("person4Name").innerHTML = name4Is.name;

  //fill in person4HomeWorld
  const get4World = new XMLHttpRequest();

  function world4Listener() {
    let world4Is = JSON.parse(this.responseText);
    document.getElementById("person4HomeWorld").innerHTML = world4Is.name;
  }
  get4World.addEventListener("load", world4Listener);
  get4World.open("GET", name4Is.homeworld);
  get4World.send();
}

get4Name.addEventListener("load", name4Listener);
get4Name.open("GET", "https://swapi.co/api/people/4/");
get4Name.send();

//fill in person14Name
const get14Name = new XMLHttpRequest();

function name14Listener() {
  let name14Is = JSON.parse(this.responseText);
  document.getElementById("person14Name").innerHTML = name14Is.name;

  //fill in person14Species
  const get14Species = new XMLHttpRequest();

  function species14Listener() {
    let species14Is = JSON.parse(this.responseText);
    document.getElementById("person14Species").innerHTML = species14Is.name;
  }
  get14Species.addEventListener("load", species14Listener);
  get14Species.open("GET", name14Is.species);
  get14Species.send();
}

get14Name.addEventListener("load", name14Listener);
get14Name.open("GET", " https://swapi.co/api/people/14/");
get14Name.send();

//fill in filmList
const getFilm = new XMLHttpRequest();

function filmTitleListener() {
  let filmTitleIs = JSON.parse(this.responseText);
  let getLengthOfFilm = filmTitleIs.results;

  // console.log(getLengthOfFilm);

  for (let i = 0; i < getLengthOfFilm.length; i++) {
    let getFilmId = document.getElementById("filmList");
    let makeFilmLi = document.createElement("li");
    makeFilmLi.className = "film";
    getFilmId.appendChild(makeFilmLi);

    let makeFilmH2 = document.createElement("h2");
    makeFilmH2.className = "filmTitle";
    makeFilmH2.innerHTML = getLengthOfFilm[i].title;
    makeFilmLi.appendChild(makeFilmH2);

    let makePlanetH3 = document.createElement("h3");
    makePlanetH3.innerHTML = "Planets";
    makeFilmLi.appendChild(makePlanetH3);

    // console.log(getLengthOfFilm[i].planets);

    let getZePlanets = getLengthOfFilm[i].planets;

    for (let j = 0; j < getZePlanets.length; j++) {
      const getPlanets = new XMLHttpRequest();

      function planetListener() {
        let planetNameIs = JSON.parse(this.responseText);
        // console.log(planetNameIs);
        let getPlanetName = planetNameIs.name;

        let makePlanetUl = document.createElement("ul");
        makePlanetUl.className = "filmPlanets";
        makeFilmLi.appendChild(makePlanetUl);

        let makePlanetLi = document.createElement("li");
        makePlanetLi.className = "planet";
        makePlanetUl.appendChild(makePlanetLi);

        let makePlanetH4 = document.createElement("h4");
        makePlanetH4.className = "planetName";
        makePlanetH4.innerHTML = getPlanetName;
        makePlanetLi.appendChild(makePlanetH4);
      }

      getPlanets.addEventListener("load", planetListener);
      getPlanets.open("GET", getZePlanets[j]);
      getPlanets.send();
    }
  }
}

getFilm.addEventListener("load", filmTitleListener);
getFilm.open("GET", "https://swapi.co/api/films/");
getFilm.send();

//nested for loop, creating initial ul, adding list items in the ul, append it to filmlist, fill innerhtml w info you need, results [i].title is first title
