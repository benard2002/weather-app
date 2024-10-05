import express from "express"
import axios from "axios"
import bodyParser from "body-parser"
import countries from "i18n-iso-countries"



const app = express();
const port = 3000;






app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"))


// get hold of tomorrow date
const tomorrow = get_tomorrow_date()

// web weather api

const API_URL = "https://api.openweathermap.org/"


const API_KEY = "18d510ab8dee6d3944c55d90686698d5"

// Used 5 day 3 hour data, this app tells if there's a chance of rain in a particular area tomorrow



let cityName;
let countryName;


app.get('/', (req, res)=>{
      
      res.render('index.ejs', {
        cityName: null,
        countryName: null,
        message : null
      
    }); 
})




app.post("/submit",async (req, res)=>{
  try {
    // geodata start
      const georesponse = await axios.get(API_URL + 'geo/1.0/direct', {params:
        {
          q: req.body.cityName,
          appid : API_KEY
        }
      })
      if (!georesponse.data || georesponse.data.length === 0){
        return res.render('index.ejs', {
          cityName: null,
          countryName : null,
          message : "City not found, Try another!"
        })
      }
      const georesult = georesponse.data[0]
      cityName = georesult.name;//city name
      
      countryName = countries.getName(georesult.country, 'en'); // country name in full
      console.log(cityName, countryName);
      // geo end
      
      
      const lat = georesult.lat;
      const lon = georesult.lon

      //fetch weather
      const response = await axios.get(API_URL + "data/2.5/forecast",{params: {
          lat,
          lon,
          cnt : 8,
          units: "metric",
          appid : API_KEY
        }})
      
      const result = response.data
      
      // console.log(result.code, 'aaaaa')
      const data = result['list'].filter(tomorrow_data);
      
      //data with id < 600 indicating chance of rain
      const rainy_data = data.filter(getRainData);
      console.log(rainy_data)
      // rainy_data.forEach(element => {
      //   console.log(element);
        
      // });

        
      res.render('index.ejs', {
        cityName,
        countryName,
        message : null,
        rainy_data
      })
      
      
  } catch (error) {
    res.render('index.ejs', {
      cityName : null,
      countryName : null,
      message : "An error occured, please try again later!"
    })
    
  }
})



app.listen(port, ()=>{
  console.log(`server runnig on port ${port}`);
})








function get_tomorrow_date(){

  const today = new Date();
  today.setDate(today.getDate() + 1);
  let tomorrow = today.toISOString()
  
  
  tomorrow =tomorrow.split('T')[0]
  return tomorrow
}


function tomorrow_data(item){
  return item.dt_txt.split(' ')[0] === tomorrow
}

// filter function for the rain data 
function getRainData(item){
  return item.weather[0].id < 600;
}