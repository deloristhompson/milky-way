export const getCelestialObject = async (planet) => {
  const response = await fetch(`https://api.le-systeme-solaire.net/rest/bodies/${planet}`);

  const { englishName, moons, isPlanet } = await response.json();
  // console.log(englishName, moons, isPlanet);
  return {
    englishName: englishName,
    moons: moons,
    isPlanet: isPlanet
  }
};