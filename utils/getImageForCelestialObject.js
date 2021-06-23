const celestialImages = {
  Sun: require("../assets/Sun.png"),
  Mercury: require("../assets/Mercury.png"),
  Venus: require("../assets/Venus.png"),
  Earth: require("../assets/Earth.png"),
  Mars: require("../assets/Mars.png"),
  Jupiter: require("../assets/Jupiter.png"),
  Saturn: require("../assets/Saturn.png"),
  Uranus: require("../assets/Uranus.png"),
  Neptune: require("../assets/Neptune.png"),
};

export default (solarSystem) => celestialImages[solarSystem];
