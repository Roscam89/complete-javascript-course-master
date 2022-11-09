'use strict';

const btn = document.querySelector('.btn-country');
btn.style.visibility = 'hidden';
const countriesContainer = document.querySelector('.countries');
const apiKey = '773040085229814559996x118402 ';
const body = document.querySelector('body');
let i = 1;

const renderCountry = function (data, className = '') {
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

// const WhereAmI = function (lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=${apiKey}`)
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Something went wrong ${response.status}`);
//       // console.log(response);
//       return response.json();
//     })
//     .then(data => {
//       getCountryData(data.country);
//       console.log(`You are in ${data.city},${data.country}`);
//     })
//     .catch(err => console.error(`Ooops ${err.message}`));
// };

///Event loop ex//              //Order//

//console.log('Test start');                          //1
//setTimeout(() => console.log('0 sec timer'), 0);  //5
//Promise.resolve('Resolved promise 1').then(res => console.log(res)); //3
//Promise.resolve('Resolved promise 2').then(res => {
//for (let i = 0; i < 1000000; i++) {}
//console.log(res);
//});//4
//console.log('Test end');  //2

const lotteryPromise = new Promise(function (resolve, reject) {
  // console.log('The draw is happening ');
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      //  resolve('You won 😀');
    } else {
      //  reject('You lost 🥺');
    }
  }, 2000);
});

let htmlImg;

lotteryPromise
  .then(res => console.log(res))
  .catch(err => new Error(console.error(err)));

const wait = function (sec) {
  return new Promise(resolve => {
    setTimeout(resolve, sec * 1000);
  });
};

wait(2)
  .then(() => {
    body.style.backgroundImage = `url(img/img-${i}.jpg)`;
    // console.log('2 sec passed', i);
    return wait(2);
  })
  .then(() => {
    body.style.backgroundImage = ``;
    // console.log('4 sec passed', i);
    return wait(2);
  })
  .then(() => {
    i++;
    body.style.backgroundImage = `url(img/img-${i}.jpg)`;

    //console.log('6 sec passed', i);
    return wait(2);
  })
  .then(() => {
    body.style.backgroundImage = ``;
    //console.log('4 sec passed', i);
    return wait(2);
  })
  .then(() => {
    i++;
    body.style.backgroundImage = `url(img/img-${i}.jpg)`;

    // console.log('6 sec passed', i);
  });

// Promise.resolve('abc').then(x => console.log(x));
// Promise.reject('abc').catch(x => console.error(x));

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

//getPosition();

const WhereAmI = function () {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;

      return fetch(
        `https://geocode.xyz/${lat},${lng}?geoit=json&auth=${apiKey}`
      );
    })

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

let img;
const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    img = document.createElement('img');
    img.src = imgPath;
    i++;
    img.addEventListener('load', function () {
      body.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

// createImage(`img/img-${i}.jpg`)
//   .then(img => {
//     console.log('1st image loaded', i);
//     return wait(2);
//   })
//   .then(() => {
//     img.style.display = 'none';
//     return createImage(`img/img-${i}.jpg`);
//   })
//   .then(img => {
//     console.log('2nd img loaded', i);
//     return wait(2);
//   })
//   .then(() => {
//     img.style.display = 'none';
//     return createImage(`img/img-${i}.jpg`);
//   })
//   .then(img => {
//     console.log('3rd img loaded', i);
//     return wait(2);
//   });

// .then(body.append(img))
// .then(
//   wait(2).then(() => {
//     img.style.display = 'none';
//     i++;
//     console.log(i);
//     return createImage(`img/img-${i}.jpg`);
//   })
// )
// .then(wait(4))
// .then(body.append(img));

//createImage('img/img-1.jpg').then(wait(2).then((img.style.display = 'none')));
//img.style.display = 'none';

// createImage(`img/img-${i}.jpg`)
//   .then(body.append(img))
//   .then(
//     wait(4).then(() => {
//       img.style.display = 'none';
//       i++;

//       return createImage(`img/img-${i}.jpg`).then(
//         wait(4)
//           .then(body.append(img))
//           .then(
//             wait(4).then(() => {
//               img.style.display = 'none';
//               // i++;
//               // console.log(i);
//               return createImage(`img/img-${i}.jpg`)
//                 .then(wait(4))
//                 .then(body.append(img));
//             })
//           )
//       );
//     })
//   );
