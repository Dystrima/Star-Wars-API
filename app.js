const rotation = document.querySelector(".rotation span");
const orbital = document.querySelector(".orbital span");
const climate = document.querySelector(".climate span");
const terrain = document.querySelector(".terrain span");
const population = document.querySelector(".population span");
const planetName = document.querySelector(".name");

let planetText = planetName.innerText;

const fetchData = async () => {
  const res = await fetch(
    `https://swapi.dev/api/planets/?search=${planetText}`
  );
  const data = await res.json();
  const results = data.results[0];
  rotation.innerText = results.rotation_period;
  orbital.innerText = results.orbital_period;
  climate.innerText = results.climate;
  terrain.innerText = results.terrain;
  population.innerText = results.population;
};

fetchData();
