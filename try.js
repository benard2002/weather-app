// var a = '2024-10-0.03 03:00:00';

// //console.log(a.split(' ')[0])



  

// console.log(get_tomorrow_date())
const datt = '2024-10-04'
const news = [
  {
    "dt": 1727924400,
    "main": {
      "temp": 285.01,
      "feels_like": 284.55,
      "temp_min": 285.01,
      "temp_max": 285.86,
      "pressure": 1006,
      "sea_level": 1006,
      "grnd_level": 938,
      "humidity": 88,
      "temp_kf": -0.85
    },
    "weather": [
      {
        "id": 500,
        "main": "Rain",
        "description": "light rain",
        "icon": "10n"
      }
    ],
    "clouds": {
      "all": 89
    },
    "wind": {
      "speed": 0.31,
      "deg": 19,
      "gust": 0.3
    },
    "visibility": 10000,
    "pop": 0.85,
    "rain": {
      "3h": 0.8
    },
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2024-10-03 03:00:00"
  },
  {
    "dt": 1727935200,
    "main": {
      "temp": 285.13,
      "feels_like": 284.86,
      "temp_min": 285.13,
      "temp_max": 285.4,
      "pressure": 1005,
      "sea_level": 1005,
      "grnd_level": 938,
      "humidity": 95,
      "temp_kf": -0.27
    },
    "weather": [
      {
        "id": 501,
        "main": "Rain",
        "description": "moderate rain",
        "icon": "10d"
      }
    ],
    "clouds": {
      "all": 95
    },
    "wind": {
      "speed": 0.36,
      "deg": 24,
      "gust": 1.11
    },
    "visibility": 4450,
    "pop": 1,
    "rain": {
      "3h": 3.91
    },
    "sys": {
      "pod": "d"
    },
    "dt_txt": "2024-10-03 06:00:00"
  },
  {
    "dt": 1727946000,
    "main": {
      "temp": 285.4,
      "feels_like": 285.27,
      "temp_min": 285.4,
      "temp_max": 285.4,
      "pressure": 1004,
      "sea_level": 1004,
      "grnd_level": 937,
      "humidity": 99,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 501,
        "main": "Rain",
        "description": "moderate rain",
        "icon": "10d"
      }
    ],
    "clouds": {
      "all": 100
    },
    "wind": {
      "speed": 1.4,
      "deg": 36,
      "gust": 2.81
    },
    "visibility": 1190,
    "pop": 1,
    "rain": {
      "3h": 7.25
    },
    "sys": {
      "pod": "d"
    },
    "dt_txt": "2024-10-03 09:00:00"
  },
  {
    "dt": 1727956800,
    "main": {
      "temp": 285.12,
      "feels_like": 284.98,
      "temp_min": 285.12,
      "temp_max": 285.12,
      "pressure": 1001,
      "sea_level": 1001,
      "grnd_level": 935,
      "humidity": 100,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 502,
        "main": "Rain",
        "description": "heavy intensity rain",
        "icon": "10d"
      }
    ],
    "clouds": {
      "all": 100
    },
    "wind": {
      "speed": 2.48,
      "deg": 344,
      "gust": 4.87
    },
    "visibility": 135,
    "pop": 1,
    "rain": {
      "3h": 20.89
    },
    "sys": {
      "pod": "d"
    },
    "dt_txt": "2024-10-03 12:00:00"
  },
  {
    "dt": 1727967600,
    "main": {
      "temp": 283.59,
      "feels_like": 283.27,
      "temp_min": 283.59,
      "temp_max": 283.59,
      "pressure": 1001,
      "sea_level": 1001,
      "grnd_level": 934,
      "humidity": 99,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 502,
        "main": "Rain",
        "description": "heavy intensity rain",
        "icon": "10d"
      }
    ],
    "clouds": {
      "all": 100
    },
    "wind": {
      "speed": 3.27,
      "deg": 320,
      "gust": 7.08
    },
    "pop": 1,
    "rain": {
      "3h": 18.75
    },
    "sys": {
      "pod": "d"
    },
    "dt_txt": "2024-10-03 15:00:00"
  },
  {
    "dt": 1727978400,
    "main": {
      "temp": 283.45,
      "feels_like": 283.12,
      "temp_min": 283.45,
      "temp_max": 283.45,
      "pressure": 1003,
      "sea_level": 1003,
      "grnd_level": 936,
      "humidity": 99,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 501,
        "main": "Rain",
        "description": "moderate rain",
        "icon": "10n"
      }
    ],
    "clouds": {
      "all": 100
    },
    "wind": {
      "speed": 3.93,
      "deg": 340,
      "gust": 8.99
    },
    "pop": 1,
    "rain": {
      "3h": 11.37
    },
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2024-10-03 18:00:00"
  },
  {
    "dt": 1727989200,
    "main": {
      "temp": 282.74,
      "feels_like": 282.41,
      "temp_min": 282.74,
      "temp_max": 282.74,
      "pressure": 1005,
      "sea_level": 1005,
      "grnd_level": 938,
      "humidity": 97,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 501,
        "main": "Rain",
        "description": "moderate rain",
        "icon": "10n"
      }
    ],
    "clouds": {
      "all": 100
    },
    "wind": {
      "speed": 1.43,
      "deg": 314,
      "gust": 4.18
    },
    "visibility": 3955,
    "pop": 1,
    "rain": {
      "3h": 5.1
    },
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2024-10-03 21:00:00"
  },
  {
    "dt": 1728000000,
    "main": {
      "temp": 283.08,
      "feels_like": 283.08,
      "temp_min": 283.08,
      "temp_max": 283.08,
      "pressure": 1006,
      "sea_level": 1006,
      "grnd_level": 938,
      "humidity": 96,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 501,
        "main": "Rain",
        "description": "moderate rain",
        "icon": "10n"
      }
    ],
    "clouds": {
      "all": 100
    },
    "wind": {
      "speed": 1.04,
      "deg": 296,
      "gust": 3.81
    },
    "visibility": 8450,
    "pop": 1,
    "rain": {
      "3h": 3.81
    },
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2024-10-04 00:00:00"
  }
]



const newData = news.filter(date)
// console.log(news[0].dt_txt.split(' ')[0])

function date(data){
  return data.dt_txt.split(' ')[0] === datt
}
console.log(newData)


// news.forEach((data, index)=>{
//   if(data.dt_txt.split(' ')[0] === datt){
//     console.log('index');
//   }else{
//     console.log('not')
//   }

// })