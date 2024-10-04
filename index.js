import express from "express"
import axios from "axios"
import bodyParser from "body-parser"
import countries from "i18n-iso-countries"



const app = express();
const port = 3000;
const today = new Date();





app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"))


// get hold of tomorrow date
const tomorrow = get_tomorrow_date()
console.log(tomorrow)
// web weather api

const API_URL = "https://api.openweathermap.org/"
const COUNTRY_API = "http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}"

const API_KEY = "18d510ab8dee6d3944c55d90686698d5"



let lattitude;
let longitude
let cityName;
let countryName;


const params = {
  lat : 44.34,
  lon : 10.99,
  cnt : 8,
  units: "metric",
  appid : API_KEY
}

app.get('/', async (req, res)=>{
  if (lattitude && longitude){

    
    try {
      
      const response = await axios.get(API_URL + "data/2.5/forecast",{params: params})
      const result = response.data
      console.log(result.code, 'aaaaa')
      const data = result['list'].filter(tomorrow_data);
      
      //data with id < 600 indicating chance of rain
      const rany_data = data.filter(getRainData);
      
      // console.log(rany_data)
      // data.forEach(element => {
        //   console.log(typeof(element.weather[0].id))
        // });
      
      
      
      console.log(rany_data);
      
      res.render('index.ejs', {
        cityName,
        countryName,
      
    });
  } catch (error) {
    console.error(error.response)
    console.log('amfa')
  }
  
}else{
  res.render('index.ejs',{
    cityName : null,
    countryName : null,
    
  })
}
  
  
})




app.post("/submit",async (req, res)=>{
  try {
    const response = await axios.get(API_URL + 'geo/1.0/direct', {params:
      {
        q: req.body.cityName,
        appid : API_KEY
      }
    })
    console.log()
    const result = response.data[0]
    cityName = result.name;
    countryName = countries.getName(result.country, 'en');
    lattitude = result.lat;
    longitude = result.lon;

    
    console.log(cityName, countryName, lattitude, longitude);
    res.redirect('/');
  } catch (error) {
  
    console.error('Not found', error.message);
    res.render('index.ejs', {
      cityName : null,
      countryName : null
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