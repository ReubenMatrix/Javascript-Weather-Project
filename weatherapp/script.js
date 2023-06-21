const API_KEY=`be2d9052df57eecf3524a86c0c53ed38`

//const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

//const IMG_URL=`https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
const form=document.querySelector("form")
const weather=document.querySelector("#weather")
const search=document.querySelector("#search")

form.addEventListener("submit",function(event){
    getweather(search.value);
    event.preventDefault();
})

const getweather=async(city)=>{
    weather.innerHTML=`<h2>Fetching....</h2>`
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response=await fetch(url)
    console.log(response)
    const data=await response.json()
    return showweather(data)
}

const showweather=(data)=>{
    if(data.cod=="404"){
        weather.innerHTML=`<h2>Not Available</h2>`
        return;
    }
    weather.innerHTML=`
    <div>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather Image">
    </div>
    <div>
          <h2>${data.main.temp}℃</h2>
          <h4>${data.weather[0].main}</h4>
    </div>`

}