let weather = {
    apiKey:"0842ba7c463729f4439bfd0d7ccb6729",
    fetchWeather: function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="+
            city+
            "&units=metric&appid="+this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data){
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        console.log(name,icon,description,temp,humidity);
        document.querySelector(".info").innerText = "Weather in " + name+ "\n "+description.toUpperCase()+"\n Humidity: "+humidity;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+icon+".png";
        document.querySelector(".temp").innerText = temp+"°";


    },
    search: function(){
        this.fetchWeather(document.querySelector(".search").value);
    }

};

document
    .querySelector(".btn")
    .addEventListener("click", function(){
        weather.search();
    })