'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const apiKey = '773040085229814559996x118402 ';
const renderCountry = function (data, className = '') {
  // const lang = Object.values(data.languages).forEach(val => (lang = val));
  const html = `
  <article class="country ${className}">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫:${(
              +data.population / 1000000
            ).toFixed(1)} mil people</span></p>
           
            <p class="country__row"><span>🗣️: ${Object.values(
              data.languages
            ).join(',')}</span></p>
              
            <p class="country__row"><span>💵: ${
              Object.values(data.currencies)[0].name
            }</span></p>
          </div>
        </article>
  `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
};

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    // console.log(response);
    return response.json();
  });
};

///////////////////////////////////////

// const getCountryAndNeighbour = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);

//     console.log(data);
//     renderCountry(data);

//     const request2 = new XMLHttpRequest();
//     const [neighbour] = data.borders;
//     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();
//     request2.addEventListener('load', function () {
//       const [data2] = JSON.parse(this.responseText);

//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

//getCountryAndNeighbour('portugal');
//getCountryAndNeighbour('italy');
//=======Promises======//
//const request = fetch('https://restcountries.com/v3.1/name/usa');

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => response.json())
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];
//       if (!neighbour) throw new Error('No neighbour');

//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => {
//       console.log(err);
//       renderError(`Something went wrong, ${err.message}.Try again`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryData('australia');
// });

const getCountryData = function (country) {
  getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];
      if (!neighbour) throw new Error('No neighbour');

      /* return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        'Country not found'
      );
    })

    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
      // console.log(err);
      renderError(`Something went wrong, ${err.message}.Try again`);
    */
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

const WhereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=${apiKey}`)
    .then(response => {
      if (!response.ok)
        throw new Error(`Something went wrong ${response.status}`);
      // console.log(response);
      return response.json();
    })
    .then(data => {
      getCountryData(data.country);
      console.log(`You are in ${data.city},${data.country}`);
    })
    .catch(err => console.error(`Ooops ${err.message}`));
};

btn.addEventListener('click', function () {
  WhereAmI(52.508, 13.381);
  WhereAmI(19.037, 72.873);
  WhereAmI(-33.933, 18.474);
});
