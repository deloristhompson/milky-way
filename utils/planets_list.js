// Array of objects that return information about each planet/Sun
const PLANETS = [
  {
    name: "Mercury",
    numberFromSun: "Closest to the Sun",
    classification: "Terrestial Planet",
    lengthOfYear: "365.25 Days",
    astronomicalUnits: 1,
    totalMoons: 1,
    radius: "3,959 miles",
    firstFunFact:
      "Our atmosphere protects us from incoming meteoroids, most of which break up in our atmosphere before they can strike the surface.",
    nameSake: "The Ground",
  },
  {
    name: "Earth",
    numberFromSun: "Closest to the Sun",
    classification: "Terrestial Planet",
    lengthOfYear: "88 Earth Days",
    astronomicalUnits: 0.4,
    totalMoons: 0,
    radius: "1,516 miles",
    firstFunFact:
      "Even though Mercury is the closest planet to the sun, its surface can still be extremely cold. The temperature during the day can reach 840 degrees Fahrenheit (450 degrees Celsius), but at night, temperatures can get as low as minus 275 F (minus 170 C). That fluctuation equals a temperature swing of more than 1,100 F (600 C), the largest of any planet in the solar system.",
    nameSake: "Roman God of Speed",
  },
  {
    name: "Venus",
    numberFromSun: "Second Planet from the Sun",
    classification: "Terrestial Planet",
    lengthOfYear: "225 Earth Days",
    astronomicalUnits: 0.7,
    totalMoons: 0,
    radius: "3,760 miles",
    nameSake: "Roman Goddess of Love",
    firstFunFact:
      "Venus rotates backward on its axis compared to most planets in our solar system. This means the Sun rises in the west and sets in the east, opposite of what we see on Earth.",
  },
  {
    name: "Mars",
    numberFromSun: "Fourth Planet from the Sun",
    classification: "Terrestrial Planet",
    lengthOfYear: "669.6 Sols",
    astronomicalUnits: 1.5,
    totalMoons: 2,
    radius: "2,106 miles",
    firstFunFact:
      "Several missions have visited this planet, from flybys and orbiters to rovers on the surface.The first true Mars mission success was the Mariner 4 flyby in 1965.",
  },
  {
    name: "Jupiter",
    numberFromSun: "Fifth Planet from the Sun",
    classification: "Gas Giant",
    lengthOfYear: "11.86 Earth Years",
    astronomicalUnits: 5.2,
    totalMoons: 79,
    radius: "43,441 miles",
    nameSake: "King of the Roman Gods",
    firstFunFact:
      "The largest planet in our solar system at nearly 11 times the size of Earth and 317 times its mass.",
  },
  {
    name: "Saturn",
    numberFromSun: "Sixth Planet from the Sun",
    classification: "Gas Giant",
    lengthOfYear: "29.45 Earth Years",
    astronomicalUnits: 9.5,
    totalMoons: 62,
    radius: "36,183.7 miles",
    nameSake: "Father of Jupiter",
    firstFunFact:
      "Has the most spectacular ring system, with seven rings and several gaps and divisions between them.",
  },
  {
    name: "Uranus",
    numberFromSun: "Seventh Planet from the Sun",
    classification: "Ice Giant",
    lengthOfYear: "84 Earth Years",
    astronomicalUnits: 19.8,
    totalMoons: 27,
    radius: "15,759.2 miles",
    nameSake: "Greek God of the Sky",
    firstFunFact:
      "Has 13 known rings. The inner rings are narrow and dark and the outer rings are brightly colored.",
  },
  {
    name: "Neptune",
    numberFromSun: "Furthest Planet from the Sun",
    classification: "Ice Giant",
    lengthOfYear: "164.81 Earth Years",
    astronomicalUnits: 30.1,
    totalMoons: 14,
    radius: "15,299.4 miles",
    nameSake: "Roman God of the Sea",
    firstFunFact:
      "as at least five main rings and four more ring arcs, which are clumps of dust and debris likely formed by the gravity of a nearby moon.",
  },
];

// export the getPlanet function. It accepts a single argument: name
export const getPlanet = (name) => {
  // Set the results of the correct planet the user is searching for to the result constant
  const result = PLANETS.filter((planet) => {
    // console.log("Name", name);
    // console.log("PLanet", planet.name);
    // Return the planet that matches the one the user is searching for
    return planet.name === name;
  });

  // If there is a result return the first one, else return nothing.
  return result ? result[0] : null;
};
