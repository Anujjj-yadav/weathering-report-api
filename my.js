
const axios = require ('axios') 
const fs = require ('fs')

var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var desc = document.querySelector('.desc');
var name = document.querySelector('.name');
var temp = document.querySelector('.temp');
button.addEventListener('click',function() 


{
    axios.get('api.openweathermap.org/data/2.5/weather?units=metricsid=2172797&appid={eafc5865b5897824ad07e7d24e284fac}')
  
    fs.writereadstream('api.openweathermap.org/data/2.5/weather?units=metricsid=2172797&appid={eafc5865b5897824ad07e7d24e284fac}')

         .then(response => response.json())
         .then(data => {
          var nameValue = data['name'];
          var tempValue = data['main']['temp'];
          var descValue = data['weather'][0]['description'];

          name.innerHTML = nameValue;
          temp.innerHTML = tempValue+" °C";
          desc.innerHTML = descValue;

    
      




    })

     .catch(err => alert("Wrong city name!"))



})




