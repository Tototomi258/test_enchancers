const axios = require("axios").default;

const { openWeatherKey, yelpKey } = require("./config");

/**
 * Gets weather info and a list of businesses from a city
 * @param {string} city the city to get weather info from
 * @returns {object}
 */
async function getWeatherFromCity(city) {
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${openWeatherKey}`
    );

    return {
      city: res.data.name,
      lat: res.data.coord.lat,
      lon: res.data.coord.lon,
      temp: res.data.main.temp,
      description: res.data.weather[0].description,
      businesses: await getBusinessInfoFromLatitudAndLongitude(res.data.coord.lat, res.data.coord.lon),
    };
  } catch (error) {
    if (error.response) {
      console.error(`Error: ${error.response.data?.message}`);

      return {
        error: error.response.data?.message,
        city: city,
      };
    } else {
      console.error(`Error: ${error.message}`);

      return {
        error: error.message,
        city: city,
      };
    }
  }
}

/**
 * Gets businesses info based on the provided latitud and longitud
 * @param {number} lat latitud
 * @param {number} lon longitud
 * @returns an array of businesses info in the provided area
 */
async function getBusinessInfoFromLatitudAndLongitude(lat, lon) {
  try {
    const res = await axios.get("https://api.yelp.com/v3/businesses/search", {
      params: {
        latitude: lat,
        longitude: lon,
        limit: 5,
      },
      headers: { Authorization: `Bearer ${yelpKey}` },
    });

    let businesses = [];
    res.data.businesses.forEach((business) => {
      businesses.push({
        name: business.name,
        rating: business.rating,
        phone: business.phone,
        url: business.url,
      });
    });

    return businesses;
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

module.exports.getWeatherFromCity = getWeatherFromCity;
