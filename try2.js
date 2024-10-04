// const ages = [32, 33, 16, 40];
// const result = ages.filter(checkAdult);



// function checkAdult(age) { 
  
//   return age >= 18
// }
// console.log(result)


const data = 
[
  {
    dt: 1728000000,
    main: {
      temp: 9.35,
      feels_like: 9.35,
      temp_min: 9.35,
      temp_max: 9.35,
      pressure: 1006,
      sea_level: 1006,
      grnd_level: 938,
      humidity: 95,
      temp_kf: 0
    },
    weather: [ [Object] ],
    clouds: { all: 100 },
    wind: { speed: 0.67, deg: 182, gust: 0.04 },
    visibility: 5867,
    pop: 1,
    rain: { '3h': 2.55 },
    sys: { pod: 'n' },
    dt_txt: '2024-10-04 00:00:00'
  },
  {
    dt: 1728010800,
    main: {
      temp: 9.54,
      feels_like: 9.54,
      temp_min: 9.54,
      temp_max: 9.54,
      pressure: 1006,
      sea_level: 1006,
      grnd_level: 939,
      humidity: 95,
      temp_kf: 0
    },
    weather: [ [Object] ],
    clouds: { all: 100 },
    wind: { speed: 0.96, deg: 190, gust: 1.25 },
    visibility: 8336,
    pop: 1,
    rain: { '3h': 2.55 },
    sys: { pod: 'n' },
    dt_txt: '2024-10-04 03:00:00'
  },
  {
    dt: 1728021600,
    main: {
      temp: 9.78,
      feels_like: 9.78,
      temp_min: 9.78,
      temp_max: 9.78,
      pressure: 1007,
      sea_level: 1007,
      grnd_level: 940,
      humidity: 90,
      temp_kf: 0
    },
    weather: [ [Object] ],
    clouds: { all: 100 },
    wind: { speed: 0.82, deg: 175, gust: 0.42 },
    visibility: 10000,
    pop: 1,
    rain: { '3h': 0.28 },
    sys: { pod: 'd' },
    dt_txt: '2024-10-04 06:00:00'
  },
  {
    dt: 1728032400,
    main: {
      temp: 10.62,
      feels_like: 10.06,
      temp_min: 10.62,
      temp_max: 10.62,
      pressure: 1009,
      sea_level: 1009,
      grnd_level: 942,
      humidity: 89,
      temp_kf: 0
    },
    weather: [ [Object] ],
    clouds: { all: 100 },
    wind: { speed: 1.43, deg: 32, gust: 1.45 },
    visibility: 10000,
    pop: 0,
    sys: { pod: 'd' },
    dt_txt: '2024-10-04 09:00:00'
  },
  {
    dt: 1728043200,
    main: {
      temp: 10.72,
      feels_like: 10.33,
      temp_min: 10.72,
      temp_max: 10.72,
      pressure: 1010,
      sea_level: 1010,
      grnd_level: 942,
      humidity: 95,
      temp_kf: 0
    },
    weather: [ [Object] ],
    clouds: { all: 100 },
    wind: { speed: 2.16, deg: 16, gust: 2.45 },
    visibility: 10000,
    pop: 0.46,
    rain: { '3h': 0.55 },
    sys: { pod: 'd' },
    dt_txt: '2024-10-04 12:00:00'
  }
]

data.forEach(element => {
  const weather = element.weather[0][0]  
  console.log(weather)
});